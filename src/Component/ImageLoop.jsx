import brand_1 from "../assets/HTML.png";
import brand_2 from "../assets/CSS.png";
import brand_3 from "../assets/Tailwind.png";
import brand_4 from "../assets/Bootstrap.png";
import brand_5 from "../assets/React.png";
import brand_6 from "../assets/next.png";
import brand_7 from "../assets/Vite.png";
import brand_8 from "../assets/Figma.png";
import brand_9 from "../assets/github.png";
import brand_10 from "../assets/vercel.png";
import LogoLoop from "./LogoLoop";

const Brand_1 = () => {
  return <img src={brand_1} alt="brand logo" />;
};

const Brand_2 = () => {
  return <img src={brand_2} alt="brand logo" />;
};

const Brand_3 = () => {
  return <img src={brand_3} alt="brand logo" />;
};

const Brand_4 = () => {
  return <img src={brand_4} alt="brand logo" />;
};

const Brand_5 = () => {
  return <img src={brand_5} alt="brand logo" />;
};

const Brand_6 = () => {
  return <img src={brand_6} alt="brand logo" />;
};

const Brand_7 = () => {
  return <img src={brand_7} alt="brand logo" />;
};
const Brand_8 = () => {
  return <img src={brand_8} alt="brand logo" />;
};
const Brand_9 = () => {
  return <img src={brand_9} alt="brand logo" />;
};
const Brand_10 = () => {
  return <img src={brand_10} alt="brand logo" />;
};

const techLogos = [
  { node: <Brand_1 />, title: "Brand 1" },
  { node: <Brand_2 />, title: "Brand 2" },
  { node: <Brand_3 />, title: "Brand 3" },
  { node: <Brand_4 />, title: "Brand 4" },
  { node: <Brand_5 />, title: "Brand 5" },
  { node: <Brand_6 />, title: "Brand 6" },
  { node: <Brand_7 />, title: "Brand 7" },
  { node: <Brand_8 />, title: "Brand 8" },
  { node: <Brand_9 />, title: "Brand 9" },
  { node: <Brand_10 />, title: "Brand 10" },
  // { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  // {
  //   node: <SiTypescript />,
  //   title: "TypeScript",
  //   href: "https://www.typescriptlang.org",
  // },
  // {
  //   node: <SiTailwindcss />,
  //   title: "Tailwind CSS",
  //   href: "https://tailwindcss.com",
  // },
];

// Alternative with image sources
// const imageLogos = [
//   {
//     src: brand_1,
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: brand_2,
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: brand_3,
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];

function ImageLoop() {
  return (
    <>
      <section>
        <div
          className="bg-black py-5 flex items-center"
          style={{ height: "150px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={techLogos}
            speed={70}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#00000/60"
            ariaLabel="Technology partners"
          />

          {/* Vertical loop with deceleration on hover */}
          {/* <LogoLoop logos={techLogos} useCustomRender={false} /> */}
        </div>
      </section>
      {/* Divider */}
      <div className="mt-6.5 h-[1px] w-full bg-gradient-to-r from-white/10 via-red-900 to-white/10" />
    </>
  );
}

export default ImageLoop;
