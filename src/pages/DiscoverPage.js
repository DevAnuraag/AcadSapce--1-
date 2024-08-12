import FrameComponent9 from "../components/FrameComponent9";
import CareersGrid from "../components/CareersGrid";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";
import Footer2 from "../components/Footer2";

const DiscoverPage = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-midnightblue-100 flex flex-col items-start justify-start pt-[25px] px-0 pb-[33.3px] box-border gap-[161.7px] max-w-full mq450:gap-10 mq800:gap-[81px] mq1350:pt-5 mq1350:pb-5 mq1350:box-border">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="/rectangle-54151.svg"
        />
        <FrameComponent9 />
        <div className="w-[284px] h-[26px] relative hidden" />
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[575.3px] pl-0 pr-[5px] box-border max-w-full text-center text-21xl text-gray1-700 font-poppins mq450:pb-[243px] mq450:box-border mq1125:pb-[374px] mq1125:box-border">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[1262px] w-[1440px] absolute !m-[0] right-[-4px] bottom-[-726px] object-cover z-[1]"
              alt=""
              src="/original165ac86b13223f21f0ff259fde26d8f0-23@2x.png"
            />
            <div className="flex-1 bg-blue-200 flex flex-row items-start justify-start pt-[5px] pb-0 pl-[75px] pr-[72px] box-border max-w-full z-[2] mq800:pl-[37px] mq800:pr-9 mq800:box-border">
              <div className="self-stretch w-[1436px] relative bg-blue-200 hidden max-w-full" />
              <h1 className="m-0 flex-1 relative text-inherit leading-[200%] font-bold font-inherit whitespace-pre-wrap inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[3] mq450:text-5xl mq450:leading-[48px] mq800:text-13xl mq800:leading-[64px]">
                Every week, we feature some of our favorite webinars with
                Subject Experts from different Fields. You can explore below
                webinars, courses, your choice of Careers that interest you.
              </h1>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[110px] max-w-full text-center text-31xl text-surface-light font-poppins mq450:gap-[27px] mq800:gap-[55px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[74px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-11xl mq450:leading-[44px] mq800:text-21xl mq800:leading-[59px]">
            Discover Careers
          </h1>
          <CareersGrid />
          <FrameComponent10 />
          <FrameComponent11 />
          <FrameComponent12 />
        </section>
        <Footer2 />
      </main>
    </div>
  );
};

export default DiscoverPage;
