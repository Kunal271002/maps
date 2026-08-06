import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Star, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-classroom.jpg";
import { Counter } from "./Motion";

const STANDARDS = [
  "5th – 10th Foundation",
  "11th – 12th Science",
  "11th – 12th Commerce",
  "Integrated JEE",
  "Integrated NEET",
  "Integrated MHT-CET",
];

const BATCHES = ["Crash Course", "Regular", "Weekend", "Online", "Offline"];

export function Hero() {
  const [standard, setStandard] = useState(STANDARDS[1]);
  const [batch, setBatch] = useState(BATCHES[1]);

  return (
    <section id="home" className="relative overflow-hidden bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="relative overflow-hidden rounded-3xl shadow-elevated">
          <img
            src={heroImg}
            alt="MAPS Educare students studying in a classroom"
            width={1920}
            height={1088}
            className="aspect-16/9 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.07_268)]/95 via-[oklch(0.18_0.07_268)]/75 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl px-5 sm:px-10 lg:px-14">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold-foreground sm:text-xs"
              >
                Trusted for 15 Years
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-3 text-2xl leading-[1.05] text-white sm:text-4xl lg:text-6xl"
              >
                <span className="text-gradient-gold">YES, I CAN!</span>
                <span className="mt-2 block">
                  Shaping Future Rankers in JEE, NEET, MHT-CET &amp; Boards
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-4 hidden max-w-lg text-sm text-white/80 sm:block sm:text-base"
              >
                Nallasopara's home of IIT-JEE &amp; Medical coaching — small batches, relentless
                testing and faculty who know every student by name.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-5 flex flex-wrap gap-3"
              >
                <a
                  href="#results"
                  className="inline-flex items-center gap-2 rounded-full bg-goldish px-5 py-2.5 text-sm font-extrabold uppercase text-gold-foreground transition-transform hover:scale-105"
                >
                  See Our Toppers <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden justify-end gap-3 p-6 md:flex">
            {[
              { icon: Users, value: 3000, suffix: "+", label: "Total Students" },
              { icon: GraduationCap, value: 100, suffix: "%", label: "Success Rate" },
              { icon: Star, value: 5, suffix: "/5", label: "Google Rating" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="float-soft rounded-2xl border border-white/25 bg-white/12 px-5 py-3 text-white backdrop-blur-md"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <s.icon className="mb-1 h-4 w-4 text-gold" />
                <div className="font-display text-2xl leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-white/75">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="-mt-2 grid gap-3 md:hidden">
          {[
            { value: "3000+", label: "Total Students" },
            { value: "100%", label: "Success Rate" },
            { value: "5/5", label: "Google Rating" },
          ].map((s) => (
            <div
              key={s.label}
              className="mt-3 flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </span>
              <span className="font-display text-xl text-primary">{s.value}</span>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative z-10 mx-auto mt-8 max-w-5xl rounded-2xl border border-border bg-card/80 p-5 shadow-elevated backdrop-blur-xl md:-mt-10"
        >
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-crimson">
            Quick Course Selector
          </p>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                Select Standard
              </span>
              <select
                value={standard}
                onChange={(e) => setStandard(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
              >
                {STANDARDS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
                Select Batch Type
              </span>
              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
              >
                {BATCHES.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 self-end rounded-xl bg-royal px-6 py-3 text-sm font-extrabold uppercase text-primary-foreground transition-transform hover:scale-105"
            >
              Find My Batch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Showing availability for <strong className="text-foreground">{standard}</strong> ·{" "}
            <strong className="text-foreground">{batch}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
