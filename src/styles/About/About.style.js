import styled from "styled-components";
import theme from "../../theme";

export const AboutContainer = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.color.origin};
  padding-bottom: 10rem;
  .main__img {
    width: 80vw;
    height: 70vh;
  }
  .main__title {
    text-transform: uppercase;
    /* font-family: "Work Sans"; */
    font-weight: 600;
    font-size: 3.5rem;
  }
  .small__line {
    height: 5px;
    width: 5vw;
    margin-top: 3rem;
    background-color: ${theme.color.primary};
    border-radius: 10px;
  }
  .main__body {
    margin-top: 3rem;
    width: 50%;
    font-family: "Work Sans";
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
    line-height: 40px;
  }
`;

export const InfoContainer = styled.div`
  background-color: #09080f;
  padding-bottom: 2rem;
  .first__infoContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin: auto;
    .first__info__image {
      width: 50%;
      height: auto;
      margin-top: -4rem;
      margin-right: auto;
    }
    .first__info__text__container {
      width: 40%;
      margin-top: -4rem;
      .first__info__title {
        font-family: "Work Sans";
        font-size: 2rem;
      }
      .first__info__body {
        font-family: "Work Sans";
        font-size: 1.1rem;
        font-weight: 200;
        line-height: 40px;
        margin-top: 2rem;
      }
    }
  }
  .second__infoContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
    margin: auto;
    .second__info__text__container {
      width: 40%;
      margin-top: -1.5rem;
      text-align: right;
      .second__info__title {
        font-family: "Work Sans";
        font-size: 2rem;
      }
      .second__info__body {
        font-family: "Work Sans";
        font-size: 1.1rem;
        font-weight: 200;
        line-height: 40px;
        margin-top: 2rem;
      }
    }
    .second__info__image {
      width: 50%;
      height: auto;
      margin-bottom: 0.5rem;
      margin-left: auto;
    }
  }
  .third__infoContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    .third__info__image {
      width: 50%;
      height: auto;
      margin-right: auto;
    }
    .third__info__text__container {
      width: 40%;
      .third__info__title {
        font-family: "Work Sans";
        font-size: 2rem;
      }
      .third__info__body {
        font-family: "Work Sans";
        font-size: 1.1rem;
        font-weight: 200;
        line-height: 40px;
        margin-top: 2rem;
      }
    }
  }
  .info__stop__line {
    width: 5vw;
    height: 5px;
    background-color: ${theme.color.primary};
    margin: 5rem auto auto;
    border-radius: 10px;
  }
`;

export const MagicContainer = styled.div`
  background-color: ${theme.color.origin};
  .magic__title {
    padding-top: 5rem;
    text-align: center;
    font-size: 3.5rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  .magic__details__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10rem;
    .magic__details {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .magic__img {
        width: 30%;
        height: 30%;
      }
      .magic__detail__title {
        font-family: "Work Sans";
        font-size: 2rem;
        font-weight: 400;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      .magic__detail__body {
        width: 50%;
        text-align: center;
        font-family: "Work Sans";
        font-size: 1.1rem;
        font-weight: 200;
        line-height: 40px;
      }
    }
  }
`;

export const MeetUsContainer = styled.div``;
