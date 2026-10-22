"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

const fieldClass =
  "w-full border border-navy/15 bg-mist px-4 py-3 text-navy placeholder:text-ink/40 focus:border-navy focus:outline-none";
const labelClass = "text-xs uppercase tracking-[0.2em] text-red";

// Emails each submission to site.email through FormSubmit (formsubmit.co).
// The very first submission triggers a one-time activation email.
// Pass `programme` to turn it into a sign-up form for that programme.
export function ContactForm({ programme }: { programme?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Hidden field only bots fill in.
    if (data.get("_honey")) return;

    const subject = programme
      ? `${programme} registration: ${data.get("name")}`
      : `Website enquiry from ${data.get("name")}`;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          _replyto: data.get("email"),
          Name: data.get("name"),
          Organisation: data.get("organisation"),
          Email: data.get("email"),
          Phone: data.get("phone"),
          Interest: programme ?? data.get("interest"),
          Message: data.get("message"),
        }),
      });
      const result = await res.json();
      if (!res.ok || String(result.success) !== "true") throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-l-4 border-red bg-mist p-8" role="status">
        <h3 className="font-serif text-2xl font-semibold">Thank you</h3>
        <p className="mt-2 text-ink/80">
          {programme
            ? "Your registration has been received. We will contact you soon with course details."
            : "Your message has been sent. We will be in touch shortly."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="block">
        <span className={labelClass}>Name</span>
        <input name="name" required autoComplete="name" className={`${fieldClass} mt-2`} />
      </label>
      <label className="block">
        <span className={labelClass}>Organisation</span>
        <input name="organisation" autoComplete="organization" className={`${fieldClass} mt-2`} />
      </label>
      <label className="block">
        <span className={labelClass}>Email</span>
        <input name="email" type="email" required autoComplete="email" className={`${fieldClass} mt-2`} />
      </label>
      <label className="block">
        <span className={labelClass}>Phone</span>
        <input name="phone" type="tel" required={!!programme} autoComplete="tel" className={`${fieldClass} mt-2`} />
      </label>
      {!programme && (
        <label className="block md:col-span-2">
          <span className={labelClass}>I&apos;m interested in</span>
          <select name="interest" className={`${fieldClass} mt-2`}>
            {services.map((s) => (
              <option key={s.title}>{s.title}</option>
            ))}
            <option>English Writing for Business</option>
            <option>Training &amp; Education</option>
            <option>Career Referral &amp; Certification</option>
            <option>Something else</option>
          </select>
        </label>
      )}
      <label className="block md:col-span-2">
        <span className={labelClass}>{programme ? "Anything we should know? (optional)" : "Message"}</span>
        <textarea name="message" rows={programme ? 3 : 6} required={!programme} className={`${fieldClass} mt-2`} />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-red px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-red-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : programme ? "Register interest" : "Send message"}
        </button>
        {status === "error" && (
          <p className="mt-4 text-sm text-red" role="alert">
            Sorry, your message could not be sent. Please email us directly at{" "}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
