import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[240px] left-[3px] w-full flex flex-col items-start justify-start gap-[43px] max-w-full text-center text-11xl text-gray1-700 font-poppins mq800:gap-[21px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[73px] pr-[77px] box-border max-w-full mq800:pl-9 mq800:pr-[38px] mq800:box-border">
        <h2 className="m-0 flex-1 relative text-inherit leading-[200%] font-bold font-inherit whitespace-pre-wrap inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[2] mq450:text-lg mq450:leading-[36px] mq800:text-5xl mq800:leading-[48px]">{`We are on a Mission to impact over 340 million students seeking Career Guidance With AcadSpace Ai Engine, We envision an ecosystem which can help students get bias-free Recommendations through AI where one can follow the path he/she is destined to take.  `}</h2>
      </div>
      <div className="self-stretch bg-blue-200 overflow-x-auto flex flex-row items-start justify-start pt-[55px] px-[73px] pb-[50px] box-border gap-[35px] max-w-full z-[2] text-31xl text-surface-light mq800:gap-[17px] mq1350:pl-9 mq1350:pr-9 mq1350:box-border">
        <div className="h-[218px] w-[1439px] relative bg-blue-200 shrink-0 hidden" />
        <div className="w-[483px] shrink-0 flex flex-col items-start justify-start gap-[7px] max-w-[calc(100%_-_792px)]">
          <div className="w-[431px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <b className="w-[243px] relative flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3] mq450:text-11xl mq800:text-21xl">
              108903
            </b>
          </div>
          <b className="self-stretch relative text-lg tracking-[0.22em] leading-[150%] uppercase text-gray1-800 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3]">
            Students Found Dream Career
          </b>
        </div>
        <div className="w-[390px] shrink-0 flex flex-col items-start justify-start py-0 pl-0 pr-[58px] box-border gap-[9px] mq450:pr-5 mq450:box-border">
          <div className="w-[313px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <b className="w-[119px] relative flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3] mq450:text-11xl mq800:text-21xl">
              910
            </b>
          </div>
          <b className="self-stretch relative text-lg tracking-[0.22em] leading-[150%] uppercase text-gray1-800 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3]">
            Institutes Trust US
          </b>
        </div>
        <div className="w-[332px] shrink-0 flex flex-col items-end justify-start gap-[11px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[29px] pr-5">
            <b className="w-[119px] relative flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3] mq450:text-11xl mq800:text-21xl">
              120
            </b>
          </div>
          <b className="self-stretch relative text-lg tracking-[0.22em] leading-[150%] uppercase text-gray1-800 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[3]">
            Councellers Trained
          </b>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
