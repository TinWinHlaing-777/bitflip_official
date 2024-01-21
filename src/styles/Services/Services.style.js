import styled from "styled-components";
import theme from "../../theme";

export const ServiceContainer = styled.div`
  padding-top: 12vh;
  @media screen and (max-width: 768px) {
    padding-top: 4vh;
  }
  @media screen and (max-width: 480px) {
    padding-top: 5vh;
  }
`;

export const ServiceHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 15vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10vh;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 10vh;
  }
  .service__card {
    width: 21%;
    height: 45vh;
    margin: 10px;
    border-radius: 20px;
    padding: 30px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(
      to top left,
      rgba(25, 25, 25, 0.8),
      rgba(255, 255, 255, 0.15)
    );
    @media screen and (max-width: 768px) {
      width: 70%;
    }
    @media screen and (max-width: 480px) {
      width: 80%;
    }
    .service__card__header {
      font-family: "Work Sans";
      font-size: 24px;
      font-weight: 300;
      text-align: center;
    }
    .service__card__body {
      font-family: "Work Sans";
      font-size: 16px;
      padding: 20px 10px;
      opacity: 0.5;
      font-weight: 200;
    }
    .service__card__btn {
      width: 85%;
      padding: 10px;
      border-radius: 50px;
      border: 1px solid transparent;
      border-image: linear-gradient(to right, #b2009c, #ff7e00) 1 1 1 1;
      background: transparent;
      color: ${theme.color.primary};
      margin: auto auto 0 auto;
      font-family: "Work Sans";
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 300;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .service__small__text {
      font-family: "Work Sans";
      font-size: 12px;
      font-weight: 200;
      margin-top: 1em;
      opacity: 0.5;
    }
  }
`;

export const ServiceBodyContainer = styled.div`
  .service__body__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .m__line {
      width: 35%;
    }
    .service__body__header__text {
      font-size: 28px;
      font-weight: 300;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        font-size: 24px;
        text-align: center;
      }
    }
  }
  .service__body__list {
    margin-top: 5rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      margin-top: 2rem;
    }
    .package__list__header {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .package__button {
        color: ${theme.color.primary};
        padding: 10px 50px;
        font-size: 2rem;
        font-weight: 200;
        cursor: pointer;
        opacity: 0.2;
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          font-size: 1rem;
          text-align: center;
          padding: 10px 5px;
        }
        &.active,
        &:hover {
          transition: all 0.3s ease-in-out;
          opacity: 1.5;
          @media screen and (max-width: 768px), screen and (max-width: 480px) {
            background-color: ${theme.color.standard};
          }
        }
      }
    }
  }
`;

export const WebServiceContainer = styled.div`
  display: none;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    flex-direction: column;
  }
  &.active {
    display: flex;
  }
`;

export const PackageCard = styled.div`
  width: 30%;
  height: auto;
  margin-top: 5rem;
  background-color: ${theme.color.standard};

  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
  }

  .package__card__header {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.8);
    .card__title {
      margin: 2rem;
      text-align: center;
      font-size: 24px;
      font-weight: 400;
    }
  }
  .package__price__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    .price__text {
      font-size: 4rem;
      font-weight: 600;
      font-family: "Work Sans";
    }
  }
  .package__card__body {
    list-style: none;
    margin-top: 2rem;
    .card__list__item {
      font-family: "Work Sans";
      text-align: center;
      font-weight: 300;
      font-size: 18px;
      line-height: 50px;
      opacity: 0.8;
    }
  }
  .package__card__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .purchase__btn {
      margin-top: 3rem;
      border: none;
      background-color: ${theme.color.default};
      color: ${theme.color.primary};
      width: 15rem;
      height: 3rem;
      font-size: 1rem;

      cursor: pointer;
    }
    .purchase__card__logo {
      width: 80px;
      height: 80px;
      margin-top: 3rem;
    }
  }
`;

export const MobileServiceContainer = styled(WebServiceContainer)``;

export const DesignServiceContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    flex-direction: column;
  }
  &.active {
    display: flex;
  }
`;

export const DesignListContainer = styled.ul`
  list-style: none;
  width: 30%;
  margin-top: 5rem;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    margin-top: 3rem;
  }
  .design__list__item {
    background-color: ${theme.color.warning};
    padding: 30px;
    cursor: pointer;
    text-align: center;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      padding: 20px;
      width: 100%;
      font-size: 12px;
    }
    &:hover {
      transition: all 0.3s ease;
      opacity: 0.6;
    }
    &.active {
      background-color: ${theme.color.standard};
    }
  }
`;

export const DesignDetailsContainer = styled.div`
  width: 80%;
  margin-top: 5rem;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const LogoCard = styled.div`
  display: none;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    flex-direction: column;
  }
  .design__package__card {
    background-color: ${theme.color.standard};
    width: 30%;
    height: auto;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
    }
    .design__package__header {
      border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
      .design__package__title {
        text-align: center;
        margin: 2rem;
        font-size: 24px;
      }
    }
    .d_package__price__container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      .d_price__text {
        font-size: 4rem;
        font-weight: 600;
        font-family: "Work Sans";
      }
    }
    .design__package__body {
      list-style: none;
      margin: 2em;
      .design__package__list__item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .index__name__text,
        .item__text {
          font-family: "Work Sans";
          text-align: center;
          font-weight: 300;
          font-size: 18px;
          line-height: 50px;
          opacity: 0.8;
        }
      }
    }
    .design__package__footer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .d_purchase__btn {
        margin-top: 3rem;
        border: none;
        background-color: ${theme.color.default};
        color: ${theme.color.primary};
        width: 15rem;
        height: 3rem;
        font-size: 1rem;

        cursor: pointer;
      }
      .d_purchase__card__logo {
        width: 80px;
        height: 80px;
        margin-top: 3rem;
      }
    }
  }
  &.active {
    display: flex;
  }
`;

export const MediaCard = styled(LogoCard)``;

export const BrandCard = styled(LogoCard)``;

export const CustomServiceContainer = styled.div`
  display: none;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.color.standard};
  height: auto;
  width: 100%;
  margin-top: 5rem;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 3rem;
  }
  &.active {
    display: flex;
  }
`;

export const QuoteContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    width: 90%;
    margin-top: 2rem;
  }
  .quote__text {
    width: 70%;
    margin: auto;
    font-size: 1.5rem;
    font-family: "Work Sans";
    line-height: 3.5rem;
    font-weight: 300;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

export const CustomizeForm = styled.form`
  height: auto;
  width: 50%;
  padding: 4rem;
  margin: auto;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    width: 100%;
    padding: 2rem;
  }
  .form__header {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    background: linear-gradient(to right, #b2009c, #ff7e00);
    -webkit-background-clip: text;
    color: transparent;
    text-transform: uppercase;
  }
  .form__input__container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    .c__input {
      width: 100%;
      height: 3.5rem;
      margin-bottom: 2rem;
      border: none;
      padding-left: 1rem;
      font-family: "Work Sans";
      font-size: 1.2rem;
      outline: none;
      background-color: ${theme.color.default};
      color: ${theme.color.primary};
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        height: 2.5rem;
        font-size: 1rem;
      }
      &.c__input__file {
        background: ${theme.color.default};
        color: ${theme.color.primary};
        margin-bottom: 0;
        padding: 15px 15px;
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          padding: 8px 15px;
        }
      }
    }
    .c_span__text {
      margin-bottom: 1.5rem;
      margin-top: 5px;
      font-family: "Work Sans";
      font-size: 16px;
      font-weight: 200;
      opacity: 0.8;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        font-size: 12px;
      }
    }
    .c__form__btn {
      margin-left: auto;
      margin-right: auto;
      width: 20rem;
      height: 3rem;
      background: linear-gradient(to right, #b2009c, #ff7e00);
      border: none;
      color: ${theme.color.primary};
      cursor: pointer;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        height: 2rem;
      }
      &:hover {
        transition: all 0.6s ease;
        opacity: 0.8;
      }
    }
  }
`;

export const ServiceFooterContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  padding: 4%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    to left top,
    rgba(25, 25, 25, 0.7) 50%,
    rgba(230, 230, 230, 0.7) 250%
  );
  .service__footer__text {
    text-align: center;
    font-family: "Work Sans";
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
  .service__footer__btn {
    border: none;
    background-color: ${theme.color.warning};
    color: ${theme.color.primary};
    padding: 1.5rem 4rem;
    margin-top: 2.5rem;
    font-family: "Work Sans";
    font-size: 1.5rem;
    cursor: pointer;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      padding: 1rem 4rem;
      font-size: 1rem;
      margin-top: 3rem;
    }
    &:hover {
      transition: all 0.3s ease;
      opacity: 0.8;
    }
  }
`;
