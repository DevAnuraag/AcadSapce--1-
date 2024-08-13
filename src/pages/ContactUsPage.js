import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import ContactForm from "../components/ContactForm";
import FooterContent from "../components/FooterContent";

const ContactUsPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start min-h-[2336px] leading-[normal] tracking-[normal]">
      <main className="self-stretch bg-midnightblue-100 flex flex-col items-end justify-start pt-0 px-0 pb-[28.3px] box-border gap-[11px] max-w-full text-center text-xl text-whitesmoke font-space-grotesk">
        <img
          className="relative self-stretch hidden max-w-full max-h-full overflow-hidden"
          alt=""
          src="/rectangle-5415.svg"
        />
        <section className="box-border flex flex-row items-start self-stretch justify-end max-w-full py-0 pl-0 pr-px text-center text-21xl text-gray1-700 font-poppins">
          <div className="relative flex flex-row items-start justify-start flex-1 max-w-full">
            <img
              className="h-[1262px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              alt=""
              src="/original165ac86b13223f21f0ff259fde26d8f0-21@2x.png"
            />
            <h1 className="!m-[0] w-[1289px] absolute top-[391px] left-[75px] text-inherit leading-[200%] font-bold font-inherit flex items-center justify-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2] mq800:text-13xl mq800:leading-[64px] mq450:text-5xl mq450:leading-[48px]">
              Any question or remarks? Just write us a message!
            </h1>
          </div>
        </section>
        <div className="w-[284px] h-[26px] relative hidden" />
        <ContactForm />
        <FooterContent />
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full">
          <div className="flex flex-row items-end justify-start flex-1 max-w-full">
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
