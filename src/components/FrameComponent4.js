import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-3.5 box-border gap-[127px] max-w-full text-center text-31xl text-surface-light font-poppins mq450:gap-8 mq800:gap-[63px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit leading-[74px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-11xl mq450:leading-[44px] mq800:text-21xl mq800:leading-[59px]">
        Hear what our Users Say
      </h1>
      <div className="w-[1429px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-7xl text-black">
        <div className="w-[1093px] flex flex-row items-start justify-center gap-[55px] max-w-full mq800:gap-[27px] mq1125:flex-wrap">
          <FrameComponent prop="/313212653-480660344095693-1070179117642085002-n-2@2x.png" />
          <FrameComponent prop="/313212653-480660344095693-1070179117642085002-n-2@2x.png" />
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
