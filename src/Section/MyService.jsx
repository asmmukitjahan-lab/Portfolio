import Container from "../Component/Container";
import SectionHeading from "../Component/SectionHeading";
import ServiceCard from "../Component/ServiceCard";

import icon1 from "../assets/service-icon (1).png";
import icon2 from "../assets/service-icon (2).png";
import icon3 from "../assets/service-icon (3).png";
import icon4 from "../assets/service-icon-(4).png";

const serviceData = [
  {
    id: 1,
    img: icon1,
    title: "UI/UX Website Design",
    description:
      "Clean, user-focused layouts with clear structure, smooth navigation, and strong visual hierarchy.",
    listArray: ["Modern layouts", "Responsive design"],
  },

  {
    id: 2,
    img: icon2,
    title: "Frontend Development",
    description:
      "Responsive interfaces using HTML, CSS, and JavaScript for clean, consistent, reliable performance.",
    listArray: ["Clean HTML/CSS", "Smooth interactions"],
  },

  {
    id: 3,
    img: icon3,
    title: "Performance & Responsiveness",
    description:"Fast, mobile-first websites optimized for speed, accessibility, and dependable performance.",
    listArray: ["Speed optimization", "Asset efficiency"],
  },
  {
    id: 4,
    img: icon4,
    title: "JavaScript Implementation",
    description:"Lightweight JavaScript setups with easy updates, fast loading, and scalable, clean, customizable layouts.",
    listArray: ["Theme setup", "Easy management"],
  },
];
const MyService = () => {
  return (
    <>
      <section className="section-enter py-25 bground font-['Inter']">
        <Container>
          <SectionHeading
            Heading={"my services"}
            subheading={"Designing clean scalable responsive website"}
          />
          <div className="grid grid-cols-1 gap-5 pt-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7 lg:pt-15 lg:pb-20">
            {serviceData.map((item) => (
              //   <ServiceCard
              //     img={item.img}
              //     title={item.title}
              //     description={item.description}
              //     listArray={item.listArray}
              //   />

              <ServiceCard {...item} />
            ))}
          </div>
        </Container>
      </section>
      {/* Divider */}
      <div className=" h-[1px] w-full bg-gradient-to-r from-white/10 via-red-900 to-white/10" />
    </>
  );
};

export default MyService;
