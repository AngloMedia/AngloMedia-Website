import type { Metadata } from "next";
import Image from "next/image";
import portrait from "../../../public/images/barrett-bilali-portrait.jpg";
import casablanca from "../../../public/images/barrett-bilali-casablanca.jpg";
import rabat from "../../../public/images/rabat-grand-theatre.jpg";
import { CallToAction, Eyebrow, Rule, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet K. Barrett Bilali, journalist, CELTA-certified English teacher and founder of AngloMedia Group in Rabat, Morocco.",
};

const highlights = [
  { value: "35+", label: "years in business & media" },
  { value: "11", label: "years in Morocco" },
  { value: "CELTA", label: "certified, London" },
  { value: "4", label: "languages: English, French, Spanish, Arabic" },
];

const commitments = [
  "Public relations for institutions and businesses",
  "Promoting new businesses and business opportunities",
  "Helping people find English-speaking jobs",
  "Referral letters and certification for job seekers",
  "Surveys and audience research",
  "In-depth articles on culture, religion, technology, politics and lifestyles",
];

const team = [
  { title: "PR professionals", text: "Building reputations and opening doors for institutions and businesses." },
  { title: "Writers", text: "Creating and editing clear, compelling English for every audience." },
  { title: "Teachers & trainers", text: "Strengthening the English communication skills of students and employees." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AngloMedia Group"
        title="The power of English, working for you"
        intro="AngloMedia Group is a team of dedicated public relations professionals, writers, teachers and trainers based in Rabat, Morocco. We use the power of English to expand your customer base and enhance your communication skills."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">
            Connecting the English-speaking community
          </h2>
          <Rule />
        </div>
        <div className="space-y-5 text-ink/80">
          <p className="font-serif text-2xl italic leading-snug text-navy">
            To provide a means of communication to English-speaking residents,
            consumers, professionals, businesses and institutions in the Middle
            East and North Africa (MENA) community.
          </p>
          <p>
            We connect people with opportunities: businesses with new
            customers, institutions with their audiences, and talented
            employees with the jobs that suit them.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Meet the founder</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">
            Hello,
            <br className="md:hidden" /> I&apos;m{" "}
            <span className="whitespace-nowrap">K. Barrett Bilali</span>
          </h2>
          <Rule />

          <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.6fr]">
            <div>
              <Image
                src={portrait}
                alt="K. Barrett Bilali, founder of AngloMedia Group"
                placeholder="blur"
                className="w-full border-b-4 border-red"
                sizes="(min-width: 768px) 400px, 100vw"
              />
              <p className="mt-4 font-serif text-2xl font-semibold text-navy">K. Barrett Bilali</p>
              <p className="text-sm uppercase tracking-[0.2em] text-red">Founder, AngloMedia Group</p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                {highlights.map((h) => (
                  <div key={h.label} className="border-t-2 border-navy pt-3">
                    <dt className="font-serif text-3xl font-semibold text-navy">{h.value}</dt>
                    <dd className="mt-1 text-sm text-ink/70">{h.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                I&apos;m a New Yorker, born and raised in Manhattan, and for the
                past eleven years I&apos;ve made my home in Morocco. I founded
                AngloMedia because I saw how quickly English was becoming a
                language of opportunity here, and how many Moroccan companies,
                schools and organisations needed a partner to help them speak to
                the English-speaking world.
              </p>
              <p>
                Journalism has been the thread running through most of my career.
                I started as a reporter and copy editor at the <em>Times Herald-Record</em> in
                New York, and went on to write for <em>The Harlem Times</em>, <em>Quartz Africa</em> and
                Urban News Service. I was managing editor of the <em>South Florida
                Times</em> and a senior staff writer at <em>The Miami Times</em>. Here in
                Morocco, I was a contributing editor at <em>Morocco World News</em> and
                have worked with <em>TelQuel</em>. I&apos;m also the author of{" "}
                <em>Newburgh: America&apos;s Mecca of Historic Preservation</em>,
                published by Arcadia Publishing in 1999.
              </p>
              <p>
                Alongside the newsroom, I&apos;ve worked in banking, real estate and
                property management, and I ran for political office in the United
                States three times. Those experiences taught me how institutions,
                money and public opinion really work. I hold a BBA in Economics and
                Finance from Baruch College, City University of New York, and I
                have lectured university students in economics, finance and
                business ethics.
              </p>
              <p>
                Teaching is the other half of what I do. I earned my CELTA in
                London, and today I help students and professionals write and speak
                English with confidence. I&apos;ve worked with the U.S. Embassy, and I
                help Moroccan companies and non-profits register on SAM.gov so they
                can compete for U.S. government contracts and grants. I&apos;m also an
                experienced grant writer with a record of successful proposals.
              </p>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ink/85 md:order-1">
              <p>
                I&apos;m fluent in English, French and Spanish and proficient in
                Arabic, but I write in English. That&apos;s my craft.
                {site.substack && (
                  <>
                    {" "}You can read my latest writing on{" "}
                    <a href={site.substack} className="text-red underline hover:text-red-dark">
                      my Substack
                    </a>
                    .
                  </>
                )}
              </p>
              <p>
                When I&apos;m not at my desk, you&apos;ll probably find me behind the
                wheel of my 4x4. I&apos;ve gone overlanding across Morocco, from the
                dunes of Merzouga to the Mediterranean, and from Oujda to the
                Atlantic. There&apos;s no better way to understand this country and
                its people than to see all of it.
              </p>
              <p className="font-serif text-2xl italic text-navy">
                I look forward to helping your organisation find its voice in
                English.
              </p>
            </div>
            <Image
              src={casablanca}
              alt="K. Barrett Bilali in Casablanca"
              placeholder="blur"
              className="w-full md:order-2"
              sizes="(min-width: 768px) 400px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src={rabat}
          alt="The Grand Théâtre de Rabat on the Bouregreg river, with fishing boats in the foreground"
          placeholder="blur"
          className="h-[420px] w-full object-cover object-[center_35%] md:h-[520px]"
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/85 to-transparent">
          <div className="mx-auto max-w-6xl px-6 pb-8 pt-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/80">Based in Rabat</p>
            <p className="mt-2 font-serif text-3xl font-semibold text-white md:text-4xl">
              Morocco&apos;s capital, and our home
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">Our team</h2>
          <Rule />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.title} className="border-t-2 border-red pt-6">
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {member.title}
                </h3>
                <p className="mt-3 text-ink/75">{member.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl font-semibold">How we serve the community</h2>
        <Rule />
        <ul className="mt-6 grid gap-x-12 gap-y-4 text-ink/80 md:grid-cols-2">
          {commitments.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CallToAction />
    </>
  );
}
