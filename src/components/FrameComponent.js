import PropTypes from "prop-types";

const FrameComponent = ({ className = "", schoolName, testimonial, imageSrc, author }) => {
  return (
    <div
      className={`flex-1 mx-4 rounded-xl [background:linear-gradient(#fff,_#fff),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[19px] px-[5px] pb-[38px] max-w-full z-[1] text-center text-7xl text-black font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[34px] max-w-full mq800:gap-[17px]">
        <div className="box-border flex flex-row items-center justify-center w-full max-w-full py-0 mq800:box-border">
          <h2 className="m-0 flex-1 w-full relative text-inherit text-center leading-[31.34px] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-2xl mq450:leading-[25px]">
            {schoolName}
          </h2>
        </div>
        <div className="relative flex flex-row items-start self-stretch justify-start max-w-full text-xl text-gray1-300">
          <h3 className="m-0 flex-1 relative text-inherit leading-[31.34px] font-medium font-inherit inline-block max-w-full z-[2] mq450:text-base mq450:leading-[25px]">
            {testimonial}
          </h3>
          <div className="h-full w-full absolute !m-[0] flex items-center justify-center">
            <img
              className="object-cover z-[3] w-48"
              loading="lazy"
              alt=""
              src={imageSrc}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[19px] text-left text-3xl-8">
        <b className="relative inline-block min-w-[67px] z-[2] mq450:text-lg">
          - {author}
        </b>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  schoolName: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default FrameComponent;
