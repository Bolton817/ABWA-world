"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PartnerFormData } from "@/types";

export function PartnerForm() {
  const [formData, setFormData] = useState<PartnerFormData>({
    organisation: "",
    contactName: "",
    email: "",
    interestArea: "Programme partnership",
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

    if (!formData.organisation.trim()) {
      newErrors.organisation = "Please enter your organisation name.";
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Please enter your contact name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please share what you have in mind.";
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
          result.message || "Sorry, that didn't go through. Please try again, or call us on +254 720 021 001."
        );
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch {
      setSubmitError("Sorry, that didn't go through. Please try again, or call us on +254 720 021 001.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      organisation: "",
      contactName: "",
      email: "",
      interestArea: "Programme partnership",
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
          We&apos;ll read it carefully and be in touch at the email address you gave.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl border border-emerald-300 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
          >
            Start another conversation
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
        <label htmlFor="partner-hp">Website</label>
        <input
          id="partner-hp"
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
              <a href="tel:+254720021001" className="font-medium underline hover:text-red-900">
                +254 720 021 001
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Grid for Organisation & Contact Name */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="organisation" className="block text-sm font-semibold text-abwa-ink">
            Organisation <span className="text-red-600" aria-label="required">*</span>
          </label>
          <input
            id="organisation"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.organisation)}
            aria-describedby={errors.organisation ? "organisation-error" : undefined}
            value={formData.organisation}
            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
              errors.organisation
                ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
            }`}
            placeholder="Company, school, NGO, or institution name"
          />
          {errors.organisation && (
            <p id="organisation-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.organisation}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contactName" className="block text-sm font-semibold text-abwa-ink">
            Contact name <span className="text-red-600" aria-label="required">*</span>
          </label>
          <input
            id="contactName"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.contactName)}
            aria-describedby={errors.contactName ? "contactName-error" : undefined}
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
              errors.contactName
                ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
            }`}
            placeholder="Your name and role"
          />
          {errors.contactName && (
            <p id="contactName-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.contactName}
            </p>
          )}
        </div>
      </div>

      {/* Grid for Email & Area of Interest */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-email" className="block text-sm font-semibold text-abwa-ink">
            Email <span className="text-red-600" aria-label="required">*</span>
          </label>
          <input
            id="partner-email"
            type="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "partner-email-error" : undefined}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
                : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
            }`}
          />
          {errors.email && (
            <p id="partner-email-error" className="mt-1 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="partner-interest" className="block text-sm font-semibold text-abwa-ink">
            Area of interest
          </label>
          <select
            id="partner-interest"
            value={formData.interestArea}
            onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
            className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-abwa-ink focus:border-abwa-blue focus:outline-none focus:ring-2 focus:ring-abwa-blue/20"
          >
            <option value="Programme partnership">Programme partnership</option>
            <option value="Funding">Funding</option>
            <option value="Skills and expertise">Skills and expertise</option>
            <option value="Schools and groups">Schools and groups</option>
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      {/* Message textarea */}
      <div>
        <label htmlFor="partner-message" className="block text-sm font-semibold text-abwa-ink">
          Message <span className="text-red-600" aria-label="required">*</span>
        </label>
        <textarea
          id="partner-message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "partner-message-error" : undefined}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your organisation and what you have in mind."
          className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-abwa-ink placeholder:text-abwa-ink/40 focus:outline-none focus:ring-2 ${
            errors.message
              ? "border-red-300 bg-red-50/50 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300 bg-white focus:border-abwa-blue focus:ring-abwa-blue/20"
          }`}
        />
        {errors.message && (
          <p id="partner-message-error" className="mt-1 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="partner-consent"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "partner-consent-error" : undefined}
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-abwa-blue focus:ring-abwa-blue"
          />
          <label htmlFor="partner-consent" className="text-sm text-abwa-ink/80 leading-relaxed">
            I&apos;m happy for ABWA to use these details to reply to my enquiry. I&apos;ve read the{" "}
            <Link href="/privacy" className="text-abwa-blue underline hover:text-abwa-navy">
              Privacy Policy
            </Link>
            . <span className="text-red-600" aria-label="required">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id="partner-consent-error" className="mt-1 text-xs font-medium text-red-600">
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
            <span>Send partnership enquiry</span>
          )}
        </button>
      </div>
    </form>
  );
}
