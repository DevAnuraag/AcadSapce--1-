import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent6 from "./FrameComponent6";
import ContactDetails from "./ContactDetails";
import PropTypes from "prop-types";

const Footer2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full ${className}`}
    >
      <footer className="flex-1 flex flex-col items-end justify-start gap-[70px] max-w-full text-left text-xl text-surface-light font-poppins mq450:gap-[17px] mq800:gap-[35px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[39px] pr-[29px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-end justify-start gap-[40.5px] max-w-full mq800:gap-5 mq1350:flex-wrap">
            <FrameComponent6
              propBackgroundImage="url('/as01-1@2x.png')"
              as011="/as01-1@2x.png"
            />
            <div className="w-44 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <img
                  className="h-[289px] w-[1440px] absolute !m-[0] top-[-63.7px] right-[-816px] z-[1]"
                  alt=""
                  src="/rectangle-54281.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[25px] z-[2]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[26px] capitalize mq450:text-base mq450:leading-[21px]">
                      Useful Links
                    </b>
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
              <ContactDetails />
              <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[271px] max-w-full">
                <b className="w-[400px] relative tracking-[0.8px] leading-[26px] capitalize flex items-center max-w-full z-[3] mq450:text-base mq450:leading-[21px]">
                  Subscribe Us
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-base">
                  <div className="self-stretch relative tracking-[0.8px] leading-[25.6px] z-[2]">
                    Subscribe to Our Newsletter and Stay Updated with latest
                    News, Trends, Events.
                  </div>
                  <div className="w-[403px] flex flex-row items-start justify-start gap-2 max-w-full mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[189px]">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-[35px] font-poppins text-sm text-surface-light z-[2]"
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
                    </div>
                    <Button
                      className="h-[35px] w-[104px] z-[2]"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "16",
                        background: "#faff01",
                        border: "#fff solid 1px",
                        borderRadius: "40px",
                        "&:hover": { background: "#faff01" },
                        width: 104,
                        height: 35,
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start max-w-full text-center text-whitesmoke font-space-grotesk">
          <b className="w-[1437px] relative tracking-[0.8px] leading-[26px] capitalize flex whitespace-pre-wrap items-center justify-center shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
            CopyRight 2024 Acadspace.org. All Rights Received
          </b>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px ml-[-892px]">
            <img
              className="w-[29px] h-[23px] relative overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
