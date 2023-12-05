import styled from "styled-components";
import theme from "../../theme";

const MembershipContainer = styled.div`
  padding-top: 12vh;
  background-color: #0a0a0a;
  height: 100%;
  width: 100%;
`;

const FloatBehindImage = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  left: 15%;
`;

const PromoIntroContainer = styled.div`
  position: relative;
  margin-top: 15%;
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;
  height: 80vh;
  -webkit-box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.5);
  .glassy__background {
    backdrop-filter: blur(10px);
  }
  .main__promo__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #111111;
    .text__container {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .inner__float__image {
        width: 100px;
        height: 100px;
      }
      .promo__header__container {
        .promo__header {
          font-family: "Work Sans";
          font-size: 32px;
          text-align: center;
        }
        .promo__span__text {
          font-family: "Work Sans";
          text-align: center;
          font-weight: 200;
          opacity: 0.4;
          margin-top: 10px;
        }
        .promo__btn {
          width: 100%;
          background: linear-gradient(to right, #b2009c, #ff7e00);
          border: none;
          outline: none;
          font-family: "Work Sans";
          color: ${theme.color.primary};
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 10px;
          margin-top: 2em;
          border-radius: 100px;
          font-size: 18px;
          font-weight: 200;
          cursor: pointer;
        }
      }
      .promo__text__container {
        margin-top: 20%;
        .promo__text {
          font-family: "Work Sans";
          font-weight: 200;
          opacity: 0.8;
          line-height: 30px;
          text-align: right;
        }
      }
      .learn__more__container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 10%;
        .learn__more__text {
          background-image: linear-gradient(to right, #b2009c, #ff7e00);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          font-family: "Work Sans";
          font-weight: 200;
        }
        .down__icon {
          background-image: linear-gradient(to right, #b2009c, #ff7e00);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 32px;
          margin-top: 10%;
          font-weight: 200;
        }
      }
    }
    .image__container {
      width: 50%;
      .left__float__image {
        width: 200px;
        height: 200px;
        position: absolute;
        top: -15%;
        right: 30%;
      }
      .vector__image {
        width: 100%;
        height: 100%;
        margin-top: 20%;
      }
    }
  }
`;

const PromoPlansContainer = styled.div`
  width: 80%;
  margin: auto;
  .plansHeader {
  }
`;

const PlansHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8em;
  cursor: pointer;
  .plansHeaderText {
    font-family: "Work Sans";
    font-size: 18px;
    font-weight: 200;
    opacity: 0.8;
  }
  .small__line {
    width: 20%;
    height: 2px;
    border: none;
    margin: 1.5em auto;
    background: linear-gradient(to right, #b2009c, #ff7e00);
    border-radius: 100px;
    &.active {
      width: 50%;
      transition: width 0.3s ease;
    }
  }
`;

const PlansContainerOne = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10%;

  &.active {
    transition: display 0.3s ease;
    display: flex;
  }
`;

const FirstStep = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #111;
  padding: 40px 150px;
  border-radius: 50px;
  margin-bottom: 3em;
  .number {
    display: flex;
    flex-direction: column;
    align-items: center;
    .step,
    .numberText {
      font-family: "Work Sans";
    }
    .step {
      font-size: 18px;
      font-weight: bold;
      opacity: 0.5;
    }
    .numberText {
      font-size: 32px;
      font-weight: bold;
    }
  }
  .StepText {
    font-family: "Work Sans";
    font-weight: 200;
    line-height: 40px;
    opacity: 0.8;
    font-size: 16px;
  }
`;

const SecondStep = styled(FirstStep)`
  background-color: transparent;
  padding-right: 30px;
  margin-top: 2%;
`;

const PlanBtnContainer = styled.div`
  margin-left: auto;
  display: flex;
  margin-right: 10%;
  .member__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${theme.color.primary};
    font-size: 14px;
    font-family: "Work Sans";
    width: 180px;
    height: 40px;
    border-radius: 50px;
    margin-right: 10px;
    font-weight: 200;
    cursor: pointer;
    &:hover {
      transition: all 0.3s ease;
      opacity: 0.9;
    }
    .member__right {
      margin-left: 10px;
      font-size: 16px;
    }
  }
  .register__btn__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .register__btn {
      border: none;
      color: ${theme.color.primary};
      background: linear-gradient(to right, #b2009c, #ff7e00);
      font-family: "Work Sans";
      width: 180px;
      height: 40px;
      border-radius: 50px;
      font-weight: 200;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        transition: all 0.3s ease;
        opacity: 0.9;
      }
    }
    .credit__card__text {
      font-weight: 200;
      font-family: "Work Sans";
      font-size: 12px;
      margin-top: 10px;
      opacity: 0.8;
    }
  }
`;

const PlansContainerTwo = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
  padding-bottom: 5%;
  &.active {
    display: flex;
  }
  .container__two__header {
    font-family: "Work Sans";
    font-weight: 400;
  }
  .container__two__promo__text {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: 3%;
    .promo__text__one {
      font-family: "Work Sans";
      font-weight: 200;
    }
    .promo__text__two {
      font-family: "Work Sans";
      font-weight: bold;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .promo__two__icon {
        margin-top: 5px;
        margin-left: 5px;
      }
    }
  }
`;

const NormalPlanContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8%;
`;

const StarterContainer = styled.div`
  width: 45%;
  background-color: #111;
  margin: auto;
  padding: 50px;
  border-radius: 30px;
  .starterHeader {
    font-family: "Work Sans";
    font-weight: 400;
    font-size: 24px;
  }
  .starterText {
    font-family: "Work Sans";
    font-weight: 200;
    margin-top: 20px;
    font-size: 16px;
    opacity: 0.8;
  }
  .starterPromoHeader {
    background-image: linear-gradient(to right, #b2009c 2%, #ff7e00 98%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-family: "Work Sans";
    font-weight: 400;
    margin-top: 50px;
    .dollar__icon {
      font-family: "Work Sans";
      font-size: 16px;
    }
  }
  .starterPromoText {
    font-weight: 400;
    font-family: "Work Sans";
    margin-top: 10px;
    opacity: 0.5;
  }
  .starterPromoBtn {
    width: 100%;
    margin-top: 20px;
    height: 60px;
    border-radius: 20px;
    border: none;
    background-color: ${theme.color.primary};
    font-family: "Work Sans";
    font-size: 18px;
    cursor: pointer;
    &:hover {
      transition: all 0.3s ease;
      opacity: 0.9;
    }
  }
`;

const StarterListContainer = styled.div`
  margin-top: 50px;
  .list {
    display: flex;
    align-items: flex-start;
    align-items: center;
    font-size: 14px;
    font-family: "Work Sans";
    font-weight: 200;
    margin-bottom: 10px;
    opacity: 0.8;
    &.de__active {
      opacity: 0.2;
      margin-left: 12%;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .list__icon {
      font-size: 32px;
      font-weight: 200;
      background-image: linear-gradient(to right, #b2009c, #ff7e00);
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
`;

const ProContainer = styled.div`
  width: 45%;
  background-color: #111;
  margin: auto;
  padding: 50px;
  border-radius: 30px;
  .proHeader {
    font-family: "Work Sans";
    font-weight: 400;
    font-size: 24px;
  }
  .proText {
    font-family: "Work Sans";
    font-weight: 200;
    margin-top: 20px;
    font-size: 16px;
    opacity: 0.8;
  }
  .proPromoHeader {
    background-image: linear-gradient(to right, #b2009c, #ff7e00);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-family: "Work Sans";
    font-weight: 400;
    margin-top: 50px;
    margin-bottom: 30px;
    .nested__text {
      font-family: "Work Sans";
      font-size: 16px;
    }
  }
  .proPromoBtn {
    width: 100%;
    margin-top: 20px;
    height: 60px;
    border-radius: 20px;
    border: none;
    background: linear-gradient(to right, #b2009c, #ff7e00);
    font-family: "Work Sans";
    font-size: 18px;
    cursor: pointer;
    &:hover {
      transition: all 0.3s ease;
      opacity: 0.9;
    }
  }
`;

const ProListContainer = styled(StarterListContainer)``;

const PlusContainer = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .plus__header {
    background-image: linear-gradient(to right, #b2009c, #ff7e00);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-family: "Work Sans";
    font-weight: 400;
  }
  .plus__text {
    font-family: "Work Sans";
    font-size: 22px;
    font-weight: 200;
    margin-top: 5%;
  }
`;

const PlusPromoCard = styled.div`
  background-color: #111;
  width: 150%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
  border-radius: 30px;
  padding: 50px;
`;

const PlusPromoListContainer = styled(StarterListContainer)`
  margin: 0;
`;

const PlusPriceContainer = styled.div`
  padding: 20px 50px;
  .plusPromoHeader {
    background-image: linear-gradient(to right, #b2009c, #ff7e00);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-family: "Work Sans";
    font-weight: 400;
    margin-top: 50px;
    margin-bottom: 30px;
    .nested__text {
      font-family: "Work Sans";
      font-size: 16px;
    }
  }
  .plus__btn {
    width: 120%;
    margin-top: 20px;
    height: 60px;
    border-radius: 20px;
    border: none;
    background: linear-gradient(to right, #b2009c, #ff7e00);
    font-family: "Work Sans";
    font-size: 18px;
    cursor: pointer;
    &:hover {
      transition: all 0.3s ease;
      opacity: 0.9;
    }
  }
`;

const PlansContainerThree = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
  padding-bottom: 3%;

  &.active {
    display: flex;
  }
  .planThree__header {
    font-size: 32px;
    font-family: "Work Sans";
    font-weight: 400;
    opacity: 0.8;
  }
`;

const CuponForm = styled.form`
  width: 60%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .name,
  .email,
  .phone {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10%;
  }
  .cupon__form__icon {
    font-size: 48px;
    margin-top: 3%;
    margin-right: 5%;
    opacity: 0.5;
    font-weight: 100;
    font-family: "Work Sans";
  }
  .cupon__input {
    width: 100%;
    font-size: 24px;
    font-family: "Work Sans";
    font-weight: 400;
    padding: 10px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;
    color: ${theme.color.primary};
  }
  .apply__btn {
    width: 40%;
    margin-top: 20px;
    align-self: center;
    height: 70px;
    border-radius: 50px;
    border: none;
    background: linear-gradient(to right, #b2009c, #ff7e00);
    font-family: "Work Sans";
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    color: ${theme.color.primary};
    &:hover {
      transition: all 0.3s ease;
      opacity: 0.9;
    }
  }
`;

const FormCard = styled.div`
  width: 75%;
  height: 40vh;
  background: #111;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  .intro,
  .body,
  .link {
    font-family: "Work Sans";
    font-weight: 200;
    opacity: 0.8;
  }
  .intro {
    margin-bottom: 4em;
  }
  .body {
    margin-bottom: 4em;
    line-height: 30px;
  }

  .link {
    text-decoration: none;
    color: ${theme.color.alert};
    font-weight: 400;
  }
`;

const FAQContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
  .faq__text {
    text-align: center;
    font-family: "Work Sans";
    font-weight: 200;
    opacity: 0.8;
  }
  .faq__header {
    font-family: "Work Sans";
    font-weight: 400;
    margin-top: 5%;
    font-size: 32px;
    text-align: center;
    padding: 0.5em 2.5em;
    border: 2px solid transparent;
    border-image: linear-gradient(to right, #b2009c, #ff7e00) 1 1 1 1;
    border-radius: 50%;
  }
`;

const QListContainer = styled.div`
  margin-top: 5%;
  width: 50%;
  margin-left: 5%;
  .q__list__item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 2rem;
    .q__list__text {
      color: ${theme.color.alert};
      font-family: "Work Sans";
      font-weight: 200;
      margin-left: 5%;
      font-size: 18px;
    }
  }
`;

export {
  MembershipContainer,
  FloatBehindImage,
  PromoIntroContainer,
  PromoPlansContainer,
  PlansHeader,
  FirstStep,
  SecondStep,
  PlanBtnContainer,
  PlansContainerOne,
  PlansContainerTwo,
  NormalPlanContainer,
  StarterContainer,
  StarterListContainer,
  ProContainer,
  ProListContainer,
  PlusContainer,
  PlusPromoCard,
  PlusPromoListContainer,
  PlusPriceContainer,
  PlansContainerThree,
  CuponForm,
  FormCard,
  FAQContainer,
  QListContainer,
};
