import { TextField } from "@mui/material";
import FrameComponent5 from "../components/FrameComponent5";
import TeamMembers from "../components/TeamMembers";
import FrameComponent6 from "../components/FrameComponent6";
import ContactDetails from "../components/ContactDetails";

const AboutUsPage = () => {
  return (
    <div className="w-full absolute top-0 flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 relative bg-midnightblue-100 max-w-full mq1125:min-h-[3729px]">
        {/* Parallax Section */}
        <div className="relative overflow-hidden">
          <div className="parallax-bg h-[1262px]"></div>
        </div>

        <FrameComponent5 />

        <section className="relative w-full flex flex-col items-end justify-start gap-[70px] max-w-full text-left text-xl text-surface-light font-poppins mq450:gap-[17px] mq800:gap-[35px]">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[40.7px] pl-[23px] pr-5 box-border max-w-full">
            <img
              className="w-[439.5px] relative max-h-full max-w-full z-[1]"
              loading="lazy"
              alt=""
              src="/our-visionaries.svg"
            />
          </div>
          <TeamMembers />
          <div className="flex flex-row items-start justify-end py-0 pl-[39px] pr-[29px] box-border max-w-full">
            <div className="flex flex-row items-end justify-center gap-[40.5px] max-w-full mq800:gap-5 mq1350:flex-wrap">
              <FrameComponent6
                propBackgroundImage="url('/as01-1@2x.png')"
                as011="/as01-1@2x.png"
              />
              <div className="box-border flex flex-col items-start justify-end px-0 pt-0 pb-px w-44">
                <div className="self-stretch flex flex-col items-start justify-start gap-[25px] z-[2]">
                  <div className="flex flex-col items-start self-stretch justify-start">
                    <b className="self-stretch relative leading-[26px] capitalize mq450:text-base mq450:leading-[21px]">
                      Useful Links
                    </b>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2.5 text-sm">
                    <div className="flex flex-col items-start justify-start overflow-hidden">
                      <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                        Registration
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start overflow-hidden">
                      <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                        Home Page
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start overflow-hidden">
                      <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                        What People Say
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start overflow-hidden">
                      <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                        Get Answers
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start overflow-hidden">
                      <div className="w-[183px] relative tracking-[0.8px] leading-[21px] flex items-center">
                        Discover More
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
          <div className="flex flex-row items-end self-stretch justify-start max-w-full text-center text-whitesmoke font-space-grotesk">
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
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;
