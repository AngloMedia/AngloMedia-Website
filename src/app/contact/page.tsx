import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, Rule, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation"
        intro="Tell us about your organisation and what you would like to achieve. We will be in touch to discuss how we can help."
      />

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>Reach us</Eyebrow>
          <Rule />
          <dl className="space-y-6 text-ink/80">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-red">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-red">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-red">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-red">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-red">Location</dt>
              <dd className="mt-1">{site.location}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
