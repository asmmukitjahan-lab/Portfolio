import Container from "../Component/Container";
import EducationSkill from "../Component/EducationSkill";
import Workprocess from "../Section/Workprocess";

/**
 * Add these to your index.html <head> (fonts used in the design):
 * <link rel="preconnect" href="https://fonts.googleapis.com" />
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Mrs+Saint+Delafield&display=swap" rel="stylesheet" />
 */

const About = () => {
  return (
    <>
      <section className="bg-black font-['Inter',sans-serif] text-white py-25">
        <Container>
          <div className="pb-20 grid grid-cols-[500px_500px_300px] overflow-hidden">
            <EducationSkill />
            <Workprocess />

            {/* ───────────── RIGHT: QUOTE PANEL ───────────── */}
            <aside
              className="relative overflow-hidden"
              style={{
                background:
                  "radial-gradient(120% 80% at 20% 10%, #d4101c 0%, #b80915 45%, #8c0610 100%)",
              }}
            >
              {/* fabric-like texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 1px, transparent 1px 3px), repeating-linear-gradient(-45deg, rgba(0,0,0,.12) 0 1px, transparent 1px 3px)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(115deg, rgba(0,0,0,.18) 0%, rgba(255,255,255,.05) 35%, rgba(0,0,0,.22) 70%, rgba(255,255,255,.04) 100%)",
                }}
              />

              {/* quote mark */}
              <span className="absolute left-[15%] top-[50px] font-['Georgia',serif] text-[60px] font-black leading-none text-white">
                “
              </span>

              {/* quote */}
              <p className="absolute left-[25%] top-[84px] text-[18px] font-medium leading-normal text-white">
                Design is
                <br />
                how it looks;
                <br />
                code is
                <br />
                how it comes alive.
              </p>

              {/* signature */}
              <div className="absolute left-[22%] top-[280px]">
                <span className="text-center font-['Mrs_Saint_Delafield',cursive] text-[44px] leading-none text-white">
                  Mukit Jahan
                </span>
                <svg
                  className="absolute -bottom-[2px] left-[40px]"
                  width="62"
                  height="8"
                  viewBox="0 0 62 8"
                  fill="none"
                >
                  <path
                    d="M1 6.5C16 2.5 38 1.5 61 3"
                    stroke="#fff"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* tagline */}
              <p className="absolute left-[25%] top-[400px] text-center text-[12px] font-medium uppercase leading-normal tracking-[0.05em] text-white">
                Let&apos;s create
                <br />
                something great
                <br />
                together.
              </p>

              {/* plus */}
              <svg
                className="absolute left-[29px] top-[480px]"
                width="10"
                height="10"
                viewBox="0 0 14 14"
              >
                <path
                  d="M6.5 0v13M0 6.5h13"
                  stroke="#ff2a3a"
                  strokeWidth="2.0"
                />
              </svg>
            </aside>
          </div>
        </Container>
      </section>
      {/* Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-red-900 to-white/10" />
    </>
  );
};
export default About;
