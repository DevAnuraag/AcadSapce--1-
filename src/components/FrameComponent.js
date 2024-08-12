import PropTypes from "prop-types";

const FrameComponent = ({ className = "", prop }) => {
  return (
    <div
      className={`flex-1 rounded-xl [background:linear-gradient(#fff,_#fff),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[19px] px-[5px] pb-[38px] gap-[23px] max-w-full z-[1] text-center text-7xl text-black font-poppins ${className}`}
    >
      <div className="w-[521px] h-[280px] relative rounded-xl [background:linear-gradient(#fff,_#fff),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border hidden max-w-full" />
      <div className="self-stretch flex flex-col items-end justify-start gap-[34px] max-w-full mq800:gap-[17px]">
        <div className="w-[485px] flex flex-row items-start justify-end py-0 px-[70px] box-border max-w-full mq800:pl-[35px] mq800:pr-[35px] mq800:box-border">
          <h2 className="m-0 flex-1 relative text-inherit leading-[31.34px] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-2xl mq450:leading-[25px]">
            Kasiga School, Dehradun
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-xl text-gray1-300">
          <h3 className="m-0 flex-1 relative text-inherit leading-[31.34px] font-medium font-inherit inline-block max-w-full z-[2] mq450:text-base mq450:leading-[25px]">{`The best Platform to find your career even if you are not sure yourself. Their Ai Engine is especially Helpful in carefully crafting the best step forward. `}</h3>
          <img
            className="h-[212px] w-[260px] absolute !m-[0] right-[109px] bottom-[-84px] object-cover z-[3]"
            loading="lazy"
            alt=""
            src={prop}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[19px] text-left text-3xl-8">
        <b className="relative inline-block min-w-[67px] z-[2] mq450:text-lg">
          - Rizu
        </b>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
};

export default FrameComponent;
