export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses/" },
  { label: "Our Curriculum", href: "/curriculum/" },
  { label: "About Us", href: "/about/" },
  { label: "Blogs", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
] as const;

export const schoolNames = [
  "Nord Anglia School",
  "Dubai College",
  "Jumeirah College",
  "Repton Dubai",
  "North London Collegiate School",
  "Jumeirah English Speaking School",
  "Kings Dubai",
  "Royal Grammar School Guildford Dubai",
  "GEMS Jumeirah Primary School",
  "Dubai American Academy",
  "Dubai International Academy Al Barsha",
  "Dubai English Speaking College",
  "Brighton College Dubai",
  "Dubai British School",
  "Jebel Ali School",
  "The English College Dubai",
  "Safa Community School",
  "GEMS World Academy",
  "Al Safa British School"
] as const;

export const highlights = [
  "KHDA-approved",
  "Small groups (a maximum of six students)",
  "One consistent approach from age 3 to 18"
] as const;

export const courseColumns = [
  {
    title: "Primary",
    items: ["EYFS", "Key Stage 1", "Key Stage 2", "Mathematics", "English", "Science"]
  },
  {
    title: "Secondary",
    groups: [
      {
        label: "Qualifications",
        items: ["Key Stage 3", "GCSE", "IGCSE", "A-Level", "IB Diploma", "MYP"]
      },
      {
        label: "Subjects",
        items: [
          "Mathematics",
          "English",
          "Physics",
          "Chemistry",
          "Biology",
          "Business Studies",
          "Economics",
          "Psychology"
        ]
      }
    ]
  },
  {
    title: "Enrichment",
    items: ["CAT4 Prep", "7+/11+ Entrance Prep", "Chess Mastery", "Financial Literacy", "AI Literacy", "Counselling"]
  }
] as const;

export const academicJourney = {
  primary: {
    title: "Primary",
    subtitle: "Ages 3–11 · Building the Foundation",
    description:
      "Strong foundations in Maths, English, and Science across EYFS, Key Stage 1, and Key Stage 2. Each session is matched to your child's year group and school curriculum. 7+ and 11+ entrance prep available.",
    pills: ["EYFS (Ages 3–5)", "Key Stage 1 (Ages 5–7)", "Key Stage 2 (Ages 7–11)"],
    subjects: [
      { name: "Mathematics", detail: "Number & problem-solving", color: "from-[#456FE6] to-[#4F7EEC]" },
      { name: "English Language", detail: "Reading, writing & comprehension", color: "from-[#F28A2B] to-[#F67E20]" },
      { name: "Science", detail: "Natural world & scientific enquiry", color: "from-[#34C787] to-[#2DBE7B]" }
    ]
  },
  secondary: {
    title: "Secondary",
    subtitle: "Ages 11–18",
    description:
      "Key Stage 3 to A-Level and IB. Every session aligns with your child's exam board and school timetable. Our tutors know what examiners expect — and teach accordingly.",
    pills: ["Years 7–9 (KS3)", "MYP (Ages 11–16)", "GCSE/IGCSE (Ages 14–16)", "A-Levels/IB (Ages 16–18)"],
    subjects: [
      { name: "Mathematics", detail: "Algebra to calculus", color: "from-[#456FE6] to-[#4F7EEC]" },
      { name: "English", detail: "Essay technique & analysis", color: "from-[#F28A2B] to-[#F67E20]" },
      { name: "Science", detail: "Natural world & scientific enquiry", color: "from-[#34C787] to-[#2DBE7B]" },
      { name: "Biology", detail: "Cell biology to ecology", color: "from-[#1FA369] to-[#1BAA6B]" },
      { name: "Chemistry", detail: "Organic, inorganic & physical", color: "from-[#9A49D1] to-[#B05AE1]" },
      { name: "Physics", detail: "Mechanics, electricity & waves", color: "from-[#37B7D9] to-[#46C6EB]" },
      { name: "Business Studies", detail: "Case studies & exam technique", color: "from-[#E86B1E] to-[#F0741E]" },
      { name: "Economics", detail: "Micro, macro & data analysis", color: "from-[#1F8C79] to-[#228F7E]" },
      { name: "Psychology", detail: "Research methods & approaches", color: "from-[#D12B55] to-[#D93060]" }
    ]
  }
} as const;

export const enrichmentCards = [
  { name: "CAT Prep", detail: "Preparation for CAT4 cognitive ability tests (Ages 7–15)", accent: "before:bg-[#8B5CF6]" },
  { name: "Chess Mastery", detail: "Developing logic, strategy, and focus", accent: "before:bg-[#F59E0B]" },
  { name: "7+/11+ Entrance Prep", detail: "Structured preparation for UK and Dubai school entrance exams", accent: "before:bg-[#635BFF]" },
  { name: "Financial Literacy", detail: "Practical money skills and economic awareness", accent: "before:bg-[#10B981]" },
  { name: "AI Literacy", detail: "Understanding AI tools and thinking critically about technology", accent: "before:bg-[#3B82F6]" },
  { name: "Educational Counselling", detail: "School entrance, subject selection & university applications", accent: "before:bg-[#F43F5E]" }
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Small groups, not classrooms",
    text: "Our sessions run in small groups of 3–6 students. Every child gets direct attention, can ask questions freely, and never gets lost at the back of a room."
  },
  {
    number: "02",
    title: "We reverse-engineer the concept",
    text: "When a child is stuck, we don't repeat the same explanation louder. We break the concept down from the bottom up — finding exactly where understanding broke down and rebuilding from there."
  },
  {
    number: "03",
    title: "Weekly sessions with practice papers and worksheets",
    text: "Consistency matters. Weekly sessions, structured worksheets, and past paper practice build the muscle memory that exams require. We don't cram — we build."
  },
  {
    number: "04",
    title: "Progress reports back to parents",
    text: "You never have to guess whether it's working. We send regular progress reports so you know exactly where your child is, what's improving, and what needs more work."
  }
] as const;

export const whyUs = [
  {
    title: "Small Groups",
    text: "A maximum of six students per class keeps teaching focused, accountable and fast-moving."
  },
  {
    title: "Structured Curriculum",
    text: "One clear pathway from ages 3 to 18 across primary, secondary and enrichment programmes."
  },
  {
    title: "Exam Board Expertise",
    text: "Targeted tuition for GCSE, IGCSE, A-Level, IB Diploma and MYP with subject specialists."
  },
  {
    title: "Personalised Learning",
    text: "Assessment-led placement and regular feedback keep each student on the right pace."
  }
] as const;

export const testimonials = [
  {
    quote:
      "My kids joined Improve ME in February this year. At first, I was a bit hesitant because I felt they were too young — one in Year 1 and the other in FS2. But all my worries disappeared as soon as we walked into the centre for the assessment. The staff were so warm and reassuring, and both children have genuinely enjoyed every session since.",
    name: "A S",
    role: "Parent — Year 1 & FS2"
  },
  {
    quote:
      "We've had a great experience with this tutoring institute. Their flexibility makes scheduling easy, and my son is learning math concepts that are usually introduced much later — it's been a pleasant surprise and speaks to the quality of teaching here.",
    name: "Rana Said",
    role: "Parent — Maths"
  },
  {
    quote:
      "Improve Me Institute has been exceptionally professional and supportive, especially for my kids in international schools. They hire efficient, skilled teachers and use an advanced, user-friendly system. Clear communication, tailored educational support, and proven results make IMI a standout choice. Highly recommended.",
    name: "Amany Elzayaty",
    role: "Parent — International Schools"
  }
] as const;
