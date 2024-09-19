import React, { useContext, useEffect, useState } from "react";
import style from "../styles/home.module.css";
import AppContext from "../context/AppContext";
import bg from "../assets/images/hero.png";
import { Col, Container, Row } from "react-bootstrap";
import RoundedButton from "../components/Buttons/RoundedButton";
import tick from "../assets/images/tick.png";
import avatar from "../assets/images/avatar.png";
import rating from "../assets/images/rating.png";
import service from "../assets/images/service.png";
import trade1 from "../assets/images/trade1.png";
import trade2 from "../assets/images/trade2.png";
import trade3 from "../assets/images/trade3.png";
import trade4 from "../assets/images/trade4.png";
import trade5 from "../assets/images/trade5.png";
import trade6 from "../assets/images/trade6.png";
import ShadowCard from "../components/Cards/ShadowCard";
import SquareButton from "../components/Buttons/SquareButton";
import arrow from "../assets/images/arrow-up.png";
import group1 from "../assets/images/group1.png";
import group2 from "../assets/images/group2.png";
import group3 from "../assets/images/group3.png";
import empower from "../assets/images/empower-img.png";
import journey from "../assets/images/journey-img.png";
import fe1 from "../assets/images/fe1.png";
import fe2 from "../assets/images/fe2.png";
import fe3 from "../assets/images/fe3.png";
import fe4 from "../assets/images/fe-4.png";
import fe5 from "../assets/images/fe-5.png";
import fe7 from "../assets/images/fe-7.png";
import fe8 from "../assets/images/fe8.png";
import fe6 from "../assets/images/fe-6.png";
import SquareCard from "../components/Cards/SquareCard";
import LargeCard from "../components/Cards/LargeCard";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import news3 from "../assets/images/news3.png";
import arrowup from "../assets/images/ph_arrow-up.png";
import BasicAccordion from "../components/Accordion/BasicAccordion";
import girl from "../assets/images/girl.png";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import Circle from "../components/Cards/Circle";
import ms1 from "../assets/images/ms-1.png";
import ms2 from "../assets/images/ms-2.png";
import ms3 from "../assets/images/ms-3.png";
import ms4 from "../assets/images/ms-4.png";
import ms5 from "../assets/images/ms-5.png";
import ms6 from "../assets/images/ms-6.png";
import ms7 from "../assets/images/ms-7.png";
import SmallCard from "../components/Cards/SmallCard";
import sm1 from "../assets/images/sm-1.png";
import sm2 from "../assets/images/sm-2.png";
import sm3 from "../assets/images/sm-3.png";
import sm4 from "../assets/images/sm-4.png";
import AOS from "aos";


function Home() {
  const { isDarkMode } = useContext(AppContext);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      {/* hero section */}
      <div className={`${style.hero_section}`}>
        <div
          style={{
            background: isDarkMode
              ? ""
              : `linear-gradient(10deg,#77777780 40%,#ffffff13,#ffffff13),url(${bg})`,
          }}
          className={style.hero_section_img}
        >
          <Container className={`${style.hero_content} pt-5`}>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className={`${style.hero_text}`}
            >
              <h1>Investing & Trading</h1>
              <h1>
                Platforms for <span>Stocks</span>
              </h1>

              <div
                className={`${style.sub_text} py-4 d-flex justify-content-between`}
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="my-md-0 my-4"
                >
                  <img src={tick} alt="tick" width={35} className="me-2" />
                  <span>Built for super traders</span>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                  <img src={tick} alt="tick" width={35} className="me-2" />
                  <span>And long term investor</span>
                </div>
              </div>

              <div
                className={` ${style.button_wrapper} pt-2 d-md-flex align-items-center`}
              >
                <RoundedButton
                  title="Join Yashwi Today"
                  subTitle="Start Trading Instantly!"
                />
                <div className="ms-md-4 mt-md-0 mt-3 my-md-0 my-4 d-flex align-items-center">
                  <img className=" me-md-2" src={avatar} alt="avatar" />
                  <div className={style.rating_text}>
                    <div className="d-flex">
                      <p className="m-0">4.9/5.0</p>
                      <img src={rating} className="ms-1" alt="rating" />
                    </div>
                    <div>
                      <p className="m-0">1,500+ Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container
          fluid
          className={`${style.hero_btn_group} d-lg-flex justify-content-lg-center  d-none `}
        >
          <SquareButton image={group1} title="trade online" icon={arrow} />
          <SquareButton image={group3} title="back office login" icon={arrow} />
          <SquareButton image={group2} title="depository login" icon={arrow} />
        </Container>
      </div>

      {/* Service Section */}
      <div className={style.service_section}>
        <Container
          fluid
          className={`${style.service_container} py-lg-5 py-md-3 py-0`}
        >
          <h1 className="py-lg-5 pb-md-3 pb-3 text-center text-light">
            <span data-aos="fade-up" data-aos-duration="1000">
              Services
            </span>{" "}
            that we offer
          </h1>

          <Row className={`${style.service_row} align-items-center`}>
            <Col
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-md-6 col-12"
            >
              <img width={"100%"} src={service} alt="service" />
            </Col>

            <Col
              data-aos="fade-down"
              data-aos-duration="1000"
              className="col-md-6 col-12 pb-lg-0 pb-md-0 pb-5 ps-md-5"
            >
              <div className={`${style.service_text}`}>
                <h2 className="py-lg-0 py-4">Equity, F&O</h2>
                <h6 className="py-md-4 pb-5">
                  Whether you're looking to invest in stocks, explore futures,
                  or trade options, we've got you covered. Our platform gives
                  you all the tools you need—real-time data, easy-to-use charts,
                  and risk management features—to trade smarter. Whether you're
                  just starting out or you're an experienced trader, you’ll have
                  everything you need to make informed decisions and take
                  advantage of market opportunities. No matter what the market
                  does, you’re in control.
                </h6>
                <RoundedButton
                  title="Join Yashwi Today"
                  subTitle="Start Trading Instantly!"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          data-aos="zoom-in"
          data-aos-duration="1300"
          fluid
          className={`${style.service_items} d-lg-flex d-md-block  justify-content-lg-between`}
        >
          <ShadowCard src={trade1} text="Equity, F&O" />
          <ShadowCard src={trade2} text="Depository" />
          <ShadowCard src={trade3} text="Commodity" />
          <ShadowCard src={trade4} text="Currency" />
          <ShadowCard src={trade5} text="Broking /IPO" />
          <ShadowCard src={trade6} text="Derivative" />
        </Container>
      </div>

      {/* empower Section*/}
      <div className={style.empower_section}>
        <Container className="pb-md-0 pb-5">
          <Row className={`${style.empower_row}`}>
            <Col lg={6} sm={12} className="">
              <div className={style.empower_lhs}>
                <h1 data-aos="fade-up" data-aos-duration="1700">
                  Empowering <span>Traders & Investors</span>
                </h1>
                <h5>
                  At Yashwi, we offer a streamlined platform designed to meet
                  the needs of both active traders and long-term investors.
                  Whether you're navigating Equity, Futures, Options, or
                  exploring IPOs, our intuitive services make it easy for you to
                  succeed in the markets.
                </h5>

                <Row className={style.small_card_group}>
                  <Col
                    sm={12}
                    md={7}
                    data-aos="zoom-in"
                    data-aos-duration="1300"
                  >
                    <SmallCard
                      image={sm1}
                      smallText="Access Multiple Markets"
                      text="Easy cross-market trading."
                    />
                  </Col>
                  <Col
                    sm={12}
                    md={5}
                    data-aos="zoom-in"
                    data-aos-duration="1600"
                  >
                    <SmallCard
                      image={sm2}
                      smallText="Diversify & Grow"
                      text="Expand securely."
                    />
                  </Col>
                  <Col
                    sm={12}
                    md={7}
                    data-aos="zoom-in"
                    data-aos-duration="1800"
                  >
                    <SmallCard
                      image={sm3}
                      smallText="Real-Time Insights"
                      text="Instant data access."
                    />
                  </Col>
                  <Col
                    sm={12}
                    md={5}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <SmallCard
                      image={sm4}
                      smallText="Portfolio Management"
                      text="Effortless tracking."
                    />
                  </Col>
                </Row>

                <RoundedButton
                  title="Join Yashwi Today"
                  subTitle="Start Trading Instantly!"
                />
              </div>
            </Col>
            <Col lg={6} sm={12} className="px-0 d-lg-block d-none">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
                className="text-md-end px-4 "
              >
                <img width={"100%"} src={empower} alt="empower" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className={style.journey_container}>
          <Row className={style.journey_row}>
            <Col lg={6} sm={12}>
              <div data-aos="fade-left" data-aos-duration="2700">
                <img width={"100%"} src={journey} alt="journey" />
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className={style.journey_rhs}>
                <h1>
                  Why <span> Yashwi</span>?
                </h1>
                <h5>
                  At Yashwi, we believe in making trading and investing simple,
                  reliable, and accessible for everyone. Here’s why thousands of
                  traders and investors trust us with their financial journey:
                </h5>
                <Circle text="Simple and Straightforward Trading" image={ms1} />
                <Circle text="Comprehensive Market Access" image={ms2} />
                <Circle
                  text="Competitive Pricing and Low Brokerage Fees"
                  image={ms3}
                />
                <Circle
                  text="Expert Support for Traders and Investors"
                  image={ms4}
                />

                <Circle text="Reliable and Secure" image={ms5} />
                <Circle text="Advanced Trading Tools" image={ms6} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* key features */}
      <div className={style.feature_section}>
        <h1
          data-aos="fade-down"
          data-aos-duration="2700"
          className="justify-content-center d-flex pt-5 pb-4"
        >
          Key <span className="ms-3">Features</span>
        </h1>
        <h5
          data-aos="fade-up"
          data-aos-duration="2700"
          className="text-center px-md-0 px-5"
        >
          Our users - traders & investors - will always be our priority, even
          when
          <small className="d-md-block">
            {" "}
            we're building new features or delivering customer support everyday
          </small>
          .
        </h5>
        <Container className="pt-3" data-aos="zoom-in" data-aos-duration="2700">
          <Row className={style.feature_row}>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe6}
                title="dedicated advisors"
                subtitle="No pushy relationship manager"
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe8}
                title="no spam"
                subtitle="No spam or irrelevant content, ever."
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe7}
                title="no sharing"
                subtitle="Your data is private and stays that way."
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe5}
                title="Effortless Equity, F&O"
                subtitle="Streamline your trading process with our platform."
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe4}
                title="Secure Depository Access"
                subtitle="Safeguard assets seamlessly, securely."
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe2}
                title="Diversify Your Portfolio"
                subtitle="Explore new investment opportunities."
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe1}
                title="Simple IPO Participation"
                subtitle="Apply easily to IPOs with Yashwi’s simplified process.."
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <SquareCard
                image={fe3}
                title="Real-Time Market Updates"
                subtitle="Streamline your trading process with our platform."
              />
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center py-5">
          <RoundedButton
            title="Join Yashwi Today"
            subTitle="Start Trading Instantly!"
          />
        </div>
      </div>

      {/* news section */}
      <div className={style.news_section}>
        <div className={style.news_heading}>
          <h1 className="pb-lg-4 pb-md-3 pb-0">
            we are in the <span>news</span>
          </h1>
          <h5 className="px-md-4 px-lg-0 px-5">
            See how we’re making headlines. Discover what the media is saying
            about our impact and innovations.
          </h5>
        </div>
        <Container className={style.news_row}>
          <Row className="m-sm-auto">
            <Col
              sm={12}
              md={12}
              lg={4}
              className="px-sm-0 px-lg-4  mb-md-5 mb-lg-0 mb-5"
              data-aos="zoom-in-right"
              data-aos-duration="2500"
            >
              <LargeCard
                image={news1}
                text="Yashwi Redefines Investment with Real-Time Insights and Zero Commissions"
                link="read more"
                icon={arrowup}
                width={"100%"}
              />
            </Col>
            <Col
              sm={12}
              md={12}
              lg={4}
              className="px-4 mb-md-5 mb-lg-0 mb-5 "
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <LargeCard
                image={news2}
                text="Yashwi Redefines Investment with Real-Time Insights and Zero Commissions"
                link="read more"
                icon={arrowup}
              />
            </Col>
            <Col
              sm={12}
              md={12}
              lg={4}
              className="px-4 mb-md-5 mb-lg-0 mb-5"
              data-aos="zoom-in-left"
              data-aos-duration="2500"
            >
              <LargeCard
                image={news3}
                text="Yashwi crossed the 1 million user mark just six months after its launch."
                link="read more"
                icon={arrowup}
                width={"100%"}
              />
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center py-lg-5 py-md-3 py-2">
          <RoundedButton
            title="Join Yashwi Today"
            subTitle="Start Trading Instantly!"
          />
        </div>
      </div>

      {/* accordion section   */}
      <div className={style.accordion_section}>
        <Container>
          <Row className={`${style.accordion_row} align-items-center`}>
            <Col
              sm={12}
              md={12}
              lg={7}
              className="pe-md-5 pe-0 order-2 order-lg-1 pt-lg-0 pt-5"
            >
              <BasicAccordion
                eventKey="0"
                header="1. Is Yashwi safe & trusted broking platform?"
              />
              <BasicAccordion
                eventKey="1"
                header="2. How much time does it take to Open Yashwi Account?"
              />
              <BasicAccordion
                eventKey="2"
                header="3. What documents are required to open a corporate demat account?"
              />
              <BasicAccordion
                eventKey="3"
                header="4. What documents are required to open a corporate demat account?"
              />
            </Col>
            <Col sm={12} md={12} lg={5} className="order-1">
              <div
                data-aos="zoom-out"
                data-aos-duration="2300"
                className={`${style.accor_rhs}  ps-md-2`}
              >
                <h1>
                  frequently <br /> asked <span>questions</span>
                </h1>
                <h5 className="py-3">
                  Questions on your mind? Dont worry we have the answers!
                </h5>
                <RoundedButton
                  title="Join Yashwi Today"
                  subTitle="Start Trading Instantly!"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* testimonial section */}
      <div
        className={`${style.testimonial_section} d-lg-block d-md-none d-block`}
      >
        <div className={style.testimonail_img}>
          <Container>
            <Row className={style.testimonail_row}>
              <Col md={8} sm={12} className="py-md-5 py=2">
                <div className={`${style.testimonail_rhs} py-md-5`}>
                  <h1>
                    Invest & Trade with Ease on
                    <br /> a Platform <span>Built for You</span>
                  </h1>
                  <h5 className="my-md-4 my-4">
                    Open your Yashwi account in just minutes and start trading
                    confidently across multiple markets!
                  </h5>
                  <RoundedButton
                    title="Join Yashwi Today"
                    subTitle="Start Trading Instantly!"
                  />
                </div>
              </Col>
              <Col md={4} className="d-lg-block d-md-none d-none">
                <div className={style.testimonail_lhs}>
                  <img src={girl} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* footer section */}
    </section>
  );
}

export default Home;
