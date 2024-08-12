import { useMemo } from "react";
import PropTypes from "prop-types";

const InfoProduct = ({
  className = "",
  propWidth,
  icon,
  propFlex,
  propWidth1,
  propDisplay,
  propMinWidth,
  lesson6,
  propMinWidth1,
}) => {
  const v6IconFreeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const icon1Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFlex, propWidth1, propDisplay, propMinWidth]);

  const lesson6Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex flex-row items-start justify-start gap-2 text-center text-base text-dark-25 font-font-awesome-6-free ${className}`}
    >
      <div
        className="w-[18px] flex flex-row items-start justify-start"
        style={v6IconFreeStyle}
      >
        <div
          className="flex-1 relative leading-[16px] whitespace-nowrap"
          style={icon1Style}
        >
          {icon}
        </div>
      </div>
      <div
        className="relative text-smi capitalize font-medium font-h6 text-dark-75 text-left inline-block min-w-[52px]"
        style={lesson6Style}
      >
        {lesson6}
      </div>
    </div>
  );
};

InfoProduct.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  lesson6: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default InfoProduct;
