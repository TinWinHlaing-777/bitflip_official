import styled from "styled-components";
import theme from "../../theme";

export const LegalInfoContainer = styled.div`
  padding-top: 12vh;
  background-color: ${theme.color.default};
  width: 100%;
  height: auto;
`;

export const LegalHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3em;
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
    @media screen and (max-width: 480px) {
      width: 90%;
    }
  }
`;

export const LegalMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 5em auto;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .legal__list__container {
    width: 25%;
    list-style: none;
    margin-left: 5%;
    @media screen and (max-width: 480px) {
      width: 100%;
      margin-left: auto;
    }
    .legal__list__item {
      padding-top: 2em;
      cursor: pointer;
      &.active {
        background-color: ${theme.color.warning};
      }
      &:hover {
        transition: all 0.3s ease;
        background-color: ${theme.color.warning};
      }
      .legal__list__text {
        text-align: end;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        font-family: "Work Sans";
        font-weight: 200;
        font-size: 18px;
        padding-bottom: 1em;
        .list__text {
          font-family: "Work Sans";
          font-weight: 200;
          font-size: 18px;
          margin-right: 1em;
        }
      }
    }
  }
  .legal__text__container {
    width: 60%;
    background: ${theme.color.warning};
    padding: 3em 4em;
    height: auto;
    margin-left: auto;
    @media screen and (max-width: 480px) {
      width: 100%;
      margin: 2em auto;
      padding: 2em;
    }
    .legal__text__details {
      font-family: "Work Sans";
      font-size: 18px;
      font-weight: 200;
      line-height: 35px;
      /* text-align: justify; */
      .span__text {
        font-weight: 600;
        font-family: "Work Sans";
        font-size: 18px;
      }
      .contact__icons {
        font-size: 28px;
        margin-right: 32px;
      }
    }
  }
`;
