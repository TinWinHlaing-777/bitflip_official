import styled from "styled-components";
import theme from "../../theme";

export const LegalInfoContainer = styled.div`
  padding-top: 12vh;
  background-color: ${theme.color.default};
  width: 100%;
  height: auto;
`;

export const LegalInfoNav = styled.nav`
  background-color: ${theme.color.warning};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  cursor: pointer;
  .back__icon {
    background-image: linear-gradient(to right, #b2009c, #ff7e00);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 42px;
    font-weight: 200;
  }
  .back__text {
    font-family: "Work Sans";
    font-size: 24px;
    font-weight: 400;
  }
`;

export const LegalHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5em;
  .legalHeader {
    font-family: "Work Sans";
    font-size: 2.2em;
  }
  .small__legal__header {
    font-family: "Work Sans";
    font-size: 14px;
    font-family: 200;
    opacity: 0.5;
    margin-top: 1em;
  }
  .legal__paragraph {
    font-family: "Work Sans";
    font-weight: 200;
    text-align: center;
    font-size: 18px;
    line-height: 35px;
    margin-top: 3em;
  }
`;

export const LegalMainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: auto;
  .legal__list__container {
    width: 25%;
    list-style: none;
    .legal__list__item {
      margin-top: 2em;
      .legal__list__text {
        text-align: end;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        font-family: "Work Sans";
      }
    }
  }
  .legal__text__container {
    width: 60%;
  }
`;
