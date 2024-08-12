import { useMemo } from "react";
import PropTypes from "prop-types";

const Score = ({
  className = "",
  iconFontSize,
  iconMinWidth,
  scoreContainerMarginTop,
  scoreFontFamily,
}) => {
  const iconStyle = useMemo(() => {
    return {
      fontSize: iconFontSize,
      minWidth: iconMinWidth,
    };
  }, [iconFontSize, iconMinWidth]);

  const scoreContainerStyle = useMemo(() => {
    return {
      marginTop: scoreContainerMarginTop,
    };
  }, [scoreContainerMarginTop]);

  const scoreStyle = useMemo(() => {
    return {
      fontFamily: scoreFontFamily,
    };
  }, [scoreFontFamily]);

  return (
    <div
      className={`w-10 flex flex-col items-end justify-start pt-[5px] px-2 pb-2 box-border relative text-center text-lg text-secondary font-font-awesome-6-free ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] border-gainsboro border-[0px] border-dashed box-border" />
      <div className="w-full h-full absolute !m-[0] top-[40px] right-[0px] bottom-[-40px] left-[0px] rounded-[50%] border-gradiant-secondary border-[0px] border-solid box-border [transform:_rotate(-90deg)] [transform-origin:0_0] z-[2]" />
      <div className="w-[34px] h-[34px] absolute !m-[0] top-[calc(50%_-_17px)] left-[calc(50%_-_17px)] rounded-[50%] bg-gray z-[3]" />
      <div
        className="mr-[-13px] w-3.5 relative leading-[18px] flex items-center justify-center min-w-[14px] whitespace-nowrap z-[4]"
        style={iconStyle}
      >
        
      </div>
      <div
        className="flex flex-row items-start justify-start relative mt-[-14px] text-mini text-black font-poppins"
        style={scoreContainerStyle}
      >
        <div className="h-10 w-10 absolute !m-[0] top-[-16.28px] left-[3.69px] rounded-[50%] border-gradiant-secondary border-[0px] border-solid box-border [transform:_rotate(30deg)] [transform-origin:0_0] z-[1]" />
        <div
          className="relative capitalize font-medium inline-block min-w-[23px] z-[4]"
          style={scoreStyle}
        >
          4.5
        </div>
      </div>
    </div>
  );
};

Score.propTypes = {
  className: PropTypes.string,

  /** Style props */
  iconFontSize: PropTypes.any,
  iconMinWidth: PropTypes.any,
  scoreContainerMarginTop: PropTypes.any,
  scoreFontFamily: PropTypes.any,
};

export default Score;
