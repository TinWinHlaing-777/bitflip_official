import styled from "styled-components";
import theme from "../../theme";

export const FooterContainer = styled.div`
  background-color: ${theme.color.origin};
  width: 100%;
  height: auto;
`;

export const FooterIcon = styled.img`
  width: 140px;
  height: 140px;
  margin-left: 4%;
`;

export const FooterListContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 100px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContactInfoContainer = styled.div`
  width: 30%;
  margin-right: 5%;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 2em;
  }
  .info__header {
    text-align: start;
    font-family: "Work Sans";
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 24px;
    padding-bottom: 15px;
  }
  .info__list {
    list-style: none;
    margin-top: 20px;
    .info__list__item {
      margin-top: 10px;
      .info__text {
        font-family: "Work Sans";
        font-size: 17px;
        font-weight: 200;
        text-decoration: none;
        color: ${theme.color.primary};
        opacity: 0.8;
      }
    }
  }
`;

export const ExploreInfoContainer = styled(ContactInfoContainer)``;

export const LegalInfoContainer = styled(ContactInfoContainer)`
  width: 40%;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 0;
  }
  .info__list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
    }
  }
`;

export const CopyrightContainer = styled.div`
  padding-bottom: 0.8em;
  .copyright__text {
    text-align: center;
    font-family: "Work Sans";
    font-size: 12px;
    font-weight: 100;
  }
`;
