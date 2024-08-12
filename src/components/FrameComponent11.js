import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1403.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-smi-6 text-surface-light font-poppins ${className}`}
    >
      <div className="w-[951.6px] flex flex-row items-start justify-center gap-[25px] max-w-full mq800:flex-wrap">
        <GroupComponent1 card="/card@2x.png" starIcon="pending_5414:4406" />
        <div className="flex-1 flex flex-row items-end justify-start gap-[26px] min-w-[369px] max-w-full text-center text-11xl mq450:min-w-full mq800:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border min-h-[456px] max-w-full mq450:pb-7 mq450:box-border">
            <GroupComponent1
              propWidth="unset"
              propMinWidth="unset"
              propAlignSelf="stretch"
              card="/card-1@2x.png"
              starIcon="pending_5414:4450"
            />
          </div>
          <div className="w-[180.6px] flex flex-col items-end justify-start gap-[172px] min-w-[180.6px] mq800:flex-1">
            <h2 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[27px] mq800:text-5xl mq800:leading-[36px]">
              Upcoming Webinars
            </h2>
            <div className="flex flex-row items-end justify-start gap-2 text-lg text-yellow-200">
              <b className="relative inline-block min-w-[119px] shrink-0 z-[1]">
                Explore More
              </b>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.4px]">
                <div className="w-[21.6px] h-[22.6px] relative shrink-0 z-[1]">
                  <div className="absolute h-full w-full top-[54.65%] right-[-61.81%] bottom-[-59.51%] left-[47.45%] rounded-[50%] border-yellow-200 border-[0px] border-solid box-border [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                  <img
                    className="absolute h-[37.61%] w-[43.52%] top-[32.3%] right-[31.94%] bottom-[30.09%] left-[24.54%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/group-35.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
