import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const Footer3 = ({ className = "" }) => {
  return (
    <footer
      className={`w-[1771px] flex flex-row items-start justify-start [row-gap:20px] max-w-full text-justify text-base text-darkgray font-space-grotesk mq1575:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1250:min-w-full mq1575:flex-wrap">
        <div className="w-[417px] flex flex-col items-start justify-start gap-[19px] min-w-[417px] max-w-full mq825:min-w-full mq1575:flex-1">
          <div className="w-[218px] h-[65px] flex flex-row items-center justify-start bg-[url('/public/as01-11@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
            <img
              className="h-[65px] w-[218px] relative object-cover hidden"
              alt=""
              src="/as01-11@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[272px] w-[1920px] absolute !m-[0] top-[-98px] right-[-1389px] rounded-3xs z-[1]"
                alt=""
                src="/rectangle-5256.svg"
              />
              <div className="flex-1 relative tracking-[0.8px] leading-[25px] inline-block max-w-full z-[2]">
                Get all your Career Questions Answered with AcadSpace AI,
                Answers tailored to your needs, curated by top 1% professional’s
                across the Country.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[767.3px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[767.3px] max-w-full text-left text-xl text-whitesmoke font-space-mono mq1250:min-w-full mq1575:flex-1">
          <div className="self-stretch flex flex-col items-end justify-start gap-[82px] max-w-full mq825:gap-[41px] mq450:gap-5">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq825:flex-wrap">
              <div className="w-44 flex flex-col items-start justify-start gap-[25px] min-w-[176px] z-[2] mq825:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="self-stretch relative tracking-[0.8px] leading-[26px] capitalize mq450:text-base mq450:leading-[21px]">
                    Useful Links
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start gap-2.5 text-sm text-darkgray font-space-grotesk">
                  <div className="overflow-hidden flex flex-col items-start justify-start">
                    <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                      Registration
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col items-start justify-start">
                    <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                      Home Page
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col items-start justify-start">
                    <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                      What People Say
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col items-start justify-start">
                    <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                      Get Answers
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col items-start justify-start">
                    <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                      Discover More
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[419px] flex flex-col items-start justify-start gap-5 min-w-[419px] max-w-full mq825:flex-1 mq825:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full mq825:flex-1">
                    <div className="w-[402px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                      <b className="flex-1 relative tracking-[0.8px] leading-[26px] capitalize inline-block max-w-full z-[2] mq450:text-base mq450:leading-[21px]">
                        Contact Us
                      </b>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full text-base text-darkgray font-space-grotesk">
                      <div className="self-stretch relative tracking-[0.8px] leading-[26px] z-[3]">
                        Email : support@acadspace.org
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
                        <div className="flex-1 relative tracking-[0.8px] leading-[26px] inline-block max-w-full z-[3]">
                          Phone: +91 9967788463
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[402px] flex flex-col items-start justify-start gap-[17px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                    <b className="flex-1 relative tracking-[0.8px] leading-[26px] capitalize inline-block max-w-full z-[2] mq450:text-base mq450:leading-[21px]">
                      Social Media
                    </b>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[15.3px]">
                    <img
                      className="h-[42px] w-[45px] relative overflow-hidden shrink-0 min-h-[42px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/social-icons3.svg"
                    />
                    <img
                      className="h-[42px] w-[45px] relative overflow-hidden shrink-0 min-h-[42px] z-[2]"
                      alt=""
                      src="/social-icons-1.svg"
                    />
                    <img
                      className="h-[42px] w-[45px] relative overflow-hidden shrink-0 min-h-[42px] z-[2]"
                      alt=""
                      src="/social-icons-21.svg"
                    />
                    <img
                      className="h-[42px] w-[45px] relative overflow-hidden shrink-0 min-h-[42px] z-[2]"
                      alt=""
                      src="/social-icons-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[47px] pr-[46px] box-border max-w-full font-space-grotesk mq825:pl-[23px] mq825:pr-[23px] mq825:box-border">
              <div className="flex-1 flex flex-row items-end justify-start max-w-full">
                <div className="w-[674px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full">
                  <b className="self-stretch relative tracking-[0.8px] leading-[26px] capitalize whitespace-pre-wrap z-[1] mq450:text-base mq450:leading-[21px]">
                    CopyRight 2024 Acadspace.org. All Rights Received
                  </b>
                </div>
                <img
                  className="h-[25px] w-[27px] relative overflow-hidden shrink-0 z-[2] ml-[-561px]"
                  loading="lazy"
                  alt=""
                  src="/icon2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[505px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[505px] max-w-full ml-[-7px] text-left text-xl text-whitesmoke font-space-mono mq825:min-w-full mq1575:flex-1 mq1575:ml-0">
        <div className="self-stretch flex flex-col items-start justify-start gap-[23.5px] max-w-full">
          <b className="w-[400px] relative tracking-[0.8px] leading-[26px] capitalize flex items-center max-w-full z-[2] mq450:text-base mq450:leading-[21px]">
            Subscribe Us
          </b>
          <div className="w-[417px] relative text-base tracking-[0.8px] leading-[25.6px] font-space-grotesk text-darkgray flex items-center max-w-full z-[2]">
            Subscribe to Our Newsletter and Stay Updated with latest News,
            Trends, Events.
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-2 max-w-full mq825:flex-wrap">
            <TextField
              className="[border:none] bg-[transparent] h-[50px] flex-1 font-space-grotesk text-sm text-darkgray min-w-[248px] max-w-full z-[2]"
              placeholder="Enter email here..."
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#fff" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  borderRadius: "10px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "#acacac" },
              }}
            />
            <button className="cursor-pointer [border:none] pt-0 px-0 pb-[1.8px] bg-yellow-200 w-[116px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg flex flex-row items-start justify-start box-border z-[2]">
              <div className="h-[44.2px] w-[116px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-yellow-200 hidden" />
              <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-yellow-200 flex flex-row items-start justify-start pt-[9px] pb-[7.2px] pl-[15px] pr-1.5 z-[1]">
                <img
                  className="h-7 w-[30px] relative min-h-[28px]"
                  alt=""
                  src="/submit-icon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-9px]">
                  <div className="self-stretch h-6 relative text-base font-goldman text-midnightblue-100 text-center flex items-center justify-center shrink-0">
                    Send
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer3.propTypes = {
  className: PropTypes.string,
};

export default Footer3;
