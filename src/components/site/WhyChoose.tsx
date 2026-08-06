import { CalendarDays, Award, Users, BookMarked, ClipboardCheck, Clock } from "lucide-react";
import { EVENTS, FEATURES } from "@/data/site";
import { Reveal, SectionHeading } from "./Motion";

const ICONS = [Clock, Users, Award, BookMarked, ClipboardCheck];

export function WhyChoose() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Why MAPS"
          title="Why Choose MAPS Educare"
          subtitle="Fifteen years of coaching discipline, distilled into how we run every single batch."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-gold hover:shadow-elevated">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-royal text-primary-foreground transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg leading-snug text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div id="events" className="mt-24 scroll-mt-32">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="What's Happening At MAPS"
            subtitle="Seats are limited — call us to reserve your place."
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="absolute left-4 top-2 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-gold via-crimson to-primary sm:left-1/2" />
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div
                  className={`relative mb-8 pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    className={`absolute left-2.5 top-6 h-3.5 w-3.5 rounded-full border-2 border-background bg-gold sm:left-auto ${
                      i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                    }`}
                  />
                  <article className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elevated">
                    <span className="inline-flex items-center gap-2 rounded-full bg-crimson/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-crimson">
                      <CalendarDays className="h-3 w-3" /> {e.date}
                    </span>
                    <h3 className="mt-3 text-xl text-primary">{e.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
