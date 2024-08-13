import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const TopBar = ({ className = "" }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`self-stretch absolute w-full z-50 bg-transparent flex flex-row items-start justify-end py-0 px-[18px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 rounded-3xs flex flex-row items-end justify-start pt-2 pb-2.5 pl-0 pr-3 box-border gap-[5px] max-w-full z-[1]">
        <img
          className="h-[67px] w-[194px] relative object-cover z-[2]"
          alt=""
          src="/acadspace-logo-4@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-1 pl-0 pr-[3px] box-border max-w-full">
          <div className="self-stretch h-[52px] relative max-w-full">
            <nav className="m-0 absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start gap-[7px] max-w-full h-full text-center text-lg text-surface-light font-poppins">
              <Link
                to="/"
                className={`[text-decoration:none] h-[52px] w-[88px] relative flex items-center justify-center shrink-0 z-[2] ${
                  isActive("/")
                    ? "font-bold text-yellow-500 underline"
                    : "text-inherit no-underline"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about-us-page"
                className={`[text-decoration:none] h-[52px] w-[115px] relative flex items-center justify-center shrink-0 z-[2] ${
                  isActive("/about-us-page")
                    ? "font-bold text-yellow-500 underline"
                    : "text-inherit"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/discover-page"
                className={`[text-decoration:none] h-[52px] w-[115px] relative flex items-center justify-center shrink-0 z-[2] ${
                  isActive("/discover-page")
                    ? "font-bold text-yellow-500"
                    : "text-inherit"
                }`}
              >
                Discover
              </Link>
              <Link
                to="/blog-page"
                className={`[text-decoration:none] h-[52px] w-20 relative flex items-center justify-center shrink-0 z-[2] ${
                  isActive("/blog-page")
                    ? "font-bold text-yellow-500"
                    : "text-inherit"
                }`}
              >
                Blogs
              </Link>
              <Link
                to="/contact-us-page"
                className={`[text-decoration:none] h-[52px] flex-1 relative flex items-center justify-center whitespace-nowrap z-[2] ${
                  isActive("/contact-us-page")
                    ? "font-bold text-yellow-500"
                    : "text-inherit"
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
        <div className="w-[473px] flex flex-col items-start justify-end pt-0 pb-[9px] pl-0 pr-[15px] box-border max-w-full">
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-[42px] font-poppins text-mini text-dimgray z-[2]"
            placeholder="Have a Question?"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <img width="32.9px" height="29px" src="/iconlyboldsend.svg" />
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
        <div className="w-[127px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border">
          <button className="cursor-pointer border-surface-light border-[2px] border-solid pt-1 px-0 pb-[5px] bg-yellow-200 self-stretch rounded-21xl flex flex-row items-start justify-start z-[2] hover:bg-yellow-400 hover:border-gainsboro hover:border-[2px] hover:border-solid hover:box-border">
            <div className="h-[42px] w-[127px] relative rounded-21xl bg-yellow-200 border-surface-light border-[2px] border-solid box-border hidden" />
            <a className="[text-decoration:none] flex-1 relative text-lg font-poppins text-black text-center z-[3]">
              Login
            </a>
          </button>
        </div>
      </header>
    </div>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
