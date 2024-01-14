import styled from "styled-components";
import theme from "../../theme";

export const ServiceContainer = styled.div`
  padding-top: 12vh;
`;

export const ServiceHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 15vh;
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
    }
  }
  .service__body__list {
    margin-top: 5rem;
    .package__list__header {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .package__button {
        color: ${theme.color.primary};
        padding: 10px 50px;
        font-size: 28px;
        font-weight: 200;
        cursor: pointer;
        opacity: 0.2;
        &.active,
        &:hover {
          transition: all 0.3s ease-in-out;
          opacity: 1.5;
        }
      }
    }
  }
`;

export const WebServiceContainer = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export const MobileServiceContainer = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export const DesignServiceContainer = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export const CustomServiceContainer = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export const ServiceFooterContainer = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;
