import { Button } from "@mui/material";
import Score from "./Score";
import InfoProduct from "./InfoProduct";
import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1402px] flex flex-row items-start justify-center pt-0 px-5 pb-3 box-border max-w-full text-center text-11xl text-surface-light font-poppins ${className}`}
    >
      <div className="w-[976px] flex flex-row flex-wrap items-start justify-center gap-[13px] max-w-full">
        <div className="w-[222px] flex flex-col items-start justify-start pt-[129px] px-0 pb-0 box-border">
          <h2 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit whitespace-pre-wrap z-[1] mq450:text-lg mq450:leading-[27px] mq800:text-5xl mq800:leading-[36px]">{`Trending  Courses & Certifications`}</h2>
        </div>
        <div className="flex-1 flex flex-row items-start justify-center gap-[21px] min-w-[482px] max-w-full text-left text-sm text-black font-space-grotesk mq800:flex-wrap mq800:min-w-full">
          <div className="flex-[0.8972] rounded-xl bg-surface-light border-black border-[1px] border-solid box-border flex flex-col items-end justify-start pt-6 pb-[18px] pl-2 pr-[27px] relative gap-[11px] min-w-[234px] max-w-full z-[1] mq450:pt-5 mq450:box-border mq450:flex-1">
            <div className="w-[310px] flex flex-row items-start justify-end py-0 px-px box-border text-5xs">
              <div className="flex-1 flex flex-col items-end justify-start pt-[9px] pb-[13.5px] pl-[9px] pr-3 relative gap-[118.1px] mq450:gap-[59px]">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/thumbnail1@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="w-[104.8px] flex flex-row items-start justify-start gap-[7.6px]">
                    <div className="flex-1 rounded-3xs bg-surface-light overflow-hidden flex flex-row items-start justify-start py-[5.1px] px-1 whitespace-nowrap z-[1]">
                      <b className="relative leading-[10px] inline-block min-w-[42px]">
                        Best Seller
                      </b>
                    </div>
                    <div className="w-[43.2px] rounded-3xs bg-alert-warning overflow-hidden shrink-0 flex flex-row items-start justify-start py-[5.1px] px-1 box-border whitespace-nowrap z-[1] text-surface-light">
                      <b className="relative leading-[10px] inline-block min-w-[32px]">
                        20% OFF
                      </b>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[19.5px] h-[20.2px] relative rounded-3xs object-cover z-[1]"
                  alt=""
                  src="/person-outline-24px@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3.5 pr-[7px]">
              <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[110px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-1">
                    <img
                      className="h-[18px] w-[17.8px] relative object-cover min-h-[18px]"
                      alt=""
                      src="/person-outline-24px-1@2x.png"
                    />
                    <div className="flex-1 relative leading-[18px]">
                      Acadspace
                    </div>
                  </div>
                </div>
                <div className="w-[132.2px] flex flex-row items-start justify-start gap-[5.1px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                    <img
                      className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rating1@2x.png"
                    />
                  </div>
                  <Score
                    iconFontSize="12px"
                    iconMinWidth="unset"
                    scoreContainerMarginTop="-9px"
                    scoreFontFamily="Roboto"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[19px] flex flex-row items-start justify-end py-0 pl-3 pr-[5px] box-border text-center text-dark">
              <div className="self-stretch flex-1 relative capitalize font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Learn Figma - UI/UX Design Essential Training
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center pt-[9.5px] pb-[17.5px] pl-[3px] pr-0 gap-[30px] mq450:flex-wrap">
              <InfoProduct
                propWidth="unset"
                icon=""
                propFlex="unset"
                propWidth1="14px"
                propDisplay="flex"
                propMinWidth="14px"
                lesson6="Lesson : 6"
                propMinWidth1="60px"
              />
              <InfoProduct
                propWidth="unset"
                icon=""
                propFlex="unset"
                propWidth1="14px"
                propDisplay="flex"
                propMinWidth="14px"
                lesson6="student : 198"
                propMinWidth1="78px"
              />
              <InfoProduct
                propWidth="18px"
                icon=""
                propFlex="1"
                propWidth1="unset"
                propDisplay="unset"
                propMinWidth="unset"
                lesson6="Beginner"
                propMinWidth1="52px"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-px pr-3.5 text-mid">
              <div className="flex-1 flex flex-row items-end justify-between gap-5 mq450:flex-wrap mq450:justify-center">
                <Button
                  className="h-10 w-[119px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "14",
                    background: "#faff01",
                    border: "#000 solid 1px",
                    borderRadius: "27px",
                    "&:hover": { background: "#faff01" },
                    width: 119,
                    height: 40,
                  }}
                >
                  Start course
                </Button>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <div className="flex flex-row items-start justify-start gap-px">
                    <b className="relative leading-[26px] inline-block min-w-[79px]">
                      Rs.35000
                    </b>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs">
                      <div className="relative [text-decoration:line-through] leading-[24px] inline-block min-w-[56px]">
                        Rs.40000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[997px] h-[480px] absolute !m-[0] right-[-398px] bottom-[-57px] rounded-xl border-surface-light border-[1px] border-solid box-border z-[5]" />
            <div className="w-[997px] h-[485px] absolute !m-[0] right-[-398px] bottom-[-637px] rounded-xl border-surface-light border-[1px] border-solid box-border" />
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[17px] min-w-[234px] max-w-full text-5xs">
            <div className="self-stretch rounded-xl bg-surface-light border-black border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[27px] px-2 pb-[18px] gap-3 max-w-full z-[1] mq450:pt-5 mq450:box-border">
              <div className="w-[323px] flex flex-col items-end justify-start gap-[7px] max-w-full">
                <div className="self-stretch flex flex-col items-end justify-start pt-[9px] pb-[13.5px] pl-[23px] pr-[35px] relative gap-[118.1px] mq450:gap-[59px]">
                  <img
                    className="w-[calc(100%_-_14px)] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[14px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/thumbnail-1@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <div className="rounded-4xl bg-surface-light overflow-hidden flex flex-row items-start justify-start py-[5.1px] px-1 shrink-0 whitespace-nowrap z-[1]">
                        <b className="relative leading-[10px] inline-block min-w-[42px]">
                          Best Seller
                        </b>
                      </div>
                      <div className="rounded-4xl bg-alert-warning overflow-hidden flex flex-row items-start justify-start py-[5.1px] px-1 shrink-0 whitespace-nowrap z-[1] text-surface-light">
                        <b className="relative leading-[10px] inline-block min-w-[32px]">
                          20% OFF
                        </b>
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[18.1px] h-[20.2px] relative rounded-4xl object-cover z-[1]"
                    alt=""
                    src="/person-outline-24px-2@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[11px] text-center text-sm">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3.5 pr-[7px] text-left">
                    <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[110px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-1">
                          <img
                            className="h-[18px] w-[17.8px] relative object-cover min-h-[18px]"
                            alt=""
                            src="/person-outline-24px-1@2x.png"
                          />
                          <div className="flex-1 relative leading-[18px]">
                            Acadspace
                          </div>
                        </div>
                      </div>
                      <div className="w-[132.2px] flex flex-row items-start justify-start gap-[5.1px]">
                        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                          <img
                            className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/rating1@2x.png"
                          />
                        </div>
                        <Score
                          iconFontSize="12px"
                          iconMinWidth="unset"
                          scoreContainerMarginTop="-9px"
                          scoreFontFamily="Roboto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[19px] flex flex-row items-start justify-end py-0 pl-3 pr-[5px] box-border text-dark">
                    <div className="self-stretch flex-1 relative capitalize font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                      Learn Figma - UI/UX Design Essential Training
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-center pt-[9.5px] pb-[17.5px] pl-[3px] pr-0 gap-[30px] text-base text-dark-25 font-font-awesome-6-free mq450:flex-wrap">
                    <InfoProduct
                      propWidth="unset"
                      icon=""
                      propFlex="unset"
                      propWidth1="14px"
                      propDisplay="flex"
                      propMinWidth="14px"
                      lesson6="Lesson : 6"
                      propMinWidth1="60px"
                    />
                    <InfoProduct
                      propWidth="unset"
                      icon=""
                      propFlex="unset"
                      propWidth1="14px"
                      propDisplay="flex"
                      propMinWidth="14px"
                      lesson6="student : 198"
                      propMinWidth1="78px"
                    />
                    <InfoProduct icon="" lesson6="Beginner" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[11px] box-border max-w-full text-mid">
                <div className="flex-1 rounded-31xl flex flex-row items-end justify-between py-0 pl-0 pr-[22px] box-border max-w-full gap-5 mq450:flex-wrap">
                  <button className="cursor-pointer border-black border-[1px] border-solid py-2 pl-[15px] pr-3.5 bg-yellow-200 rounded-31xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-yellow-400 hover:border-darkslategray hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-sm leading-[20px] capitalize font-medium font-poppins text-black text-center inline-block min-w-[88px]">
                      Start course
                    </div>
                  </button>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                    <div className="flex flex-row items-start justify-start gap-px">
                      <b className="relative leading-[26px] inline-block min-w-[79px]">
                        Rs.35000
                      </b>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs">
                        <div className="relative [text-decoration:line-through] leading-[24px] inline-block min-w-[56px]">
                          Rs.40000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end py-0 px-2 text-center text-lg text-yellow-200 font-poppins">
              <div className="flex flex-row items-end justify-start gap-2">
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
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
