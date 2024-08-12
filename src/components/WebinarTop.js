import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const WebinarTop = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[365.7px] box-border max-w-full text-center text-41xl text-surface-light font-poppins mq450:pb-[101px] mq450:box-border mq800:pb-[155px] mq800:box-border mq1350:pb-[238px] mq1350:box-border ${className}`}
    >
      <div className="flex-1 bg-silver flex flex-col items-end justify-start pt-[281px] px-0 pb-0 box-border relative gap-[100.5px] max-w-full z-[1] mq450:gap-[25px] mq800:gap-[50px] mq800:pt-[119px] mq800:box-border mq1350:pt-[183px] mq1350:box-border">
        <div className="self-stretch h-[1249px] relative bg-silver hidden z-[0]" />
        <img
          className="w-[360.3px] h-[624.5px] absolute !m-[0] top-[0px] right-[-0.1px] object-cover z-[1]"
          alt=""
          src="/image8@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start pt-[61px] px-[232px] pb-[56.6px] box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[58px] mq800:pr-[58px] mq800:box-border mq1350:pl-[116px] mq1350:pr-[116px] mq1350:box-border">
          <h1 className="m-0 w-[971px] relative text-inherit leading-[62px] font-bold font-inherit inline-block shrink-0 max-w-full z-[4] mq450:text-17xl mq450:leading-[37px] mq800:text-29xl mq800:leading-[50px]">
            Explore the world of Webinars
          </h1>
          <div className="w-[776px] flex flex-col items-start justify-start pt-[89.4px] px-0 pb-0 box-border max-w-full ml-[-882px] text-11xl text-yellowgreen-100">
            <h1 className="m-0 self-stretch relative text-inherit leading-[36px] font-normal font-inherit z-[4] mq450:text-lg mq450:leading-[22px] mq800:text-5xl mq800:leading-[29px]">
              Attend Live Webinars from the top 1% of the country.
            </h1>
          </div>
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-blue-100 z-[5]" />
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray1-600 z-[3]" />
        <header className="w-[1405px] !m-[0] absolute top-[25px] left-[17px] flex flex-row items-start justify-start max-w-full text-center text-lg text-surface-light font-poppins">
          <img
            className="h-[624.5px] w-[360.3px] absolute !m-[0] bottom-[-514.5px] left-[343.3px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image7@2x.png"
          />
          <img
            className="h-[624.5px] w-[360.3px] absolute !m-[0] right-[341.2px] bottom-[-514.5px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image2@2x.png"
          />
          <img
            className="h-[624.5px] w-[360.3px] absolute !m-[0] bottom-[-514.5px] left-[-17px] object-cover z-[1]"
            alt=""
            src="/image11@2x.png"
          />
          <div className="flex-1 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25)_inset)] rounded-3xs flex flex-row items-start justify-start pt-2 pb-2.5 pl-0 pr-3 box-border gap-[6.3px] max-w-full z-[4]">
            <img
              className="h-[67px] w-[194px] relative object-cover z-[5]"
              loading="lazy"
              alt=""
              src="/acadspace-logo-4@2x.png"
            />
            <div className="w-[88px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
              <a className="[text-decoration:none] self-stretch relative font-medium text-[inherit] z-[5]">
                Home
              </a>
            </div>
            <div className="w-[120px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
              <a className="[text-decoration:none] self-stretch relative text-[inherit] whitespace-nowrap z-[5]">
                About Us
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full">
                  <div className="w-[202px] flex flex-row items-end justify-start gap-[7px] mq1350:hidden">
                    <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[5]">
                      Discover
                    </a>
                    <div className="w-20 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border">
                      <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[5]">
                        Blogs
                      </a>
                    </div>
                  </div>
                  <a className="[text-decoration:none] w-[150px] relative font-bold text-[inherit] flex items-center justify-center shrink-0 whitespace-nowrap z-[5]">
                    Contact Us
                  </a>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-[13px] box-border max-w-full">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[42px] font-poppins text-mini text-dimgray z-[5]"
                      placeholder="Have a Question?"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="32.9px"
                            height="29px"
                            src="/iconlyboldsend.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#000" },
                        "& .MuiInputBase-root": {
                          height: "42px",
                          backgroundColor: "#fff",
                          paddingRight: "17.1px",
                          borderRadius: "70px",
                          fontSize: "15px",
                        },
                        "& .MuiInputBase-input": { color: "#514e4e" },
                      }}
                    />
                  </div>
                  <div className="w-[127px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                    <button className="cursor-pointer border-surface-light border-[2px] border-solid pt-1 px-0 pb-[5px] bg-yellow-200 self-stretch rounded-21xl flex flex-row items-start justify-start z-[5] hover:bg-yellow-400 hover:border-gainsboro hover:border-[2px] hover:border-solid hover:box-border">
                      <div className="h-[42px] w-[127px] relative rounded-21xl bg-yellow-200 border-surface-light border-[2px] border-solid box-border hidden" />
                      <a className="[text-decoration:none] flex-1 relative text-lg font-poppins text-black text-center z-[6]">
                        Login
                      </a>
                    </button>
                  </div>
                </div>
                <div className="w-[111px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
                  <div className="h-[3px] flex-1 relative bg-yellow-300" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
          <img
            className="self-stretch w-[360.3px] relative max-h-full object-cover min-h-[625px] shrink-0 max-w-full z-[1] mq1125:flex-1"
            loading="lazy"
            alt=""
            src="/image3@2x.png"
          />
          <div className="w-[720.6px] flex flex-row items-start justify-start min-w-[720.6px] shrink-0 [row-gap:20px] max-w-full mq800:flex-wrap mq800:min-w-full mq1125:flex-1">
            <div className="flex-1 flex flex-row items-start justify-start relative min-w-[234px] max-w-full">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[-360.2px] max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image4@2x.png"
              />
              <img
                className="h-[624.5px] flex-1 relative max-w-full overflow-hidden object-cover shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/image5@2x.png"
              />
            </div>
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[234px] min-h-[625px] shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/image6@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

WebinarTop.propTypes = {
  className: PropTypes.string,
};

export default WebinarTop;
