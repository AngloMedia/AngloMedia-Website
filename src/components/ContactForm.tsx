"use client";

import { services, site } from "@/lib/site";

const fieldClass =
  "w-full border border-navy/15 bg-mist px-4 py-3 text-navy placeholder:text-ink/40 focus:border-navy focus:outline-none";
const labelClass = "text-xs uppercase tracking-[0.2em] text-red";

// Opens the visitor's email app with the message filled in. Swap this for a
// form service or API route once a sending email address is set up.
// Pass `programme` to turn it into a sign-up form for that programme.
export function ContactForm({ programme }: { programme?: string }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const interest = programme ?? data.get("interest");
    const subject = programme
      ? `${programme} registration: ${data.get("name")}`
      : `Website enquiry from ${data.get("name")} (${data.get("organisation")})`;
    const body = `Name: ${data.get("name")}\nOrganisation: ${data.get("organisation")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterest: ${interest}\n\n${data.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
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
          className="bg-red px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-red-dark"
        >
          {programme ? "Register interest" : "Send message"}
        </button>
      </div>
    </form>
  );
}
