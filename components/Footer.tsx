import Link from "next/link";
import Image from "next/image";
import { courseColumns } from "./site-data";

const quickLinks = ["Home", "About Us", "Our Courses", "Our Curriculum", "FAQ", "Glossary", "Enrolment Form", "Contact Us"];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#041834] text-white">
      <div className="section-container py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Image
              src="https://www.improvemeinstitute.com/logo.png"
              alt="Improve ME Institute"
              width={185}
              height={45}
              className="h-10 w-auto brightness-[1.35]"
            />
            <p className="mt-5 text-sm leading-7 text-white/70">
              KHDA-approved tutoring centre in Dubai offering structured support from early years through A-Level, IB and enrichment.
            </p>
            <Link
              href="#final-cta"
              className="mt-4 inline-block rounded-full bg-brandGold px-4 py-2 text-sm font-semibold text-navy-900 transition-opacity hover:opacity-90"
            >
              Book Your Free Assessment
            </Link>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
          {courseColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">{column.title}</h4>
              {"items" in column ? (
                <ul className="space-y-1.5">
                  {column.items.map((item) => (
                    <li key={item}>
                      <Link href="#courses" className="text-sm text-white/60 transition-colors duration-150 hover:text-brandGold">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3">
                  {column.groups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/30">{group.label}</p>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item}>
                            <Link href="#courses" className="text-sm text-white/60 transition-colors duration-150 hover:text-brandGold">
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
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link href="#home" className="text-sm text-white/60 transition-colors duration-150 hover:text-brandGold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Contact</h4>
            <p className="text-sm leading-relaxed text-white/60">
              Suite 3016–3017, Building 3
              <br />
              Gold and Diamond Park, Dubai
            </p>
            <ul className="mt-2 space-y-0.5">
              <li className="text-sm">
                <Link href="tel:+971501852505" className="text-white/60 transition-colors duration-150 hover:text-brandGold">
                  Primary: +971 50 185 2505
                </Link>
              </li>
              <li className="text-sm">
                <Link href="tel:+971585334989" className="text-white/60 transition-colors duration-150 hover:text-brandGold">
                  Lower Secondary: +971 58 533 4989
                </Link>
              </li>
              <li className="text-sm">
                <Link href="tel:+971585471457" className="text-white/60 transition-colors duration-150 hover:text-brandGold">
                  Upper Secondary: +971 58 547 1457
                </Link>
              </li>
              <li className="text-sm">
                <Link href="tel:+97143805525" className="text-white/60 transition-colors duration-150 hover:text-brandGold">
                  Landline: +971 4 380 5525
                </Link>
              </li>
            </ul>
            <Link href="mailto:contact@improvemeinstitute.com" className="mt-2 inline-block text-sm text-white/60 transition-colors duration-150 hover:text-brandGold">
              contact@improvemeinstitute.com
            </Link>
            <p className="mt-2 text-xs text-white/40">Mon–Fri: 9:30am–8:00pm · Sat: 9:00am–7:00pm</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 py-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Improve ME Institute © 2026. All Rights Reserved</p>
          <p>Operates under RAK Free Zone licence</p>
        </div>
      </div>
    </footer>
  );
}
