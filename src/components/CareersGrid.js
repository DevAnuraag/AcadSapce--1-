import PropTypes from "prop-types";

const CareersGrid = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[25px] box-border max-w-full text-center text-3xl text-surface-light font-poppins ${className}`}
    >
      <div className="w-[1000px] flex flex-col items-start justify-start gap-[43px] max-w-full mq800:gap-[21px]">
        <img
          className="self-stretch h-[498px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle@2x.png"
        />
        <div className="w-[973px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-full mq800:gap-4">
            <h3 className="m-0 self-stretch relative text-inherit leading-[175%] font-normal font-inherit z-[1] mq450:text-lg mq450:leading-[31px]">
              Every week, we feature some of our favorite webinars with Subject
              Experts from different Fields. You can explore below your choice
              of Careers that interest you.
            </h3>
            <div className="flex flex-row items-start justify-start py-0 px-[9px] text-11xl">
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <h2 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[22px] mq800:text-5xl mq800:leading-[29px]">
                  Featured Careers
                </h2>
                <div className="relative text-lg leading-[22px] text-gray1-900 inline-block min-w-[128px] z-[1]">
                  Updated Daily
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-[5px] box-border max-w-full text-lg">
              <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-0.5 max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-7 box-border gap-[57px] min-w-[215px] max-w-full mq450:gap-7">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                    <div className="self-stretch rounded-3xl border-surface-light border-[3px] border-solid flex flex-row items-start justify-start pt-0.5 px-[22px] pb-px gap-[3px] z-[1] mq450:flex-wrap">
                      <div className="h-[107px] w-[303px] relative rounded-3xl border-surface-light border-[3px] border-solid box-border hidden" />
                      <img
                        className="h-[100px] w-[100px] relative object-cover z-[2] mq450:flex-1"
                        loading="lazy"
                        alt=""
                        src="/rectangle-3362@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border min-w-[97px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                          <b className="relative leading-[22px] z-[2]">
                            Medical Science
                          </b>
                          <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[94px] z-[2]">
                            17 Webinars
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[22px] pr-[23px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[27px]">
                        <div className="flex flex-row items-start justify-start gap-[3px]">
                          <img
                            className="h-[100px] w-[100px] relative object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/rectangle-4734@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
                            <div className="flex flex-col items-start justify-start gap-3">
                              <b className="relative leading-[22px] inline-block min-w-[117px] z-[1]">
                                Architecture
                              </b>
                              <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[96px] z-[1]">
                                16 Webinars
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0">
                          <div className="flex-1 flex flex-row items-end justify-start gap-2.5 mq450:flex-wrap">
                            <img
                              className="h-[86px] w-[86px] relative object-cover z-[1]"
                              loading="lazy"
                              alt=""
                            />
                            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border min-w-[101px]">
                              <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                                <b className="relative leading-[22px] z-[1]">
                                  Physical Science
                                </b>
                                <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[94px] z-[1]">
                                  17 Webinars
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[249px] flex flex-row items-start justify-start py-0 px-[29px] box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[38px]">
                      <div className="self-stretch flex flex-row items-end justify-start gap-2.5">
                        <img
                          className="h-[86px] w-[86px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-4751@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17px]">
                          <div className="flex flex-col items-start justify-start gap-2">
                            <b className="relative leading-[22px] inline-block min-w-[94px] z-[1]">
                              Designing
                            </b>
                            <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[91px] z-[1]">
                              11 Webinars
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start gap-2.5">
                        <img
                          className="h-[86px] w-[86px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-4750@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[15px]">
                          <div className="flex flex-col items-start justify-start gap-2">
                            <b className="relative leading-[22px] inline-block min-w-[81px] z-[1]">
                              Fine Arts
                            </b>
                            <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[95px] z-[1]">
                              12 Webinars
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px] gap-[38px]">
                  <div className="flex flex-row items-start justify-start py-0 pl-2 pr-0">
                    <img
                      className="h-[100px] w-[100px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-4752@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-5">
                    <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                      <img
                        className="h-[86px] w-[86px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-4742@2x.png"
                      />
                    </div>
                    <img
                      className="w-[100px] h-[100px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-4743@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pl-[7px] pr-[15px]">
                    <img
                      className="h-[86px] w-[86px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-3364@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pl-[7px] pr-[15px]">
                    <img
                      className="h-[86px] w-[86px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-4733@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[235px] flex flex-col items-start justify-end pt-0 pb-[15px] pl-0 pr-5 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[74px]">
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="flex flex-col items-start justify-start gap-2.5">
                        <b className="relative leading-[22px] inline-block min-w-[37px] z-[1]">
                          Law
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[95px] z-[1]">
                          12 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-3">
                        <b className="relative leading-[22px] z-[1]">
                          Business Management
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[91px] z-[1]">
                          11 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-0.5 pb-[17px]">
                      <div className="flex flex-col items-start justify-start gap-2.5">
                        <b className="relative leading-[22px] inline-block min-w-[102px] z-[1]">
                          Hospitality
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[91px] z-[1]">
                          11 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-0.5">
                      <div className="flex flex-col items-start justify-start gap-[9px]">
                        <b className="relative leading-[22px] inline-block min-w-[112px] z-[1]">
                          Engineering
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[96px] z-[1]">
                          16 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                      <b className="relative leading-[22px] inline-block min-w-[115px] z-[1]">
                        Env. Science
                      </b>
                      <div className="flex flex-row items-start justify-start py-0 px-0.5 text-base text-gray1-900">
                        <div className="relative leading-[120%] inline-block min-w-[95px] z-[1]">
                          12 Webinars
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[602px] w-[90px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
                  <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[50px]">
                    <img
                      className="w-[86px] h-[86px] relative object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-3361@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[27px]">
                      <img
                        className="w-[86px] h-[86px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-4759@2x.png"
                      />
                      <img
                        className="w-[75px] flex-1 relative max-h-full object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-4760@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0">
                        <img
                          className="h-[86px] w-[86px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-4741@2x.png"
                        />
                      </div>
                      <img
                        className="w-[84px] h-[88px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-4761@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-40 flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[73px]">
                    <div className="flex flex-row items-start justify-start py-0 px-[13px]">
                      <div className="flex flex-col items-start justify-start gap-2.5">
                        <b className="relative leading-[22px] inline-block min-w-[118px] z-[1]">
                          Life Sciences
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[94px] z-[1]">
                          17 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-3">
                        <b className="relative leading-[22px] z-[1]">
                          Performing Arts
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[95px] z-[1]">
                          12 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-2.5">
                      <b className="relative leading-[22px] z-[1]">{`Media & Comm.`}</b>
                      <div className="flex flex-row items-start justify-start py-0 px-3 text-base text-gray1-900">
                        <div className="relative leading-[120%] inline-block min-w-[96px] z-[1]">
                          16 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-3">
                      <div className="flex flex-col items-start justify-start gap-3">
                        <b className="relative leading-[22px] inline-block min-w-[74px] z-[1]">
                          Finance
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[94px] z-[1]">
                          17 Webinars
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                      <div className="flex flex-col items-start justify-start gap-2">
                        <b className="relative leading-[22px] z-[1]">
                          Social Science
                        </b>
                        <div className="relative text-base leading-[120%] text-gray1-900 inline-block min-w-[96px] z-[1]">
                          16 Webinars
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CareersGrid.propTypes = {
  className: PropTypes.string,
};

export default CareersGrid;
