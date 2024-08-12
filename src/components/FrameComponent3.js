import { Button } from "@mui/material";
import Score from "./Score";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[104px] max-w-full text-center text-31xl text-surface-light font-poppins mq450:gap-[26px] mq800:gap-[52px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit leading-[74px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-11xl mq450:leading-[44px] mq800:text-21xl mq800:leading-[59px]">
        Discover
      </h1>
      <div className="w-[1429px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-16xl">
        <div className="w-[1095px] rounded-xl [background:linear-gradient(#020c0d,_#020c0d),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border flex flex-row flex-wrap items-start justify-center pt-[23px] pb-[17px] pl-[27px] pr-1.5 gap-[7px] max-w-full z-[1]">
          <div className="h-[456px] w-[1095px] relative rounded-xl [background:linear-gradient(#020c0d,_#020c0d),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border hidden max-w-full" />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[17px] box-border min-w-[252px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[410px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-5294@2x.png"
              />
              <div className="!m-[0] absolute top-[-1px] left-[-2px] rounded-t-xl rounded-b-none [background:linear-gradient(rgba(2,_12,_13,_0.5),_rgba(2,_12,_13,_0.5)),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] flex flex-row items-end justify-start pt-[5px] pb-1 pl-[91px] pr-7 box-border gap-[41px] w-full z-[3] mq450:flex-wrap mq450:gap-5 mq450:pl-5 mq450:box-border">
                <div className="h-[62px] w-[373px] relative rounded-t-xl rounded-b-none [background:linear-gradient(rgba(2,_12,_13,_0.5),_rgba(2,_12,_13,_0.5)),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] hidden max-w-full" />
                <h1 className="m-0 relative text-inherit font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[4] mq450:text-2xl mq800:text-9xl">
                  Webinars
                </h1>
                <div className="w-[38px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border text-25xl">
                  <div className="self-stretch rounded-41xl border-surface-light border-[1px] border-solid flex flex-row items-start justify-start p-0.5 z-[4]">
                    <h1 className="m-0 w-8 relative text-inherit leading-[30px] font-medium font-inherit flex items-center justify-center shrink-0 [backdrop-filter:blur(4px)] mq450:text-7xl mq450:leading-[36px] mq800:text-16xl mq800:leading-[48px]">
                      +
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[371px] rounded-xl bg-gray border-stroke border-[1px] border-solid box-border flex flex-col items-end justify-start pt-0 px-0 pb-3 gap-[5.5px] max-w-full z-[2]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(2,_12,_13,_0.52),_rgba(2,_12,_13,_0.52)),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] flex flex-row items-end justify-between pt-[3px] pb-1.5 pl-[106px] pr-[22px] box-border max-w-full gap-5 z-[2] mq450:flex-wrap mq450:pl-5 mq450:box-border">
                <div className="h-[62px] w-[371px] relative rounded-t-3xs rounded-b-none [background:linear-gradient(rgba(2,_12,_13,_0.52),_rgba(2,_12,_13,_0.52)),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] hidden max-w-full" />
                <h1 className="m-0 relative text-inherit font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3] mq450:text-2xl mq800:text-9xl">
                  Courses
                </h1>
                <div className="w-[38px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border text-25xl">
                  <div className="self-stretch rounded-41xl border-surface-light border-[1px] border-solid flex flex-row items-start justify-start p-0.5 z-[3]">
                    <h1 className="m-0 w-8 relative text-inherit leading-[30px] font-medium font-inherit flex items-center justify-center shrink-0 [backdrop-filter:blur(4px)] mq450:text-7xl mq450:leading-[36px] mq800:text-16xl mq800:leading-[48px]">
                      +
                    </h1>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-[30px] mt-[-36.2px] text-left text-5xs text-black font-space-grotesk">
                <div className="flex-1 flex flex-row items-start justify-start pt-[8.9px] px-2.5 pb-[150.7px] relative gap-[7.8px] mq450:flex-wrap">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/thumbnail@2x.png"
                  />
                  <div className="w-[55.7px] rounded-3xs bg-surface-light overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5.1px] px-1 pb-[5px] box-border whitespace-nowrap z-[1]">
                    <b className="relative leading-[10px] inline-block min-w-[42px]">
                      Best Seller
                    </b>
                  </div>
                  <div className="w-[44.5px] rounded-3xs bg-alert-warning overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5.1px] px-1 pb-[5px] box-border whitespace-nowrap z-[1] text-surface-light">
                    <b className="relative leading-[10px] inline-block min-w-[32px]">
                      20% OFF
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[17px] pr-[7px] box-border max-w-full text-lg text-black">
              <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-2.5 max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full">
                      <div className="w-[312.9px] flex flex-row items-start justify-start gap-[18.2px]">
                        <div className="w-[140.9px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[2.5px]">
                            <img
                              className="h-[30.6px] w-[30.4px] relative object-cover shrink-0"
                              loading="lazy"
                              alt=""
                              src="/instructor@2x.png"
                            />
                            <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                              <div className="self-stretch relative leading-[18px] inline-block min-w-[108px] shrink-0">
                                Acadspace
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-end justify-start gap-[1.8px] text-secondary font-font-awesome-6-free">
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7.2px]">
                            <img
                              className="self-stretch h-[25px] relative max-w-full overflow-hidden shrink-0 object-cover"
                              loading="lazy"
                              alt=""
                              src="/rating@2x.png"
                            />
                          </div>
                          <Score />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full text-left text-dark">
                        <div className="flex-1 relative capitalize font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-full">
                          Learn Figma - UI/UX Design Essential Training
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-[5px] box-border max-w-full text-mini text-dark-25 font-font-awesome-6-free">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[9px] max-w-full mq450:flex-wrap">
                        <div className="w-3.5 flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border text-base">
                          <div className="self-stretch h-4 relative leading-[24px] flex items-center justify-center min-w-[14px]">
                            
                          </div>
                        </div>
                        <div className="relative capitalize font-medium font-poppins text-dark-75 text-left inline-block min-w-[73px]">
                          Lesson : 6
                        </div>
                        <div className="w-4 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border text-lg">
                          <div className="self-stretch h-[18px] relative leading-[27.5px] flex items-center justify-center">
                            
                          </div>
                        </div>
                        <div className="relative capitalize font-medium font-poppins text-dark-75 text-left inline-block min-w-[95px]">
                          student : 198
                        </div>
                        <div className="w-[21px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border text-lg">
                          <div className="self-stretch h-[18px] relative leading-[27.5px] flex items-center justify-center whitespace-nowrap">
                            
                          </div>
                        </div>
                        <div className="relative capitalize font-medium font-poppins text-dark-75 text-left inline-block min-w-[68px]">
                          Beginner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-6 max-w-full text-left text-xl mq450:flex-wrap">
                  <Button
                    className="h-9 w-[139px]"
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "18",
                      borderColor: "#000",
                      borderRadius: "40px",
                      "&:hover": { borderColor: "#000" },
                      width: 139,
                      height: 36,
                    }}
                  >
                    Start Now!
                  </Button>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-1.5">
                      <b className="relative leading-[26px] inline-block min-w-[95px] mq450:text-base mq450:leading-[21px]">
                        Rs.35000
                      </b>
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-sm">
                        <div className="relative [text-decoration:line-through] leading-[19px] inline-block min-w-[74px]">
                          Rs.40000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[286px] flex flex-col items-start justify-start pt-[54.4px] px-0 pb-0 box-border text-xl">
            <div className="self-stretch flex flex-col items-end justify-start gap-[22.4px]">
              <div className="w-[270.3px] flex flex-row items-start justify-center py-0 px-5 box-border">
                <img
                  className="h-[126.2px] w-[91.7px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/xmlid-509.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-2">
                <h3 className="m-0 self-stretch relative text-inherit font-medium font-inherit z-[2] mq450:text-base">
                  Book your Slot to Access top Content, Internships, Jobs.
                </h3>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[72px] pr-[65px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <Button
                    className="h-[45px] flex-1 z-[2]"
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      borderColor: "#fff",
                      borderRadius: "40px",
                      "&:hover": { borderColor: "#fff" },
                      height: 45,
                    }}
                  >
                    Book Now!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
