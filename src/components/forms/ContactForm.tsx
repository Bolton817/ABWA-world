"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ContactFormData } from "@/types";

function ContactFormInner() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    topic: "General question",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Auto-detect topic from URL search param
  useEffect(() => {
    const topicParam = searchParams.get("topic");
    if (topicParam) {
      const lower = topicParam.toLowerCase();
      if (lower.includes("giving") || lower.includes("donate")) {
        setFormData((prev) => ({ ...prev, topic: "Giving" }));
      } else if (lower.includes("volunteer") || lower.includes("youth") || lower.includes("women") || lower.includes("umisiiyu")) {
        setFormData((prev) => ({ ...prev, topic: "Volunteering" }));
      } else if (lower.includes("partner")) {
        setFormData((prev) => ({ ...prev, topic: "Partnership" }));
      }
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }
    if (!formData.consent) {
      newErrors.consent = "Please confirm that you agree to ABWA using these details to reply.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(
          result.message || "Sorry, that didn't go through. Please try again, or call us on +254 733 595 906."
        );
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch {
      setSubmitError("Sorry, that didn't go through. Please try again, or call us on +254 733 595 906.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      topic: "General question",
      message: "",
      consent: false,
      honeypot: "",
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  if (submitSuccess) {
    return (
      <div
        role="alert"
        className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center text-abwa-ink shadow-sm"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-emerald-900">
          Thank you. Your message has reached us.
        </h3>
        <p className="mx-auto mt-2 max-w-md text-emerald-800">
          We&apos;ll read it carefully and reply to the email address you gave.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl border border-emerald-300 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
          >
            Send another message
          </button>
          <Link
            href="/"
            className="rounded-xl bg-abwa-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-abwa-blue"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Bot honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-hp">Website</label>
        <input
          id="contact-hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-900"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div className="text-sm">
            <p className="font-semibold">{submitError}</p>
            <p className="mt-1 text-red-700">
              You can also reach our team directly in Nairobi at{" "}
              <a href="tel:+254733595906" className="font-medium underline hover:text-red-900">
                +254 733 595 906
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Full Name & Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-fullName" className="block text-sm font-semibold text-abwa-ink">
            Full name <span className="text-red-600" aria-label="required">*</span>
          </label>
          <input
            id="contact-fullName"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "contact-fullName-error" : undefined}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
            }`}
          />
          {errors.fullName && (
            <p id="contact-fullName-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-abwa-ink">
            Email <span className="text-red-600" aria-label="required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
            }`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone & Topic Dropdown */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold text-abwa-ink">
            Phone <span className="text-xs font-normal text-abwa-ink/60">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
            placeholder="e.g. +254 700 000 000"
          />
        </div>

        <div>
          <label htmlFor="contact-topic" className="block text-sm font-semibold text-abwa-ink">
            Topic <span className="text-red-600" aria-label="required">*</span>
          </label>
          <select
            id="contact-topic"
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
          >
            <option value="General question">General question</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Partnership">Partnership</option>
            <option value="Giving">Giving</option>
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      {/* Message textarea */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-abwa-ink">
          Message <span className="text-red-600" aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help?"
          className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
            errors.message
              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
          }`}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="contact-consent"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "contact-consent-error" : undefined}
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-abwa-blue focus:ring-abwa-blue"
          />
          <label htmlFor="contact-consent" className="text-sm text-abwa-ink/80 leading-relaxed">
            I&apos;m happy for ABWA to use these details to reply to my message. I&apos;ve read the{" "}
            <Link href="/privacy" className="text-abwa-blue underline hover:text-abwa-navy">
              Privacy Policy
            </Link>
            . <span className="text-red-600" aria-label="required">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id="contact-consent-error" className="mt-1 text-xs font-medium text-red-600">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-abwa-navy px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-abwa-blue hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Sending message...</span>
            </>
          ) : (
            <span>Send message</span>
          )}
        </button>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-abwa-ink/60">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
