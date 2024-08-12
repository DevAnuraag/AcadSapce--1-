import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "", propBackgroundImage, as011 }) => {
  const linkStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={`w-[367px] flex flex-col items-start justify-start pt-0 px-0 pb-[57px] box-border min-h-[210px] max-w-full text-justify text-sm text-surface-light font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="w-[220px] h-[65px] flex flex-row items-start justify-start py-0 px-px box-border">
          <div
            className="self-stretch flex-1 flex flex-row items-center justify-start bg-[url('/public/as01-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]"
            style={linkStyle}
          >
            <img
              className="h-[65px] w-[218px] relative object-cover hidden"
              alt=""
              src={as011}
            />
          </div>
        </div>
        <div className="self-stretch relative leading-[23px] z-[2]">
          Get all your Career Questions Answered with AcadSpace AI, Answers
          tailored to your needs, curated by top 1% professional’s across the
          Country.
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  as011: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default FrameComponent6;
