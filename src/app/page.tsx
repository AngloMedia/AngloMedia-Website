import { ButtonLink, CallToAction, Eyebrow, GoldRule } from "@/components/ui";
import { clients, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--burgundy)_0%,_transparent_55%)] opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <Eyebrow>Public Relations · Communications · Training</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
            Your voice in Morocco&apos;s{" "}
            <span className="italic text-gold">English-speaking</span> future.
          </h1>
          <GoldRule />
          <p className="max-w-2xl text-lg text-cream/80">{site.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Work with us</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Our services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-charcoal">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          {clients.map((client) => (
            <p key={client} className="font-serif text-lg text-cream/90">
              {client}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
          Communication that opens markets
        </h2>
        <GoldRule />
        <div className="mt-12 grid gap-px bg-gold/20 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="bg-black p-8 md:p-10">
              <h3 className="font-serif text-2xl font-semibold text-gold">
                {service.title}
              </h3>
              <p className="mt-3 text-cream/75">{service.summary}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/services" variant="outline">
            Explore services
          </ButtonLink>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <Eyebrow>Training &amp; Education</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Building confident communicators
            </h2>
            <GoldRule />
            <p className="text-cream/80">
              We design training programmes that strengthen English
              communication skills for employees and students, from
              presentations and business writing to media readiness.
            </p>
            <div className="mt-8">
              <ButtonLink href="/training">Our programmes</ButtonLink>
            </div>
          </div>
          <div className="border border-gold/30 p-10">
            <p className="font-serif text-3xl italic leading-snug text-cream">
              &ldquo;The right message, in the right language, for the right
              audience.&rdquo;
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">
              The AngloMedia approach
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
