import {
  AboutContainer,
  AdditionalCarousel,
  BannerImage,
  BannerText,
  CarouselComponent,
  ContactContainer,
  FinalPorfolioComponent,
  FirstImageContainer,
  HeaderBackground,
  HeaderContainer,
  HomeContainer,
  ImageContainer,
  ImageWrapper,
  IntroContainer,
  LineContainer,
  NewFeaturesContainer,
  PorFolioComponent,
  PromoComponent,
  SecondImageContainer,
  ServiceContainer,
  ServiceListContainer,
  TextContainer,
  ThridImageContainer,
  VerticalLineContainer,
} from "../../styles/Home/Home.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HeaderBackground src="/images/porfolio/Circle1.svg" />
        <HeaderContainer>
          <IntroContainer>
            <TextContainer>
              <div className="text__header">Our Beginning, Your Future</div>
              <p className="text__body">
                a journey of growth and partnership, making it compelling and
                forward-looking <br />
                to the future of your business
              </p>
              <Link to="/services" className="intro__btn">
                Join Now
                <i className="ri-arrow-right-s-line btn__icon"></i>
              </Link>
            </TextContainer>
            <ImageWrapper>
              <ImageContainer src="/images/logo/Logo_Glowed.svg" />
            </ImageWrapper>
          </IntroContainer>
        </HeaderContainer>
        <ServiceContainer>
          <VerticalLineContainer>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </VerticalLineContainer>
          <AboutContainer>
            <h2 className="about__header">Welcome To BitFlip</h2>
            <p className="about__body">
              Our website houses a team of expert professionals ready to meet
              all your business needs. <br />
              From graphic design and web development to 3D design, <br />
              security assistance, and software consulting, we've got it all
              under one roof.
            </p>
          </AboutContainer>
          <ServiceListContainer>
            <div className="service__list">
              <p className="service__box first__box">
                Website <br />
                Development
              </p>
              <p className="service__box second__box">
                UI/ UX <br />
                Design
              </p>
              <p className="service__box third__box">
                Graphic <br />
                Design
              </p>
            </div>
            <div className="service__list">
              <p className="service__box first__box">
                Mobile <br />
                Development
              </p>
              <p className="service__box second__box">
                Software <br />
                Consulting
              </p>
              <p className="service__box third__box">
                3D <br />
                Design
              </p>
            </div>
          </ServiceListContainer>
        </ServiceContainer>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <CarouselComponent>
              <div className="carousel__intro">
                <p className="carousel__text">
                  Say goodbye searching for individual freelancers <br /> or
                  companies for each of your business needs. <br /> We've
                  streamlined the preocess for you.
                </p>
              </div>
              <div className="carousel__main">
                <h1 className="carousel__header">The Hassle</h1>
              </div>
            </CarouselComponent>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselComponent>
              <div className="carousel__intro">
                <p className="carousel__text">
                  Time is money, and we understand that. <br /> No need to waste
                  time waiting for one serviceto finish <br /> before starting
                  the next. <br /> We ensure seamless coordination so you can
                  launch your projects faster than ever.
                </p>
              </div>
              <div className="carousel__main">
                <h1 className="carousel__header">Momentum</h1>
              </div>
            </CarouselComponent>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselComponent>
              <div className="carousel__intro">
                <p className="carousel__text">
                  Our customers are top priority. <br /> We pride ourselves on
                  lightning-fast responses and unwavering support. <br /> You'll
                  never feel alone in your journey to success. <br /> We're here
                  to help you build your business and reach your goals.
                </p>
              </div>
              <div className="carousel__main">
                <h1 className="carousel__header">Prioritizing</h1>
              </div>
            </CarouselComponent>
          </SwiperSlide>
        </Swiper>

        <AdditionalCarousel>
          <div className="horizontal__line"></div>
          <div className="learn__more__container">
            <a href="#" className="learn__more__text">
              Learn more
              <i className="ri-arrow-right-s-line learn__more__right__arrow"></i>
            </a>
            <p>It's free!</p>
          </div>
        </AdditionalCarousel>
        <PorFolioComponent>
          <LineContainer>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </LineContainer>
          <BannerImage>
            <FirstImageContainer>
              <img
                src="/images/porfolio/Porfolio1.png"
                alt="porfolio1"
                className="first__porfolio__image"
                data-aos="fade-up"
                data-aos-duration="500"
              />
              <img
                src="/images/porfolio/Porfolio2.png"
                alt="porfolio2"
                className="first__porfolio__image"
                data-aos="fade-down"
                data-aos-duration="500"
              />
              <p
                className="first__container__text"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                Our Portfolio of Excellence
              </p>
            </FirstImageContainer>
            <BannerText data-aos="fade-right" data-aos-duration="600">
              Each project displayed here <br />
              is a testament to our expertise and passion.
            </BannerText>
            <SecondImageContainer>
              <p
                className="second__container__text"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                As you browsse througn our portfolio. <br />
                you'll witness the transformation of ideas into tangible results
              </p>
              <div className="second__image__container">
                <img
                  src="/images/porfolio/Porfolio3.png"
                  alt="porfolio3"
                  className="second__porfolio__image"
                  data-aos="fade-up"
                  data-aos-duration="600"
                />
                <img
                  src="/images/porfolio/Porfolio4.png"
                  alt="porfolio4"
                  className="second__porfolio__image"
                  data-aos="fade-down"
                  data-aos-duration="600"
                />
              </div>
            </SecondImageContainer>
            <ThridImageContainer>
              <img
                src="/images/porfolio/Porfolio5.png"
                alt="porfolio5"
                className="third__porfolio__image"
                data-aos="fade-up"
                data-aos-duration="600"
              />
              <div
                className="third__text__container"
                data-aos="fade-down"
                data-aos-duration="600"
              >
                <p className="third__container__text">
                  Our work is a reflection of the boundless possibilities we
                  offer to our clients. br We encourage you to explre our
                  portfolio <br />
                  to gain insight into the caliber of work we deliver.
                </p>
                <button className="third__container__btn">Discover</button>
              </div>
            </ThridImageContainer>
            <FinalPorfolioComponent>
              <p className="final__container__text">
                Continue your journey of knowledge and inspiration <br />
                by delving into our thought-provoking developments.
              </p>
            </FinalPorfolioComponent>
          </BannerImage>
        </PorFolioComponent>
        <PromoComponent>
          <div className="horizontal__close__line" />
          <div className="promo__text__container">
            <a href="#" className="promo__text">
              See our future projects
              <i className="ri-arrow-right-s-line promo__right__arrow"></i>
            </a>
          </div>
        </PromoComponent>
        <NewFeaturesContainer>
          <button className="new__feature__btn membership__btn">
            Membership
          </button>
          <button className="new__feature__btn bitverse__btn">Bitverse</button>
          <button className="new__feature__btn blog__btn">Blogs</button>
        </NewFeaturesContainer>
        <ContactContainer>
          <img
            src="/images/porfolio/Circle1.svg"
            alt="circle"
            className="contact__circle"
          />
          <p className="contact__text">
            Reach out today <br />
            to start your entrepreneurial adventure <br />
            with a dedicated partner by your side.
          </p>
          <form className="contact__form">
            <input type="text" placeholder="Your name" />
            <input
              type="email"
              name="email"
              id="contact__mail"
              placeholder="Your email"
            />
            <button className="contact__btn white__btn">Contact with us</button>
            <button className="contact__btn black__btn">
              Business inquiries
            </button>
          </form>
        </ContactContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
