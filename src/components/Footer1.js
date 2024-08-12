import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0.5 box-border max-w-full ${className}`}
    >
      <footer className="flex-1 flex flex-col items-end justify-start gap-[70px] max-w-full text-left text-xl text-surface-light font-poppins mq800:gap-[35px] mq450:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[39px] pr-[29px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-end justify-start gap-[40.5px] max-w-full mq1350:flex-wrap mq800:gap-5">
            <FrameComponent6
              propBackgroundImage="url('/as01-11@2x.png')"
              as011="/as01-11@2x.png"
            />
            <div className="w-44 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <img
                  className="h-[289px] w-[1441px] absolute !m-[0] top-[-64px] right-[-816px] z-[1]"
                  alt=""
                  src="/rectangle-54282.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[25px] z-[2]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <h3 className="m-0 self-stretch relative text-inherit leading-[26px] capitalize font-bold font-inherit mq450:text-base mq450:leading-[21px]">
                      Useful Links
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-sm">
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
              </div>
            </div>
            <div className="w-[745px] flex flex-row items-start justify-start gap-[31px] max-w-full mq800:flex-wrap mq800:gap-[15px]">
              <div className="w-[297px] flex flex-col items-start justify-start gap-[25px] min-w-[297px] mq800:flex-1">
                <h3 className="m-0 relative text-inherit leading-[26px] capitalize font-bold font-inherit inline-block min-w-[113px] z-[3] mq450:text-base mq450:leading-[21px]">
                  Contact Us
                </h3>
                <div className="self-stretch flex flex-col items-start justify-start gap-1.5 text-base">
                  <div className="self-stretch relative tracking-[0.8px] leading-[26px] z-[2]">
                    Email : support@acadspace.org
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                      <div className="flex-1 relative tracking-[0.8px] leading-[26px] z-[2]">
                        Phone: +91 9967788463
                      </div>
                    </div>
                    <div className="w-[283px] flex flex-row items-start justify-start py-0 px-px box-border text-xl">
                      <h3 className="m-0 flex-1 relative text-inherit tracking-[0.8px] leading-[26px] capitalize font-bold font-inherit z-[2] mq450:text-base mq450:leading-[21px]">
                        Social Media
                      </h3>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[18px]">
                      <img
                        className="h-10 w-[43px] relative overflow-hidden shrink-0 min-h-[40px] z-[2]"
                        loading="lazy"
                        alt=""
                        src="/social-icons2.svg"
                      />
                      <div className="h-10 w-10 relative rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#b13589,_#c62f94_79.31%,_#8a3ac8)] z-[2]">
                        <div className="absolute h-[87.5%] w-[87.5%] top-[6.25%] right-[6.25%] bottom-[6.25%] left-[6.25%] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#b13589,_#c62f94_79.31%,_#8a3ac8)] hidden" />
                        <div className="absolute top-[2.5px] left-[2.5px] w-[35px] h-[35px]">
                          <div className="absolute top-[0px] left-[0px] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#e0e8b7,_#fb8a2e_44.47%,_#e2425c_71.47%,_rgba(226,_66,_92,_0))] w-full h-full" />
                          <div className="absolute top-[0px] left-[0px] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#406adc_15.67%,_#6a45be_46.78%,_rgba(106,_69,_190,_0))] w-full h-full" />
                        </div>
                        <img
                          className="absolute h-[62.5%] w-[62.5%] top-[18.75%] right-[18.75%] bottom-[18.75%] left-[18.75%] max-w-full overflow-hidden max-h-full z-[3]"
                          loading="lazy"
                          alt=""
                          src="/instagram.svg"
                        />
                      </div>
                      <div className="h-10 w-10 relative rounded-37xl bg-steelblue z-[2]">
                        <div className="absolute h-[87.5%] w-[87.5%] top-[6.25%] right-[6.25%] bottom-[6.25%] left-[6.25%] rounded-37xl bg-steelblue hidden" />
                        <img
                          className="absolute h-[43.75%] w-[47%] top-[25%] right-[24.75%] bottom-[31.25%] left-[28.25%] max-w-full overflow-hidden max-h-full z-[1]"
                          loading="lazy"
                          alt=""
                          src="/linked-in.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[271px] max-w-full">
                <h3 className="m-0 w-[400px] relative text-inherit tracking-[0.8px] leading-[26px] capitalize font-bold font-inherit flex items-center max-w-full z-[3] mq450:text-base mq450:leading-[21px]">
                  Subscribe Us
                </h3>
                <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-base">
                  <div className="self-stretch relative tracking-[0.8px] leading-[25.6px] z-[2]">
                    Subscribe to Our Newsletter and Stay Updated with latest
                    News, Trends, Events.
                  </div>
                  <div className="w-[403px] flex flex-row items-start justify-start gap-2 max-w-full text-center text-black mq450:flex-wrap">
                    <TextField
                      className="[border:none] bg-[transparent] h-[35px] flex-1 font-poppins text-sm text-surface-light min-w-[189px] z-[2]"
                      placeholder="Enter email here..."
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#fff" },
                        "& .MuiInputBase-root": {
                          height: "35px",
                          borderRadius: "50px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": { color: "#fff" },
                      }}
                    />
                    <div className="w-[104px] rounded-21xl bg-yellow-200 border-surface-light border-[1px] border-solid box-border flex flex-row items-start justify-start z-[2]">
                      <div className="h-[33px] w-[101px] relative font-medium flex items-center justify-center shrink-0">
                        Send
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start max-w-full text-center text-whitesmoke font-space-grotesk">
          <h3 className="m-0 w-[1437px] relative text-inherit tracking-[0.8px] leading-[26px] capitalize font-bold font-inherit whitespace-pre-wrap flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
            CopyRight 2024 Acadspace.org. All Rights Received
          </h3>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px ml-[-892px]">
            <img
              className="w-[29px] h-[23px] relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/icon1.svg"
            />
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
