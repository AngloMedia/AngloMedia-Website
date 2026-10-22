"use client";

import { site } from "@/lib/site";

const fieldClass =
  "w-full border border-gold/30 bg-charcoal px-4 py-3 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none";

// Opens the visitor's email app with the message filled in. Swap this for a
// form service or API route once a sending email address is set up.
export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Website enquiry from ${data.get("name")} (${data.get("organisation")})`;
    const body = `Name: ${data.get("name")}\nOrganisation: ${data.get("organisation")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-gold">Name</span>
        <input name="name" required className={`${fieldClass} mt-2`} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-gold">Organisation</span>
        <input name="organisation" className={`${fieldClass} mt-2`} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-gold">Email</span>
        <input name="email" type="email" required className={`${fieldClass} mt-2`} />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-gold">I&apos;m interested in</span>
        <select name="interest" className={`${fieldClass} mt-2`}>
          <option>Public Relations</option>
          <option>Corporate Communications</option>
          <option>Content Creation</option>
          <option>Editing &amp; Proofreading</option>
          <option>Training &amp; Education</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="text-xs uppercase tracking-[0.2em] text-gold">Message</span>
        <textarea name="message" rows={6} required className={`${fieldClass} mt-2`} />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="bg-gold px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-gold-light"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
