import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow, PageHero, Rule } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Theatrical English",
  description:
    "Theatrical English: a year-long programme where Moroccan students aged 10–19 learn English through acting, movement and theatre games. Led by K. Barrett Bilali.",
};

const activities = [
  { title: "Acting and public speaking", text: "Students rehearse scenes, monologues and short plays in English." },
  { title: "Self-confidence", text: "Performing in front of others builds the confidence to speak up anywhere." },
  { title: "Theatre games", text: "Games and improvisation make vocabulary and grammar stick through play." },
  { title: "Self-expression", text: "Above all, students learn to express their ideas and feelings in English." },
];

const facts = [
  { label: "Who", value: "Ages 10–19", text: "Primary, middle and high school students" },
  { label: "When", value: "September – June", text: "One full academic year" },
  // TODO: confirm the venue name and city spelling.
  { label: "Where", value: "Salé", text: "Classes currently running at English Time" },
];

// Add videos here. YouTube is recommended (an unlisted video works): use the
// ID from the link, e.g. "abc123XYZ" from youtube.com/watch?v=abc123XYZ.
const videos: { title: string; youtubeId: string }[] = [];

export default function TheatricalEnglishPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello, I would like to know more about Theatrical English.",
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Training · Ages 10–19"
        title="Theatrical English"
        intro="Students learn to speak English through acting, movement and play: a full-year programme that uses drama and theatre games to build confident, expressive English speakers."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">
            English comes alive on stage
          </h2>
          <Rule />
          <p className="text-lg text-ink/80">
            Many students learn English grammar for years but freeze when it is
            time to speak. Theatrical English changes that. Through acting,
            movement and play, students use English to perform, improvise and
            tell stories, and discover that they have a voice.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {activities.map((a) => (
              <div key={a.title} className="border-t-2 border-red pt-5">
                <h3 className="font-serif text-2xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-ink/75">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        <dl className="space-y-4 self-start">
          {facts.map((f) => (
            <div key={f.label} className="bg-navy p-8 text-white">
              <dt className="text-xs uppercase tracking-[0.3em] text-white/70">{f.label}</dt>
              <dd className="mt-2 font-serif text-3xl font-semibold">{f.value}</dd>
              <dd className="mt-1 text-white/80">{f.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Eyebrow>Why</Eyebrow>
          <p className="mt-6 font-serif text-3xl italic leading-snug text-navy md:text-4xl">
            &ldquo;English is the key to global communication. Acting builds the
            confidence to speak well, in any language and in any room.&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-red">
            K. Barrett Bilali, programme director
          </p>
        </div>
      </section>

      {videos.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>See it in action</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">Our students on stage</h2>
          <Rule />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {videos.map((v) => (
              <figure key={v.youtubeId}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
                <figcaption className="mt-3 text-ink/75">{v.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>For schools &amp; language centres</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Bring Theatrical English to your school
            </h2>
            <Rule />
            <p className="text-ink/80">
              Theatrical English can be delivered as a year-long programme,
              an after-school club or a series of workshops at your school or
              language centre. We adapt the content to your students&apos; ages
              and English level, and finish with a performance for families.
            </p>
          </div>
          <div>
            <Eyebrow>Parents &amp; students</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Join the next class
            </h2>
            <Rule />
            <p className="text-ink/80">
              Message us on WhatsApp, or leave your details below and we will
              contact you with class times and fees.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-[#25d366] px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white hover:brightness-95"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4 5.1 5.1 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
              </svg>
              WhatsApp {site.phone}
            </a>
          </div>
        </div>
        <div className="mt-12 border border-navy/15 p-8">
          <ContactForm programme="Theatrical English" />
        </div>
      </section>
    </>
  );
}
