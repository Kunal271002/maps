import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Trophy, X, ZoomIn } from "lucide-react";
import {
  POSTERS,
  POSTER_FILTERS,
  SPOTLIGHT,
  TOPPERS,
  TOPPER_TABS,
  type Poster,
} from "@/data/site";
import { Reveal, SectionHeading } from "./Motion";

function Confetti({ seed }: { seed: string }) {
  const pieces = Array.from({ length: 22 });
  const colors = ["bg-gold", "bg-crimson", "bg-primary"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((_, i) => (
        <motion.span
          key={`${seed}-${i}`}
          initial={{ opacity: 1, y: -20, x: 0, rotate: 0 }}
          animate={{ opacity: 0, y: 260, x: (i % 5 - 2) * 40, rotate: 360 }}
          transition={{ duration: 1.4, delay: i * 0.02, ease: "easeOut" }}
          className={`absolute top-0 h-2 w-2 rounded-[2px] ${colors[i % 3]}`}
          style={{ left: `${(i * 4.4) % 100}%` }}
        />
      ))}
    </div>
  );
}

export function Results() {
  const [tab, setTab] = useState("All");
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<Poster | null>(null);

  const visibleToppers =
    tab === "All" ? TOPPERS : TOPPERS.filter((t) => t.category === tab);
  const visiblePosters =
    filter === "All" ? POSTERS : POSTERS.filter((p) => p.exams.includes(filter));

  return (
    <section id="results" className="relative bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Results & Toppers"
          title="MAPS Produce Toppers"
          subtitle="Every poster below is a real MAPS Educare result. Tap any poster to view it full size."
        />

        {/* Spotlight */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPOTLIGHT.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="card-tilt group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 text-center">
                <div className="absolute inset-x-0 top-0 h-1 bg-goldish" />
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-royal font-display text-2xl text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  {s.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="mt-4 inline-block rounded-full bg-crimson px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-crimson-foreground">
                  {s.exam}
                </span>
                <h3 className="mt-3 text-xl text-primary">{s.name}</h3>
                <p className="mt-1 font-display text-3xl text-gradient-gold">{s.score}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
                <Trophy className="absolute -bottom-4 -right-4 h-20 w-20 text-gold/10 transition-transform duration-500 group-hover:scale-125" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Poster wall */}
        <div className="mt-20">
          <Reveal className="mb-8 text-center">
            <h3 className="text-2xl text-primary sm:text-3xl">Result Poster Wall</h3>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {POSTER_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition ${
                    filter === f
                      ? "bg-royal text-primary-foreground shadow-elevated"
                      : "border border-border bg-card text-muted-foreground hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            <AnimatePresence mode="popLayout">
              {visiblePosters.map((p) => (
                <motion.button
                  key={p.id}
                  type="button"
                  onClick={() => setLightbox(p)}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-elevated transition-transform hover:-translate-y-2"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.url}
                      alt={p.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-gold text-gold-foreground opacity-0 transition group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-base text-primary">{p.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{p.caption}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Tabbed topper grid */}
        <div className="relative mt-20">
          <Reveal className="mb-8 text-center">
            <h3 className="text-2xl text-primary sm:text-3xl">All Topper Records</h3>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {TOPPER_TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition ${
                    tab === t
                      ? "bg-crimson text-crimson-foreground"
                      : "border border-border bg-card text-muted-foreground hover:text-crimson"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="relative">
            <Confetti seed={tab} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {visibleToppers.map((t, i) => (
                  <motion.article
                    layout
                    key={`${t.name}-${t.exam}-${i}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-5"
                  >
                    <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-gold/20 text-gold">
                      <Award className="h-4 w-4" />
                    </span>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-crimson">
                      {t.exam}
                    </p>
                    <h4 className="mt-2 text-lg text-primary">{t.name}</h4>
                    <p className="font-display text-2xl text-foreground">{t.score}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{t.detail}</p>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-goldish transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Close poster"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.url}
              alt={lightbox.title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-auto max-w-full rounded-xl object-contain glow-gold"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
