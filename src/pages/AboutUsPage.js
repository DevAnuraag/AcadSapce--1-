import FrameComponent5 from "../components/FrameComponent5";
import TeamMembers from "../components/TeamMembers";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div className="w-full absolute top-0 flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 relative bg-midnightblue-100 max-w-full mq1125:min-h-[3729px]">
        {/* Parallax Section */}
        <div className="relative overflow-hidden">
          <div className="parallax-bg h-[1262px]"></div>
        </div>

        <FrameComponent5 />

        <section className="relative flex flex-col items-end justify-start w-full max-w-full text-left text-surface-light font-poppins">
          <div className="box-border flex flex-row items-start self-stretch justify-center max-w-full py-16 font-bold text-26xl">
            Our Visionaries
          </div>
          <TeamMembers />
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default AboutUsPage;
