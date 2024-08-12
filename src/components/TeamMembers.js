import { Button } from "@mui/material";
import MemberOneInfoDuplicate from "./MemberOneInfoDuplicate";
import PropTypes from "prop-types";

const TeamMembers = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[63.7px] pl-5 pr-[31px] box-border max-w-full text-center text-base text-gray1-900 font-poppins ${className}`}
    >
      <div className="w-[1064px] flex flex-col items-start justify-start gap-[91.4px] max-w-full mq800:gap-[23px] mq1125:gap-[46px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[44.3px] max-w-full mq800:gap-[22px] mq1125:flex-wrap">
          <div className="flex-1 flex flex-col items-end justify-start pt-3 px-2 pb-[13px] box-border relative gap-[284px] min-w-[214px] max-w-full mq450:gap-[142px] mq1125:flex-1">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              alt=""
              src="/rectangle-5429@2x.png"
            />
            <img
              className="w-12 h-11 relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/social-icons1.svg"
            />
            <div className="w-[277px] flex flex-row items-start justify-end py-0 px-[21px] box-border">
              <Button
                className="h-[61px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "24",
                  background: "rgba(0, 0, 0, 0.78)",
                  border: "#fff solid 1px",
                  borderRadius: "60px",
                  "&:hover": { background: "rgba(0, 0, 0, 0.78)" },
                  height: 61,
                }}
              >
                Vikrant Shome
              </Button>
            </div>
          </div>
          <div className="w-[316px] flex flex-col items-end justify-start pt-3 px-[11px] pb-2.5 box-border relative gap-[284px] mq450:gap-[142px]">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              alt=""
              src="/rectangle-5430@2x.png"
            />
            <img
              className="w-12 h-11 relative overflow-hidden shrink-0 z-[2]"
              alt=""
              src="/social-icons1.svg"
            />
            <div className="w-[241px] flex flex-row items-start justify-end py-0 px-[3px] box-border">
              <Button
                className="h-[61px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "24",
                  background: "rgba(0, 0, 0, 0.78)",
                  border: "#fff solid 1px",
                  borderRadius: "60px",
                  "&:hover": { background: "rgba(0, 0, 0, 0.78)" },
                  height: 61,
                }}
              >
                Jinal Trivedi
              </Button>
            </div>
          </div>
          <div className="flex-[0.9491] flex flex-col items-end justify-start pt-[26px] px-4 pb-2.5 box-border relative gap-[269px] min-w-[214px] max-w-full mq450:gap-[134px] mq1125:flex-1">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
              alt=""
              src="/rectangle-5431@2x.png"
            />
            <img
              className="w-12 h-[45px] relative overflow-hidden shrink-0 z-[2]"
              alt=""
              src="/social-icons-2.svg"
            />
            <div className="w-[239px] flex flex-row items-start justify-end py-0 px-0.5 box-border">
              <Button
                className="h-[61px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "24",
                  background: "rgba(0, 0, 0, 0.78)",
                  border: "#fff solid 1px",
                  borderRadius: "60px",
                  "&:hover": { background: "rgba(0, 0, 0, 0.78)" },
                  height: 61,
                }}
              >
                Hitesh Diwani
              </Button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[42px] pr-[50px] box-border max-w-full mq1125:pl-[21px] mq1125:pr-[25px] mq1125:box-border">
          <div className="flex-1 flex flex-col items-end justify-start gap-[88.4px] max-w-full mq800:gap-[22px] mq1125:gap-11">
            <div className="w-[955.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <img
                className="w-[497.2px] relative max-h-full max-w-full z-[1]"
                loading="lazy"
                alt=""
                src="/the-driving-force.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq800:gap-5">
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[34px] max-w-full mq800:gap-[17px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[33px] min-w-[305px] max-w-full mq800:gap-4">
                    <div className="self-stretch flex flex-col items-start justify-start py-[51px] pl-[242px] pr-[66px] relative gap-[3px] mq800:pl-[121px] mq800:pr-[33px] mq800:box-border">
                      <img
                        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/group-1000001892.svg"
                      />
                      <h3 className="m-0 relative text-5xl font-bold font-inherit text-surface-light z-[2] mq450:text-lgi">
                        Anuravo Deb
                      </h3>
                      <div className="relative z-[2]">Full Stack Developer</div>
                      <div className="relative inline-block min-w-[88px] z-[2]">
                        IIT Bombay
                      </div>
                    </div>
                    <MemberOneInfoDuplicate
                      rectangle5257Stroke="/rectangle-5257-stroke.svg"
                      rectangle5414="/rectangle-5414@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[33px] min-w-[305px] max-w-full mq800:gap-4">
                    <MemberOneInfoDuplicate
                      propAlignSelf="stretch"
                      propFlex="unset"
                      propMinWidth="unset"
                      rectangle5257Stroke="/rectangle-5257-stroke.svg"
                      rectangle5414="/rectangle-5414@2x.png"
                    />
                    <MemberOneInfoDuplicate
                      propAlignSelf="stretch"
                      propFlex="unset"
                      propMinWidth="unset"
                      rectangle5257Stroke="/rectangle-5257-stroke.svg"
                      rectangle5414="/rectangle-5414@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq800:gap-5">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[34px] max-w-full mq800:gap-[17px]">
                    <MemberOneInfoDuplicate
                      propAlignSelf="unset"
                      propFlex="1"
                      propMinWidth="305px"
                      rectangle5257Stroke="/rectangle-5257-stroke.svg"
                      rectangle5414="/rectangle-5414@2x.png"
                    />
                    <MemberOneInfoDuplicate
                      propAlignSelf="unset"
                      propFlex="1"
                      propMinWidth="305px"
                      rectangle5257Stroke="/rectangle-5257-stroke.svg"
                      rectangle5414="/rectangle-5414@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[34px] max-w-full mq800:gap-[17px]">
                    <MemberOneInfoDuplicate
                      propAlignSelf="unset"
                      propFlex="1"
                      propMinWidth="305px"
                      rectangle5257Stroke="/rectangle-5257-stroke.svg"
                      rectangle5414="/rectangle-5414@2x.png"
                    />
                    <MemberOneInfoDuplicate
                      propAlignSelf="unset"
                      propFlex="1"
                      propMinWidth="305px"
                      rectangle5257Stroke="/rectangle-5257-stroke.svg"
                      rectangle5414="/rectangle-5414@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[34px] max-w-full mq800:gap-[17px]">
                <MemberOneInfoDuplicate
                  propAlignSelf="unset"
                  propFlex="1"
                  propMinWidth="305px"
                  rectangle5257Stroke="/rectangle-5257-stroke.svg"
                  rectangle5414="/rectangle-5414@2x.png"
                />
                <MemberOneInfoDuplicate
                  propAlignSelf="unset"
                  propFlex="1"
                  propMinWidth="305px"
                  rectangle5257Stroke="/rectangle-5257-stroke.svg"
                  rectangle5414="/rectangle-5414@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMembers.propTypes = {
  className: PropTypes.string,
};

export default TeamMembers;
