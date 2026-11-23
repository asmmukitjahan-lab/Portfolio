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

const SectionHeading = ({className, Heading, subheading}) => {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
      {/* Header */}
      <h2 className={`whitespace-nowrap text-white text-[24px] font-bold uppercase leading-none tracking-wide ${className}`}>
        {Heading}
        <br />
      </h2>

      <span className="hidden h-px flex-1 bg-white/40 sm:block" />

      <a
        href="#"
        className="group flex items-center gap-4 whitespace-nowrap text-[16px] font-medium uppercase tracking-wide text-white hover:text-[#e4112b] "
      >
        {/* View All Projects */}
        {subheading}
        <ArrowLong className="h-4 w-8 transition-transform duration-300 group-hover:translate-x-2" />
      </a>
    </div>
  );
};

export default SectionHeading;
