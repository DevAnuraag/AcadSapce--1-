import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Partners = ({ className = "" }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // Controls the transition speed between slides
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // 0 makes it continuous without pauses
    cssEase: "linear", // Ensures constant speed without easing in/out
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section
      className={`self-stretch pt-0 pb-[12.4px] pl-0.5 box-border max-w-full ${className}`}
    >
      <Slider {...settings}>
        {[
          "/84ec6c40b07de23894f4ac5701026c06-1@2x.png",
          "/logo1476262514-1@2x.png",
          "/cvmulogo-1@2x.png",
          "/placeholder@2x.png",
          "/242422240-1092967194568289-7817923280050240546-n-1@2x.png",
          "/armypublicschoollogo-1@2x.png",
          "/cmru-logo-1@2x.png",
          "/indian-institute-of-space-science-and-technology-logo-1@2x.png",
          "/313212653-480660344095693-1070179117642085002-n-1@2x.png",
          "/maxresdefault-1-1@2x.png",
          "/nvp-logo-1@2x.png"
        ].map((src, index) => (
          <div
            key={index}
            className="h-[100px] w-[100px] flex items-end justify-center"
          >
            <img
              className="object-cover max-w-full max-h-full overflow-hidden"
              alt=""
              src={src}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
};

export default Partners;
