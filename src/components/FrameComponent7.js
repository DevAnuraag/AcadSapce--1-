import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1429px] flex flex-row items-start justify-start pt-0 px-[18px] pb-[66px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-row items-start justify-start gap-[6.5px] max-w-full text-center text-lg text-surface-light font-poppins">
        <img
          className="h-[67px] w-[194px] relative object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/acadspace-logo-4@2x.png"
        />
        <div className="w-[88px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative font-medium text-[inherit] z-[2]">
            Home
          </a>
        </div>
        <div className="w-[120px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative text-[inherit] whitespace-nowrap z-[2]">
            About Us
          </a>
        </div>
        <div className="w-[115px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[2]">
            Discover
          </a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[7.5px] max-w-full mq1350:hidden">
              <a className="[text-decoration:none] w-20 relative font-bold text-[inherit] flex items-center justify-center shrink-0 z-[2]">
                Blogs
              </a>
              <a className="[text-decoration:none] w-[150px] relative text-[inherit] flex items-center justify-center shrink-0 whitespace-nowrap z-[2]">
                Contact Us
              </a>
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-5 max-w-full">
                  <TextField
                    className="[border:none] bg-[transparent] h-[42px] flex-1 font-poppins text-mini text-dimgray max-w-full z-[2]"
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
                  <button className="cursor-pointer border-surface-light border-[2px] border-solid pt-1 px-0 pb-[5px] bg-yellow-200 w-[127px] rounded-21xl box-border flex flex-row items-start justify-start z-[2] hover:bg-yellow-400 hover:border-gainsboro hover:border-[2px] hover:border-solid hover:box-border">
                    <div className="h-[42px] w-[127px] relative rounded-21xl bg-yellow-200 border-surface-light border-[2px] border-solid box-border hidden" />
                    <a className="[text-decoration:none] flex-1 relative text-lg font-poppins text-black text-center z-[3]">
                      Login
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[81px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
              <div className="h-[3px] flex-1 relative bg-yellow-300 z-[2]" />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
