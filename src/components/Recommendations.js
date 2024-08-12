import { Button } from "@mui/material";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const Recommendations = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-0.5 box-border gap-[147px] max-w-full text-center text-31xl text-surface-light font-poppins mq800:gap-[73px] mq450:gap-[37px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit leading-[74px] font-bold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq800:text-21xl mq800:leading-[59px] mq450:text-11xl mq450:leading-[44px]">
        Recommended Blogs
      </h1>
      <div className="w-[1427px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-black">
        <div className="w-[1115px] grid flex-row items-start justify-start gap-[31px] max-w-full grid-cols-[repeat(3,_minmax(265px,_1fr))] mq800:gap-[15px] mq800:grid-cols-[minmax(265px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(265px,_459px))]">
          <div className="rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-4 max-w-full shrink-0 z-[1]">
            <div className="self-stretch h-[446px] relative rounded-3xs [background:linear-gradient(#fff,_#fff),_linear-gradient(rgba(31,_188,_203,_0.1),_rgba(31,_188,_203,_0.1)),_linear-gradient(180deg,_#020c0d,_rgba(31,_188,_203,_0))] border-surface-light border-[1px] border-solid box-border hidden" />
            <img
              className="self-stretch h-64 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/blog4jpg1@2x.png"
            />
            <div className="w-36 h-[30px] flex flex-row items-start justify-start py-0 px-[9px] box-border">
              <Button
                className="self-stretch flex-1 z-[1]"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "14",
                  borderColor: "#000",
                  borderRadius: "20px",
                  "&:hover": { borderColor: "#000" },
                }}
              >
                Internships
              </Button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-3 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
                  <b className="flex-1 relative leading-[20px] inline-block max-w-full z-[1]">
                    Unlocking Career Success: The Crucial Role of Internships in
                    Career Development
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[35px] text-base text-secondary-400 mq450:flex-wrap mq450:gap-[17px]">
                  <div className="flex flex-row items-start justify-start gap-1.5">
                    <img
                      className="h-9 w-9 relative rounded-9xl object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image1@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="relative leading-[24px] font-medium z-[1]">
                        Manish Shivangi
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm">
                    <div className="flex flex-col items-start justify-start gap-[21px]">
                      <div className="relative leading-[24px] inline-block min-w-[95px] z-[1]">
                        July 31st 2024
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-[33px] pr-0 text-deepskyblue">
                        <div className="relative tracking-[0.8px] leading-[14px] font-medium inline-block min-w-[85px] z-[1]">
                          Read more
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent blog4jpg="/blog4jpg@2x.png" />
          <GroupComponent blog4jpg="/blog4jpg@2x.png" />
        </div>
      </div>
    </section>
  );
};

Recommendations.propTypes = {
  className: PropTypes.string,
};

export default Recommendations;
