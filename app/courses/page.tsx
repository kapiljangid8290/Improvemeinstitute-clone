import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Calculator,
  Check,
  ChevronRight,
  GraduationCap,
  Landmark,
  Microscope,
  Palette,
  PiggyBank,
  Puzzle,
  ScanSearch,
  TestTubeDiagonal
} from "lucide-react";
import HeaderClean from "@/components/HeaderClean";
import FooterClean from "@/components/FooterClean";

export const metadata: Metadata = {
  title: "All Tutoring Courses in Dubai | Improve ME Institute",
  description:
    "Explore all tutoring courses at Improve ME Institute Dubai. Expert tuition across Maths, English, Sciences, Business, Chess, AI Literacy and more. Book a free assessment today."
};

const coreSubjects = [
  {
    title: "Mathematics",
    description: "Number sense to calculus. Build confidence and master problem-solving.",
    href: "/courses/mathematics/",
    bg: "#4A6FD4",
    button: "#3f5eb4",
    Icon: Calculator,
    span: "lg:col-span-2"
  },
  {
    title: "English",
    description: "Reading, writing, literature. Develop confident communicators.",
    href: "/courses/english/",
    bg: "#E8732A",
    button: "#c56224",
    Icon: BookOpen,
    span: "lg:col-span-2"
  },
  {
    title: "Science (General)",
    description: "Explore biology, chemistry, and physics before specialization.",
    href: "/courses/science/",
    bg: "#2EAE6B",
    button: "#27945b",
    Icon: Microscope
  },
  {
    title: "Physics",
    description: "Mechanics, electricity, waves. Clear explanations and exam prep.",
    href: "/courses/physics/",
    bg: "#2FA7E1",
    button: "#238cc0",
    Icon: ScanSearch
  },
  {
    title: "Chemistry",
    description: "Organic, inorganic, physical. Methodical and exam-focused.",
    href: "/courses/chemistry/",
    bg: "#9D56D6",
    button: "#8948bd",
    Icon: TestTubeDiagonal
  },
  {
    title: "Biology",
    description: "Cell biology to ecology. Comprehensive coverage and practical skills.",
    href: "/courses/biology/",
    bg: "#1AA36E",
    button: "#178e60",
    Icon: Microscope
  }
] as const;

const humanities = [
  {
    title: "Business Studies",
    description: "Marketing, finance, operations. Case studies and exam technique.",
    href: "/courses/business-studies/",
    bg: "#E16A2F",
    button: "#c85b25",
    Icon: BriefcaseBusiness
  },
  {
    title: "Economics",
    description: "Micro and macro economics. Data analysis and evaluation skills.",
    href: "/courses/economics/",
    bg: "#18816F",
    button: "#146c5d",
    Icon: Landmark
  },
  {
    title: "Psychology",
    description: "Research methods, approaches, studies. Essay technique and analysis.",
    href: "/courses/psychology/",
    bg: "#D53E62",
    button: "#be3356",
    Icon: Brain
  }
] as const;

const enrichment = [
  {
    badge: "ENRICHMENT",
    kicker: "Popular",
    title: "CAT4 Test Prep",
    ages: "Ages 7-15",
    description: "Cognitive abilities training for school admissions",
    href: "/courses/cat-prep/",
    Icon: Puzzle
  },
  {
    badge: "ENRICHMENT",
    title: "7+/11+ Entrance Prep",
    ages: "Ages 6-11",
    description: "Selective school entrance exam preparation",
    href: "/courses/entrance-prep/",
    Icon: GraduationCap
  },
  {
    badge: "ENRICHMENT",
    title: "Chess Mastery",
    ages: "Ages 6+",
    description: "Strategic thinking and problem-solving through chess",
    href: "/courses/chess/",
    Icon: Brain
  },
  {
    badge: "ENRICHMENT",
    title: "Financial Literacy",
    ages: "Ages 8-16",
    description: "Money management and real-world financial skills",
    href: "/courses/financial-literacy/",
    Icon: PiggyBank
  },
  {
    badge: "ENRICHMENT",
    title: "AI Literacy",
    ages: "Ages 6+",
    description: "Understanding AI and thinking critically about technology",
    href: "/courses/ai-literacy/",
    Icon: Brain
  },
  {
    badge: "ENRICHMENT",
    title: "Educational Counselling",
    ages: "Ages 6+",
    description: "School entrance, subject selection & university applications",
    href: "/courses/counselling/",
    Icon: BookOpen
  }
] as const;

const whyPoints = [
  "One tutor per subject",
  "We know every exam board",
  "We work from past papers",
  "Small groups by level",
  "Progress tracked per subject",
  "KHDA approved"
] as const;

const whyDescriptions = [
  "Your child works with a specialist in that subject — not a generalist covering everything.",
  "AQA, Edexcel, OCR, Cambridge, IB — we teach to the specific mark scheme your child will be assessed on.",
  "Every subject is taught with real exam questions, mark schemes, and timed practice — not just theory.",
  "Students are grouped by ability, not just age — so every session is pitched correctly.",
  "Parents receive subject-specific progress updates, not a single vague report.",
  "Formally approved by Dubai's Knowledge and Human Development Authority."
] as const;

const testimonials = [
  {
    quote:
      "I take AQA GCSE chemistry, biology, physics and psychology as well as Edexcel maths and economics. I have seen my confidence and grades go up since I've joined. The tutors are very good and I learn at a fast pace while retaining everything.",
    author: "Zach Mathias",
    detail: "GCSE — 5 Subjects"
  },
  {
    quote:
      "I just started at Improve ME a month ago and have already found this tuition institute extremely helpful, especially for Biology and Math. The teachers explain concepts clearly and make even the most challenging topics easier to understand.",
    author: "Richelle P",
    detail: "IB Biology & Maths"
  },
  {
    quote:
      "I've been at Improve ME for 3 years now and I've seen significant improvement in my grades! I'm currently taking physics and further maths here, the teachers are super helpful and explain things clearly. And they give tons of resources.",
    author: "Komal Kapoor",
    detail: "Physics & Further Maths"
  },
  {
    quote:
      "Coming from JC, this institute has helped me achieve top marks across all subjects. I have been able to improve general knowledge and develop a better understanding of every subject I have taken — English, Maths, and 3 Sciences.",
    author: "Aron Kelly",
    detail: "Jumeirah College — 5 Subjects"
  },
  {
    quote:
      "Wonderful experience for my daughter to get assistance on her maths and economics tuitions here. Very professional and limited students to every session. I highly recommend this place.",
    author: "Salman Ahmad",
    detail: "Maths & Economics"
  },
  {
    quote:
      "Improve Me Institute has been exceptionally professional and supportive, especially for my kids in international schools. They hire efficient, skilled teachers and use an advanced, user-friendly system. Clear communication, tailored educational support, and proven results make IMI a standout choice. Highly recommended.",
    author: "Amany Elzayaty",
    detail: "Parent — International Schools"
  }
] as const;

const examBoards = ["AQA", "Edexcel (Pearson)", "OCR", "Cambridge International (IGCSE)", "IB", "WJEC", "MYP"] as const;

function SubjectCard({
  title,
  description,
  href,
  bg,
  button,
  Icon,
  span
}: {
  title: string;
  description: string;
  href: string;
  bg: string;
  button: string;
  Icon: React.ComponentType<{ className?: string }>;
  span?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex min-h-[160px] flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:brightness-110 ${span ?? ""}`}
      style={{ backgroundColor: bg }}
    >
      <Icon className="mb-3 h-14 w-14 text-white" />
      <h3 className="mb-1 text-lg font-bold text-white">{title}</h3>
      <p className="flex-1 text-sm text-white/80">{description}</p>
      <span
        className="mt-3 inline-flex self-start rounded-full border-2 border-white/40 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:border-white/60"
        style={{ backgroundColor: button }}
      >
        Learn more
      </span>
    </Link>
  );
}

function QuoteCard({ quote, author, detail }: { quote: string; author: string; detail: string }) {
  return (
    <article className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <span
        className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none font-serif text-5xl leading-none"
        style={{ color: "#FFC107", opacity: 0.2 }}
        aria-hidden="true"
      >
        “
      </span>
      <div className="mb-4 flex justify-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-[#FFC107]">
            ★
          </span>
        ))}
      </div>
      <blockquote className="relative z-10 text-base italic leading-relaxed text-[#334466]">“{quote}”</blockquote>
      <footer className="mt-4">
        <p className="text-sm font-bold uppercase tracking-wide text-navy-900">{author}</p>
        <p className="mt-0.5 text-sm text-[#5b6d8a]">{detail}</p>
      </footer>
    </article>
  );
}

export default function CoursesPage() {
  return (
    <>
      <HeaderClean />
      <main>
        <section
          className="relative flex min-h-[65vh] items-start overflow-hidden bg-[#0f172a] pb-16 pt-28 md:pt-32"
          style={{
            backgroundImage: "url('https://www.improvemeinstitute.com/overlay_image.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 z-0 bg-black/25 backdrop-blur-[2px]" />
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(0, 10, 40, 0.82) 0%, rgba(0, 10, 40, 0.55) 45%, rgba(0, 10, 40, 0.08) 100%)"
            }}
          />
          <div className="section-container relative z-10 w-full pt-8 text-left md:pt-12">
            <div className="mb-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1 text-sm">
                  <li className="flex items-center gap-1">
                    <Link href="/" className="text-white/70 transition-colors duration-200 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="mx-1 text-white/50" aria-hidden="true">
                      /
                    </span>
                    <span className="font-semibold text-white">Our Courses</span>
                  </li>
                </ol>
              </nav>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#FFC107]">Our Courses</p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Tailored support across <span className="text-[#FFC107]">every subject</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/80">
              Small groups, subject specialists, and exam-focused preparation for ages 3–18.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/#booking-form"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-8 py-4 font-semibold text-[#002D62] transition-colors hover:bg-[#e6ad00]"
              >
                Book Free Assessment <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[#002D62]"
              >
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/60">Small groups · Subject specialists · All major exam boards · KHDA-approved</p>
          </div>
        </section>

        <nav className="sticky top-20 z-40 border-b border-gray-200 bg-white shadow-md">
          <div className="section-container py-2">
            <div className="flex gap-1 overflow-x-auto">
              {[
                { label: "Core Subjects", href: "#core-subjects" },
                { label: "Humanities & Business", href: "#humanities-business" },
                { label: "Enrichment Programmes", href: "#enrichment-programmes" },
                { label: "View by Level", href: "#curriculum-overview" }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap border-b-2 border-transparent px-6 py-4 text-[#243652] transition-colors hover:text-yellow-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <section id="core-subjects" className="scroll-mt-20 bg-white pb-14 pt-8 md:pb-20 md:pt-10">
          <div className="section-container">
            <div className="mb-10 text-left">
              <div className="mb-3 h-[3px] w-12 bg-[#FFC107]" aria-hidden="true" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#FFC107]">CORE SUBJECTS</p>
              <h2 className="mb-2 text-2xl font-bold text-navy-900">Core Subjects</h2>
              <p className="max-w-xl text-base italic text-[#314565]">The essential building blocks of academic success</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4">
              {coreSubjects.map((subject) => (
                <SubjectCard key={subject.title} {...subject} />
              ))}
            </div>
          </div>
        </section>

        <section id="humanities-business" className="scroll-mt-20 bg-white py-14 md:py-20">
          <div className="section-container">
            <div className="mb-10 text-left">
              <div className="mb-3 h-[3px] w-12 bg-[#FFC107]" aria-hidden="true" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#FFC107]">HUMANITIES &amp; BUSINESS</p>
              <h2 className="mb-2 text-2xl font-bold text-navy-900">Humanities &amp; Business</h2>
              <p className="max-w-xl text-base italic text-[#314565]">Develop critical thinking, analysis, and commercial awareness</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {humanities.map((subject) => (
                <SubjectCard key={subject.title} {...subject} />
              ))}
            </div>
          </div>
        </section>

        <section id="enrichment-programmes" className="scroll-mt-20 bg-[#0f172a] py-14 md:py-20">
          <div className="section-container">
            <div className="mb-10 text-left">
              <div className="mb-3 h-[3px] w-12 bg-[#FFC107]" aria-hidden="true" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#FFC107]">ENRICHMENT PROGRAMMES</p>
              <h2 className="mb-2 text-3xl font-bold text-white">Enrichment Programmes</h2>
              <p className="max-w-xl text-lg text-white/90">Future-ready skills beyond the classroom</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {enrichment.map((item) => {
                const Icon = item.Icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-[#FFC107]/15 p-3 text-[#FFC107]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFC107]">
                      <span>{item.badge}</span>
                      {"kicker" in item ? <span>{item.kicker}</span> : null}
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-white/90">{item.ages}</p>
                    <p className="mt-3 text-sm leading-7 text-white/75">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#FFC107]">
                      View course <ChevronRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="curriculum-overview"
          className="scroll-mt-20 bg-[#0f172a] py-14 md:py-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url('https://www.improvemeinstitute.com/overlay_image.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="section-container">
            <div className="mb-10 text-left">
              <div className="mb-3 h-[3px] w-12 bg-[#FFC107]" aria-hidden="true" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#FFC107]">FIND YOUR PROGRAMME</p>
              <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">Or Browse by Curriculum Level</h2>
              <p className="max-w-xl text-lg text-white/90">Find courses organized by your child's age and key stage</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                <Palette className="mb-6 h-16 w-16 text-yellow-400" />
                <h3 className="mb-2 text-2xl font-bold text-white">Primary Courses</h3>
                <p className="mb-4 text-white/90">Ages 3-11</p>
                <p className="mb-4 text-white/80">
                  <strong className="text-white">Stages:</strong> EYFS, Key Stage 1, Key Stage 2
                </p>
                <p className="mb-4 text-white/80">
                  <strong className="text-white">Subjects:</strong> Mathematics, English, Science
                </p>
                <p className="mb-6 text-white/80">
                  <strong className="text-white">Programs:</strong> 7+/11+ Entrance Prep
                </p>
                <Link
                  href="/curriculum/primary/"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-navy-900 transition hover:shadow-[0_0_20px_rgba(255,193,7,0.35)]"
                  style={{ backgroundColor: "#FFC107" }}
                >
                  View Primary Curriculum <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                <GraduationCap className="mb-6 h-16 w-16 text-yellow-400" />
                <h3 className="mb-2 text-2xl font-bold text-white">Secondary Courses</h3>
                <p className="mb-4 text-white/90">Ages 11-18</p>
                <p className="mb-4 text-white/80">
                  <strong className="text-white">Stages:</strong> Key Stage 3, GCSE/IGCSE, A-Level/IB
                </p>
                <p className="mb-4 text-white/80">
                  <strong className="text-white">Subjects:</strong> All subjects available
                </p>
                <p className="mb-6 text-white/80">
                  <strong className="text-white">Exam boards:</strong> AQA, Edexcel, OCR, Cambridge, IB
                </p>
                <Link
                  href="/curriculum/secondary/"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-navy-900 transition hover:shadow-[0_0_20px_rgba(255,193,7,0.35)]"
                  style={{ backgroundColor: "#FFC107" }}
                >
                  View Secondary Curriculum <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="section-container">
            <div className="grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
              <div>
                <h2 className="mb-6 text-3xl font-extrabold leading-tight text-navy-900">Why Our Subject Tutoring Works</h2>
                <p className="mb-6 text-base leading-relaxed text-[#314565]">Deep subject knowledge. Every exam board. Every level.</p>
                <Link href="/contact/#booking-form" className="inline-flex items-center gap-1 text-base font-semibold text-navy-900">
                  Book your free assessment →
                </Link>
              </div>
              <div className="overflow-hidden rounded-xl border border-gray-100 bg-white divide-y divide-gray-100">
                {whyPoints.map((point, index) => (
                  <div key={point} className="flex gap-4 p-5 md:p-6">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(255,193,7,0.2)]">
                      <Check className="h-4 w-4 text-[#FFC107]" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-navy-900">{point}</h3>
                      <p className="text-sm leading-relaxed text-[#5b6d8a]">{whyDescriptions[index]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 md:py-20">
          <div className="section-container">
            <h2 className="mb-12 text-left text-3xl font-bold text-navy-900 md:text-4xl">Results Our Students See</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item) => (
                <QuoteCard key={item.author} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 md:py-20">
          <div className="section-container">
            <div className="mb-8 text-left">
              <div className="mb-3 h-[3px] w-12 bg-[#FFC107]" aria-hidden="true" />
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#FFC107]">EXAM BOARDS</p>
              <h2 className="mb-2 text-2xl font-bold text-navy-900">
                All major exam boards <strong className="text-[#FFC107]">covered</strong>
              </h2>
            </div>
            <div className="mb-6 flex flex-wrap gap-3 md:gap-4">
              {examBoards.map((board) => (
                <span
                  key={board}
                  className="rounded-full bg-[#213554] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#182944] md:text-base"
                >
                  {board}
                </span>
              ))}
            </div>
            <p className="max-w-xl text-sm text-[#5b6d8a]">Not sure which board your child is on? We'll identify it in your free assessment.</p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-500 py-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(15,23,42,0.08) 35px, rgba(15,23,42,0.08) 70px)"
            }}
            aria-hidden="true"
          />
          <div className="section-container relative z-10">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div className="text-left">
                <h2 className="mb-4 text-3xl font-extrabold text-navy-900">Ready to Start Learning?</h2>
                <p className="mb-6 text-lg text-[#243652]">
                  Book your free assessment today. We'll evaluate your child's current level and recommend the right courses and tutor to help
                  them succeed.
                </p>
                <ul className="mb-6 space-y-3 font-semibold text-navy-900">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 shrink-0 text-navy-800" /> Free assessment, no obligation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 shrink-0 text-navy-800" /> Response within two hours
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 shrink-0 text-navy-800" /> Trusted by families from 30+ top Dubai schools
                  </li>
                </ul>
                <p className="text-sm text-[#243652]">
                  Trusted by families from Dubai College, Kings School Dubai, JESS, and 30+ outstanding schools across Dubai
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact/#booking-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-5 text-lg font-semibold text-navy-900 transition-all hover:shadow-[0_0_24px_rgba(255,193,7,0.4)]"
                  style={{ backgroundColor: "#FFC107" }}
                >
                  Book Free Assessment <ArrowRight className="h-6 w-6" />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-900 px-10 py-5 text-lg font-semibold text-navy-900 transition hover:bg-navy-900/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterClean />
    </>
  );
}
