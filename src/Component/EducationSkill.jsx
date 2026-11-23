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

// [label, width in px] — grouped by row to match the layout exactly
const skillRows = [
  [
    ["HTML", 73],
    ["CSS", 76],
    ["FIGMA", 67],
    ["React", 68],
    ["Next.js", 68],
  ],
  [
    ["Tailwind CSS", 73],
    ["Bootstrap  CSS", 68],
    ["Vite", 77],
    ["GitHub", 77],
  ],
  [
    ["Modern UI", 76],
    ["Motion", 77],
    ["User Flow", 77],
  ],
  [
    ["Testing", 50],
    ["Accessibility", 73],
    ["Optimization", 91],
  ],
  [
    ["Responsive Layouts", 67],
    ["Component-Based Architecture", 77],
  ],
];

const EducationSkill = () => {
  return (
    <div className="relative border-t border-b border-r border-[#2a2a2c] py-6">
      {/* ───────────── LEFT: EDUCATION & SKILLS ───────────── */}
      <h2 className="pl-4 text-[22px] font-bold uppercase leading-[28px] tracking-[-0.01em]">
        Education &amp; Skills
      </h2>

      <h3
        className="pl-4 mt-[22px] text-[20px] font-bold uppercase leading-5 tracking-[0.01em]"
        style={{ color: RED }}
      >
        Education
      </h3>

      <div className="px-4 ">
        {education.map((e, i) => (
          <div
            key={e.title}
            className={`flex items-start justify-between ${i === 0 ? "mt-[11px]" : "mt-[14px]"}`}
          >
            <div>
              <p className="text-[16px] font-semibold leading-[18px]">
                {e.title}
              </p>
              <p className="text-[12px] leading-4 text-[#b9b9bb]">{e.Major}</p>
              <p className="text-[12px] leading-4 text-[#b9b9bb]">{e.place}</p>
            </div>
            <span
              className="mt-[1px] text-[12px] leading-[18px]"
              style={{ color: RED }}
            >
              {e.year}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[18px] h-px w-full bg-[#3a2326]" />

      <h3
        className="pl-5 mt-[13px] text-[20px] font-bold uppercase leading-5 tracking-[0.01em]"
        style={{ color: RED }}
      >
        Skills
      </h3>

      <div className="pl-4 mt-[10px] pr-4 flex flex-col gap-[10px]">
        {skillRows.map((row, r) => (
          <div key={r} className="flex justify-between gap-1">
            {row.map(([label, w], i) => (
              <span
                key={`${label}-${i}`}
                style={{ width: w }}
                className="py-1 flex-1 items-center justify-center text-center whitespace-nowrap rounded-[5px] border border-[#4a4a4d] bg-black text-[11px] font-medium uppercase tracking-[0.02em] text-white/100"
              >
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSkill;
