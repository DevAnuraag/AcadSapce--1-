import PropTypes from "prop-types";

const ContactDetails = ({ className = "" }) => {
  return (
    <div
      className={`w-[297px] flex flex-col items-start justify-start gap-[25px] min-w-[297px] text-left text-xl text-surface-light font-poppins mq800:flex-1 ${className}`}
    >
      <b className="relative leading-[26px] capitalize inline-block min-w-[113px] z-[3] mq450:text-base mq450:leading-[21px]">
        Contact Us
      </b>
      <div className="self-stretch flex flex-col items-start justify-start gap-1.5 text-base">
        <div className="self-stretch relative tracking-[0.8px] leading-[26px] z-[2]">
          Email : support@acadspace.org
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pl-px pr-0">
          <div className="flex-1 relative tracking-[0.8px] leading-[26px] z-[2]">
            Phone: +91 9967788463
          </div>
        </div>
        <div className="w-[282px] flex flex-col items-start justify-start gap-[11px] text-xl">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
            <b className="flex-1 relative tracking-[0.8px] leading-[26px] capitalize z-[2] mq450:text-base mq450:leading-[21px]">
              Social Media
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[18px]">
            <img
              className="h-10 w-[42.9px] relative overflow-hidden shrink-0 min-h-[40px] z-[2]"
              loading="lazy"
              alt=""
              src="/social-icons.svg"
            />
            <div className="h-10 w-10 relative rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#b13589,_#c62f94_79.31%,_#8a3ac8)] z-[2]">
              <div className="absolute h-[87.5%] w-[87.5%] top-[6.25%] right-[6.25%] bottom-[6.25%] left-[6.25%] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#b13589,_#c62f94_79.31%,_#8a3ac8)] hidden" />
              <div className="absolute top-[2.5px] left-[2.5px] w-[35px] h-[35px]">
                <div className="absolute top-[0px] left-[0px] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#e0e8b7,_#fb8a2e_44.47%,_#e2425c_71.47%,_rgba(226,_66,_92,_0))] w-full h-full" />
                <div className="absolute top-[0px] left-[0px] rounded-md [background:radial-gradient(50%_50%_at_50%_50%,_#406adc_15.67%,_#6a45be_46.78%,_rgba(106,_69,_190,_0))] w-full h-full" />
              </div>
              <img
                className="absolute h-[62.5%] w-[62.5%] top-[18.75%] right-[18.75%] bottom-[18.75%] left-[18.75%] max-w-full overflow-hidden max-h-full z-[3]"
                loading="lazy"
                alt=""
                src="/instagram.svg"
              />
            </div>
            <div className="h-10 w-10 relative rounded-37xl bg-steelblue z-[2]">
              <div className="absolute h-[87.5%] w-[87.5%] top-[6.25%] right-[6.25%] bottom-[6.25%] left-[6.25%] rounded-37xl bg-steelblue hidden" />
              <img
                className="absolute h-[43.75%] w-[47%] top-[25%] right-[24.75%] bottom-[31.25%] left-[28.25%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/linked-in.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactDetails.propTypes = {
  className: PropTypes.string,
};

export default ContactDetails;
