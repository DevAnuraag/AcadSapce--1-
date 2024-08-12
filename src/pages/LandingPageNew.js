import { Button } from "@mui/material";
import TopBar from "../components/TopBar";
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
    <div className="w-full absolute top-0 pt-[8vh] bg-midnightblue-100 flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 flex flex-col items-end justify-start pt-[25px] pb-[42.3px] pl-0 pr-px box-border gap-1 max-w-full mq1350:pt-5 mq1350:pb-5 mq1350:box-border">
        <div className="self-stretch h-[5414px] relative bg-midnightblue-100 hidden" />
        {/* <TopBar /> */}
        <Hero />
        <Partners />
        <Access />
        <section className="self-stretch flex flex-col items-end justify-start pt-0 pb-[109.7px] pl-px pr-0 box-border relative gap-1.5 max-w-full text-center text-9xl text-surface-light font-poppins mq800:pb-[30px] mq800:box-border mq1350:pb-[46px] mq1350:box-border">
          <LoginContent />
          <div className="box-border flex flex-row items-start self-stretch justify-center max-w-full pt-0 pb-2 pl-5 pr-8">
            <div className="w-[1070px] flex flex-col items-end justify-start gap-9 max-w-full mq800:gap-[18px]">
              <div className="w-[1051px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <Button
                  className="h-[61px] w-[217px] z-[1]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "24",
                    background: "#e8f815",
                    border: "#fff solid 2px",
                    borderRadius: "40px",
                    "&:hover": { background: "#e8f815" },
                    width: 217,
                    height: 61,
                  }}
                >
                  Login Now!
                </Button>
              </div>
              <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-3xl mq450:leading-[40px]">
                Explore the world of Webinars, Courses, Jobs, and many more to
                enhance your skills in moving to the right direction.
              </h1>
            </div>
          </div>
          <FrameComponent3 />
          <FrameComponent4 />
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[132px] box-border max-w-full text-31xl">
            <h1 className="m-0 flex-1 relative text-inherit leading-[74px] font-bold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq450:text-11xl mq450:leading-[44px] mq800:text-21xl mq800:leading-[59px]">
              Updates
            </h1>
          </div>
          <BlogPosts />
          <img
            className="w-[1441px] h-[288.9px] absolute !m-[0] bottom-[-242.2px] left-[0px] z-[1]"
            alt=""
            src="/rectangle-5428.svg"
          />
        </section>
        <div className="w-[284px] h-[26px] relative hidden" />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPageNew;
