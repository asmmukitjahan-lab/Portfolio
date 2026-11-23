import Container from "./Container";
import laptop from "../assets/Laptop.png";

/**
 * FooterCTA — "Let's work together" contact banner.
 * Native design size: 941 × 274 (scales to fill its container's width).
 *
 * Requirements:
 *  - Tailwind CSS
 *  - Inter font (optional, falls back to system sans) — add to index.html:
 *    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 *  - /laptop.png in your public folder (the laptop + mug photo, included)
 */

const RED = "#e8182b";

const Sparkle = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill={RED} aria-hidden="true">
    <path d="M12 0C12.8 7 17 11.2 24 12C17 12.8 12.8 17 12 24C11.2 17 7 12.8 0 12C7 11.2 11.2 7 12 0Z" />
  </svg>
);

const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const MailIcon = () => (
  <Icon>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);

const GithubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
);

const PinIcon = () => (
  <Icon>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);


const contacts = [
  {
    icon: <MailIcon />,
    label: "asmmukitjahan@gmail.com",
    href: "https://mail.google.com",
  },
  {
    icon: <GithubIcon />,
    label: "asmmukitjahan-lab",
    href: "https://github.com/asmmukitjahan-lab",
  },
  {
    icon: <PhoneIcon />,
    label: "+880 1884600006",
    href: "tel:+8801884600006",
  },
  { icon: <PinIcon />, label: "Dhaka, Bangladesh", href: null },
];

const Icons = [
  {
    icon:"/facebook.png",
    href:"https://www.facebook.com/rsaem.plabon/",
  },
  {
    icon:"/github.png",
    href:"https://github.com/asmmukitjahan-lab",
  },
  {
    icon:"/linkedin.png",
    href:"https://www.linkedin.com/in/a-s-m-mukit-jahan-ab1613318/",
  },
]

// Left edge fades into the dark background; top, bottom and right bleed to the footer edges.
const LEFT_FADE_MASK = "linear-gradient(to right, transparent 0, #000 140px)";

// Use when the footer sits on a page with the same dark colour and you want
// the photo to dissolve on every side instead of touching the footer edges.
const ALL_EDGES_MASK =
  "linear-gradient(to right, transparent 0, #000 140px, #000 calc(100% - 60px), transparent 100%)," +
  "linear-gradient(to bottom, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)";

const Footer = ({ fadeEdges = false }) => {
  return (
    <footer className=" py-25 bg-black font-['Inter',ui-sans-serif,system-ui,sans-serif] text-white">
      <Container>
        <div className="relative overflow-hidden flex flex-col-[1fr_1fr_2fr] items-center md:h-[274px] md:flex-row">
          {/* ───────── Left: heading, copy, availability ───────── */}
          <div className="relative shrink-0 px-[30px] pb-8 pt-[27px] md:w-[300px] md:pb-0">
            <h2 className="text-[28px] font-bold uppercase leading-[35px] tracking-[-0.01em]">
              Let’s work
              <br />
              together
            </h2>

            {/* sparkle between the two heading lines */}
            <Sparkle className="absolute left-[204px] top-[51px] h-[22px] w-[22px]" />

            <p className="mt-3 whitespace-nowrap text-[12.5px] leading-4 text-white/90">
              I’m currently open for new projects and
              <br />
              collaborations. Whether you need a
              <br />
              website, or creative support,
              <br />
              I’d love to hear from you.
            </p>

            <ul className="mt-[27px] flex items-center gap-[7px]">
              {Icons.map((item) => (
                <li
                  key={item.href}
                  className="flex h-8 w-8 overflow-hidden items-center justify-center rounded-full border-[1.5px]"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full w-full items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8182b]/70"
                  >
                    <img src={item.icon} alt="" className="h-6 w-6 rounded-full object-cover" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ───────── Middle: contact rows ───────── */}
          <ul className="shrink-0 px-[30px] pb-8 md:w-[220px] md:p-0 md:pt-[27px]">
            {contacts.map(({ icon, label, href }, i) => {
              const last = i === contacts.length - 1;
              const content = (
                <>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px]"
                    style={{ borderColor: RED }}
                  >
                    {icon}
                  </span>
                  <span className="ml-[14px] whitespace-nowrap text-[13px] leading-none text-white">
                    {label}
                  </span>
                </>
              );

              return (
                <li
                  key={label}
                  className={`flex h-[60px] items-center md:w-[220px] ${
                    last ? "" : "border-b"
                  }`}
                  style={last ? undefined : { borderColor: RED }}
                >
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8182b]/70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ───────── Right: laptop + mug photo ───────── */}
          {/* On md+ the photo is pinned to the footer's right/top/bottom edges,
            so it always fills the full footer height with no gaps. */}
          <div className="relative h-full overflow-hidden md:absolute md:inset-y-0 md:left-[500px]  md:right-0 md:h-auto">
            <img
              src={laptop}
              alt="Laptop displaying code next to a black mug"
              className=" bg-transparent h-full w-full object-cover "
              style={{
                WebkitMaskImage: fadeEdges ? ALL_EDGES_MASK : LEFT_FADE_MASK,
                maskImage: fadeEdges ? ALL_EDGES_MASK : LEFT_FADE_MASK,
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
              }}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
