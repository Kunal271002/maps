import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal, SectionHeading } from "./Motion";
import { CONTACT } from "@/data/site";
import { sendEnquiry } from "@/lib/send-enquiry";

const COURSE_OPTIONS = [
  "Foundation (5th – 10th)",
  "11th – 12th Science",
  "11th – 12th Commerce / CA Foundation",
  "Integrated JEE",
  "Integrated NEET",
  "MHT-CET Crash Course",
];

const MODES = ["Online", "Offline", "Hybrid"] as const;

export function Enquiry() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [mode, setMode] = useState<(typeof MODES)[number]>("Offline");
  const [errorMessage, setErrorMessage] = useState("");
  const sendEnquiryFn = useServerFn(sendEnquiry);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    try {
      await sendEnquiryFn({
        data: {
          fullName: String(formData.get("name") ?? ""),
          contact: String(formData.get("phone") ?? ""),
          email: String(formData.get("email") ?? ""),
          course: String(formData.get("course") ?? ""),
          mode,
          message: String(formData.get("message") ?? ""),
        },
      });
      setState("done");
    } catch {
      setState("idle");
      setErrorMessage(
        "We couldn't send your enquiry. Please try again or contact us by phone or email.",
      );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-royal py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-crimson/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            Admissions Open
          </span>
          <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Register Now &amp; Get a Call Back In 2 Hours
          </h2>
          <p className="mt-4 max-w-md text-white/75">
            Tell us your standard and preferred mode. Our academic counsellor will call you with
            batch timings, fees and a free demo class slot.
          </p>
          <div className="mt-6 space-y-1 text-sm text-white/80">
            <p>
              <strong className="text-gold">Call:</strong>{" "}
              <a href={CONTACT.phoneHref} className="hover:text-gold">
                {CONTACT.phone}
              </a>
            </p>
            <p>
              <strong className="text-gold">Email:</strong>{" "}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative rounded-3xl border border-white/25 bg-white/12 p-6 backdrop-blur-2xl sm:p-8">
            <AnimatePresence mode="wait">
              {state === "done" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold text-gold-foreground"
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.span>
                  <h3 className="mt-5 text-2xl text-white">Request Submitted!</h3>
                  <p className="mt-2 text-white/80">We will call you back within 2 hours.</p>
                  <button
                    type="button"
                    onClick={() => setState("idle")}
                    className="mt-6 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <Field label="Full Name">
                    <input
                      required
                      name="name"
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-gold focus:bg-white/15"
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      required
                      type="tel"
                      pattern="[0-9+() -]{10,18}"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-gold focus:bg-white/15"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-gold focus:bg-white/15"
                    />
                  </Field>
                  <Field label="Selected Standard / Course">
                    <select
                      name="course"
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-gold [&>option]:text-foreground"
                    >
                      {COURSE_OPTIONS.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred Mode">
                    <div className="grid grid-cols-3 gap-2">
                      {MODES.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setMode(m)}
                          className={`rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                            mode === m
                              ? "bg-goldish text-gold-foreground"
                              : "border border-white/25 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Message (optional)">
                    <textarea
                      name="message"
                      maxLength={2000}
                      rows={3}
                      placeholder="Anything else you'd like us to know?"
                      className="w-full resize-y rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-gold focus:bg-white/15"
                    />
                  </Field>
                  {errorMessage && (
                    <p role="alert" className="text-sm font-semibold text-red-200">
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-crimson py-3.5 text-sm font-extrabold uppercase tracking-wide text-crimson-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
                  >
                    {state === "sending" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {state === "sending" ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/70">
        {label}
      </span>
      {children}
    </label>
  );
}
