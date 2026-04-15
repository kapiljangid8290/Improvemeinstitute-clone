import Link from "next/link";
import { courseColumns } from "./site-data";

function ColumnCard({
  title,
  items,
  groups
}: {
  title: string;
  items?: readonly string[];
  groups?: readonly { label: string; items: readonly string[] }[];
}) {
  return (
    <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-card">
      <h3 className="mb-4 font-[var(--font-jakarta)] text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{title}</h3>
      {items ? (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item}>
              <Link href="#final-cta" className="text-base font-medium text-navy-900 transition-colors hover:text-yellow-600">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {groups ? (
        <div className="space-y-5">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">{group.label}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link href="#final-cta" className="text-base font-medium text-navy-900 transition-colors hover:text-yellow-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Courses.</p>
            <h2 className="mt-3 font-[var(--font-jakarta)] text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Leading Tutoring Centre in Dubai
            </h2>
          </div>
          <Link
            href="#final-cta"
            className="inline-flex w-fit items-center justify-center rounded-full bg-brandGold px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Book Your Free Assessment
          </Link>
        </div>

        <div id="curriculum" className="grid gap-6 lg:grid-cols-3">
          {courseColumns.map((column) => (
            <ColumnCard key={column.title} title={column.title} items={"items" in column ? column.items : undefined} groups={"groups" in column ? column.groups : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}
