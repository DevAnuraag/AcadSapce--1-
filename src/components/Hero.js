import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`w-[1418px] flex flex-row items-start justify-end pt-0 px-[30px] pb-12 box-border max-w-full text-center text-3xl text-surface-light font-poppins mq800:pb-[31px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start gap-[61px] max-w-full mq450:gap-[15px] mq800:gap-[30px] mq1125:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border min-w-[445px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-end py-[197px] pl-2 pr-1.5 box-border relative gap-[27px] min-h-[657px] max-w-full mq800:pt-32 mq800:pb-32 mq800:box-border">
            <h3 className="m-0 relative text-inherit leading-[60px] font-medium font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[4] mq450:text-lg mq450:leading-[48px]">{`Answers curated by top 1% professional’s across the Country `}</h3>
            <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full h-full text-31xl">
              <img
                className="h-[60px] w-[272px] absolute !m-[0] bottom-[197.5px] left-[193.5px] rounded-21xl z-[1]"
                alt=""
                src="/rectangle-5420.svg"
              />
              <img
                className="h-[657px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
                alt=""
                src="/simplerocketsvgvectorillustration-9618754290-1@2x.png"
              />
              <h1 className="!m-[0] w-[763px] absolute top-[165px] right-[-41px] text-inherit leading-[70px] font-bold font-inherit flex items-center [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] z-[4] mq450:text-11xl mq450:leading-[42px] mq800:text-21xl mq800:leading-[56px]">
                <span className="w-full">
                  <span>{`Get all your `}</span>
                  <span className="text-yellow-200">Career</span>
                  <span>{` Questions Answered with `}</span>
                  <span className="text-yellow-200">AcadSpace AI</span>
                </span>
              </h1>
            </div>
            <div className="w-[644px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-5xl text-black">
              <h2 className="m-0 h-[60px] w-[272px] relative text-inherit font-normal font-inherit flex items-center justify-center shrink-0 z-[2] mq450:text-lgi">
                Login Now!
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[613px] flex flex-col items-start justify-start gap-[23px] min-w-[613px] max-w-full mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch grid flex-row items-end justify-start gap-[15px] grid-cols-[repeat(4,_minmax(110px,_1fr))] mq450:grid-cols-[minmax(110px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(110px,_191px))]">
            <div className="h-[195px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-5069@2x.png"
              />
            </div>
            <img
              className="relative max-w-full overflow-hidden max-h-full object-cover min-h-[195px] z-[1] mq450:w-full"
              loading="lazy"
              alt=""
              src="/frame-53@2x.png"
            />
            <div className="h-[195px] flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/frame-51@2x.png"
              />
            </div>
            <div className="h-[198px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-5099@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-3 mq800:flex-wrap">
              <img
                className="h-[195px] w-[139px] relative object-cover min-h-[195px] z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-5416@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[91px]">
                <img
                  className="self-stretch h-[195px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/frame-53@2x.png"
                />
              </div>
              <div className="flex-[0.9267] flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[11px] box-border min-w-[97px] mq450:flex-1">
                <img
                  className="self-stretch h-[195px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  alt=""
                  src="/frame-44@2x.png"
                />
              </div>
              <img
                className="h-[195px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[91px] min-h-[195px] z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-5087@2x.png"
              />
            </div>
            <div className="self-stretch grid flex-row items-start justify-start gap-[15px] grid-cols-[repeat(4,_minmax(110px,_1fr))] mq450:grid-cols-[minmax(110px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(110px,_191px))]">
              <div className="h-[195px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-5089@2x.png"
                />
              </div>
              <div className="h-[195px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-5089@2x.png"
                />
              </div>
              <div className="h-[195px] flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/frame-44@2x.png"
                />
              </div>
              <div className="h-[198px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-5086@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
