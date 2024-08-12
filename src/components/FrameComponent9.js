import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[19.3px] pl-[17px] pr-[19px] box-border top-[0] z-[99] sticky max-w-full text-center text-lg text-surface-light font-poppins ${className}`}
    >
      <div className="flex-1 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25)_inset)] rounded-3xs flex flex-row items-start justify-start pt-2 pb-2.5 pl-0 pr-3 box-border gap-[6.3px] max-w-full z-[2]">
        <img
          className="h-[67px] w-[194px] relative object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/acadspace-logo-4@2x.png"
        />
        <div className="w-[88px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative font-medium text-[inherit] z-[3]">
            Home
          </a>
        </div>
        <div className="w-[120px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative text-[inherit] whitespace-nowrap z-[3]">
            About Us
          </a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full">
              <div className="w-[202px] flex flex-row items-start justify-start gap-[7px] mq1350:hidden">
                <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[3]">
                  Discover
                </a>
                <a className="[text-decoration:none] w-20 relative text-[inherit] flex items-center justify-center shrink-0 z-[3]">
                  Blogs
                </a>
              </div>
              <a className="[text-decoration:none] w-[150px] relative font-bold text-[inherit] flex items-center justify-center shrink-0 whitespace-nowrap z-[3]">
                Contact Us
              </a>
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] pb-0 pl-0 pr-[13px] box-border max-w-full">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[42px] font-poppins text-mini text-dimgray z-[3]"
                  placeholder="Have a Question?"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img
                        width="32.9px"
                        height="29px"
                        src="/iconlyboldsend.svg"
                      />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#000" },
                    "& .MuiInputBase-root": {
                      height: "42px",
                      backgroundColor: "#fff",
                      paddingRight: "17.1px",
                      borderRadius: "70px",
                      fontSize: "15px",
                    },
                    "& .MuiInputBase-input": { color: "#514e4e" },
                  }}
                />
              </div>
              <div className="w-[127px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                <button className="cursor-pointer border-surface-light border-[2px] border-solid pt-1 px-0 pb-[5px] bg-yellow-200 self-stretch rounded-21xl flex flex-row items-start justify-start z-[3] hover:bg-yellow-400 hover:border-gainsboro hover:border-[2px] hover:border-solid hover:box-border">
                  <div className="h-[42px] w-[127px] relative rounded-21xl bg-yellow-200 border-surface-light border-[2px] border-solid box-border hidden" />
                  <a className="[text-decoration:none] flex-1 relative text-lg font-poppins text-black text-center z-[4]">
                    Login
                  </a>
                </button>
              </div>
            </div>
            <div className="w-[111px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
              <div className="h-[3px] flex-1 relative bg-yellow-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
