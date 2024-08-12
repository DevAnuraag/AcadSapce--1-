import PropTypes from "prop-types";

const BlogContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[433px] pl-0.5 pr-0 box-border max-w-full text-center text-21xl text-gray1-700 font-poppins mq1125:pb-[281px] mq1125:box-border mq450:pb-[183px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full mq800:gap-[27px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[75px] pr-[76px] box-border max-w-full mq800:pl-[37px] mq800:pr-[38px] mq800:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[200%] font-bold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[2] mq800:text-13xl mq800:leading-[64px] mq450:text-5xl mq450:leading-[48px]">
            Unlocking Career Success: The Crucial Role of Internships in Career
            Development
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-lg text-surface-light">
          <img
            className="h-[1262px] w-[1440px] absolute !m-[0] bottom-[-516px] left-[-1px] object-cover z-[1]"
            alt=""
            src="/original165ac86b13223f21f0ff259fde26d8f0-22@2x.png"
          />
          <div className="flex-1 bg-blue-200 flex flex-col items-start justify-start pt-[30px] px-4 pb-[73px] box-border gap-[14.5px] max-w-full z-[2]">
            <div className="w-[1440px] h-[243px] relative bg-blue-200 hidden max-w-full" />
            <div className="w-[378px] flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-5 box-border gap-[17px] max-w-full text-blueviolet">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-2 box-border min-w-[101px]">
                <div className="self-stretch rounded-xl bg-lavender flex flex-row items-start justify-start pt-[5px] px-[5px] pb-2 gap-2.5 z-[3]">
                  <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                    <div className="w-4 h-4 relative rounded-[50%] bg-blueviolet" />
                  </div>
                  <div className="relative inline-block min-w-[99px]">
                    Internships
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-9 h-9 relative rounded-9xl object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base text-surface-light">
                <div className="relative leading-[24px] font-medium z-[3]">
                  Manish Shivangi
                </div>
              </div>
            </div>
            <div className="w-[1124px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-7xl">
              <h2 className="m-0 flex-1 relative text-inherit leading-[47px] font-bold font-inherit inline-block max-w-full z-[3] mq450:text-2xl mq450:leading-[37px]">
                Unlocking Career Success: The Crucial Role of Internships in
                Career Development
              </h2>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[5px] text-base">
              <div className="flex flex-row items-start justify-start">
                <div className="relative inline-block min-w-[97px] z-[3]">
                  July 31/2024
                </div>
                <div className="relative inline-block min-w-[116px] z-[4]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>10 min read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogContent.propTypes = {
  className: PropTypes.string,
};

export default BlogContent;
