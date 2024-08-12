import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  propWidth,
  propMinWidth,
  propAlignSelf,
  card,
  starIcon,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propMinWidth, propAlignSelf]);

  return (
    <div
      className={`w-[360px] rounded-3xs border-surface-light border-[2px] border-solid box-border flex flex-col items-start justify-start pt-px px-0 pb-1 gap-[11.5px] min-w-[360px] max-w-full z-[1] text-left text-smi-6 text-surface-light font-poppins mq450:min-w-full mq800:flex-1 ${className}`}
      style={groupDivStyle}
    >
      <div className="self-stretch h-[413px] relative rounded-3xs border-surface-light border-[2px] border-solid box-border hidden" />
      <img
        className="self-stretch h-[319.5px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={card}
      />
      <div className="w-[18.9px] h-[14.7px] relative hidden">
        <div className="absolute top-[0px] left-[0px] h-full hidden flex-row items-center justify-center gap-[3.1px] w-full">
          <div className="flex-1 relative leading-[120%] font-medium shrink-0 z-[0]">
            4.5
          </div>
          <img
            className="h-0 w-0 absolute !m-[0] top-[calc(50%_-_3.9px)] left-[116.4%] z-[1]"
            alt=""
            src={starIcon}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[23px] box-border max-w-full text-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.5px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[30.5px] mq450:flex-wrap mq450:gap-[15px]">
            <div className="flex flex-row items-start justify-start gap-[3.5px]">
              <div className="flex flex-row items-end justify-start gap-[5.3px]">
                <a className="[text-decoration:none] relative tracking-[0.02em] uppercase text-[inherit] inline-block min-w-[57px] shrink-0 z-[1]">
                  popular
                </a>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.4px]">
                  <div className="w-[2.1px] h-[2.1px] relative rounded-[50%] bg-surface-light shrink-0 z-[1]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-left">
                <div className="relative leading-[120%] font-medium inline-block min-w-[19px] z-[1]">
                  4.7
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5.6px] px-0 pb-0">
                <img
                  className="w-[8.4px] h-[8.4px] relative z-[1]"
                  alt=""
                  src="/star-icon-1.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative leading-[120%] inline-block min-w-[34px] z-[1]">
                  (225)
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[4.3px]">
              <div className="flex flex-row items-start justify-start gap-[4.3px]">
                <div className="relative tracking-[0.02em] uppercase inline-block min-w-[115px] shrink-0 z-[1]">
                  Total Attendee’s
                </div>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <div className="w-[2.1px] h-[2.1px] relative rounded-[50%] bg-surface-light shrink-0 z-[1]" />
                </div>
              </div>
              <div className="relative leading-[146%] inline-block min-w-[23px] z-[1]">
                837
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-lg">
            <div className="flex-1 relative leading-[26px] font-semibold z-[1]">
              Learn Finance with our expert Soumil Sir.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  card: PropTypes.string,
  starIcon: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent1;
