import Container from "./Container";

// import CommonBtn from "./CommonBtn";
import { FiPlus } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const menu = [
  {
    id: uuidv4(),
    text: "Services",
    link: "/services",
  },
  {
    id: uuidv4(),
    text: "Projects",
    link: "/projects",
  },
  {
    id: uuidv4(),
    text: "About",
    link: "/about",
  },
  {
    id: uuidv4(),
    text: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar-3d relative bg-black/95 text-white py-3">
        <Container>
          {/* <div className="flex justify-between items-center">
            <div>
              <img src={logo} alt="" />
            </div>
            <ul className="flex gap-8.75">
              <li>Services</li>
              <li>Works</li>
              <li>Resume</li>
              <li>Skills</li>
              <li>Testimonials</li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <div>
              <CommonBtn>Lets Talk</CommonBtn>
            </div>
          </div> */}
          {/* Top bar */}
          <div className="flex items-center justify-between">
            {/* Left: role */}
            <div className="w-auto h-full overflow-hidden">
              <img src="/logo-h60.png" alt="logo" className="navbar-logo h-10 w-auto cursor-pointer" />
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full border border-white/20 sm:hidden"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className="hidden items-center justify-end gap-6 sm:flex">
              <ul className="flex justify-end gap-[24px] items-center">
                {menu?.map((item) => (
                  <li
                    className="navbar-link flex items-center font-normal text-[12px] uppercase leading-auto tracking-tight text-white/90"
                    key={item.id}
                  >
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
                <a href="/resume.pdf" className="navbar-link flex items-center font-normal text-[12px] uppercase leading-auto tracking-tight text-white/90">Download Resume</a>
              </ul>

              {/* Right: availability */}
              <a
                href="/contact"
                className="navbar-availability flex items-center gap-1 text-[12px] font-normal uppercase tracking-tight text-white/90"
              >
                <span>Available for freelance</span>
                <FiPlus className="text-[#c81616]" size={16} strokeWidth={3} />
              </a>
            </div>
          </div>

          {menuOpen && (
            <div className="absolute left-4 right-4 top-[58px] z-50 rounded-xl border border-white/10 bg-[#111] p-4 shadow-2xl sm:hidden">
              <ul className="grid gap-1">
                {menu?.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="navbar-link block w-full rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wide text-white/90 hover:bg-white/5"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/resume.pdf"
                    onClick={() => setMenuOpen(false)}
                    className="navbar-link block w-full rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wide text-white/90 hover:bg-white/5"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Divider */}
          <div className="mt-[10px] h-[1px] w-full bg-gradient-to-r from-white/10 via-white/40 to-white/10" />
        </Container>
      </nav>
      
    </>
  );
};

export default Navbar;
