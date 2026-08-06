import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Quote, X } from "lucide-react";
import { REVIEWS } from "@/data/site";
import posterThumb from "@/assets/poster-3results.asset.json";
import { Reveal, SectionHeading } from "./Motion";

export function VideoReviews() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Video Reviews"
          title="Hear It From Our Students"
          subtitle="Real MAPS students talking about the batches, the faculty and the results."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative block w-full overflow-hidden rounded-3xl border-2 border-gold/60 glow-gold"
            >
              <img
                src={posterThumb.url}
                alt="MAPS Educare student review video thumbnail"
                loading="lazy"
                className="aspect-16/10 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/40 transition group-hover:bg-black/25" />
              <span className="absolute inset-0 grid place-items-center">
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gold text-gold-foreground transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-current" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-gold/50" />
                </span>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 text-left"
              >
                <span className="block font-display text-xl text-white sm:text-2xl">
                  "MAPS hai to mumkin hai"
                </span>
                <span className="mt-1 block text-sm text-white/75">
                  Student testimonials · 2026 batch
                </span>
              </motion.span>
            </button>
          </Reveal>

          <div className="space-y-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all ${
                    active === i
                      ? "border-gold bg-card shadow-elevated"
                      : "border-border bg-card/60 hover:border-primary/40"
                  }`}
                >
                  <Quote className="h-5 w-5 text-crimson" />
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.quote}</p>
                  <p className="mt-3 text-sm font-extrabold text-primary">{r.name}</p>
                  <p className="text-xs uppercase tracking-widest text-gold">{r.role}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-100 grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Close video"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-gold/60"
            >
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=UUCg0m4c8Y7SM_6RJDXPTvVw"
                title="MAPS Educare student video reviews"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
