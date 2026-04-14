"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MapPin, X } from "lucide-react";
import { navLinks } from "./site-data";

const contactRows = [
  { label: "Primary: +971-50 185 2505", href: "tel:+971501852505" },
  { label: "Lower Secondary (Ages 11–14): +971 58 533 4989", href: "tel:+971585334989" },
  { label: "Upper Secondary (Ages 15+): +971 58 547 1457", href: "tel:+971585471457" }
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="w-full bg-brandBlue">
        <div className="section-container hidden items-center justify-between gap-2 py-2 md:flex">
          <Link
            href="#footer"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="View location"
          >
            <MapPin className="h-4 w-4 text-yellow-400" />
            <span className="text-xs font-medium text-white sm:text-sm">Gold &amp; Diamond Park, Dubai</span>
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            {contactRows.map((row, index) => (
              <div key={row.label} className="flex items-center gap-3">
                <Link href={row.href} className="text-xs font-medium text-white transition-colors hover:text-yellow-400 sm:text-sm">
                  {row.label}
                </Link>
                {index < contactRows.length - 1 ? <span className="text-white/50">|</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="w-full border-b border-gray-200 bg-white shadow-header">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <Link href="#home" className="transition-transform hover:scale-105" aria-label="Improve ME Institute home">
              <Image
                src="https://www.improvemeinstitute.com/logo.png"
                alt="Improve ME Institute"
                width={185}
                height={45}
                className="h-9 w-auto"
                priority
              />
            </Link>

            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-4 py-3 text-sm font-medium text-navy-900 transition-colors duration-100 hover:text-yellow-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-lg bg-brandGold px-5 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:opacity-95 hover:shadow-md focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
              >
                Book Free Assessment
              </Link>
            </div>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((current) => !current)}
              className="rounded-lg p-2 text-navy-900 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="section-container animate-slideIn py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-slate-50 hover:text-yellow-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#final-cta"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-brandGold px-5 py-3 text-sm font-bold text-black"
              >
                Book Free Assessment
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
