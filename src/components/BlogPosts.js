import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const BlogPosts = ({ className = "" }) => {
  return (
    <div
      className={`w-[1427px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-black font-poppins ${className}`}
    >
      <div className="w-[1083px] grid flex-row items-start justify-start gap-[15px] max-w-full grid-cols-[repeat(3,_minmax(263px,_1fr))] mq800:grid-cols-[minmax(263px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(263px,_456px))]">
        <FrameComponent1 blog4jpg="/blog4jpg@2x.png" />
        <FrameComponent1 blog4jpg="/blog4jpg@2x.png" />
        <FrameComponent1 blog4jpg="/blog4jpg@2x.png" />
      </div>
    </div>
  );
};

BlogPosts.propTypes = {
  className: PropTypes.string,
};

export default BlogPosts;
