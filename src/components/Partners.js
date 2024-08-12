import PropTypes from "prop-types";

const Partners = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[12.4px] pl-0.5 pr-px box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 z-[1] mq1125:flex-wrap mq1125:justify-center">
        <div className="h-[99.7px] w-[90px] flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/84ec6c40b07de23894f4ac5701026c06-1@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[24.3px]">
          <img
            className="w-[67px] h-[70.9px] relative object-cover"
            alt=""
            src="/logo1476262514-1@2x.png"
          />
        </div>
        <img
          className="h-[119.6px] w-[110px] relative object-cover"
          alt=""
          src="/cvmulogo-1@2x.png"
        />
        <div className="h-[100.8px] w-[76px] flex flex-col items-start justify-end pt-0 px-0 pb-[18.8px] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/placeholder@2x.png"
          />
        </div>
        <div className="h-[99.7px] w-[72px] flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/242422240-1092967194568289-7817923280050240546-n-1@2x.png"
          />
        </div>
        <div className="h-[99.1px] w-[73px] flex flex-col items-start justify-end pt-0 px-0 pb-[20.5px] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/armypublicschoollogo-1@2x.png"
          />
        </div>
        <div className="h-[103.8px] w-[95px] flex flex-col items-start justify-end pt-0 px-0 pb-[15.8px] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/cmru-logo-1@2x.png"
          />
        </div>
        <div className="h-[100.2px] w-[72px] flex flex-col items-start justify-end pt-0 px-0 pb-[19.3px] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/indian-institute-of-space-science-and-technology-logo-1@2x.png"
          />
        </div>
        <div className="h-[104.6px] w-[84px] flex flex-col items-start justify-end pt-0 px-0 pb-[14.9px] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/313212653-480660344095693-1070179117642085002-n-1@2x.png"
          />
        </div>
        <div className="h-[104.8px] w-[109px] flex flex-col items-start justify-end pt-0 px-0 pb-[14.8px] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/maxresdefault-1-1@2x.png"
          />
        </div>
        <div className="h-[109.6px] w-[90px] flex flex-col items-start justify-end pt-0 px-0 pb-[9.9px] box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/nvp-logo-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
};

export default Partners;
