 "use client";

import { CheckCircle2, Clock3, Shield } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  studentFirstName: string;
  studentLastName: string;
  yearGroup: string;
  schoolName: string;
  parentFirstName: string;
  parentLastName: string;
  phone: string;
  email: string;
  source: string;
};

type InputProps = {
  name: keyof FormState;
  label: string;
  placeholder: string;
  value: string;
  onChange: (name: keyof FormState, value: string) => void;
  required?: boolean;
  type?: "text" | "email" | "tel";
};

function Input({ name, label, placeholder, value, onChange, required = false, type = "text" }: InputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-[#3b465f]">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        aria-label={label}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-[4px] border border-[#d8dfeb] px-3 text-[14px] text-slate-700 outline-none transition-colors focus:border-[#a7b8de]"
      />
    </label>
  );
}

type SelectProps = {
  name: keyof FormState;
  label: string;
  placeholder: string;
  value: string;
  onChange: (name: keyof FormState, value: string) => void;
  options: string[];
};

function Select({ name, label, placeholder, value, onChange, options }: SelectProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-[#3b465f]">
        {label} <span className="text-red-500">*</span>
      </span>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        aria-label={label}
        required
        className="h-11 w-full rounded-[4px] border border-[#d8dfeb] bg-white px-3 text-[14px] text-slate-500 outline-none transition-colors focus:border-[#a7b8de]"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

const initialState: FormState = {
  studentFirstName: "",
  studentLastName: "",
  yearGroup: "",
  schoolName: "",
  parentFirstName: "",
  parentLastName: "",
  phone: "",
  email: "",
  source: ""
};

export default function Assessment() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateField = (name: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setForm(initialState);
      setMessage("Thanks! Your enquiry has been submitted.");
    } catch {
      setError("We could not submit your form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            <form className="space-y-5 px-6 py-6 sm:px-8 sm:py-7" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  name="studentFirstName"
                  label="Student Name"
                  placeholder="Bruce"
                  required
                  value={form.studentFirstName}
                  onChange={updateField}
                />
                <Input
                  name="studentLastName"
                  label=" "
                  placeholder="Wayne"
                  required
                  value={form.studentLastName}
                  onChange={updateField}
                />
              </div>
              <Select
                name="yearGroup"
                label="Year Group"
                placeholder="Student Year / Grade"
                value={form.yearGroup}
                onChange={updateField}
                options={["FS1", "FS2", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12", "Year 13"]}
              />
              <Select
                name="schoolName"
                label="School Name"
                placeholder="Select school"
                value={form.schoolName}
                onChange={updateField}
                options={["Dubai College", "Jumeirah College", "Kings School Dubai", "JESS", "Repton Dubai", "Other"]}
              />
              <p className="-mt-2 text-[13px] leading-6 text-[#7a88b2]">
                Select your child&apos;s current school. Choose &quot;Home schooling&quot; if they don&apos;t attend a school, or &quot;Other&quot; if
                you&apos;re outside the UAE or cannot find the school name.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  name="parentFirstName"
                  label="Parent Name"
                  placeholder="Thomas"
                  required
                  value={form.parentFirstName}
                  onChange={updateField}
                />
                <Input
                  name="parentLastName"
                  label=" "
                  placeholder="Wayne"
                  required
                  value={form.parentLastName}
                  onChange={updateField}
                />
              </div>
              <Input
                name="phone"
                label="Phone Number"
                placeholder="+971 551234567"
                required
                type="tel"
                value={form.phone}
                onChange={updateField}
              />
              <Input
                name="email"
                label="Parent's E-mail ID"
                placeholder="parent@gmail.com"
                required
                type="email"
                value={form.email}
                onChange={updateField}
              />
              <Select
                name="source"
                label="How did you hear about us?"
                placeholder="Select source"
                value={form.source}
                onChange={updateField}
                options={["Google", "Instagram", "Facebook", "Friend/Referral", "School", "Other"]}
              />
              {message ? <p className="text-sm font-medium text-green-600">{message}</p> : null}
              {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-brandGold px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
