import styled from "styled-components";
import theme from "../../theme";
import bgImage from "/images/porfolio/Circle1.svg";

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
`;

const HeaderBackground = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: auto;
  max-width: 1100px;
  max-height: 1500px;
  margin-left: -25%;
  margin-top: -10%;
  opacity: 0.3;

  @media (max-width: 1200px) {
    max-width: 1000px;
    max-height: 1500px;
    margin-left: -20%;
    margin-top: -20%;
  }

  @media (max-width: 480px) {
    max-width: 500px;
    max-height: 900px;
    margin-left: -15%;
    margin-top: -10%;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(25, 25, 25, 0.7) 70%,
    rgba(230, 230, 230, 0.7) 250%
  );
  width: 100%;
  height: 70vh;
  box-shadow: 2px 2px 10px ${theme.color.standard};
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 77vh;
  width: 100%;

  @media (max-width: 480px) {
    height: auto;
    padding: 2em;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  margin-left: 5%;
  margin-top: 10em;
  color: ${theme.color.secondary};

  @media screen and (max-width: 768px) {
    margin-top: 5em;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 7em auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .text__header {
    font-size: 48px;
    margin-bottom: 5rem;

    @media (max-width: 480px) {
      font-size: 32px;
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  .text__body {
    font-size: 16px;
    line-height: 40px;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 16px;
      text-align: center;
    }
  }

  .intro__btn {
    border: none;
    text-decoration: none;
    background-color: ${theme.color.primary};
    color: ${theme.color.default};
    width: 250px;
    height: 70px;
    box-shadow: 5px 5px 10px ${theme.color.standard};
    font-size: 20px;
    margin-top: 5.5em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #a0a0a0;
      transition: all 0.3s ease;
    }
    .btn__icon {
      font-size: 28px;
      margin-left: 10px;
      margin-top: 3px;
    }

    @media screen and (max-width: 480px) {
      width: 200px;
      height: 50px;
      margin-top: 1.5em;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  @media (max-width: 480px) {
    display: none;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 40%;
`;

const ServiceContainer = styled.div`
  margin: auto;
  width: 95%;
  @media screen and (max-width: 428px) {
    width: 90%;
  }
  @media screen and (max-width: 360px) {
    width: 95%;
  }
`;

const VerticalLineContainer = styled(ServiceContainer)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }

  .line {
    width: 1px;
    height: 80vh;
    background-color: ${theme.color.primary};
    opacity: 0.2;
    position: relative;
    z-index: -1;

    @media screen and(max-width: 768px) {
      height: 80vh;
    }

    @media screen and (max-width: 480px) {
      height: 70vh;
    }
  }
`;

const AboutContainer = styled(ServiceContainer)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 20px;
  background: rgba(40, 40, 40, 0.9);
  box-shadow: 2px 2px 10px ${theme.color.standard};
  padding: 70px 30px;
  margin-top: -25%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: -100%;
    padding: 30px 10px;
  }

  @media screen and (max-width: 480px) {
    margin-top: -115%;
  }

  @media screen and (max-width: 360px) {
    margin-top: -135%;
  }

  .about__header {
    font-weight: 400;
    font-size: 32px;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .about__body {
    font-weight: 400;
    line-height: 40px;
    text-align: right;
    font-size: 16px;

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 12px;
    }
  }
`;

const ServiceListContainer = styled(ServiceContainer)`
  margin-top: 8%;
  margin-bottom: 20%;
  width: 80%;

  @media screen and (max-width: 768px) {
    margin-top: 12%;
    width: 90%;
  }

  .service__list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    margin-bottom: 5%;

    .service__box {
      width: 100%;
      margin-left: 50%;
      line-height: 40px;
      position: relative;
      padding-bottom: 10px;
      font-weight: 200;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        font-size: 14px;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 10%;
        border-bottom: 1px solid white;
        width: 50%;
        opacity: 0.5;

        @media screen and (max-width: 768px) {
          left: 15%;
          width: 50%;
        }
      }

      &.first__box {
        margin-left: 10%;
      }

      &.second__box {
        margin-left: 25%;
      }

      &.third__box {
        margin-left: 30%;
      }
    }
  }
`;

const CarouselComponent = styled.div`
  position: static;
  width: 100%;
  @media screen and (max-width: 480px) {
    margin-top: 10%;
  }
  .carousel__intro {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 50%;
    margin: auto;
    @media screen and (max-width: 480px) {
      width: 95%;
      height: 10em;
    }
    @media screen and (max-width: 360px) {
      width: 95%;
      height: 12em;
    }
    .carousel__text {
      text-align: center;
      font-size: 16px;
      line-height: 30px;
    }
  }
  .carousel__main {
    width: 100%;
    margin-top: 5em;

    .carousel__header {
      text-transform: uppercase;
      text-align: center;
      font-size: 11.7rem;
      font-weight: 900;
      background: -webkit-linear-gradient(
        ${theme.color.primary},
        ${theme.color.standard}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (max-width: 768px) {
        font-size: 6em;
      }
      @media screen and (max-width: 480px) {
        font-size: 3em;
      }
      @media screen and (max-width: 360px) {
        font-size: 2.8em;
      }
    }
  }
`;

const AdditionalCarousel = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 10%;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin-top: 3em;
    margin-bottom: 20%;
  }
  .horizontal__line {
    width: 100%;
    height: 3px;
    border-radius: 50px;
    background-color: ${theme.color.info};
  }
  .learn__more__container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    .learn__more__text {
      text-decoration: none;
      align-self: center;
      color: ${theme.color.alert};
      .learn__more__right__arrow {
        color: ${theme.color.primary};
      }
    }
  }
`;

const PorFolioComponent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .line {
    width: 1px;
    height: 225vh;
    background-color: ${theme.color.primary};
    opacity: 0.2;
    position: relative;
    z-index: -1;
    @media screen and (max-width: 480px) {
      height: 200vh;
    }
  }
`;

const BannerImage = styled.div`
  margin-top: -137.5%;
  z-index: 100;
  @media screen and (max-width: 480px) {
    margin-top: -428%;
  }
  @media screen and (max-width: 360px) {
    margin-top: -460%;
  }
`;

const FirstImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 5em;
  }
  .first__porfolio__image {
    width: 20em;
    height: 28em;
    opacity: 0.8;
    @media screen and (max-width: 480px) {
      width: 18em;
      height: 25em;
    }
    @media screen and (max-width: 360px) {
      width: 16em;
      height: 25em;
    }
  }
  .first__container__text {
    position: absolute;
    font-size: 3.2em;
    @media screen and (max-width: 480px) {
      font-size: 2.8em;
      text-align: center;
    }
    @media screen and (max-width: 360px) {
      font-size: 2.5em;
      text-align: center;
    }
  }
`;

const BannerText = styled.p`
  font-size: 14px;
  line-height: 30px;
  margin-top: -30px;
  position: absolute;
  @media screen and (max-width: 480px) {
    position: static;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const SecondImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  .second__container__text {
    font-size: 14px;
    line-height: 30px;
    text-align: right;
    @media screen and (max-width: 480px) {
      position: absolute;
      z-index: 100;
      color: ${theme.color.primary};
      text-align: center;
      margin-bottom: 20em;
    }
  }
  .second__image__container {
    display: flex;
    justify-content: space-between; /* Center the content horizontally */
    @media screen and (max-width: 480px) {
      flex-direction: column;
      margin: auto;
    }
    .second__porfolio__image {
      width: 20em;
      height: 28em;
      opacity: 0.8;
      @media screen and (max-width: 480px) {
        width: 18em;
        height: 25em;
        margin: auto;
      }
      @media screen and (max-width: 360px) {
        width: 16em;
        height: 25em;
      }
    }
  }
`;

const ThridImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-top: 15%;
    justify-content: center;
    flex-direction: column;
  }
  .third__porfolio__image {
    position: relative;
    width: 20em;
    height: 28em;
    opacity: 0.8;
    @media screen and (max-width: 480px) {
      width: 18em;
      height: 25em;
      margin: auto;
    }
    @media screen and (max-width: 360px) {
      width: 16em;
      height: 25em;
    }
  }
  .third__text__container {
    width: 50%;
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-top: 10%;
    }
    .third__container__text {
      font-size: 14px;
      line-height: 30px;
      @media screen and (max-width: 480px) {
        text-align: center;
      }
    }
    .third__container__btn {
      border: none;
      background-color: ${theme.color.default};
      color: ${theme.color.primary};
      width: 18em;
      height: 70px;
      box-shadow: 5px 5px 10px ${theme.color.standard};
      font-size: 18px;
      margin-top: 3em;
      margin-left: -2px;
      cursor: pointer;
      @media screen and (max-width: 480px) {
        width: 100%;
      }
      &:hover {
        transition: all 0.3s ease;
        opacity: 0.8;
      }
    }
  }
`;

const FinalPorfolioComponent = styled.div`
  margin-top: 15%;
  width: 45%;
  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 15% auto;
  }
  .final__container__text {
    font-size: 14px;
    line-height: 30px;
    text-align: right;
    @media screen and (max-width: 480px) {
      text-align: center;
    }
  }
`;

const PromoComponent = styled.div`
  width: 67%;
  margin-left: auto;
  margin-top: 3%;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
  .horizontal__close__line {
    background-color: ${theme.color.primary};
    width: 100%;
    height: 1px;
  }
  .promo__text__container {
    margin-top: 20px;
  }
  .promo__text {
    font-size: 14px;
    line-height: 30px;
    text-decoration: none;
    color: ${theme.color.alert};
    .promo__right__arrow {
      color: ${theme.color.primary};
    }
  }
`;

const NewFeaturesContainer = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 4.5em;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: 50% 5%;
  background-size: 80%;
  opacity: 0.8;
  background: linear-gradient(255, 255, 255, 0.3), ${theme.color.primary};
  box-shadow: 2px 2px 10px ${theme.color.standard};
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    background-position: 50% -20%;
    background-size: 180%;
  }
  .new__feature__btn {
    background: none;
    border: none;
    font-size: 42px;
    color: ${theme.color.primary};
    cursor: pointer;
    text-shadow: 2px 10px 100px ${theme.color.primary};
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
    &.membership__btn {
      margin-top: 2em;
      margin-left: 3em;
      @media screen and (max-width: 480px) {
        margin: 0;
      }
    }
    &.bitverse__btn {
      margin-bottom: 7em;
      margin-right: 5em;
      @media screen and (max-width: 480px) {
        margin: 0;
      }
    }
    &.blog__btn {
      margin-right: 3em;
      margin-bottom: 3em;
      @media screen and (max-width: 480px) {
        margin: 0;
      }
    }
  }
`;

const ContactContainer = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  .contact__circle {
    position: absolute;
    left: -70em;
    bottom: 0;
    width: 110em;
    height: 130vh;
    opacity: 0.3;
  }

  .contact__text {
    font-weight: 200;
    font-size: 20px;
    margin-bottom: 200px;
    line-height: 40px;
    @media screen and (max-width: 480px) {
      margin-top: 20%;
      margin-bottom: 0px;
      text-align: center;
    }
  }
  .contact__form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
    @media screen and (max-width: 480px) {
      margin-top: 2%;
    }
    input {
      border: none;
      border-bottom: 1px solid ${theme.color.primary};
      background: none;
      width: 100%;
      margin-bottom: 50px;
      outline: none;
      color: ${theme.color.primary};
      font-size: 16px;
      padding: 10px 0px;
    }
    .contact__btn {
      border: none;
      width: 300px;
      height: 80px;
      margin-top: 20px;
      background: none;
      font-size: 18px;
      @media screen and (max-width: 480px) {
        height: 50px;
      }
      cursor: pointer;
      &.white__btn {
        background-color: ${theme.color.primary};
      }
      &.black__btn {
        border: 1px solid ${theme.color.primary};
        color: ${theme.color.primary};
      }
    }
  }
`;

export {
  HomeContainer,
  HeaderBackground,
  HeaderContainer,
  IntroContainer,
  TextContainer,
  ImageWrapper,
  ImageContainer,
  ServiceContainer,
  VerticalLineContainer,
  AboutContainer,
  ServiceListContainer,
  CarouselComponent,
  AdditionalCarousel,
  PorFolioComponent,
  LineContainer,
  BannerImage,
  FirstImageContainer,
  BannerText,
  SecondImageContainer,
  ThridImageContainer,
  FinalPorfolioComponent,
  PromoComponent,
  NewFeaturesContainer,
  ContactContainer,
};
