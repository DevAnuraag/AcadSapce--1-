import PropTypes from "prop-types";

const WebinarContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[26px] pr-0 box-border max-w-full text-justify text-7xl text-surface-light font-space-grotesk ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[41px] max-w-full mq825:gap-5 mq1575:flex-wrap">
        <div className="w-[774px] flex flex-col items-start justify-start gap-[53px] min-w-[774px] max-w-full mq1250:min-w-full mq1575:flex-1 mq450:gap-[26px]">
          <div className="w-[761px] h-[757px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
            <img
              className="h-[757px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/card2@2x.png"
            />
          </div>
          <div className="self-stretch relative tracking-[3px] leading-[50px] font-light z-[1] mq450:text-2xl mq450:leading-[40px]">
            <p className="m-0">{`
​The webinar aims to guide students and parents to provide insights into the software and technology industry, helping attendees determine if a career in this field is the right path for them. We will discuss the necessary skills, personality traits, educational background, and career opportunities in the software and technology sector.`}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`​Join our exclusive session with the expert team from AcadSpace where senior faculties and industrialists, graduates from IIM Calcutta, & ISB will share practical insights and strategies to help you thrive, no matter where you are.
`}</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[652px] max-w-full text-left text-31xl mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="w-[882px] flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[29px] shrink-0 max-w-full">
                <div className="w-[798px] flex flex-col items-start justify-start gap-[47px] max-w-full mq450:gap-[23px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full">
                    <h1 className="m-0 flex-1 relative text-inherit tracking-[3px] leading-[67px] font-bold font-inherit inline-block max-w-full z-[1] mq825:text-21xl mq825:leading-[54px] mq450:text-11xl mq450:leading-[40px]">{`Who Should Pursue a Career in Software & Technology?`}</h1>
                  </div>
                  <div className="w-[509px] flex flex-col items-start justify-start gap-[9px] max-w-full text-3xl">
                    <div className="self-stretch flex flex-row items-end justify-start gap-2.5 max-w-full mq825:flex-wrap">
                      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px]">
                        <img
                          className="w-[107px] h-[110px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/26thjulydaydatecalendariconhdtransparentpng735811696670590thtlw9leuy-1@2x.png"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[3px] leading-[46px] inline-block min-w-[255px] max-w-full z-[1] mq450:text-lg mq450:leading-[37px]">
                        <p className="m-0">Friday, July 26</p>
                        <p className="m-0">6:30 PM - 7:30 PM GMT+5:30</p>
                      </div>
                    </div>
                    <div className="w-[232px] flex flex-row items-start justify-start py-0 px-[19px] box-border">
                      <div className="flex-1 flex flex-row items-start justify-start gap-7 mq450:flex-wrap">
                        <img
                          className="h-[70px] w-[70px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/zoom-4401470-1@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[62px]">
                          <div className="self-stretch relative tracking-[3px] leading-[46px] z-[1] mq450:text-lg mq450:leading-[37px]">
                            Zoom
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full text-3xl text-gray1-900">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
                    <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                      <div className="relative tracking-[3px] leading-[46px] font-medium z-[1] mq450:text-lg mq450:leading-[37px]">
                        Registration!
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-darkslateblue flex flex-col items-start justify-start pt-4 pb-8 pl-[9px] pr-0 gap-[19px] z-[1] text-center text-xl text-surface-light">
                      <div className="self-stretch h-[163px] relative rounded-xl bg-darkslateblue hidden" />
                      <div className="self-stretch relative leading-[46px] z-[2] mq450:text-base mq450:leading-[37px]">
                        Welcome! To join the event, please register below.
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[30px] text-midnightblue-200 font-goldman">
                        <div className="h-[50px] w-[313px] relative">
                          <div className="absolute top-[3px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-yellow-200 w-[313px] flex flex-row items-start justify-center pt-3 pb-[11px] pl-[22px] pr-5 box-border whitespace-nowrap z-[2]">
                            <div className="relative tracking-[0.1px]">
                              Register Now!
                            </div>
                          </div>
                          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-yellow-200 w-[313px] flex flex-row items-start justify-center pt-3 pb-[11px] pl-[22px] pr-5 box-border whitespace-nowrap z-[3]">
                            <div className="relative tracking-[0.1px]">
                              Register Now!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[935px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-justify text-7xl">
              <div className="mt-[-15px] flex-1 relative tracking-[3px] leading-[38px] font-light inline-block shrink-0 max-w-full z-[2] mq450:text-2xl mq450:leading-[30px]">
                <p className="m-0">📅 Date: Friday, 26th July</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">​⏰ Time: 6:30 PM</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  ​✨ Special Gift:🎁 Attendees will receive our exclusive
                  "Handbook to College Success" – your ultimate guide to
                  navigating the college years successfully.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">​You will learn to:</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  ​- 👩‍🎓 Analysis of undergraduate options and education pathways
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`​- ✅ Insights on careers within software & technology`}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  ​- 🏫 How to boost your profile and skills, and keep up with
                  emerging trends
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">​- ✅ Tips to secure internships, jobs</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`​- 🏫 Q&A`}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  ​AcadSpace is dedicated to providing the structured support
                  how to choose right college and course!
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  ​We can’t wait to help you kickstart your journey to success!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WebinarContent.propTypes = {
  className: PropTypes.string,
};

export default WebinarContent;
