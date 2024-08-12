import PropTypes from "prop-types";

const ContactForm = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-center text-31xl text-surface-light font-poppins ${className}`}
    >
      <img
        className="h-[289px] w-[1440px] absolute !m-[0] bottom-[-249.3px] left-[0px] z-[1]"
        alt=""
        src="/rectangle-54281.svg"
      />
      <div className="flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[116.7px] box-border gap-[95px] max-w-full mq800:gap-[47px] mq800:pb-[76px] mq800:box-border mq450:gap-6">
        <h1 className="m-0 self-stretch relative text-inherit leading-[74px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq800:text-21xl mq800:leading-[59px] mq450:text-11xl mq450:leading-[44px]">
          Contact Us
        </h1>
        <div className="w-[1381px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-9xl text-midnightblue-200">
          <div className="w-[1073px] flex flex-row flex-wrap items-end justify-center gap-14 max-w-full mq800:gap-7">
            <div className="flex-1 shadow-[0px_0px_60px_30px_rgba(0,_0,_0,_0.03)] rounded-3xs bg-surface-light flex flex-row items-start justify-start pt-[31px] pb-[18px] pl-6 pr-[11px] box-border gap-[51.5px] min-w-[650px] max-w-full z-[1] mq800:gap-[26px] mq800:min-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq1150:flex-wrap">
              <div className="h-[432px] w-[1000px] relative shadow-[0px_0px_60px_30px_rgba(0,_0,_0,_0.03)] rounded-3xs bg-surface-light hidden max-w-full" />
              <div className="w-[354.5px] flex flex-col items-start justify-start gap-[28.2px] min-w-[354.5px] max-w-full mq800:min-w-full mq1150:flex-1">
                <div className="w-[306px] h-[162px] flex flex-col items-start justify-start gap-[13px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/as01-2@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-0 pl-[11px] pr-0">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-3xl">
                      Contact Information
                    </h1>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 box-border max-w-full text-base">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[27.5px]">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/bxsphonecall.svg"
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/icsharpemail.svg"
                      />
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/carbonlocationfilled.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[194px]">
                      <div className="relative whitespace-nowrap z-[2]">
                        +91-7333456789
                      </div>
                      <div className="relative whitespace-nowrap z-[2]">
                        anuraag@gmail.com
                      </div>
                      <div className="relative z-[2]">
                        kormangala, Near Forum Mall, 560010
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[363px] max-w-full text-sm mq800:min-w-full">
                <div className="self-stretch flex flex-col items-end justify-start gap-[24.1px] max-w-full">
                  <div className="self-stretch flex flex-col items-end justify-start gap-[9.5px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.6px] max-w-full mq800:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[18.3px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[37px] mq450:flex-wrap mq450:gap-[18px]">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[135px]">
                            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                              <div className="relative leading-[20px] font-medium inline-block min-w-[76px] z-[2]">
                                First Name
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start pt-0 pb-[5px] pl-[5px] pr-0.5">
                              <img
                                className="h-px w-[200px] relative z-[2]"
                                loading="lazy"
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[9.7px] pl-[5px] pr-0">
                              <div className="flex-1 flex flex-col items-start justify-start gap-4">
                                <div className="relative leading-[20px] font-medium inline-block min-w-[57px] z-[2]">
                                  Email ID
                                </div>
                                <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                                  <img
                                    className="h-px w-[200px] relative z-[2]"
                                    loading="lazy"
                                    alt=""
                                    src="/vector-4.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-[134.1px] relative text-base leading-[20px] font-medium inline-block z-[2]">
                              Select Subject?
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[130px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                              <div className="relative leading-[20px] font-medium inline-block min-w-[75px] z-[2]">
                                Last Name
                              </div>
                              <img
                                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[2]"
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-4">
                              <div className="relative leading-[20px] font-medium inline-block min-w-[105px] z-[2]">
                                Phone Number
                              </div>
                              <img
                                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[2]"
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[2.2px] max-w-full mq450:flex-wrap">
                            <div className="h-[105.4px] flex-1 relative min-w-[105px]">
                              <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[38px] h-full">
                                <div className="flex flex-row items-start justify-start gap-1">
                                  <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                                    <img
                                      className="w-4 h-[15px] relative overflow-hidden shrink-0 z-[2]"
                                      loading="lazy"
                                      alt=""
                                      src="/teenyiconstickcirclesolid.svg"
                                    />
                                  </div>
                                  <div className="relative leading-[20px] inline-block min-w-[113.2px] z-[2]">
                                    General Inquiry
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                                  <div className="flex-1 flex flex-col items-start justify-start gap-[5.4px]">
                                    <div className="relative leading-[20px] font-medium inline-block min-w-[64px] z-[2]">
                                      Message
                                    </div>
                                    <div className="self-stretch relative text-xs leading-[20px] font-medium text-gray1-500 z-[2]">
                                      Write your message..
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <img
                                className="absolute top-[1.8px] left-[141.2px] w-4 h-[15px] overflow-hidden z-[2]"
                                alt=""
                                src="/teenyiconstickcirclesolid-1.svg"
                              />
                            </div>
                            <div className="w-[137.2px] flex flex-row items-start justify-start gap-2">
                              <div className="h-[23.1px] flex-1 relative leading-[20px] inline-block z-[2]">
                                About Career
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                                <img
                                  className="w-4 h-[15px] relative overflow-hidden shrink-0 z-[2]"
                                  alt=""
                                  src="/teenyiconstickcirclesolid-1.svg"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-2">
                              <div className="h-[23.1px] relative leading-[20px] inline-block min-w-[113.2px] z-[2]">
                                About Courses
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[2.8px] px-0 pb-0">
                                <img
                                  className="w-4 h-[15px] relative overflow-hidden shrink-0 z-[2]"
                                  alt=""
                                  src="/teenyiconstickcirclesolid-3.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[177px] px-0 pb-0">
                        <div className="h-[23.1px] relative leading-[20px] inline-block shrink-0 min-w-[113.2px] z-[2]">
                          About Webinars
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[5px] pr-1 box-border max-w-full">
                      <img
                        className="flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                        loading="lazy"
                        alt=""
                        src="/vector-9.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[205.8px] flex flex-row items-start justify-end py-0 px-[17px] box-border">
                    <button className="cursor-pointer border-surface-light border-[2px] border-solid pt-1.5 pb-[5px] pl-3.5 pr-3 bg-yellow-200 flex-1 rounded-21xl flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-yellow-400 hover:border-gainsboro hover:border-[2px] hover:border-solid hover:box-border">
                      <div className="h-11 w-[171px] relative rounded-21xl bg-yellow-200 border-surface-light border-[2px] border-solid box-border hidden" />
                      <div className="w-[141px] relative text-lg font-poppins text-black text-center flex items-center justify-center shrink-0 z-[3]">
                        Send Message
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <img
                className="w-[17px] h-5 relative z-[1]"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
