import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"; // Import the close icon from react-icons

const LoginContent = ({ className = "" }) => {
  const [popupContent, setPopupContent] = useState(null);

  const cardData = [
    {
      imgSrc: "/rectangle-29@2x.png",
      text: "Login to the AcadSpace AI portal",
      popupContent: (
        <>
          <h3 className="mb-4 text-2xl font-bold animate-fade-in">Login to the AcadSpace AI portal</h3>
          <p className="text-sm animate-fade-in">Login to the Portal through the Login button on the left corner.</p>
          <p className="text-sm animate-fade-in">If you are from a Partner Institute, select the Partner Box in the Login Section.</p>
        </>
      ),
    },
    {
      imgSrc: "/rectangle-29-1@2x.png",
      text: "Ask your Career Questions",
      popupContent: (
        <>
          <h3 className="mb-4 text-2xl font-bold animate-fade-in">Ask your Career Questions</h3>
          <p className="text-sm animate-fade-in">Here you can ask any career-related questions.</p>
          <p className="text-sm animate-fade-in">Our experts are available to guide you with personalized advice.</p>
        </>
      ),
    },
    {
      imgSrc: "/rectangle-29-2@2x.png",
      text: "Get Personalized Recommendations",
      popupContent: (
        <>
          <h3 className="mb-4 text-2xl font-bold animate-fade-in">Get Personalized Recommendations</h3>
          <p className="text-sm animate-fade-in">Receive recommendations tailored to your career goals.</p>
          <p className="text-sm animate-fade-in">Answer a few questions, and let us do the rest.</p>
        </>
      ),
    },
  ];

  const togglePopup = (content) => {
    setPopupContent(content ? content : null);
  };

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[61px] box-border max-w-full text-left text-5xl text-surface-light font-poppins mq800:pb-10 mq800:box-border ${className}`}
    >
      <div className="w-[1082px] flex flex-row items-start justify-start gap-[17px] max-w-full mq1125:flex-wrap">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex-[0.9718] flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-2.5 box-border min-w-[230px] max-w-full mq1125:flex-1"
          >
            <div onClick={() => togglePopup(card.popupContent)} className="self-stretch flex flex-col items-start justify-start pt-3.5 pb-2.5 pl-[17px] pr-[5px] rounded-xl overflow-clip relative gap-[302px] mq450:gap-[151px] group">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1] transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                alt={card.text}
                src={card.imgSrc}
              />
              <h2 className="m-0 w-[314px] relative text-inherit leading-[40px] font-bold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] z-[2] mq450:text-lgi mq450:leading-[32px]">
                {card.text}
              </h2>
              <div className="flex flex-row items-start self-stretch justify-end text-lg">
                <div
                  className="h-[51px] rounded-41xl bg-gray1-200 flex flex-row items-start justify-start py-0 px-3.5 box-border whitespace-nowrap z-[2] cursor-pointer"
                  aria-label={`More about ${card.text}`}
                >
                  <b className="mt-[-4.5px] relative leading-[60px] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[128px]">
                    Explore How +
                  </b>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {popupContent && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
          <div className="bg-gradient-to-b from-[#1D1050] to-[#1D1050] via-[#1D1050] rounded-xl p-8 shadow-lg w-full max-w-[500px] pb-20 relative">
            {popupContent}
            <div className="absolute flex items-center justify-center w-full -ml-8 bottom-4">
              <button
                className="text-white bg-blue-500 rounded-full hover:bg-blue-700 aspect-square"
                onClick={() => togglePopup(null)}
                aria-label="Close"
              >
                <FaTimes className="m-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

LoginContent.propTypes = {
  className: PropTypes.string,
};

export default LoginContent;
