import icon from "../assets/service-icon (1).png";

const ServiceCard = ({ img, title, description, listArray = [] }) => {
  return (
    <div className="p-7.5 bg-black rounded-2xl border border-transparent hover:border-gray-600 transition-all duration-300 hover:shadow-[0_0_200px_rgba(500,0,0,0.15)] transition-all duration-300">
      <div className="iconbg size-[64px] bg-repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0 1px, transparent 1px 3px), repeating-linear-gradient(-45deg, rgba(0,0,0,.12) 0 1px, transparent 1px 3px) rounded-full p-1 flex items-center justify-center">
        <img src={img || icon} alt="icon" />
      </div>
      <h3 className="font-bold text-[18px] pt-[34px] pb-4 text-white">
        {title}
      </h3>
      <p className="text-white/60 text-3 leading-normal pb-5.5">
        {description}
      </p>

      <ul className="grid gap-3 list-disc pl-5">
        {listArray.map((list) => (
          <li key={list} className="text-white text-3">
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
