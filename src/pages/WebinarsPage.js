import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import WebinarTop from "../components/WebinarTop";
import GroupComponent2 from "../components/GroupComponent2";
import CourseItems from "../components/CourseItems";
import FrameComponent6 from "../components/FrameComponent6";

const WebinarsPage = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-midnightblue-100 flex flex-col items-start justify-start pt-px px-0 pb-[35.3px] box-border max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden z-[1]"
          alt=""
          src="/rectangle-54152.svg"
        />
        <WebinarTop />
        <div className="w-[284px] h-[26px] relative hidden z-[3]" />
        <section className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full mt-[-356.7px] text-center text-31xl text-surface-light font-poppins">
          <div className="flex-1 flex flex-col items-start justify-start gap-[70px] max-w-full mq450:gap-[17px] mq800:gap-[35px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[121.7px] max-w-full mq450:gap-[30px] mq800:gap-[61px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq800:gap-8">
                <div className="self-stretch flex flex-col items-start justify-start gap-[119px] max-w-full mq450:gap-[30px] mq800:gap-[59px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[74px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-11xl mq450:leading-[44px] mq800:text-21xl mq800:leading-[59px]">
                    Webinars
                  </h1>
                  <div className="w-[1418.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-26xl">
                    <div className="w-[1028.2px] flex flex-col items-start justify-start gap-[45px] max-w-full mq800:gap-[22px]">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
                        <div className="flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border max-w-full">
                          <h1 className="m-0 relative text-inherit tracking-[-0.22px] leading-[58px] font-bold font-inherit z-[1] mq450:text-8xl mq450:leading-[35px] mq800:text-17xl mq800:leading-[46px]">
                            Upcoming Webinars
                          </h1>
                        </div>
                        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs flex flex-row items-start justify-start py-2 px-5 box-border gap-[17px] min-w-[346px] max-w-full z-[1] text-center text-2xl mq450:flex-wrap mq450:min-w-full">
                          <img
                            className="h-[129px] w-[533px] relative rounded-3xs hidden max-w-full"
                            alt=""
                            src="/rectangle-5431.svg"
                          />
                          <div className="w-10 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                              <h2 className="m-0 relative text-inherit leading-[120%] font-normal font-inherit inline-block min-w-[40px] z-[2] mq450:text-mid mq450:leading-[20px]">
                                Sun
                              </h2>
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-2.5 text-xl">
                                <div className="flex-1 relative leading-[120%] z-[2] mq450:text-base mq450:leading-[19px]">
                                  19
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[78px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] rounded-8xs [background:linear-gradient(180deg,_#1d104f,_#372972)] border-surface-light border-[0px] border-solid box-border flex flex-col items-start justify-start pt-[17px] px-3.5 pb-[21px] gap-[26px] z-[2]">
                            <img
                              className="w-[78px] h-[113px] relative rounded-8xs hidden"
                              alt=""
                              src="/rectangle-5432.svg"
                            />
                            <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block min-w-[47px] z-[3] mq450:text-mid mq450:leading-[20px]">
                              Mon
                            </h2>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-3 text-xl">
                              <b className="flex-1 relative leading-[120%] z-[3] mq450:text-base mq450:leading-[19px]">
                                20
                              </b>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border min-w-[216px] max-w-full">
                            <div className="self-stretch flex flex-col items-end justify-start gap-[26px] max-w-full">
                              <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-0.5 gap-5 mq450:flex-wrap">
                                <h2 className="m-0 relative text-inherit leading-[120%] font-normal font-inherit inline-block min-w-[38px] z-[2] mq450:text-mid mq450:leading-[20px]">
                                  Tue
                                </h2>
                                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[7px]">
                                  <h2 className="m-0 relative text-inherit leading-[120%] font-normal font-inherit inline-block min-w-[48px] z-[2] mq450:text-mid mq450:leading-[20px]">
                                    Wed
                                  </h2>
                                </div>
                                <h2 className="m-0 relative text-inherit leading-[120%] font-normal font-inherit inline-block min-w-[39px] z-[2] mq450:text-mid mq450:leading-[20px]">
                                  Thu
                                </h2>
                                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                                  <h2 className="m-0 relative text-inherit leading-[120%] font-normal font-inherit inline-block min-w-[24px] z-[2] mq450:text-mid mq450:leading-[20px]">
                                    Fri
                                  </h2>
                                </div>
                                <h2 className="m-0 relative text-inherit leading-[120%] font-normal font-inherit inline-block min-w-[35px] z-[2] mq450:text-mid mq450:leading-[20px]">
                                  Sat
                                </h2>
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[7px] pr-[3px] box-border max-w-full text-xl">
                                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                                  <div className="w-[42px] flex flex-col items-start justify-start py-0 pl-0 pr-[13px] box-border">
                                    <div className="self-stretch relative leading-[120%] z-[2] mq450:text-base mq450:leading-[19px]">
                                      21
                                    </div>
                                  </div>
                                  <div className="w-[46px] flex flex-col items-start justify-start py-0 pl-0 pr-4 box-border">
                                    <div className="self-stretch relative leading-[120%] z-[2] mq450:text-base mq450:leading-[19px]">
                                      22
                                    </div>
                                  </div>
                                  <div className="w-[35px] flex flex-col items-start justify-start py-0 pl-0 pr-[5px] box-border">
                                    <div className="self-stretch relative leading-[120%] z-[2] mq450:text-base mq450:leading-[19px]">
                                      23
                                    </div>
                                  </div>
                                  <div className="w-[30px] relative leading-[120%] flex items-center justify-center shrink-0 z-[2] mq450:text-base mq450:leading-[19px]">
                                    24
                                  </div>
                                  <div className="w-[30px] relative leading-[120%] flex items-center justify-center shrink-0 z-[2] mq450:text-base mq450:leading-[19px]">
                                    25
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[59.8px] max-w-full text-center text-xl font-space-grotesk mq800:gap-[30px] mq1125:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[81.8px] max-w-full mq450:gap-5 mq800:gap-[41px] mq800:min-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-8 pr-0 box-border max-w-full">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[65px] max-w-full mq450:gap-4 mq800:flex-wrap mq800:gap-8 mq1125:flex-1">
                              <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[189px]">
                                <div className="w-[279px] flex flex-row items-start justify-center py-0 px-5 box-border">
                                  <b className="relative leading-[43px] inline-block min-w-[113px] whitespace-nowrap z-[1] mq450:text-base mq450:leading-[34px]">
                                    6:30 PM IST
                                  </b>
                                </div>
                                <div className="self-stretch h-[260px] rounded-3xs border-surface-light border-[2px] border-solid box-border flex flex-row items-start justify-start pt-[0.8px] px-0 pb-0 z-[1]">
                                  <div className="self-stretch w-[291px] relative rounded-3xs border-surface-light border-[2px] border-solid box-border hidden" />
                                  <img
                                    className="h-[259.2px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src="/card1@2x.png"
                                  />
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[189px]">
                                <div className="w-[280px] flex flex-row items-start justify-center py-0 px-5 box-border">
                                  <b className="relative leading-[43px] inline-block min-w-[112px] whitespace-nowrap z-[1] mq450:text-base mq450:leading-[34px]">
                                    7:00 PM IST
                                  </b>
                                </div>
                                <img
                                  className="self-stretch h-[259.2px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                                  alt=""
                                  src="/card-11@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <h1 className="m-0 relative text-26xl tracking-[-0.22px] leading-[58px] font-bold font-poppins text-left inline-block max-w-full z-[1] mq450:text-8xl mq450:leading-[35px] mq800:text-17xl mq800:leading-[46px]">
                            Most Recent Webinars
                          </h1>
                        </div>
                        <div className="h-[317.2px] w-[290.2px] flex flex-col items-start justify-start gap-[15px] min-w-[290.2px] mq1125:flex-1">
                          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px]">
                            <b className="relative leading-[43px] inline-block min-w-[111px] whitespace-nowrap z-[1] mq450:text-base mq450:leading-[34px]">
                              7:30 PM IST
                            </b>
                          </div>
                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                            alt=""
                            src="/card-11@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[1413px] flex flex-row items-start justify-center pt-0 px-5 pb-[9px] box-border max-w-full">
                  <div className="w-[989px] flex flex-row flex-wrap items-start justify-start gap-x-11 gap-y-14 min-h-[718px] max-w-full mq800:gap-7">
                    <GroupComponent2
                      card="/card1@2x.png"
                      starIcon1="pending_5415:5428"
                    />
                    <GroupComponent2
                      propWidth="291px"
                      card="/card1@2x.png"
                      starIcon1="pending_5415:5450"
                    />
                    <GroupComponent2
                      propWidth="291px"
                      card="/card1@2x.png"
                      starIcon1="pending_5415:5472"
                    />
                    <GroupComponent2
                      propWidth="291px"
                      card="/card1@2x.png"
                      starIcon1="pending_5415:5494"
                    />
                    <GroupComponent2
                      propWidth="291px"
                      card="/card1@2x.png"
                      starIcon1="pending_5415:5516"
                    />
                    <GroupComponent2
                      propWidth="291px"
                      card="/card1@2x.png"
                      starIcon1="pending_5415:5538"
                    />
                  </div>
                </div>
                <div className="w-[1396px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-26xl">
                  <div className="w-[1006px] flex flex-col items-start justify-start gap-[71px] max-w-full mq800:gap-[18px] mq1125:gap-[35px]">
                    <h1 className="m-0 relative text-inherit tracking-[-0.22px] leading-[58px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-8xl mq450:leading-[35px] mq800:text-17xl mq800:leading-[46px]">
                      Popular of all time
                    </h1>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[17px] pr-0 box-border max-w-full">
                      <div className="flex-1 grid flex-row items-start justify-start gap-[58px] max-w-full grid-cols-[repeat(3,_minmax(218px,_1fr))] mq800:gap-[29px] mq800:justify-center mq800:grid-cols-[minmax(218px,_1fr)]">
                        <GroupComponent2
                          propWidth="unset"
                          card="/card1@2x.png"
                          starIcon1="pending_5415:5569"
                        />
                        <CourseItems
                          card="/card1@2x.png"
                          starIcon1="pending_5415:5591"
                        />
                        <CourseItems
                          card="/card1@2x.png"
                          starIcon1="pending_5415:5613"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-[31px] box-border max-w-full text-left text-xl">
                <div className="flex flex-row items-end justify-start gap-[40.5px] max-w-full mq800:gap-5 mq1350:flex-wrap">
                  <FrameComponent6
                    propBackgroundImage="url('/as01-1@2x.png')"
                    as011="/as01-1@2x.png"
                  />
                  <div className="w-44 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] z-[2]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <h2 className="m-0 self-stretch relative text-inherit leading-[26px] capitalize font-bold font-inherit mq450:text-base mq450:leading-[21px]">
                          Useful Links
                        </h2>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-2.5 text-sm">
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
                  <div className="w-[745px] flex flex-row items-start justify-start gap-[31px] max-w-full mq800:flex-wrap mq800:gap-[15px]">
                    <div className="w-[297px] flex flex-col items-start justify-start gap-[25px] min-w-[297px] mq800:flex-1">
                      <h2 className="m-0 relative text-inherit leading-[26px] capitalize font-bold font-inherit inline-block min-w-[113px] z-[3] mq450:text-base mq450:leading-[21px]">
                        Contact Us
                      </h2>
                      <div className="self-stretch flex flex-col items-start justify-start gap-1.5 text-base">
                        <div className="self-stretch relative tracking-[0.8px] leading-[26px] z-[2]">
                          Email : support@acadspace.org
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pl-px pr-0">
                          <div className="flex-1 relative tracking-[0.8px] leading-[26px] z-[2]">
                            Phone: +91 9967788463
                          </div>
                        </div>
                        <div className="w-[282px] flex flex-col items-start justify-start gap-[11px] text-xl">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.8px] leading-[26px] capitalize font-bold font-inherit z-[2] mq450:text-base mq450:leading-[21px]">
                              Social Media
                            </h2>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[18px]">
                            <img
                              className="h-10 w-[42.9px] relative overflow-hidden shrink-0 min-h-[40px] z-[2]"
                              loading="lazy"
                              alt=""
                              src="/social-icons.svg"
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
                      <h2 className="m-0 w-[400px] relative text-inherit tracking-[0.8px] leading-[26px] capitalize font-bold font-inherit flex items-center max-w-full z-[3] mq450:text-base mq450:leading-[21px]">
                        Subscribe Us
                      </h2>
                      <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-base">
                        <div className="self-stretch relative tracking-[0.8px] leading-[25.6px] z-[2]">
                          Subscribe to Our Newsletter and Stay Updated with
                          latest News, Trends, Events.
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
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0.5 box-border max-w-full text-xl text-whitesmoke font-space-grotesk">
              <div className="flex-1 flex flex-row items-end justify-start max-w-full">
                <h2 className="m-0 w-[1437px] relative text-inherit tracking-[0.8px] leading-[26px] capitalize font-bold font-inherit whitespace-pre-wrap flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
                  CopyRight 2024 Acadspace.org. All Rights Received
                </h2>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px ml-[-892px]">
                  <img
                    className="w-[29px] h-[23px] relative overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1] mt-[-356.7px]"
          alt=""
          src="/rectangle-54281.svg"
        />
      </main>
    </div>
  );
};

export default WebinarsPage;
