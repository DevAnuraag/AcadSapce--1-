import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[25px] left-[19px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25)_inset)] rounded-3xs w-[1405px] flex flex-row items-start justify-start pt-2 pb-2.5 pl-0 pr-3 box-border gap-1.5 max-w-full z-[2] text-center text-lg text-surface-light font-poppins ${className}`}
    >
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
      <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-2 max-w-full">
            <nav className="m-0 flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[19px] box-border max-w-full mq1350:hidden">
              <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[7px] text-center text-lg text-surface-light font-poppins mq800:hidden">
                <a className="[text-decoration:none] w-[120px] relative font-bold text-[inherit] flex items-center justify-center shrink-0 whitespace-nowrap z-[3]">
                  About Us
                </a>
                <a className="[text-decoration:none] w-[115px] relative text-[inherit] flex items-center justify-center shrink-0 z-[3]">
                  Discover
                </a>
                <a className="[text-decoration:none] w-20 relative text-[inherit] flex items-center justify-center shrink-0 z-[3]">
                  Blogs
                </a>
                <a className="[text-decoration:none] flex-1 relative text-[inherit] whitespace-nowrap z-[3]">
                  Contact Us
                </a>
              </nav>
            </nav>
            <div className="w-[470px] flex flex-col items-start justify-start py-0 pl-0 pr-3 box-border max-w-full">
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
            <button className="cursor-pointer border-surface-light border-[2px] border-solid pt-1 px-0 pb-[5px] bg-yellow-200 w-[127px] rounded-21xl box-border flex flex-row items-start justify-start z-[3] hover:bg-yellow-400 hover:border-gainsboro hover:border-[2px] hover:border-solid hover:box-border">
              <div className="h-[42px] w-[127px] relative rounded-21xl bg-yellow-200 border-surface-light border-[2px] border-solid box-border hidden" />
              <a className="[text-decoration:none] flex-1 relative text-lg font-poppins text-black text-center z-[4]">
                Login
              </a>
            </button>
          </div>
          <div className="w-[121px] flex flex-row items-start justify-start py-0 px-[27px] box-border">
            <div className="h-[3px] flex-1 relative bg-yellow-300" />
          </div>
        </div>
      </div>
    </header>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
