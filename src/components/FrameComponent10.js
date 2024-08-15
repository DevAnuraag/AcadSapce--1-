import { Button } from "@mui/material";
import Score from "./Score";
import InfoProduct from "./InfoProduct";
import PropTypes from "prop-types";

const CourseCard = ({
  courseTitle,
  isBestSeller,
  discount,
  imgSrc,
  ratingImgSrc,
  platformName,
  ratingScore,
  coursePrice,
  originalPrice,
  lessons,
  students,
  level,
}) => (
  <div className="flex-[0.8972] rounded-xl bg-surface-light flex flex-col items-end justify-start pt-6 pb-[18px] pl-2 pr-[27px] relative gap-[11px] min-w-[234px] max-w-full z-[1] mq450:pt-5 mq450:box-border mq450:flex-1">
    <div className="w-[310px] flex flex-row items-start justify-end py-0 px-px box-border text-5xs">
      <div className="flex-1 flex flex-col items-end justify-start pt-[9px] pb-[13.5px] pl-[9px] pr-3 relative gap-[118.1px] mq450:gap-[59px]">
        <img
          className="w-fit h-fit absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imgSrc}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
          <div className="w-[104.8px] flex flex-row items-start justify-start gap-[7.6px]">
            {isBestSeller && (
              <div className="flex-1 rounded-3xs bg-surface-light overflow-hidden flex flex-row items-start justify-start py-[5.1px] px-1 whitespace-nowrap z-[1]">
                <b className="relative leading-[10px] inline-block min-w-[42px]">
                  Best Seller
                </b>
              </div>
            )}
            {discount && (
              <div className="w-[43.2px] rounded-3xs bg-alert-warning overflow-hidden shrink-0 flex flex-row items-start justify-start py-[5.1px] px-1 box-border whitespace-nowrap z-[1] text-surface-light">
                <b className="relative leading-[10px] inline-block min-w-[32px]">
                  {discount} OFF
                </b>
              </div>
            )}
          </div>
        </div>
        <img
          className="w-[19.5px] h-[20.2px] relative rounded-3xs object-cover z-[1]"
          alt=""
          src="/person-outline-24px@2x.png"
        />
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3.5 pr-[7px]">
      <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[110px]">
          <div className="flex flex-row items-start self-stretch justify-start gap-1">
            <img
              className="h-[18px] w-[17.8px] relative object-cover min-h-[18px]"
              alt=""
              src="/person-outline-24px-1@2x.png"
            />
            <div className="flex-1 relative leading-[18px]">
              {platformName}
            </div>
          </div>
        </div>
        <div className="w-[132.2px] flex flex-row items-start justify-start gap-[5.1px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <img
              className="relative self-stretch object-cover h-4 max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={ratingImgSrc}
            />
          </div>
          <Score
            iconFontSize="12px"
            iconMinWidth="unset"
            scoreContainerMarginTop="-9px"
            scoreFontFamily="Roboto"
            ratingScore={ratingScore}
          />
        </div>
      </div>
    </div>
    <div className="self-stretch h-[19px] flex flex-row items-start justify-end py-0 pl-3 pr-[5px] box-border text-center text-dark">
      <div className="relative self-stretch flex-1 overflow-hidden font-medium capitalize text-ellipsis whitespace-nowrap">
        {courseTitle}
      </div>
    </div>
    <div className="flex flex-row items-center self-stretch justify-center px-8 py-4 gap-x-5 mq450:flex-wrap">
      <InfoProduct
        propWidth="unset"
        icon="https://firebasestorage.googleapis.com/v0/b/acadspace-36bb8.appspot.com/o/Assets%2FWebApp%2Fnew%2Fassets%2Fv6-icon%20(free).png?alt=media&token=d84e85ae-13af-413e-ac0e-c8dd7a8484d4"
        propFlex="unset"
        propWidth1="14px"
        propDisplay="flex"
        propMinWidth="14px"
        lesson6={`Lesson : ${lessons}`}
        propMinWidth1="60px"
      />
      <InfoProduct
        propWidth="unset"
        icon="https://firebasestorage.googleapis.com/v0/b/acadspace-36bb8.appspot.com/o/Assets%2FWebApp%2Fnew%2Fassets%2Fv6-icon%20(free)%20(1).png?alt=media&token=52d089c9-5117-4f06-890f-00fb9557cf69"
        propFlex="unset"
        propWidth1="14px"
        propDisplay="flex"
        propMinWidth="14px"
        lesson6={`Student : ${students}`}
        propMinWidth1="78px"
      />
      <InfoProduct
        propWidth="18px"
        icon="https://firebasestorage.googleapis.com/v0/b/acadspace-36bb8.appspot.com/o/Assets%2FWebApp%2Fnew%2Fassets%2Fv6-icon%20(free)%20(2).png?alt=media&token=3d12b5c3-479f-41d4-8a32-d4dd1f1eb964"
        propFlex="1"
        propWidth1="14px"
        propDisplay="flex"
        propMinWidth="14px"
        lesson6={level}
        propMinWidth1="52px"
      />
    </div>
    
    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-px pr-3.5 text-mid">
      <div className="flex flex-row items-end justify-between flex-1 gap-5 mq450:flex-wrap mq450:justify-center">
        <Button
          className="h-10 w-[119px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "14",
            background: "#faff01",
            border: "#000 solid 1px",
            borderRadius: "27px",
            "&:hover": { background: "#faff01" },
            width: 119,
            height: 40,
          }}
        >
          Start course
        </Button>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
          <div className="flex flex-row items-start justify-start gap-px">
            <b className="relative leading-[26px] inline-block min-w-[79px]">
              {coursePrice}
            </b>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-xs">
              <div className="relative [text-decoration:line-through] leading-[24px] inline-block min-w-[56px]">
                {originalPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FrameComponent10 = ({ className = "", courses }) => {
  return (
    <div
      className={`w-full flex flex-row items-start justify-center py-8 px-16 max-w-full text-center text-11xl font-poppins ${className}`}
    >
      <div className="border-surface-light border-[1px] border-solid box-border p-8 rounded-xl">
        <div className="relative w-[976px] flex flex-row flex-wrap items-start justify-center gap-[13px] max-w-full rounded-2xl">
          <div className="w-[222px] flex flex-col items-start justify-start pt-[129px] px-0 pb-0">
            <h2 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit whitespace-pre-wrap z-[1] mq450:text-lg mq450:leading-[27px] mq800:text-5xl mq800:leading-[36px]">{`Trending Courses & Certifications`}</h2>
          </div>
          <div className="flex-1 flex flex-row items-start justify-center gap-[21px] min-w-[482px] max-w-full text-left text-sm text-black font-space-grotesk mq800:flex-wrap mq800:min-w-full">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      courseTitle: PropTypes.string.isRequired,
      isBestSeller: PropTypes.bool,
      discount: PropTypes.string,
      imgSrc: PropTypes.string.isRequired,
      ratingImgSrc: PropTypes.string.isRequired,
      platformName: PropTypes.string.isRequired,
      ratingScore: PropTypes.string.isRequired,
      coursePrice: PropTypes.string.isRequired,
      originalPrice: PropTypes.string,
      lessons: PropTypes.number.isRequired,
      students: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FrameComponent10;
