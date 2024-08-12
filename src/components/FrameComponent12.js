import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1410px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-xl text-surface-light font-poppins ${className}`}
    >
      <div className="w-[1000px] flex flex-col items-center justify-start pt-[102px] pb-[79px] pl-12 pr-5 box-border relative gap-[35.8px] max-w-full mq450:gap-[18px] mq450:pl-5 mq450:pt-[66px] mq450:pb-[51px] mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src="/banner-background@2x.png"
        />
        <div className="w-[286px] flex flex-row items-start justify-center">
          <img
            className="h-[126.2px] w-[91.7px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/xmlid-5091.svg"
          />
        </div>
        <div className="w-[286px] flex flex-col items-end justify-start gap-1.5">
          <div className="self-stretch relative font-medium z-[2] mq450:text-base">
            Book your Slot to Access top Content, Internships, Jobs.
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[72px] pr-[65px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <Button
              className="h-[45px] flex-1 z-[2]"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                borderColor: "#fff",
                borderRadius: "40px",
                "&:hover": { borderColor: "#fff" },
                height: 45,
              }}
            >
              Book Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
