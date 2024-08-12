import PropTypes from "prop-types";

const LoginContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[61px] box-border max-w-full text-left text-5xl text-surface-light font-poppins mq800:pb-10 mq800:box-border ${className}`}
    >
      <div className="w-[1082px] flex flex-row items-start justify-start gap-[17px] max-w-full mq1125:flex-wrap">
        <div className="flex-[0.9718] flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-2.5 box-border min-w-[230px] max-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start pt-3.5 pb-2.5 pl-[17px] pr-[5px] relative gap-[302px] mq450:gap-[151px]">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-29@2x.png"
            />
            <h2 className="m-0 w-[314px] relative text-inherit leading-[40px] font-bold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] z-[2] mq450:text-lgi mq450:leading-[32px]">
              Login to the AcadSpace AI portal
            </h2>
            <div className="self-stretch flex flex-row items-start justify-end text-lg">
              <div className="h-[51px] rounded-41xl bg-gray1-200 flex flex-row items-start justify-start py-0 px-3.5 box-border whitespace-nowrap z-[2]">
                <b className="mt-[-4.5px] relative leading-[60px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] min-w-[128px]">
                  Explore How +
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] flex flex-col items-start justify-start pt-[17px] pb-[13px] pl-2 pr-1 box-border relative gap-[342px] max-w-full mq450:gap-[171px]">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/rectangle-29-1@2x.png"
          />
          <h2 className="m-0 relative text-inherit leading-[40px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] z-[2] mq450:text-lgi mq450:leading-[32px]">
            Ask your Career Questions
          </h2>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-1 text-lg">
            <div className="h-[51px] rounded-41xl bg-gray1-200 flex flex-row items-start justify-start py-0 px-3.5 box-border whitespace-nowrap z-[2]">
              <b className="mt-[-4.5px] relative leading-[60px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] min-w-[128px]">
                Explore How +
              </b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[230px] max-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start pt-[18px] pb-[10.4px] pl-2.5 pr-0 relative gap-[299px] mq450:gap-[149px]">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-xl max-h-full object-contain z-[1]"
              alt=""
              src="/rectangle-29-2@2x.png"
            />
            <h2 className="m-0 self-stretch relative text-inherit leading-[40px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] z-[2] mq450:text-lgi mq450:leading-[32px]">
              Get Personalized Recommendations
            </h2>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-3 text-lg">
              <div className="h-[51px] rounded-41xl bg-gray1-200 flex flex-row items-start justify-start py-0 px-3.5 box-border whitespace-nowrap z-[2]">
                <b className="mt-[-4.5px] relative leading-[60px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] min-w-[128px]">
                  Explore How +
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginContent.propTypes = {
  className: PropTypes.string,
};

export default LoginContent;
