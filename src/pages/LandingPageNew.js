import { Button } from "@mui/material";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Access from "../components/Access";
import LoginContent from "../components/LoginContent";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";

const LandingPageNew = () => {
  return (
    <div className="w-full pt-[8vh] bg-midnightblue-100 flex flex-col items-start justify-start leading-[normal] tracking-[normal]">

      <main className="flex-1 flex flex-col items-end justify-start pt-[25px] pl-0 box-border gap-1 max-w-full mq1350:pt-5 mq1350:box-border">
        <div className="self-stretch h-[5414px] relative bg-midnightblue-100 hidden" />
        {/* <TopBar /> */}
        <Hero />
        <Partners />
        <Access className="py-12" />

        <section className="self-stretch flex flex-col items-end justify-start pt-0 pb-[109.7px] pl-px pr-0 box-border relative gap-1.5 max-w-full text-center text-9xl text-surface-light font-poppins mq800:pb-[30px] mq800:box-border mq1350:pb-[46px] mq1350:box-border">
          <LoginContent />
          <div className="box-border flex flex-row items-start self-stretch justify-center max-w-full pt-0 pb-2 pl-5 pr-8">
            <div className="w-[1070px] flex flex-col items-end justify-start gap-9 max-w-full mq800:gap-[18px]">
              <div className="w-full">
                <button
                  className="h-full w-fit text-3xl px-8 py-4 text-black bg-[#e8f815] border-white border-2 rounded-[40px] hover:bg-[#e8f815] focus:outline-none"
                >
                  Login Now!
                </button>
              </div>

              <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-3xl mq450:leading-[40px]">
                Explore the world of Webinars, Courses, Jobs, and many more to
                enhance your skills in moving to the right direction.
              </h1>
            </div>
          </div>
          <FrameComponent3 className="pt-12"/>
          <FrameComponent4 />
          <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full px-0 py-16 text-31xl">
            <h1 className="m-0 flex-1 relative text-inherit leading-[74px] font-bold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq450:text-11xl mq450:leading-[44px] mq800:text-21xl mq800:leading-[59px]">
              Updates
            </h1>
          </div>
          <BlogPosts />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPageNew;
