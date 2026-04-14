import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";
import { homeCourseColumns } from "./home-data";

const quickLinks = ["Home", "About Us", "Our Courses", "Our Curriculum", "FAQ", "Glossary", "Enrolment Form", "Contact Us"];

const footerLinkMap: Record<string, string> = {
  EYFS: "/curriculum/primary/eyfs/",
  "Key Stage 1": "/curriculum/primary/ks1/",
  "Key Stage 2": "/curriculum/primary/ks2/",
  Mathematics: "/courses/mathematics/",
  English: "/courses/english/",
  Science: "/courses/science/",
  "Key Stage 3": "/curriculum/secondary/ks3/",
  GCSE: "/curriculum/secondary/gcse/",
  IGCSE: "/curriculum/secondary/igcse/",
  "A-Level": "/curriculum/secondary/a-level/",
  "IB Diploma": "/curriculum/secondary/ib/",
  MYP: "/curriculum/secondary/myp/",
  Physics: "/courses/physics/",
  Chemistry: "/courses/chemistry/",
  Biology: "/courses/biology/",
  "Business Studies": "/courses/business-studies/",
  Economics: "/courses/economics/",
  Psychology: "/courses/psychology/",
  "CAT4 Prep": "/courses/cat-prep/",
  "7+/11+ Entrance Prep": "/courses/entrance-prep/",
  "Chess Mastery": "/courses/chess/",
  "Financial Literacy": "/courses/financial-literacy/",
  "AI Literacy": "/courses/ai-literacy/",
  Counselling: "/courses/counselling/"
};

const quickLinkMap: Record<string, string> = {
  Home: "/",
  "About Us": "/about/",
  "Our Courses": "/courses/",
  "Our Curriculum": "/curriculum/",
  FAQ: "/faq/",
  Glossary: "/glossary/",
  "Enrolment Form": "/enrolment-page/",
  "Contact Us": "/contact/"
};

const socialLinks = [
  { href: "https://www.tiktok.com/@improveme.dxb", label: "Improve ME on TikTok", Icon: Music2 },
  { href: "https://www.instagram.com/improvemedxb", label: "Improve ME on Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/improvemeinstitute", label: "Improve ME on Facebook", Icon: Facebook }
] as const;

export default function HomeFooter() {
  return (
    <footer id="footer" className="bg-[#151c2d] text-white">
      <div className="section-container py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1.2fr_1fr_1fr_1.4fr]">
          <div>
            <Image
              src="https://www.improvemeinstitute.com/logo.png"
              alt="Improve ME Institute"
              width={190}
              height={46}
              className="h-10 w-auto brightness-[1.18]"
            />
            <p className="mt-3 text-[14px] text-white/70">Leading Tutoring Centre in Dubai</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors duration-150 hover:text-brandGold"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <Link
              href="/contact/#booking-form"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-brandGold px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Book Your Free Assessment
            </Link>
          </div>

          {homeCourseColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{column.title}</h4>
              {"items" in column ? (
                <ul className="space-y-2">
                  {column.items.map((item) => (
                    <li key={item}>
                      <Link href={footerLinkMap[item] ?? "/courses/"} className="text-[14px] text-white/72 transition-colors hover:text-brandGold">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3">
                  {column.groups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/30">{group.label}</p>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link href={footerLinkMap[item] ?? "/courses/"} className="text-[14px] text-white/72 transition-colors hover:text-brandGold">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link href={quickLinkMap[item] ?? "/"} className="text-[14px] text-white/72 transition-colors hover:text-brandGold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Contact</h4>
            <p className="text-[14px] leading-7 text-white/72">
              Suite 3016-3017, Building 3
              <br />
              Gold and Diamond Park, Dubai
            </p>
            <div className="mt-4 space-y-2 text-[14px]">
              <p className="text-white/72">Primary: +971 50 185 2505</p>
              <p className="text-white/72">Lower Secondary: +971 58 533 4989</p>
              <p className="text-white/72">Upper Secondary: +971 58 547 1457</p>
              <p className="text-white/72">Landline: +971 4 380 5525</p>
            </div>
            <p className="mt-4 text-[14px] text-white/72">contact@improvemeinstitute.com</p>
            <p className="mt-3 text-[12px] text-white/40">Mon-Fri: 9:30am-8:00pm · Sat: 9:00am-7:00pm</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Improve ME Institute © 2026. All Rights Reserved</p>
          <p>Operates under RAK Free Zone licence</p>
        </div>
      </div>
    </footer>
  );
}
