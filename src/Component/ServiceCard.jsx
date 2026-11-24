import icon from "../assets/service-icon (1).png";

const CheckIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8.2 6.3 11.5 13 4.5" />
  </svg>
);

const ServiceCard = ({ img, title, description, listArray = [], id }) => {
  return (
    <article className="card-3d depth-panel group relative min-h-[390px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-black p-6 sm:p-7">
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#e10613]/70 to-transparent opacity-70" />
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#e10613]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="iconbg flex size-[68px] items-center justify-center rounded-[18px] border border-white/10 shadow-[0_14px_30px_rgba(225,6,19,0.22)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
          <img
            src={img || icon}
            alt=""
            className="h-10 w-10 object-contain drop-shadow-[0_6px_8px_rgba(0,0,0,0.25)]"
          />
        </div>

        {id && (
          <span className="font-['Space_Grotesk'] text-[42px] font-bold leading-none tracking-[-0.08em] text-white/[0.055]">
            {String(id).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="relative mt-8">
        <h3 className="text-[20px] font-bold leading-[1.25] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#ff3445]">
          {title}
        </h3>
        <p className="mt-4 min-h-[72px] text-[14px] leading-[1.75] text-white/55">
          {description}
        </p>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

        <ul className="mt-5 grid gap-3">
          {listArray.map((list) => (
            <li
              key={list}
              className="flex items-center gap-3 text-[13px] font-medium text-white/80"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[#e10613]/70 bg-[#e10613]/10 text-[#ff4a57]">
                <CheckIcon />
              </span>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ServiceCard;
