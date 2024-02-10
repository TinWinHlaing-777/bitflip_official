import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  AboutContainer,
  InfoContainer,
  MagicContainer,
  MainContainer,
  MeetUsContainer,
} from "../../styles/About/About.style";

const MagicArray = [
  {
    iconSrc: "/images/about/icons/1.png",
    title: "Global",
    body: "We exceed boundaries to forge connections, resonating globally. Our commitment knows no border.",
  },
  {
    iconSrc: "/images/about/icons/2.png",
    title: "The Pillars",
    body: "We are the architects of reliability, trust, and passion, building a legacy of strong relationships that statnds that test of time.",
  },
  {
    iconSrc: "/images/about/icons/3.png",
    title: "Tailored",
    body: "Specific solutions that meet and exceed your desire. We understand the unique need of business and enterprise.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <MainContainer>
          {/* <img
            src="/images/about/imgs/Ideology_BG.png"
            alt="main__img"
            className="main__img"
          /> */}
          <p className="main__title" data-aos="fade-up" data-aos-duration="500">
            The Ideology
          </p>
          <hr
            className="small__line"
            data-aos="fade-up"
            data-aos-duration="500"
          />
          <p className="main__body" data-aos="fade-up" data-aos-duration="500">
            Now you've almost done with your idea of business, and are you
            actually making it? did you achieve all you targets? Probably will
            or not, but it doesn't matter. That means you need to make sure your
            idea will actually be different from others. Otherwise, you'll keep
            repeating the same mistakes, and you'll always be stuck exactly wher
            you currently are. Worse still, you'll never fulfill your true
            potential. So, how do you get unstuck? Well, that's exactly what
            we're going to make your idea happen together in this journey.
          </p>
        </MainContainer>
        <InfoContainer>
          <div className="first__infoContainer">
            <img
              src="/images/about/imgs/WeSee.png"
              alt="we-see"
              className="first__info__image"
              data-aos="fade-up"
              data-aos-duration="500"
            />
            <div
              className="first__info__text__container"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="first__info__title">We see</p>
              <p className="first__info__body">
                By the year 2023, A.I development is obviously growing top
                notch. People are getting inspired by the technology and works
                have been easier than before. But hey, you don't want your
                identity to be easily copied, and your idea to be stolen. You
                want your goals to be tailored.
              </p>
            </div>
          </div>
          <div className="second__infoContainer">
            <div
              className="second__info__text__container"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <p className="second__info__title">We make the work</p>
              <p className="second__info__body">
                Let's be honest. You want to fulfil your dream come true. But
                you do not want your time to focus on the hard works, at least
                not recommended. This idea of making something out of yourself
                when you cannot sleep at night, well, guess what. We are here to
                make things work, the desire is yours.
              </p>
            </div>
            <img
              src="/images/about/imgs/WeMake.png"
              alt="we-make"
              className="second__info__image"
              data-aos="fade-up"
              data-aos-duration="600"
            />
          </div>
          <div className="third__infoContainer">
            <img
              src="/images/about/imgs/OnUs.png"
              alt="on-us"
              className="third__info__image"
              data-aos="fade-up"
              data-aos-duration="500"
            />
            <div
              className="third__info__text__container"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <p className="third__info__title">It's on us!</p>
              <p className="third__info__body">
                Now your are ready to start this journey of building your
                desire. Let's make the magic happen!
              </p>
            </div>
          </div>
          <hr className="info__stop__line" />
        </InfoContainer>
        <MagicContainer>
          <p
            className="magic__title"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            See the magic
          </p>
          <div className="magic__details__container">
            {MagicArray.map((detail, index) => (
              <div className="magic__details" key={index}>
                <img
                  src={detail.iconSrc}
                  alt={detail.title}
                  className="magic__img"
                  data-aos="fade-up"
                  data-aos-duration="600"
                />
                <p
                  className="magic__detail__title"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  {detail.title}
                </p>
                <p
                  className="magic__detail__body"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  {detail.body}
                </p>
              </div>
            ))}
          </div>
          <div className="magic__footer">
            <p
              className="magic__footer__text"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              Hurry! You don't want your dream to be claimed by someone else.
            </p>
            <div className="magic__btn__container">
              <hr className="magic__sm__line" />
              <button className="magic__btn">Save your Spot!</button>
              <hr className="magic__sm__line" />
            </div>
          </div>
        </MagicContainer>
        <MeetUsContainer>
          <p className="meet__title" data-aos="fade-up" data-aos-duration="500">
            Meet Us
          </p>
          <div className="loc__container">
            <div className="map__container">
              <hr className="meet__sm__line" />
              <p
                className="meet__detail__text"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Based in Southeast Asia, Myanmar, our team has been working on
                the next level of upscaling worldwide and the values that we put
                in . Get in touch to see our vision more clearly and our insight
                of advancing targets.
              </p>
            </div>
            <button className="meet__btn">Contact</button>
            <hr className="meet__lg__line" />
          </div>
        </MeetUsContainer>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
