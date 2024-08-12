import { Button } from "@mui/material";
import Hamburger from "./Hamburger";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full ${className}`}
    >
      <div className="w-[1760px] flex flex-row items-end justify-between gap-5 max-w-full">
        <img
          className="h-[83px] w-[285px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/acadspace-logo-2@2x.png"
        />
        <div className="w-[271px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[29px]">
            <div className="h-[58px] flex-1 relative z-[1]">
              <div className="absolute top-[6px] left-[0px] shadow-[-15px_10px_40px_rgba(0,_0,_0,_0.5),_-5px_10px_100px_rgba(178,_180,_255,_0.4)_inset,_-1px_2px_2px_#d1d6f8_inset] rounded-3xs bg-yellow-200 w-[180px] h-[52px]" />
              <Button
                className="absolute top-[0px] left-[0px] shadow-[-15px_10px_40px_rgba(0,_0,_0,_0.5),_-5px_10px_100px_rgba(178,_180,_255,_0.4)_inset,_-1px_2px_2px_#d1d6f8_inset] z-[1]"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1d1050",
                  fontSize: "27",
                  background: "#faff01",
                  borderRadius: "10px",
                  "&:hover": { background: "#faff01" },
                  width: 180,
                  height: 52,
                }}
              >
                Login
              </Button>
            </div>
            <div className="w-[62px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
