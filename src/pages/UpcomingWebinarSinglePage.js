import FrameComponent8 from "../components/FrameComponent8";
import WebinarContent from "../components/WebinarContent";
import Footer3 from "../components/Footer3";

const UpcomingWebinarSinglePage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#1d1050,_#1d1050)] flex flex-col items-end justify-start pt-[43px] px-[35px] pb-[33px] box-border gap-[235px] leading-[normal] tracking-[normal] mq825:gap-[59px] mq1250:gap-[117px]">
      <img
        className="w-[1920px] h-[2698px] relative hidden max-w-full"
        alt=""
        src="/rectangle-5196.svg"
      />
      <div className="w-[289px] h-[18px] relative overflow-hidden shrink-0 hidden" />
      <FrameComponent8 />
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-1 pb-[35px] box-border max-w-full text-left text-5xl text-slategray font-space-grotesk">
        <div className="flex-1 flex flex-col items-start justify-start gap-[81px] max-w-full mq825:gap-10 mq450:gap-5">
          <div className="flex flex-row flex-wrap items-start justify-start gap-2.5 max-w-full">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[66px] z-[1] mq450:text-lgi">
              Home
            </a>
            <div className="flex flex-col items-start justify-start pt-[10.6px] px-0 pb-0">
              <img
                className="w-[7.5px] h-[9.7px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/navbar-links.svg"
              />
            </div>
            <div className="relative font-medium inline-block min-w-[100px] z-[1] mq450:text-lgi">
              Discover
            </div>
            <div className="flex flex-col items-start justify-start pt-[10.6px] px-0 pb-0">
              <img
                className="w-[7.5px] h-[9.7px] relative z-[1]"
                alt=""
                src="/-1.svg"
              />
            </div>
            <div className="relative font-medium inline-block min-w-[109px] z-[1] mq450:text-lgi">
              Webinars
            </div>
            <div className="flex flex-col items-start justify-start pt-[10.6px] px-0 pb-0">
              <img
                className="w-[7.5px] h-[9.7px] relative z-[1]"
                alt=""
                src="/-2.svg"
              />
            </div>
            <div className="relative font-medium text-cornflowerblue z-[1] mq450:text-lgi">
              Upcoming Webinars
            </div>
          </div>
          <WebinarContent />
        </div>
      </section>
      <Footer3 />
    </div>
  );
};

export default UpcomingWebinarSinglePage;
