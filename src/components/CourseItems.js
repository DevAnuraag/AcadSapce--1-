import PropTypes from "prop-types";

const CourseItems = ({ className = "", card, starIcon1 }) => {
  return (
    <div
      className={`h-[336px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-center text-xs text-surface-light font-poppins ${className}`}
    >
      <div className="self-stretch flex-1 rounded-3xs border-surface-light border-[2px] border-solid flex flex-col items-end justify-start pt-[0.8px] px-0 pb-[5.7px] gap-[8.4px] z-[1]">
        <div className="self-stretch h-[335px] relative rounded-3xs border-surface-light border-[2px] border-solid box-border hidden" />
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src={card}
        />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[5px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-end justify-start gap-[13.7px]">
              <div className="w-[48.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border text-3xs">
                <div className="self-stretch relative tracking-[0.02em] uppercase inline-block min-w-[48.5px] z-[1]">
                  popular
                </div>
              </div>
              <div className="h-[17.5px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.8px] box-border text-left">
                <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[0.3px]">
                  <div className="self-stretch w-[73.9px] flex flex-row items-start justify-start gap-[3.3px]">
                    <div className="flex flex-col items-start justify-start pt-[6.1px] px-0 pb-0">
                      <div className="w-[2.3px] h-[2.2px] relative rounded-[50%] bg-surface-light z-[1]" />
                    </div>
                    <div className="relative leading-[14.6px] font-medium inline-block min-w-[19.4px] z-[1]">
                      4.7
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-[6.8px] h-[6.8px] relative z-[1]"
                        alt=""
                        src="/star-icon.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start text-center">
                      <div className="flex-1 relative leading-[14.6px] inline-block min-w-[35.6px] shrink-0 z-[1]">
                        (225)
                      </div>
                      <div className="h-[11.9px] w-[15.2px] relative hidden text-left text-smi-6">
                        <div className="absolute top-[0px] left-[0px] h-full hidden flex-row items-center justify-center gap-[3.1px] w-full">
                          <div className="flex-1 relative leading-[120%] font-medium shrink-0 z-[0]">
                            4.5
                          </div>
                          <img
                            className="h-0 w-0 absolute !m-[0] top-[calc(50%_-_3.9px)] left-[116.4%] z-[1]"
                            alt=""
                            src={starIcon1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[2.7px] text-center text-3xs">
                    <div className="flex-1 relative uppercase inline-block min-w-[94.8px] z-[1]">
                      Total Attendee’s
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                      <div className="w-[1.7px] h-[1.7px] relative rounded-[50%] bg-surface-light z-[1]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[23.7px] relative leading-[18.8px] flex items-center justify-center shrink-0 min-w-[23.7px] z-[2]">
                837
              </div>
            </div>
            <div className="w-[262.6px] flex flex-row items-start justify-start py-0 px-0.5 box-border mt-[-0.1px] text-sm">
              <div className="h-[42.2px] flex-1 relative leading-[26px] font-semibold flex items-center justify-center z-[1]">
                Learn Finance with our expert Soumil Sir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseItems.propTypes = {
  className: PropTypes.string,
  card: PropTypes.string,
  starIcon1: PropTypes.string,
};

export default CourseItems;
