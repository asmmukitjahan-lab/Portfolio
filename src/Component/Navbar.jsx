import Container from "./Container";

// import CommonBtn from "./CommonBtn";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
  return (
    <>
      <nav className="bg-black text-white py-2 ">
        <Container className="w-[1800px] ">
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
              <img src="/logo-h60.png" alt="logo" className="cursor-pointer" />
            </div>

            <div className="flex items-center justify-end gap-6">
              <ul className="flex justify-end gap-[24px] items-center">
                {menu?.map((item) => (
                  <li
                    className="flex items-center font-normal text-[12px] uppercase leading-auto tracking-tight text-white/90 hover:border-b-white-600 h-1"
                    key={item.id}
                  >
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
                <a href="/resume.pdf" className="flex items-center font-normal text-[12px] uppercase leading-auto tracking-tight text-white/90">Download Resume</a>
              </ul>

              {/* Right: availability */}
              <a
                href="/contact"
                className="flex items-center gap-1 text-[12px] font-normal uppercase tracking-tight text-white/90"
              >
                <span>Available for freelance</span>
                <FiPlus className="text-[#c81616]" size={16} strokeWidth={3} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-[10px] h-[1px] w-full bg-gradient-to-r from-white/10 via-white/40 to-white/10" />
        </Container>
      </nav>
      
    </>
  );
};

export default Navbar;
