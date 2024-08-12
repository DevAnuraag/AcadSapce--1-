import { useMemo } from "react";
import PropTypes from "prop-types";

const MemberOneInfoDuplicate = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  rectangle5257Stroke,
  rectangle5414,
}) => {
  const memberOneInfoDuplicateStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div
      className={`self-stretch h-48 relative text-center text-base text-gray1-900 font-poppins ${className}`}
      style={memberOneInfoDuplicateStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
          alt=""
          src={rectangle5257Stroke}
        />
        <img
          className="absolute top-[32px] left-[65px] w-[149px] h-[127px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src={rectangle5414}
        />
      </div>
      <h3 className="m-0 absolute top-[51px] left-[242px] text-5xl font-bold font-inherit text-surface-light z-[2] mq450:text-lgi">
        Anuravo Deb
      </h3>
      <div className="absolute top-[117px] left-[242px] inline-block min-w-[88px] z-[2]">
        IIT Bombay
      </div>
      <div className="absolute top-[89px] left-[242px] z-[2]">
        Full Stack Developer
      </div>
    </div>
  );
};

MemberOneInfoDuplicate.propTypes = {
  className: PropTypes.string,
  rectangle5257Stroke: PropTypes.string,
  rectangle5414: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default MemberOneInfoDuplicate;
