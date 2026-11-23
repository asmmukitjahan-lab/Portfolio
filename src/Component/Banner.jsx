import { useEffect, useState } from "react";
import image from "../assets/Logo.png";
import Container from "./Container";

const FONT_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;500;600&family=Mrs+Saint+Delafield&display=swap');
.pb-anton{font-family:'Anton','Bebas Neue',Impact,sans-serif}
.pb-sans{font-family:'Poppins',system-ui,sans-serif}
.pb-script{font-family:'Mrs Saint Delafield','Allura',cursive}
`;

/** SVG text that is stretched to an exact width and an exact cap-height. */
function FitText({ children, x, y, cap, width, fill, ...rest }) {
  const [size, setSize] = useState(cap / 0.73);

  useEffect(() => {
    let live = true;
    document.fonts
      ?.load("100px Anton")
      .then(() => {
        if (!live) return;
        const ctx = document.createElement("canvas").getContext("2d");
        ctx.font = "100px Anton";
        const ascent = ctx.measureText("H").actualBoundingBoxAscent;
        if (ascent) setSize((cap / ascent) * 100);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [cap]);

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      fontSize={size}
      textLength={width}
      lengthAdjust="spacingAndGlyphs"
      className="pb-anton"
      {...rest}
    >
      {children}
    </text>
  );
}

const STATS = [
  { value: "1", label: ["YEARS", "EXPERIENCE"] },
  { value: "10+", label: ["PROJECTS", "COMPLETED"] },
];
const Banner = ({ name = ["MUKIT", "JAHAN"] }) => {
  return (
    <>
      <section className="w-full bg-black text-white select-none pt-5 pb-12 sm:pb-16 lg:pb-25">
        <Container>
          <div className="section-enter sm:hidden">
            <p className="font-signature text-3xl text-white">Hello, I&apos;m</p>
            <h1 className="mt-2 text-5xl font-black leading-[0.9] text-[#f5001b]">
              MUKIT
              <br />
              JAHAN
            </h1>
            <div className="relative mt-2 min-h-[390px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(55% 55% at 50% 35%, rgba(214,0,20,.55) 0%, rgba(120,0,10,.25) 55%, rgba(0,0,0,0) 100%)",
                }}
              />
              <img
                src={image}
                alt="Mukit Jahan"
                draggable={false}
                className="absolute bottom-0 left-1/2 h-[92%] w-[78%] -translate-x-1/2 object-cover object-top"
              />
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-wide text-[#ff1a2b]">
              FRONTEND WEB DEVELOPER
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/90">
              I bring brands to life with clean, modern web experiences, creative visuals,
              and user-focused interfaces that connect brands with people.
            </p>
            <a
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              <span className="grid size-8 place-items-center rounded-full bg-[#ff1a2b]">
                <span className="ml-0.5 block size-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
              </span>
              ABOUT ME
            </a>
            <ul className="mt-8 grid grid-cols-2 rounded-xl border border-white/10">
              {STATS.map((s) => (
                <li key={s.value} className="p-4 text-center even:border-l even:border-white/10">
                  <strong className="block text-3xl text-[#ff1a2b]">{s.value}</strong>
                  <span className="mt-1 block text-xs text-white">{s.label.join(" ")}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-enter relative hidden w-full aspect-[941/645] overflow-hidden sm:block">
            {/* top hairline */}
            {/* <div className="absolute inset-x-0 top-0 h-full w-full z-50 bg-[rgba(0,0,0,0.29)]" /> */}
            <style>{FONT_CSS}</style>

            {/* red glow behind the head */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(38% 55% at 48% 30%, rgba(214,0,20,.55) 0%, rgba(120,0,10,.25) 55%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* ---------- Big PORTFOLIO + name (SVG for exact fit) ---------- */}
            <svg
              viewBox="0 0 941 645"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label={`Portfolio – ${name.join(" ")}`}
            >
              <defs>
                <linearGradient
                  id="pb-red"
                  gradientUnits="userSpaceOnUse"
                  x1="10"
                  y1="40"
                  x2="10"
                  y2="400"
                >
                  <stop offset="0" stopColor="#f5001b" />
                  <stop offset="0.4" stopColor="#d9000f" />
                  <stop offset="0.6" stopColor="#7d0009" />
                  <stop offset="1" stopColor="#1d0003" />
                </linearGradient>
              </defs>

              <FitText
                x={22.5}
                y={490}
                cap={480}
                width={900}
                fill="url(#pb-red)"
              >
                PORTFOLIO
              </FitText>
            </svg>

            {/* ---------- Person (cut-out) ---------- */}
            <img
              src={image}
              alt="bannerimg"
              draggable={false}
              className="banner-depth absolute bottom-0 left-[32.5%] top-[11%] h-[89%] w-[49%] object-cover object-top overflow-hidden"
            />

            {/* shadow fades so text stays readable */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-black/55 to-transparent" />

            {/* ---------- Name (SVG for exact fit) ---------- */}
            <svg
              viewBox="0 0 941 645"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <FitText x={32} y={350} cap={55} width={200} fill="#fff">
                {name[0]}
              </FitText>
              <FitText x={32} y={437} cap={60} width={200} fill="#fff">
                {name[1]}
              </FitText>
            </svg>

            {/* ---------- Left column ---------- */}
            <p className="font-signature absolute left-[3.8%] top-[33.2%] text-[5.6cqw] leading-none text-white">
              Hello, I’m
            </p>

            <h2 className="pb-sans pt-1.5 absolute left-[3%] top-[69.8%] text-[1.95cqw] font-semibold leading-[2.25cqw] tracking-[0.02em] text-[#ff1a2b]">
              FRONTEND
              <br />
              WEB DEVELOPER
            </h2>

            <p className="pb-sans absolute pt-2 left-[3%] top-[78%] text-[15px] font-normal leading-[1.5cqw] text-white/95">
              I bring brands to life with clean, modern
              <br />
              web experiences, creative visuals, and
              <br />
              user-focused interfaces that connect
              <br />
              brands with people. Let’s build something
              <br />
              extraordinary together.
            </p>

            <a
              href="#about"
              className="absolute bottom-[1%] left-[3%] flex items-center gap-[6px] no-underline"
            >
              <span className="grid h-[25px] w-[25px] place-items-center rounded-full bg-[#ff1a2b]">
                <svg
                  viewBox="0 0 10 10"
                  className="ml-[0.1cqw] h-[0.7cqw] w-[0.7cqw] fill-white"
                >
                  <path d="M2 1l7 4-7 4z" />
                </svg>
              </span>
              <span className="pb-sans text-[15px] font-medium tracking-[0.02em] text-white">
                ABOUT ME
              </span>
            </a>

            {/* ---------- Stats ---------- */}
            <ul className="absolute left-[82.4%] top-[75.5%] m-0 w-[14.9%] list-none p-0">
              {STATS.map((s, i) => (
                <li
                  key={s.value}
                  className={`flex h-[7.12cqw] items-center ${
                    i < STATS.length - 1 ? "border-b border-white/20" : ""
                  }`}
                >
                  <span className="pb-anton w-[6.3cqw] text-[35px] leading-none text-[#ff1a2b]">
                    {s.value}
                  </span>
                  <span className="pb-sans text-[20px] text-center font-medium leading-[1.45cqw] tracking-[0.01em] text-white">
                    {s.label[0]}
                    <br />
                    {s.label[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      {/* Divider */}
      <div className="mt-6.5 h-[1px] w-full bg-gradient-to-r from-white/10 via-red-900 to-white/10" />
    </>
  );
};

export default Banner;
