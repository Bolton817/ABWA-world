"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { VolunteerFormData } from "@/types";

export function VolunteerForm() {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    durationPreference: "Not sure yet",
    interestArea: "Not sure yet",
    availability: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
      newErrors.message = "Please tell us a little about yourself.";
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
      country: "",
      durationPreference: "Not sure yet",
      interestArea: "Not sure yet",
      availability: "",
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
          Thank you. Your enquiry has reached us.
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
            Send another enquiry
          </button>
          <Link
            href="/programs"
            className="rounded-xl bg-abwa-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-abwa-blue"
          >
            Explore Our Programmes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field for bot spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-hp">Website</label>
        <input
          id="website-hp"
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

      {/* Grid for Name & Email */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-abwa-ink">
            Full name <span className="text-red-600" aria-label="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-abwa-ink">
            Email <span className="text-red-600" aria-label="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Grid for Phone & Country */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-abwa-ink">
            Phone <span className="text-xs font-normal text-abwa-ink/60">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
            placeholder="e.g. +254 700 000 000"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-abwa-ink">
            Country <span className="text-xs font-normal text-abwa-ink/60">(optional)</span>
          </label>
          <input
            id="country"
            type="text"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
            placeholder="Your current country of residence"
          />
        </div>
      </div>

      {/* Grid for Work Camp Track & Area of Interest */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="durationPreference" className="block text-sm font-semibold text-abwa-ink">
            Work camp timeframe
          </label>
          <select
            id="durationPreference"
            value={formData.durationPreference || "Not sure yet"}
            onChange={(e) => setFormData({ ...formData, durationPreference: e.target.value })}
            className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
          >
            <option value="Short-Term Work Camp (2–3 weeks)">Short-Term Work Camp (2–3 weeks)</option>
            <option value="Long-Term Volunteering (2+ months)">Long-Term Volunteering (2+ months)</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="interestArea" className="block text-sm font-semibold text-abwa-ink">
            I&apos;d like to help with
          </label>
          <select
            id="interestArea"
            value={formData.interestArea}
            onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
            className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
          >
            <option value="Teaching and learning support">Teaching and learning support</option>
            <option value="Art and music">Art and music</option>
            <option value="Farming and gardening">Farming and gardening</option>
            <option value="Environmental action">Environmental action</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      {/* Availability / Timing */}
      <div>
        <label htmlFor="availability" className="block text-sm font-semibold text-abwa-ink">
          When might you be available?{" "}
          <span className="text-xs font-normal text-abwa-ink/60">(optional)</span>
        </label>
        <input
          id="availability"
          type="text"
          value={formData.availability}
          onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
          className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
          placeholder="e.g. June – August or flexible"
        />
      </div>

      {/* Message textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-abwa-ink">
          Tell us about yourself <span className="text-red-600" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-helper message-error"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us a little about you, your skills and what draws you to ABWA."
          className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
            errors.message
              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
          }`}
        />
        <p id="message-helper" className="mt-1.5 text-xs text-abwa-ink/70">
          Please don&apos;t send passport, ID or health details here. We won&apos;t ask for them in a first message.
        </p>
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-abwa-blue focus:ring-abwa-blue"
          />
          <label htmlFor="consent" className="text-sm text-abwa-ink/80 leading-relaxed">
            I&apos;m happy for ABWA to use these details to reply to my enquiry. I&apos;ve read the{" "}
            <Link href="/privacy" className="text-abwa-blue underline hover:text-abwa-navy">
              Privacy Policy
            </Link>
            . <span className="text-red-600" aria-label="required">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-xs font-medium text-red-600">
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
              <span>Sending enquiry...</span>
            </>
          ) : (
            <span>Send my enquiry</span>
          )}
        </button>
      </div>
    </form>
  );
}
