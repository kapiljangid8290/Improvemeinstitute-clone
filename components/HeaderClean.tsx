"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, MapPin, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "./site-data";

const contactRows = [
  { label: "Primary: +971-50 185 2505", href: "tel:+971501852505" },
  { label: "Lower Secondary (Ages 11–14): +971 58 533 4989", href: "tel:+971585334989" },
  { label: "Upper Secondary (Ages 15+): +971 58 547 1457", href: "tel:+971585471457" }
] as const;

const dropdownGroups = [
  {
    title: "Primary",
    items: [
      { label: "EYFS", href: "/curriculum/primary/eyfs/" },
      { label: "Key Stage 1", href: "/curriculum/primary/ks1/" },
      { label: "Key Stage 2", href: "/curriculum/primary/ks2/" },
      { label: "Mathematics", href: "/courses/#core-subjects" },
      { label: "English", href: "/courses/#core-subjects" },
      { label: "Science", href: "/courses/#core-subjects" }
    ]
  },
  {
    title: "Secondary",
    items: [
      { label: "Key Stage 3", href: "/curriculum/secondary/ks3/" },
      { label: "GCSE", href: "/curriculum/secondary/gcse/" },
      { label: "IGCSE", href: "/curriculum/secondary/igcse/" },
      { label: "A-Level", href: "/curriculum/secondary/a-level/" },
      { label: "IB Diploma", href: "/curriculum/secondary/ib/" },
      { label: "MYP", href: "/curriculum/secondary/myp/" },
      { label: "Business Studies", href: "/courses/#humanities-business" },
      { label: "Economics", href: "/courses/#humanities-business" }
    ]
  },
  {
    title: "Enrichment",
    items: [
      { label: "CAT4 Prep", href: "/courses/#enrichment-programmes" },
      { label: "7+/11+ Entrance Prep", href: "/courses/#enrichment-programmes" },
      { label: "Chess Mastery", href: "/courses/#enrichment-programmes" },
      { label: "Financial Literacy", href: "/courses/#enrichment-programmes" },
      { label: "AI Literacy", href: "/courses/#enrichment-programmes" },
      { label: "Counselling", href: "/courses/#enrichment-programmes" }
    ]
  }
] as const;

export default function HeaderClean() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="w-full bg-brandBlue">
        <div className="section-container hidden items-center justify-between gap-2 py-2 md:flex">
          <Link href="/contact/#map" className="flex items-center gap-2 transition-opacity hover:opacity-90" aria-label="View location">
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

      <nav className="w-full border-b border-gray-200 bg-white shadow-header transition-shadow duration-200">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="transition-transform hover:scale-105" aria-label="Improve ME Institute home">
              <Image src="https://www.improvemeinstitute.com/logo.png" alt="Improve ME Institute" width={185} height={45} className="h-9 w-auto" priority />
            </Link>

            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((item) =>
                item.label === "Our Courses" ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-0.5 rounded-md px-4 py-3 text-sm font-medium text-navy-900 transition-colors duration-100 hover:text-yellow-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                    </Link>

                    {coursesOpen ? (
                      <div className="absolute left-0 top-full w-[760px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                        <div className="grid grid-cols-3 gap-8">
                          {dropdownGroups.map((group) => (
                            <div key={group.title}>
                              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{group.title}</h4>
                              <ul className="space-y-2">
                                {group.items.map((dropdownItem) => (
                                  <li key={dropdownItem.label}>
                                    <Link href={dropdownItem.href} className="text-sm font-medium text-slate-700 transition-colors hover:text-yellow-600">
                                      {dropdownItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`rounded-md px-4 py-3 text-sm font-medium transition-colors duration-100 hover:text-yellow-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 ${
                      pathname === item.href ? "text-yellow-600" : "text-navy-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact/#booking-form"
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
                  <div key={item.label}>
                    {item.label === "Our Courses" ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setCoursesOpen((current) => !current)}
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-slate-50 hover:text-yellow-600"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                        </button>
                        {coursesOpen ? (
                          <div className="ml-3 border-l border-slate-200 pl-3">
                            {dropdownGroups.map((group) => (
                              <div key={group.title} className="py-2">
                                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{group.title}</p>
                                <div className="flex flex-col gap-1">
                                  {group.items.map((dropdownItem) => (
                                    <Link
                                      key={dropdownItem.label}
                                      href={dropdownItem.href}
                                      onClick={() => {
                                        setOpen(false);
                                        setCoursesOpen(false);
                                      }}
                                      className="rounded-md px-2 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-yellow-600"
                                    >
                                      {dropdownItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-slate-50 hover:text-yellow-600"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <Link
                href="/contact/#booking-form"
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
