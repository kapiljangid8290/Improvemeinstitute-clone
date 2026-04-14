import { CheckCircle2, Clock3, Shield } from "lucide-react";

function Input({
  label,
  placeholder,
  required = false
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-[#3b465f]">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      <input
        aria-label={label}
        placeholder={placeholder}
        className="h-11 w-full rounded-[4px] border border-[#d8dfeb] px-3 text-[14px] text-slate-700 outline-none transition-colors focus:border-[#a7b8de]"
      />
    </label>
  );
}

function Select({
  label,
  placeholder
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-[#3b465f]">
        {label} <span className="text-red-500">*</span>
      </span>
      <select
        aria-label={label}
        defaultValue=""
        className="h-11 w-full rounded-[4px] border border-[#d8dfeb] bg-white px-3 text-[14px] text-slate-500 outline-none transition-colors focus:border-[#a7b8de]"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        <option>Option 1</option>
      </select>
    </label>
  );
}

export default function Assessment() {
  return (
    <section id="assessment" className="bg-brandBlue py-20 sm:py-24">
      <div className="section-container max-w-[980px]">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="pt-4 text-white">
            <div className="h-[3px] w-10 bg-brandGold" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brandGold">Get Started</p>
            <h2 className="mt-2 max-w-[300px] font-[var(--font-jakarta)] text-[38px] font-bold leading-[1.12] tracking-[-0.03em]">
              Book Your Free Assessment
            </h2>
            <p className="mt-6 max-w-[320px] text-[16px] leading-9 text-white/90">
              Our team will assess your child&apos;s current level and recommend the right group and tutor. There&apos;s no cost and no obligation
              — and we typically respond within two hours.
            </p>

            <div className="mt-7 space-y-4 text-[15px] text-white/95">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-brandGold" />
                <span>Free diagnostic assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-brandGold" />
                <span>No obligation to enrol</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-brandGold" />
                <span>Response within two hours</span>
              </div>
            </div>

            <p className="mt-7 text-[14px] text-white/75">Trusted by families from 30+ top Dubai schools</p>
          </div>

          <div className="overflow-hidden rounded-[10px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            <div className="border-b border-slate-200 px-6 py-6 text-center sm:px-8">
              <h3 className="font-[var(--font-jakarta)] text-[28px] font-bold tracking-[-0.02em] text-navy-900 sm:text-[32px]">
                Improve ME Institute Enquiry Form
              </h3>
            </div>
            <form className="space-y-5 px-6 py-6 sm:px-8 sm:py-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <Input label="Student Name" placeholder="Bruce" required />
                <Input label=" " placeholder="Wayne" />
              </div>
              <Select label="Year Group" placeholder="Student Year / Grade" />
              <Select label="School Name" placeholder="Select school" />
              <p className="-mt-2 text-[13px] leading-6 text-[#7a88b2]">
                Select your child&apos;s current school. Choose &quot;Home schooling&quot; if they don&apos;t attend a school, or &quot;Other&quot; if
                you&apos;re outside the UAE or cannot find the school name.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input label="Parent Name" placeholder="Thomas" required />
                <Input label=" " placeholder="Wayne" />
              </div>
              <Input label="Phone Number" placeholder="+971 551234567" required />
              <Input label="Parent's E-mail ID" placeholder="parent@gmail.com" required />
              <Select label="How did you hear about us?" placeholder="Select source" />
              <div className="pt-2 text-center">
                <button type="button" className="inline-flex items-center justify-center rounded-full bg-brandGold px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
