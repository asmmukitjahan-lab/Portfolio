/**
 * Selected Projects section — React + Tailwind CSS
 *
 * 1. Add fonts to index.html (<head>):
 *    <link rel="preconnect" href="https://fonts.googleapis.com" />
 *    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 *    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet" />
 *
 * 2. (Optional) tailwind.config.js -> theme.extend:
 *    fontFamily: { sans: ["Inter", "sans-serif"], display: ["Oswald", "sans-serif"] }
 *    (This component uses arbitrary values, so it works without the config too.)
 *
 * 3. Put your 3 project screenshots in /public/projects/ (or change the `image` paths).
 */

import Container from "../Component/Container";
import SectionHeading from "../Component/SectionHeading";
import gerold from "../assets/Gerold.png";
import doctorcare from "../assets/Doctorcare.png";
import nasscrop from "../assets/NassCrop.png";
import coffeeshop from "../assets/Coffeeshop.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    id: "01",
    title: "Portfolio Website",
    subtitle:
      "A modern personal portfolio built to highlight services, projects, resume details, and professional branding through a clean, responsive interface.",
    image: gerold,
    bg: "bg-[#0d0d0d]",
  },
  {
    id: "02",
    title: "DoctorCare",
    subtitle:
      "A modern website with a polished visual style and responsive layout.",
    image: doctorcare,
    bg: "bg-[#e9e3da]",
  },
  {
    id: "03",
    title: "NASSCROP",
    subtitle:
      "A polished web project showcasing clear structure, modern visuals, and a professional presentation for the brand.",
    image: nasscrop,
    bg: "bg-[#121212]",
  },
  {
    id: "04",
    title: "Coffee Website",
    subtitle:
      "A warm and inviting landing page with a clean layout, strong visual hierarchy, and engaging product presentation.",
    image: coffeeshop,
    bg: "bg-[#121212]",
  },
];

const ArrowLong = ({ className = "" }) => (
  <svg
    viewBox="0 0 40 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="square"
    className={className}
    aria-hidden="true"
  >
    <path d="M0 8H38" />
    <path d="M31 1L38 8L31 15" />
  </svg>
);

const ProjectCard = ({ id, title, subtitle, image, bg }) => (
  <div
    className="card-3d relative overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300
  before:absolute before:inset-0 before:rounded-2xl
  before:bg-gradient-to-r before:from-white/10 before:via-red-900 before:to-white/10
  before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
  >
    <div className="relative z-10 rounded-2xl bg-black h-[400px] overflow-hidden">
      <a href="#" className="group block">
        {/* Thumbnail */}
        <div className={`aspect-[16/10] w-full overflow-hidden ${bg}`}>
          <img
            src={image}
            alt={`${title} — ${subtitle}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Meta row */}
        <div className="mt-5 flex items-center gap-5 p-3">
          <span className="font-['Oswald'] text-[44px] font-semibold leading-none tracking-tight text-[#e4112b]">
            {id}
          </span>

          <div className="flex-1">
            <h3 className="font-['Inter'] text-[18px] font-bold uppercase leading-tight tracking-wide text-white">
              {title}
            </h3>
            <p className="mt-1 font-['Inter'] text-[12px] font-normal uppercase tracking-wide text-neutral-400">
              {subtitle}
            </p>
          </div>

          <ArrowLong className="h-4 w-6 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-2 " />
        </div>
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <>
      <section className="section-enter w-full bg-black py-25 font-['Inter'] text-white">
        <Container>
          <SectionHeading
            Heading={"SELECTED PROJECTS"}
            subheading={"View All Projects"}
          />
          {/* Cards */}
          {/* <div className="mt-6 grid grid-cols-3 gap-8 pt-6"> */}
          {/* {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))} */}
          {/* </div> */}
          <div className="project-3d py-20">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                570: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1020: { slidesPerView: 3, spaceBetween: 30 },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Navigation]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {projects.map((item) => (
                <SwiperSlide>
                  <ProjectCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-red-900 to-white/10" />
    </>
  );
};
export default Projects;
