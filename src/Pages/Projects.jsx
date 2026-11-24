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
import azure from "../assets/azurefashion.png";
import property from "../assets/pj_property.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    id: "01",
    title: "Azure Fashion Store Website",
    subtitle:
      "A modern digital experience crafted with precision, elegance, and creativity, Discover a seamless blend of bold design, refined aesthetics, and next-level performance, responsive interface.",
    image: azure,
    href: "https://azure-jet.vercel.app/",
  },
  {
    id: "02",
    title: "Property Business Website",
    subtitle:
      "Elegant property website UI for the UK market with a clean Buy/Rent property search flow, rich visuals and an elegant, fully responsive design.",
    image: property,
    href: "https://propertybusiness-chi.vercel.app/",
  },
  {
    id: "03",
    title: "Portfolio Website",
    subtitle:
      "A modern personal portfolio built to highlight services, projects, resume details, and professional branding through a clean, responsive interface.",
    image: gerold,
    href: "https://gerold-project-sigma.vercel.app/",
  },
  {
    id: "04",
    title: "DoctorCare",
    subtitle:
      "A modern website with a polished visual style and responsive layout.",
    image: doctorcare,
    href: "https://doctor-care-ashy.vercel.app/",
  },
  {
    id: "05",
    title: "NASSCROP",
    subtitle:
      "A polished web project showcasing clear structure, modern visuals, and a professional presentation for the brand.",
    image: nasscrop,
    href: "https://nasscrop.vercel.app/",
  },
  {
    id: "06",
    title: "Coffee Website",
    subtitle:
      "A warm and inviting landing page with a clean layout, strong visual hierarchy, and engaging product presentation.",
    image: coffeeshop,
    href: "https://coffeeshop.vercel.app/",
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

const ProjectCard = ({ id, title, subtitle, image, href }) => (
  <article className="card-3d project-card depth-panel group relative h-[420px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-black">
    <div className="absolute inset-x-7 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#e4112b]/80 to-transparent" />

    <div className="relative h-full p-3">
      {/* Thumbnail */}
      <div className="relative h-[260px] overflow-hidden rounded-[16px]">
        <img
          src={image}
          alt={`${title} — ${subtitle}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/[0.03]" />

        {/* <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
          Featured
        </span> */}

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${title} website`}
          className="absolute bottom-4 right-4 z-20 flex size-11 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 hover:bg-[#b50d2067] group-hover:opacity-100 focus:translate-y-0 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e4112b]"
        >
          <ArrowLong className="h-4 w-6" />
        </a>
      </div>

      {/* Meta row */}
      <div className="flex items-start gap-4 px-3 pb-3 pt-5">
        <span className="font-['Oswald'] w-10 shrink-0 text-[38px] font-semibold leading-none tracking-[-0.04em] text-[#e4112b]">
          {id}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="font-['Inter'] truncate text-[18px] font-bold uppercase leading-tight tracking-[0.04em] text-white transition-colors duration-300 group-hover:text-[#ff3445]">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[12px] leading-[1.55] text-white/45">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </article>
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
                <SwiperSlide key={item.id}>
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
