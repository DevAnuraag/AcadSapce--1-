import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import ContactForm from "../components/ContactForm";
import FooterContent from "../components/FooterContent";

const ContactUsPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start min-h-[2336px] leading-[normal] tracking-[normal]">
      <main className="self-stretch bg-midnightblue-100 flex flex-col items-end justify-start pt-0 px-0 pb-[28.3px] box-border gap-[11px] max-w-full text-center text-xl text-whitesmoke font-space-grotesk">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="/rectangle-5415.svg"
        />
        <section className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full text-center text-21xl text-gray1-700 font-poppins">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[1262px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              alt=""
              src="/original165ac86b13223f21f0ff259fde26d8f0-21@2x.png"
            />
            <header className="w-[1405px] !m-[0] absolute top-[25px] left-[17px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25)_inset)] rounded-3xs flex flex-row items-start justify-start pt-2 pb-2.5 pl-0 pr-3 box-border gap-[6.6px] max-w-full z-[2] text-center text-lg text-surface-light font-poppins">
              <img
                className="h-[67px] w-[194px] relative object-cover z-[3]"
                loading="lazy"
                alt=""
                src="/acadspace-logo-4@2x.png"
              />
              <div className="w-[88px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                <a className="[text-decoration:none] self-stretch relative font-medium text-[inherit] z-[3]">
                  Home
                </a>
              </div>
              <div className="w-[120px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                <a className="[text-decoration:none] self-stretch relative text-[inherit] whitespace-nowrap z-[3]">
                  About Us
                </a>
              </div>
              <div className="w-[115px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[3]">
                  Discover
                </a>
              </div>
              <div className="w-20 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[3]">
                  Blogs
                </a>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-row items-end justify-start gap-2 max-w-full mq1350:hidden">
                    <div className="w-[150px] flex flex-col items-start justify-end pt-0 px-0 pb-[19px] box-border">
                      <a className="[text-decoration:none] self-stretch relative font-bold text-[inherit] whitespace-nowrap z-[3]">
                        Contact Us
                      </a>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-3 box-border max-w-full">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-[42px] font-poppins text-mini text-dimgray z-[3]"
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
                    <button className="cursor-pointer border-surface-light border-[2px] border-solid pt-1 px-0 pb-[5px] bg-yellow-200 w-[127px] rounded-21xl box-border flex flex-row items-start justify-start z-[3] hover:bg-yellow-400 hover:border-gainsboro hover:border-[2px] hover:border-solid hover:box-border">
                      <div className="h-[42px] w-[127px] relative rounded-21xl bg-yellow-200 border-surface-light border-[2px] border-solid box-border hidden" />
                      <a className="[text-decoration:none] flex-1 relative text-lg font-poppins text-black text-center z-[4]">
                        Login
                      </a>
                    </button>
                  </div>
                  <div className="w-[147px] flex flex-row items-start justify-start py-0 px-10 box-border">
                    <div className="h-[3px] flex-1 relative bg-yellow-300" />
                  </div>
                </div>
              </div>
            </header>
            <h1 className="!m-[0] w-[1289px] absolute top-[391px] left-[75px] text-inherit leading-[200%] font-bold font-inherit flex items-center justify-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2] mq800:text-13xl mq800:leading-[64px] mq450:text-5xl mq450:leading-[48px]">
              Any question or remarks? Just write us a message!
            </h1>
          </div>
        </section>
        <div className="w-[284px] h-[26px] relative hidden" />
        <ContactForm />
        <FooterContent />
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-end justify-start max-w-full">
            <h3 className="m-0 w-[1437px] relative text-inherit tracking-[0.8px] leading-[26px] capitalize font-bold font-inherit whitespace-pre-wrap flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[21px]">
              CopyRight 2024 Acadspace.org. All Rights Received
            </h3>
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
      </main>
      <div className="self-stretch h-[243px] relative bg-blue-200 z-[5] mt-[-2027px]" />
    </div>
  );
};

export default ContactUsPage;
