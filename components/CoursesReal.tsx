import Link from "next/link";
import { ArrowRight, BookOpen, BriefcaseBusiness, FlaskConical, Globe2, Microscope, Sigma } from "lucide-react";
import { academicJourney } from "./site-data";

const secondaryIcons = [Sigma, BookOpen, FlaskConical, Microscope, FlaskConical, Globe2, BriefcaseBusiness, ArrowRight, Sigma];
const primaryIcons = [Sigma, BookOpen, FlaskConical];

function SubjectCard({
  name,
  detail,
  color,
  Icon
}: {
  name: string;
  detail: string;
  color: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article className={`rounded-2xl bg-gradient-to-br ${color} p-5 text-white shadow-[0_14px_34px_rgba(15,23,42,0.08)]`}>
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-white/15 p-2.5">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-[var(--font-jakarta)] text-[16px] font-bold">{name}</h3>
          <p className="mt-1 text-[13px] text-white/90">{detail}</p>
        </div>
      </div>
    </article>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex rounded-full border border-[#d7dfea] bg-[#f5f9ff] px-3 py-1 text-[12px] font-medium text-[#4c6bb1]">
      {text}
    </span>
  );
}

export default function CoursesReal() {
  return (
    <section id="courses" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-container max-w-[980px]">
        <div>
          <div className="h-[3px] w-10 bg-brandGold" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brandGold">What We Teach</p>
          <h2 className="mt-2 font-[var(--font-jakarta)] text-[36px] font-bold tracking-[-0.03em] text-navy-900 sm:text-[46px]">
            A full academic journey, ages 3 to 18
          </h2>
        </div>

        <div id="curriculum" className="mt-12">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#2d4c9a] p-2 text-white">
              <BookOpen className="h-4 w-4" />
            </div>
            <h3 className="font-[var(--font-jakarta)] text-[22px] font-bold text-navy-900">{academicJourney.primary.title}</h3>
          </div>
          <p className="mt-4 text-[13px] font-semibold text-[#4c6bb1]">{academicJourney.primary.subtitle}</p>
          <p className="mt-4 max-w-[960px] text-[16px] leading-8 text-[#4d64a6]">{academicJourney.primary.description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {academicJourney.primary.pills.map((pill) => (
              <Pill key={pill} text={pill} />
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {academicJourney.primary.subjects.map((subject, index) => (
              <SubjectCard key={subject.name} {...subject} Icon={primaryIcons[index]} />
            ))}
          </div>
          <Link href="/curriculum/primary/" className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900">
            View Primary Curriculum <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#2d4c9a] p-2 text-white">
              <FlaskConical className="h-4 w-4" />
            </div>
            <h3 className="font-[var(--font-jakarta)] text-[22px] font-bold text-navy-900">{academicJourney.secondary.title}</h3>
          </div>
          <p className="mt-4 text-[13px] font-semibold text-[#4c6bb1]">{academicJourney.secondary.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {academicJourney.secondary.pills.map((pill) => (
              <Pill key={pill} text={pill} />
            ))}
          </div>
          <p className="mt-5 max-w-[960px] text-[16px] leading-8 text-[#4d64a6]">{academicJourney.secondary.description}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {academicJourney.secondary.subjects.map((subject, index) => (
              <SubjectCard key={subject.name} {...subject} Icon={secondaryIcons[index]} />
            ))}
          </div>
          <Link href="/curriculum/secondary/" className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900">
            View Secondary Curriculum <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
