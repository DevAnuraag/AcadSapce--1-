import BlogContent from "../components/BlogContent";
import BlogIntroduction from "../components/BlogIntroduction";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-midnightblue-100 flex flex-col items-start justify-start px-0 box-border gap-[122px] max-w-full mq1350:pt-5 mq1350:pb-5 mq1350:box-border mq800:gap-[61px] mq450:gap-[30px]">

        {/* Parallax Background */}
        <div
          className="absolute top-0 left-0 w-full h-[1262px] bg-fixed bg-cover bg-center z-[1]"
          style={{ backgroundImage: 'url("/original165ac86b13223f21f0ff259fde26d8f0-22@2x.png")' }}
        />

        <BlogContent />
        <BlogIntroduction />

        <section className="w-[1410px] flex flex-row items-start justify-center pt-0 px-5 pb-24 box-border max-w-full text-justify text-5xl text-surface-light font-poppins mq1350:pb-[62px] mq1350:box-border mq800:pb-10 mq800:box-border">
          <div className="w-[1000px] flex flex-col items-start justify-start gap-[43px] max-w-full mq800:gap-[21px]">
            <div className="w-[980px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-[3px] w-[200px] relative bg-yellow-300 z-[1]" />
            </div>
            <div className="self-stretch relative leading-[160%] z-[1] mq450:text-lgi mq450:leading-[33px]">
              <p className="m-0 text-7xl">
                <span>
                  <b>Future Trends</b>
                </span>
              </p>
              <p className="m-0 text-yellowgreen-200">
                <span className="font-light">
                  <span>&nbsp;</span>
                  <span>Virtual Internships</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-light">
                  <span>
                    The rise of remote work has led to an increase in virtual
                    internships. These opportunities allow
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-light">
                  <span>
                    students to gain experience and build networks without
                    geographical constraints. Virtual
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-light">
                  <span>
                    internships can also help companies access a wider pool of
                    talent.
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-light">
                  <span>&nbsp;</span>
                  <span className="text-yellowgreen-200">
                    Diverse Skill Sets
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    Future internships are likely to focus on developing a
                    diverse set of skills, including digital
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    literacy, data analysis, and project management. These
                    skills are increasingly important in a
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    rapidly evolving job market.
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">&nbsp;</span>
                  <b className="text-7xl font-poppins">Conclusion</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    Internships play a critical role in career development,
                    offering practical experience, networking
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    opportunities, and industry insights. By understanding the
                    importance of internships and actively
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    seeking out these opportunities, students and recent
                    graduates can enhance their career
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">
                    prospects and navigate the job market with confidence.
                  </span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">&nbsp;</span>
                  <b className="text-7xl font-poppins">References</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">{`
National Association of Colleges and Employers (NACE). "The Value of Internships for Career`}</span>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span className="font-light">{`Development." `}</span>
                </span>
                <span className="font-light">
                  <span className="text-yellowgreen-200">{`NACEweb.org
`}</span>
                  <span className="text-surface-light">
                    Forbes. "Why Internships Are More Important Than Ever.
                  </span>
                  <span className="text-yellowgreen-200">{`" Forbes.com”
`}</span>
                  <span className="text-surface-light">
                    Harvard Business Review. "How to Get the Most Out of an
                    Internship.
                  </span>
                  <span className="text-yellowgreen-200">" HBR.org”</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-light">
                  <span>
                    The Balance Careers. "How Internships Benefit Your Career.
                  </span>
                  <span className="text-yellowgreen-200">
                    " TheBalanceCareers.com”
                  </span>
                </span>
              </p>
              <p className="m-0 text-yellowgreen-200">
                <span className="font-light">
                  <span className="text-surface-light">{`Journal of Education and Work. `}</span>
                  <span>
                    "The Impact of Internships on Graduate Employment in the
                    UK."
                  </span>
                </span>
              </p>
              <p className="m-0 text-yellowgreen-200">
                <span className="font-light">
                  <span>{`Taylor & Francis Online”`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-light">
                  <span>
                    Inside Higher Ed. "Internships and Their Impact on Graduate
                    Outcomes.
                  </span>
                  <span className="text-yellowgreen-200">
                    " InsideHigherEd.com”
                  </span>
                </span>
              </p>
            </div>
          </div>
        </section>

        <Recommendations />
        <Footer />
      </main>
    </div>
  );
};

export default BlogPage;
