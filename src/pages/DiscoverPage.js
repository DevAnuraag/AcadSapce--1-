import CareersGrid from "../components/CareersGrid";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";
import Footer from "../components/Footer";

const DiscoverPage = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-midnightblue-100 flex flex-col items-start justify-start pt-0 px-0 pb-[33.3px] box-border gap-[161.7px] max-w-full mq450:gap-10 mq800:gap-[81px] mq1350:pt-5 mq1350:pb-5 mq1350:box-border">

        {/* Parallax background */}
        <div
          className="absolute top-0 left-0 w-full h-[1262px] bg-fixed bg-cover bg-center z-[1]"
          style={{ backgroundImage: 'url("/original-165ac86b13223f21f0ff259fde26d8f0.png")' }}
        />

        {/* First Section */}
        <section className="self-stretch flex  flex-row items-center justify-center pt-0 h-[100vh] pl-0 box-border max-w-full text-center text-21xl text-gray1-700 font-poppins mq450:pb-[243px] mq450:box-border mq1125:pb-[374px] mq1125:box-border">
          <div className="relative flex flex-row items-start justify-start flex-1 max-w-full bg-green-400">
            <div className="flex-1 bg-blue-200 flex flex-row items-start justify-start pt-[5px] pb-0 pl-[75px] pr-[72px] box-border max-w-full z-[2] mq800:pl-[37px] mq800:pr-9 mq800:box-border">
              <div className="self-stretch w-[1436px] relative bg-blue-200 hidden max-w-full" />
              <h1 className="m-0 flex-1 relative text-inherit leading-[200%] font-bold font-inherit whitespace-pre-wrap inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[3] mq450:text-5xl mq450:leading-[48px] mq800:text-13xl mq800:leading-[64px]">
                Discover webinars, courses, find your choice of Careers and many more.
              </h1>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="flex flex-col items-start self-stretch justify-start max-w-full text-center bg-midnightblue-100 text-31xl text-surface-light font-poppins">
          <h1 className="m-0 self-stretch bg-midnightblue-100 relative text-inherit  py-24 font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq800:text-21xl">
            Discover Careers
          </h1>
          <CareersGrid className="bg-midnightblue-100"/>
          <FrameComponent10 />
          <FrameComponent11 />
          <FrameComponent12 />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default DiscoverPage;
