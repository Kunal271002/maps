import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Check, X } from "lucide-react";
import { COURSES } from "@/data/site";
import { Reveal, SectionHeading } from "./Motion";

export function Courses() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="courses" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Popular Courses"
          title="Programmes Built Around Your Target"
          subtitle="From 5th standard foundation to two-year integrated JEE and NEET programmes."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <article className="card-tilt group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6">
                <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/15 blur-2xl transition-all group-hover:bg-gold/30" />
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                  <BookOpen className="h-3 w-3" /> {c.tag}
                </span>
                <h3 className="mt-4 text-xl leading-snug text-primary">{c.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="mt-6 translate-y-2 rounded-full border border-gold bg-transparent px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-gold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
                >
                  View Syllabus
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-100 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-7 shadow-elevated"
            >
              <button
                type="button"
                aria-label="Close syllabus"
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-accent"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-crimson">
                Syllabus Overview
              </p>
              <h3 className="mt-2 pr-8 text-2xl text-primary">{COURSES[open].title}</h3>
              <ul className="mt-5 space-y-3">
                {COURSES[open].syllabus.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(null)}
                className="mt-6 block rounded-full bg-royal py-3 text-center text-sm font-extrabold uppercase text-primary-foreground"
              >
                Enquire About This Batch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
