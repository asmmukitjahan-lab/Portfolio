const RED = "#e10613";
const education = [
  {
    title: "Frontend Development With React Certification",
    place: "Creative It Institute",
    year: "6 Months 2026",
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    Major: "Major in Accounting",
    place: "University of Dhaka",
    year: "2014 – 2019",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    Major: "Science",
    place: "Govt. Science College",
    year: "2012 – 2014",
  },
  {
    title: "Secondary School Certificate (SSC)",
    Major: "Science",
    place: "Govt. Science College Attached High School",
    year: "2006 – 2012",
  },
];

const skills = [
  "HTML",
  "CSS",
  "Figma",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Vite",
  "GitHub",
  "Modern UI",
  "Motion",
  "User Flow",
  "Testing",
  "Accessibility",
  "Optimization",
  "Responsive Layout",
  "Component Architecture",
];

const EducationSkill = () => {
  return (
    <div className="card-3d relative border border-b-0 border-[#2a2a2c] py-5 sm:py-6 md:border-b md:border-r lg:border-b lg:border-r xl:border-b">
      {/* ───────────── LEFT: EDUCATION & SKILLS ───────────── */}
      <h2 className="px-4 text-[20px] font-bold uppercase leading-[26px] tracking-[-0.01em] sm:text-[22px]">
        Education &amp; Skills
      </h2>

      <h3
        className="mt-5 px-4 text-[18px] font-bold uppercase leading-5 tracking-[0.01em] sm:mt-[22px] sm:text-[20px]"
        style={{ color: RED }}
      >
        Education
      </h3>

      <div className="px-4 ">
        {education.map((e, i) => (
          <div
            key={e.title}
            className={`flex flex-col gap-1 border-b border-white/[0.05] pb-3 last:border-b-0 sm:flex-row sm:items-start sm:justify-between ${i === 0 ? "mt-3" : "mt-3"}`}
          >
            <div>
              <p className="text-[14px] font-semibold leading-5 sm:text-[15px] sm:leading-[18px]">
                {e.title}
              </p>
              {e.Major && <p className="text-[11px] leading-4 text-[#b9b9bb] sm:text-[12px]">{e.Major}</p>}
              <p className="text-[11px] leading-4 text-[#b9b9bb] sm:text-[12px]">{e.place}</p>
            </div>
            <span
              className="mt-1 shrink-0 text-[11px] leading-[18px] sm:mt-[1px] sm:ml-3 sm:text-[12px]"
              style={{ color: RED }}
            >
              {e.year}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[18px] h-px w-full bg-[#3a2326]" />

      <h3
        className="mt-4 px-4 text-[18px] font-bold uppercase leading-5 tracking-[0.01em] sm:mt-[13px] sm:text-[20px]"
        style={{ color: RED }}
      >
        Skills
      </h3>

      <div className="mt-3 grid grid-cols-2 gap-2 px-4 sm:grid-cols-3 sm:gap-2.5 xl:grid-cols-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="min-h-8 px-2 py-1.5 flex items-center justify-center text-center rounded-md border border-[#4a4a4d] bg-black text-[9.5px] font-medium uppercase leading-3 tracking-[0.02em] text-white sm:text-[10.5px]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationSkill;
