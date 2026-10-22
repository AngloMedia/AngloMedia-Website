import { ButtonLink, CallToAction, Eyebrow, FlagBands, Rule } from "@/components/ui";
import { clients, services, site } from "@/lib/site";

const audience = [
  "English-speaking",
  "Technology-oriented",
  "Higher incomes",
  "Growing job opportunities",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <FlagBands className="absolute right-0 top-0 hidden h-full w-1/2 opacity-90 md:block" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <Eyebrow>Communications &amp; Public Relations · Rabat, Morocco</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
            Your voice in Morocco&apos;s{" "}
            <span className="italic text-red">English-speaking</span> future.
          </h1>
          <Rule />
          <p className="max-w-2xl text-lg text-ink/80">{site.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Work with us</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Our services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/15 bg-mist">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center md:grid-cols-4">
          {clients.map((client) => (
            <p key={client} className="font-serif text-lg text-ink/90">
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
        <Rule />
        <div className="mt-12 grid gap-px bg-navy/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 md:p-10">
              <h3 className="font-serif text-2xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-ink/75">{service.summary}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/services" variant="outline">
            Explore services
          </ButtonLink>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <Eyebrow>Training &amp; Education</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
              Building confident communicators
            </h2>
            <Rule />
            <p className="text-ink/80">
              Our teachers and trainers strengthen English writing and
              communication skills for employees and students. Our referral
              and certification programme helps qualified candidates find
              English-speaking jobs.
            </p>
            <div className="mt-8">
              <ButtonLink href="/training">Our programmes</ButtonLink>
            </div>
          </div>
          <div className="border border-navy/15 p-10">
            <p className="font-serif text-3xl italic leading-snug text-navy">
              &ldquo;The right message, in the right language, for the right
              audience.&rdquo;
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-red">
              The AngloMedia approach
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>The opportunity</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">
          Morocco&apos;s English-speaking audience is growing
        </h2>
        <Rule />
        <p className="max-w-2xl text-ink/80">
          Across Morocco and the wider MENA region, English-speaking residents,
          consumers and professionals are a fast-growing audience. We help you
          reach them with confidence.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {audience.map((item) => (
            <div key={item} className="border-t-2 border-red pt-5">
              <p className="font-serif text-2xl text-red">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
