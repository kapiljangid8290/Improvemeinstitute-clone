import React from 'react';
import HeaderReal from '../../components/HeaderReal';
import FooterReal from '../../components/FooterReal';

export default function CurriculumPage() {
  return (
    <>
      <HeaderReal />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              A full academic journey, ages 3 to 18
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalised learning across every stage — from EYFS to IB Diploma
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact/#booking-form" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Free Assessment
              </a>
              <a href="/courses/" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors">
                View All Subjects
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Trusted by families from Dubai College · Kings · JESS · Nord Anglia · GEMS Jumeirah Primary · 30+ schools
            </p>
          </div>
        </section>

        {/* Why Improve ME */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-8">
              A structured system that gets children ahead of their peers
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Improve ME does not just match tutors to curricula — we run a structured, proprietary approach to learning. From EYFS and Key Stage 1 through to Key Stage 2, GCSE, IGCSE, A-Level, and IB Diploma, we teach ahead of school level where it helps, use booster sessions to build academic confidence early, and keep your child on one consistent journey from age 3 to 18 with no gaps.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">subjects covered</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">All major</div>
                <p className="text-gray-600">exam boards</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">KHDA</div>
                <p className="text-gray-600">approved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-8">
              Building strong foundations from the very beginning
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Our primary tutoring covers the full British primary curriculum from EYFS through Key Stage 1 and Key Stage 2.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">EYFS (Ages 3–5)</h3>
                <p className="text-gray-600 mb-4">
                  Early Years Foundation Stage — literacy, numeracy, communication, and early development through play-based and structured learning.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">English</span>
                </div>
                <a href="/curriculum/primary/eyfs/" className="text-blue-600 hover:text-blue-800 font-medium">View EYFS →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Stage 1 (Ages 5–7)</h3>
                <p className="text-gray-600 mb-4">
                  Building core reading, writing, and number skills in Years 1 and 2. Developing confidence and curiosity in young learners.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">English</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Science</span>
                </div>
                <a href="/curriculum/primary/ks1/" className="text-blue-600 hover:text-blue-800 font-medium">View Key Stage 1 →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Stage 2 (Ages 7–11)</h3>
                <p className="text-gray-600 mb-4">
                  Consolidating and extending primary skills in Years 3–6. Preparing students for the transition to secondary school and 11+ entrance exams where required.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">English</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Science</span>
                </div>
                <a href="/curriculum/primary/ks2/" className="text-blue-600 hover:text-blue-800 font-medium">View Key Stage 2 →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-8">
              Specialist secondary tutoring, curriculum by curriculum
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Two clear pathways: British — KS3 → GCSE → A-Level. International — KS3 → MYP → IGCSE → IB Diploma.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">11–14 Key Stage 3 (Ages 11–14)</h3>
                <p className="text-gray-600 mb-4">
                  Bridging primary foundations and GCSE demands. We support Mathematics, English, and Science across Years 7–9 to ensure students are well prepared for the jump to GCSE.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">English</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Science</span>
                </div>
                <a href="/curriculum/secondary/ks3/" className="text-green-600 hover:text-green-800 font-medium">Explore →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">14–16 GCSE (Ages 14–16)</h3>
                <p className="text-gray-600 mb-4">
                  The UK's most widely taken qualification at age 16. We cover all major GCSE subjects across AQA, Edexcel, and OCR with a proven track record of grade improvements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Further Mathematics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">English Language</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">English Literature</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Physics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Chemistry</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Biology</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Business Studies</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Economics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Psychology</span>
                </div>
                <a href="/curriculum/secondary/gcse/" className="text-green-600 hover:text-green-800 font-medium">Explore →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">14–16 IGCSE (Ages 14–16)</h3>
                <p className="text-gray-600 mb-4">
                  Cambridge International GCSE — the internationally recognised equivalent of GCSE, widely taught in Dubai's British and international schools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">English Language</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Physics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Chemistry</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Biology</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Business Studies</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Economics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Psychology</span>
                </div>
                <a href="/curriculum/secondary/igcse/" className="text-green-600 hover:text-green-800 font-medium">Explore →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">11–16 MYP (Ages 11–16)</h3>
                <p className="text-gray-600 mb-4">
                  IB Middle Years Programme — criterion-based assessment across 8 subject groups. We support all MYP years including Personal Project mentoring and eAssessment preparation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">English</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Sciences</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Individuals & Societies</span>
                </div>
                <a href="/curriculum/secondary/myp/" className="text-green-600 hover:text-green-800 font-medium">Explore →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">16–18 A-Level (Ages 16–18)</h3>
                <p className="text-gray-600 mb-4">
                  The gold standard pre-university qualification. We support all major A-Level subjects including Further Mathematics across AQA, Edexcel, and OCR.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Mathematics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Further Mathematics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Physics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Chemistry</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Biology</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Business Studies</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Economics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Psychology</span>
                </div>
                <a href="/curriculum/secondary/a-level/" className="text-green-600 hover:text-green-800 font-medium">Explore →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">16–18 IB Diploma (Ages 16–18)</h3>
                <p className="text-gray-600 mb-4">
                  The IB Diploma Programme — globally recognised, accepted by 2,000+ universities. We cover HL and SL subjects with IA mentoring, Extended Essay support, and TOK coaching.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Mathematics AA & AI</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Physics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Chemistry</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Biology</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Economics</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Business Management</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Psychology</span>
                </div>
                <a href="/curriculum/secondary/ib/" className="text-green-600 hover:text-green-800 font-medium">Explore →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Enrichment Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-8">
              Beyond the curriculum
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">CAT4 Test Prep</h3>
                <p className="text-gray-600 mb-4">
                  Targeted preparation for the Cognitive Abilities Test for students aged 7–15. Build reasoning skills across verbal, non-verbal, quantitative, and spatial batteries.
                </p>
                <a href="/courses/cat-prep/" className="text-blue-600 hover:text-blue-800 font-medium">Learn more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">7+/11+ Entrance Prep</h3>
                <p className="text-gray-600 mb-4">
                  Specialist preparation for competitive school entrance exams in Dubai and the UK. Covers verbal reasoning, non-verbal reasoning, mathematics, and English.
                </p>
                <a href="/courses/entrance-prep/" className="text-blue-600 hover:text-blue-800 font-medium">Learn more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Chess Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Structured chess coaching that develops strategic thinking, concentration, and problem-solving. Open to all levels from beginner to competitive.
                </p>
                <a href="/courses/chess/" className="text-blue-600 hover:text-blue-800 font-medium">Learn more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Literacy</h3>
                <p className="text-gray-600 mb-4">
                  Future-ready skills for the digital age. Students learn how AI works, how to use it responsibly, and how to think critically about technology.
                </p>
                <a href="/courses/ai-literacy/" className="text-blue-600 hover:text-blue-800 font-medium">Learn more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Literacy</h3>
                <p className="text-gray-600 mb-4">
                  Practical money skills, budgeting, saving, and investing — age-appropriate lessons for students aged 8–16.
                </p>
                <a href="/courses/financial-literacy/" className="text-blue-600 hover:text-blue-800 font-medium">Learn more</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Counselling</h3>
                <p className="text-gray-600 mb-4">
                  School entrance guidance, subject selection, and university applications. Support for families from age 6+.
                </p>
                <a href="/courses/counselling/" className="text-blue-600 hover:text-blue-800 font-medium">Learn more</a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-12">
              What Students and Parents Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-gray-600 mb-4">
                  "Improve me Institute is an amazing tutoring place. I truly struggled in MYP chemistry and was continuously scoring low marks, however after joining improve me my grade went from a three to a six as MYP is marked out of seven. The tutors always go above and beyond to make sure you understand the content being taught and always ensure you leave understanding everything that you went over during the session."
                </blockquote>
                <cite className="font-semibold text-gray-900">UMIKA VARSANI</cite>
                <p className="text-sm text-gray-500">MYP Chemistry</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-gray-600 mb-4">
                  "I take AQA GCSE chemistry, biology, physics and psychology as well as Edexcel maths and economics. I have seen my confidence and grades go up since I've joined. The tutors are very good and I learn at a fast pace while retaining everything."
                </blockquote>
                <cite className="font-semibold text-gray-900">ZACH MATHIAS</cite>
                <p className="text-sm text-gray-500">GCSE — 5 Subjects</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-gray-600 mb-4">
                  "Improve Me is an excellent tutoring center that has really supported me. I've been attending for the past year, mainly for chemistry, biology, and math. The tutors are very knowledgeable about the IB curriculum and explain concepts in a way that builds genuine understanding and confidence."
                </blockquote>
                <cite className="font-semibold text-gray-900">LAIBA ABDUL MOHI</cite>
                <p className="text-sm text-gray-500">IB Chemistry, Biology & Maths</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-gray-600 mb-4">
                  "I've been at Improve ME for 3 years now and I've seen significant improvement in my grades! I'm currently taking physics and further maths here, the teachers are super helpful and explain things clearly. And they give tons of resources."
                </blockquote>
                <cite className="font-semibold text-gray-900">KOMAL KAPOOR</cite>
                <p className="text-sm text-gray-500">Physics & Further Maths</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-gray-600 mb-4">
                  "Coming from JC, this institute has helped me achieve top marks across all subjects. I have been able to improve general knowledge and develop a better understanding of every subject I have taken — English, Maths, and 3 Sciences."
                </blockquote>
                <cite className="font-semibold text-gray-900">ARON KELLY</cite>
                <p className="text-sm text-gray-500">Jumeirah College — 5 Subjects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-8">
              One System. One Provider. Age 3 to 18.
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Most tutoring centres patch gaps. We build the whole journey.
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Structured from the start</h3>
                <p className="text-gray-600">
                  From EYFS phonics to IB extended essays — every stage follows a structured, sequenced approach designed to keep children ahead of their peers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">We teach ahead of school level</h3>
                <p className="text-gray-600">
                  Students don't come to us to catch up. They come to stay ahead. Our curriculum runs slightly ahead of school so children arrive in class already familiar with the concept.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No gaps between stages</h3>
                <p className="text-gray-600">
                  When a student moves from KS2 to KS3, or GCSE to A-Level, we already know them. There's no handover, no re-assessment, no starting over.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">One centre, every stage</h3>
                <p className="text-gray-600">
                  Primary, secondary, enrichment — all under one roof. Families who join us in EYFS are still with us at IB.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Find by Age */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-8">
              Not sure where to start? Find by age.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/curriculum/primary/eyfs/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">3–5 EYFS</a>
              <a href="/curriculum/primary/ks1/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">5–7 Key Stage 1</a>
              <a href="/curriculum/primary/ks2/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">7–11 Key Stage 2</a>
              <a href="/curriculum/secondary/ks3/" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">11–14 KS3 / MYP</a>
              <a href="/curriculum/secondary/gcse/" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">14–16 GCSE / IGCSE</a>
              <a href="/curriculum/secondary/a-level/" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">16–18 A-Level / IB</a>
            </div>
          </div>
        </section>

        {/* Ready to Find Programme */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center text-gray-900 mb-8">
              Ready to find the right programme?
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
              Book a free assessment and let our specialists recommend the perfect curriculum support for your child's needs and goals.
            </p>
            <div className="text-center mb-12">
              <a href="/contact/#booking-form" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block">
                Book Free Assessment
              </a>
              <p className="mt-4 text-sm text-gray-600">Free assessment with curriculum specialists</p>
              <p className="text-sm text-gray-600">Personalised programme recommendation</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">PRIMARY</h3>
                <ul className="space-y-2">
                  <li><a href="/curriculum/primary/eyfs/" className="text-blue-600 hover:text-blue-800">EYFS</a></li>
                  <li><a href="/curriculum/primary/ks1/" className="text-blue-600 hover:text-blue-800">Key Stage 1</a></li>
                  <li><a href="/curriculum/primary/ks2/" className="text-blue-600 hover:text-blue-800">Key Stage 2</a></li>
                  <li><a href="/courses/mathematics/" className="text-blue-600 hover:text-blue-800">Mathematics</a></li>
                  <li><a href="/courses/english/" className="text-blue-600 hover:text-blue-800">English</a></li>
                  <li><a href="/courses/science/" className="text-blue-600 hover:text-blue-800">Science</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">SECONDARY</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">QUALIFICATIONS</h4>
                  <ul className="space-y-2 mt-2">
                    <li><a href="/curriculum/secondary/ks3/" className="text-green-600 hover:text-green-800">Key Stage 3</a></li>
                    <li><a href="/curriculum/secondary/gcse/" className="text-green-600 hover:text-green-800">GCSE</a></li>
                    <li><a href="/curriculum/secondary/igcse/" className="text-green-600 hover:text-green-800">IGCSE</a></li>
                    <li><a href="/curriculum/secondary/a-level/" className="text-green-600 hover:text-green-800">A-Level</a></li>
                    <li><a href="/curriculum/secondary/ib/" className="text-green-600 hover:text-green-800">IB Diploma</a></li>
                    <li><a href="/curriculum/secondary/myp/" className="text-green-600 hover:text-green-800">MYP</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">SUBJECTS</h4>
                  <ul className="space-y-2 mt-2">
                    <li><a href="/courses/mathematics/" className="text-green-600 hover:text-green-800">Mathematics</a></li>
                    <li><a href="/courses/english/" className="text-green-600 hover:text-green-800">English</a></li>
                    <li><a href="/courses/physics/" className="text-green-600 hover:text-green-800">Physics</a></li>
                    <li><a href="/courses/chemistry/" className="text-green-600 hover:text-green-800">Chemistry</a></li>
                    <li><a href="/courses/biology/" className="text-green-600 hover:text-green-800">Biology</a></li>
                    <li><a href="/courses/business-studies/" className="text-green-600 hover:text-green-800">Business Studies</a></li>
                    <li><a href="/courses/economics/" className="text-green-600 hover:text-green-800">Economics</a></li>
                    <li><a href="/courses/psychology/" className="text-green-600 hover:text-green-800">Psychology</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ENRICHMENT</h3>
                <ul className="space-y-2">
                  <li><a href="/courses/cat-prep/" className="text-purple-600 hover:text-purple-800">CAT4 Prep</a></li>
                  <li><a href="/courses/entrance-prep/" className="text-purple-600 hover:text-purple-800">7+/11+ Entrance Prep</a></li>
                  <li><a href="/courses/chess/" className="text-purple-600 hover:text-purple-800">Chess Mastery</a></li>
                  <li><a href="/courses/financial-literacy/" className="text-purple-600 hover:text-purple-800">Financial Literacy</a></li>
                  <li><a href="/courses/ai-literacy/" className="text-purple-600 hover:text-purple-800">AI Literacy</a></li>
                  <li><a href="/courses/counselling/" className="text-purple-600 hover:text-purple-800">Counselling</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">QUICK LINKS</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
                  <li><a href="/about/" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                  <li><a href="/courses/" className="text-gray-600 hover:text-gray-800">Our Courses</a></li>
                  <li><a href="/curriculum/" className="text-gray-600 hover:text-gray-800">Our Curriculum</a></li>
                  <li><a href="/faq/" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
                  <li><a href="/glossary/" className="text-gray-600 hover:text-gray-800">Glossary</a></li>
                  <li><a href="/enrolment-page/" className="text-gray-600 hover:text-gray-800">Enrolment Form</a></li>
                  <li><a href="/contact/" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterReal />
    </>
  );
}