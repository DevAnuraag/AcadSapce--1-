import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", blog4jpg }) => {
  return (
    <div
      className={`rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[13px] gap-4 max-w-full z-[1] text-left text-sm text-black font-poppins ${className}`}
    >
      <div className="self-stretch h-[446px] relative rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border hidden" />
      <img
        className="self-stretch h-64 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[2]"
        loading="lazy"
        alt=""
        src={blog4jpg}
      />
      <div className="w-36 flex flex-row items-start justify-start py-0 px-[9px] box-border">
        <div className="flex-1 rounded-xl border-black border-[1px] border-solid flex flex-row items-start justify-start pt-1 px-[11px] pb-px gap-[7px] z-[2]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="w-4 h-4 relative rounded-[50%] bg-deepskyblue" />
          </div>
          <div className="relative inline-block min-w-[77px]">Internships</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-2.5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
            <b className="flex-1 relative leading-[20px] inline-block max-w-full z-[2]">
              Unlocking Career Success: The Crucial Role of Internships in
              Career Development
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[35px] text-base text-secondary-400 mq450:flex-wrap mq450:gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-1.5">
              <img
                className="h-9 w-9 relative rounded-9xl object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="relative leading-[24px] font-medium z-[2]">
                  Manish Shivangi
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm">
              <div className="flex flex-col items-start justify-start gap-[21px]">
                <div className="relative leading-[24px] inline-block min-w-[95px] z-[2]">
                  July 31st 2024
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-[33px] pr-0 text-deepskyblue">
                  <div className="relative tracking-[0.8px] leading-[14px] font-medium inline-block min-w-[85px] z-[2]">
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  blog4jpg: PropTypes.string,
};

export default FrameComponent1;
