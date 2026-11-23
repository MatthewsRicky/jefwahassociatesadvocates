"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  MessageCircle,
} from "lucide-react";

import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";
import { practiceAreas } from "@/data/practice-areas";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type EnquiryFormProps = {
  initialService?: string;
};

export default function EnquiryForm({ initialService = "" }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: initialService,
      message: "",
      consent: false,
    },
  });

  const selectedService = watch("service");

  async function onSubmit(values: ContactFormValues) {
    setSubmissionError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  function handleWhatsApp() {
    const values = getValues();

    const message = [
      "Hello Jefwah & Associates Advocates.",
      "",
      "I would like to make a legal enquiry.",
      `Name: ${values.name || "Not provided"}`,
      `Email: ${values.email || "Not provided"}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Practice area: ${values.service || "Not selected"}`,
      "",
      `Enquiry: ${values.message || "I would like to discuss a legal matter."}`,
    ].join("\n");

    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "mt-2 w-full border border-border bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-gold";

  const labelClasses = "text-xs font-semibold tracking-wide text-navy";

  if (submitted) {
    return (
      <div className="border border-border bg-white px-6 py-14 text-center sm:px-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E9F5EC] text-[#287A43]">
          <CheckCircle2 size={32} />
        </div>

        <h3 className="mt-7 font-display text-3xl text-navy">
          Thank you for your enquiry.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
          Your message has been submitted successfully. The team will review
          your enquiry and respond using the contact information you provided.
        </p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 text-xs font-bold tracking-wide text-navy underline underline-offset-4 hover:text-gold"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-border bg-white p-6 sm:p-9"
    >
      <div className="mb-8">
        <span className="eyebrow">Send an Enquiry</span>

        <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl">
          How can we assist you?
        </h2>

        <p className="mt-3 text-sm leading-7 text-muted">
          Complete the form below and our team will get in touch.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name *
          </label>

          <input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            autoComplete="name"
            className={inputClasses}
          />

          {errors.name && (
            <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address *
          </label>

          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />

          {errors.email && (
            <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>

          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+254..."
            autoComplete="tel"
            className={inputClasses}
          />

          {errors.phone && (
            <p className="mt-2 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Practice Area *
          </label>

          <select
            id="service"
            {...register("service")}
            className={`${inputClasses} ${selectedService ? "" : "text-muted"}`}
          >
            <option value="">Select a practice area</option>

            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.title}
              </option>
            ))}

            <option value="other">Other / Not Sure</option>
          </select>

          {errors.service && (
            <p className="mt-2 text-xs text-red-600">
              {errors.service.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            How can we help? *
          </label>

          <textarea
            id="message"
            {...register("message")}
            rows={6}
            placeholder="Briefly describe the legal matter you would like assistance with..."
            className={`${inputClasses} resize-y`}
          />

          {errors.message && (
            <p className="mt-2 text-xs text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-7">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 h-4 w-4 shrink-0 accent-[#09234D]"
          />

          <span className="text-xs leading-6 text-muted">
            I agree that Jefwah & Associates Advocates may use the information
            provided to respond to my enquiry. I understand that submitting this
            form does not establish an advocate-client relationship.
          </span>
        </label>

        {errors.consent && (
          <p className="mt-2 text-xs text-red-600">{errors.consent.message}</p>
        )}
      </div>

      {submissionError && (
        <div
          role="alert"
          className="mt-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {submissionError}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex min-h-14 items-center justify-center gap-3 bg-navy px-6 py-4 text-xs font-bold tracking-wide text-white transition-colors hover:bg-gold hover:text-navy-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              SUBMITTING ENQUIRY...
            </>
          ) : (
            <>
              SUBMIT ENQUIRY
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex min-h-14 items-center justify-center gap-3 border border-[#25D366]/50 px-6 py-4 text-xs font-bold tracking-wide text-[#168A45] transition-colors hover:bg-[#EAF8EF]"
        >
          <MessageCircle size={17} />
          CONTINUE VIA WHATSAPP
        </button>
      </div>

      <p className="mt-5 text-center text-[11px] leading-5 text-muted">
        Please avoid including confidential documents or sensitive personal
        information in your initial enquiry.
      </p>
    </form>
  );
}
