import { Facebook, Instagram, MapPin, Phone, Mail, Youtube } from "lucide-react";
import { CONTACT, LOGO_URL, NAV_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="MAPS Educare logo" loading="lazy" className="h-14 w-auto" />
            <span>
              <span className="block font-display text-2xl leading-none text-primary">
                MAPS EDUCARE
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-crimson">
                Yes, I Can!
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            IIT-JEE, NEET, MHT-CET and Board coaching in Nallasopara &amp; Vasai. Fifteen years of
            rankers, one promise — MAPS hai to mumkin hai.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="MAPS Educare social profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-primary">Reach Us</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
              <span>
                <strong className="block text-foreground">Head Office</strong>
                {CONTACT.address}
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
              <span>
                <strong className="block text-foreground">Branch</strong>
                {CONTACT.branch}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
              <a href={CONTACT.phoneHref} className="hover:text-gold">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-gold">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MAPS Educare · Om Plaza, Opposite Railway Station, Nalasopara
        West, Palghar. All rights reserved.
      </div>
    </footer>
  );
}
