import PropTypes from "prop-types";

const Hamburger = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[10.6px] z-[1] ${className}`}
    >
      <div className="self-stretch h-[8.9px] relative rounded-21xl [background:linear-gradient(180deg,_#faff01,_#faff01)]" />
      <div className="self-stretch h-[8.9px] relative rounded-21xl [background:linear-gradient(180deg,_#faff01,_#faff01)]" />
      <div className="self-stretch h-[8.9px] relative rounded-21xl [background:linear-gradient(180deg,_#faff01,_#faff01)]" />
    </div>
  );
};

Hamburger.propTypes = {
  className: PropTypes.string,
};

export default Hamburger;
