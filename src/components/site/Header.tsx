import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT, NAV_LINKS, LOGO_URL } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-royal text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs sm:text-[13px] md:justify-between">
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-gold">
            <Phone className="h-3.5 w-3.5 shrink-0" /> {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-gold">
            <Mail className="h-3.5 w-3.5 shrink-0" /> {CONTACT.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0" /> {CONTACT.location}
          </span>
        </div>
      </div>

      <div
        className={`border-b border-border transition-all ${
          scrolled ? "bg-surface/90 backdrop-blur-xl shadow-elevated" : "bg-surface"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="relative shrink-0">
              <img src={LOGO_URL} alt="MAPS Educare shield logo" className="h-11 w-auto" />
              <span className="absolute -inset-1 -z-10 animate-pulse rounded-full bg-gold/30 blur-md" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-xl leading-none tracking-wide text-primary sm:text-2xl">
                MAPS EDUCARE
              </span>
              <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-crimson">
                IIT-JEE &amp; Medical
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-semibold text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="shine hidden rounded-full bg-goldish px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-gold-foreground glow-gold transition-transform hover:scale-105 sm:inline-flex"
            >
              Register Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border bg-surface lg:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-3">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-accent"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-goldish px-5 py-3 text-center text-sm font-extrabold uppercase text-gold-foreground"
                >
                  Register Now
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
