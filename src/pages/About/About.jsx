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
          <img
            src="/images/about/imgs/Ideology_BG.png"
            alt="main__img"
            className="main__img"
          />
          <p className="main__title">The Ideology</p>
          <hr className="small__line" />
          <p className="main__body">
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
            />
            <div className="first__info__text__container">
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
            <div className="second__info__text__container">
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
            />
          </div>
          <div className="third__infoContainer">
            <img
              src="/images/about/imgs/OnUs.png"
              alt="on-us"
              className="third__info__image"
            />
            <div className="third__info__text__container">
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
          <p className="magic__title">See the magic</p>
          <div className="magic__details__container">
            {MagicArray.map((detail, index) => (
              <div className="magic__details" key={index}>
                <img
                  src={detail.iconSrc}
                  alt={detail.title}
                  className="magic__img"
                />
                <p className="magic__detail__title">{detail.title}</p>
                <p className="magic__detail__body">{detail.body}</p>
              </div>
            ))}
            {/* <div className="magic__details">
              <img
                src="/images/about/icons/2.png"
                alt="1"
                className="magic__img"
              />
              <p className="magic__detail__title">The Pillers</p>
              <p className="magic__detail__body">
                We exceed boundaries to forge connections, resonating globally.
                Our commitment knows no border.
              </p>
            </div>{" "}
            <div className="magic__details">
              <img
                src="/images/about/icons/3.png"
                alt="1"
                className="magic__img"
              />
              <p className="magic__detail__title">Tailored</p>
              <p className="magic__detail__body">
                We exceed boundaries to forge connections, resonating globally.
                Our commitment knows no border.
              </p>
            </div> */}
          </div>
        </MagicContainer>
        <MeetUsContainer></MeetUsContainer>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
