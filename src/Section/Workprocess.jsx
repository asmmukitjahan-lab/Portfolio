const RED = "#e10613";
const icons = {
  bulb: (
    <>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </>
  ),
  funnel: (
    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
  ),
  pen: (
    <>
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </>
  ),
  code: (
    <>
      <path d="m7 8-4 4 4 4" />
      <path d="m17 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
};

const steps = [
  {
    n: "01",
    icon: "bulb",
    title: "DISCOVER",
    lines: ["Understanding goals, audience,", "and business needs."],
  },
  {
    n: "02",
    icon: "funnel",
    title: "PLAN",
    lines: ["Planning wireframes and", "crafting the right strategy."],
  },
  {
    n: "03",
    icon: "pen",
    title: "DESIGN",
    lines: ["Creating stunning designs with a", "great user experience."],
  },
  {
    n: "04",
    icon: "code",
    title: "DEVELOP",
    lines: ["Building fast, responsive, and", "scalable websites."],
  },
  {
    n: "05",
    icon: "rocket",
    title: "DELIVER",
    lines: ["Testing, optimizing, and launching", "the project."],
  },
];

const Workprocess = () => {
  return (
    <div className="relative border-t border-b border-r border-[#2a2a2c] pl-9 py-6">
      {/* ───────────── MIDDLE: WORK PROCESS ───────────── */}
      <h2 className="text-[22px] pl-7 font-bold uppercase leading-[28px] tracking-[-0.01em]">
        Work Process
      </h2>

      <div className="mt-[7px]">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`relative ${i === steps.length - 1 ? "h-[38px]" : "h-[60px]"}`}
          >
            {/* number */}
            <span
              className="absolute left-[30px] top-[15px] text-[20px] font-bold leading-6 tracking-[-0.06em]"
              style={{ color: RED }}
            >
              {s.n}
            </span>

            {/* connector */}
            {i !== steps.length - 1 && (
              <span className="absolute left-[98px] top-[48px] h-[22px] w-px bg-[#6d6d70]" />
            )}

            {/* circle + icon */}
            <span
              className="absolute left-[80px] top-[10px] flex h-[38px] w-[38px] items-center justify-center rounded-full border bg-[#0b0b0c]"
              style={{ borderColor: RED }}
            >
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[s.icon]}
              </svg>
            </span>

            {/* text */}
            <div className="absolute left-[150px] top-[16px] whitespace-nowrap">
              <p
                className="text-[14px] font-bold leading-[18px] tracking-[0.01em]"
                style={{ color: RED }}
              >
                {s.title}
              </p>
              <p className="text-[12px] leading-[15px] text-[#ececec]">
                {s.lines[0]}
                <br />
                {s.lines[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workprocess;
