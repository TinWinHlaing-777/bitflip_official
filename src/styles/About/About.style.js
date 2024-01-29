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
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      width: 100vw;
      height: 50vh;
    }
  }
  .main__title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 3.5rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      text-align: center;
      font-size: 2.5rem;
    }
  }
  .small__line {
    height: 5px;
    width: 5vw;
    margin-top: 3rem;
    background-color: ${theme.color.primary};
    border-radius: 10px;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      margin-top: 1.5rem;
      width: 20vw;
    }
  }
  .main__body {
    margin-top: 3rem;
    width: 50%;
    font-family: "Work Sans";
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
    line-height: 40px;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      margin-top: 1.5rem;
      width: 90%;
      font-size: 0.9rem;
    }
  }
`;

export const InfoContainer = styled.div`
  background-color: rgb(10, 10, 10);
  padding-bottom: 2rem;
  .first__infoContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin: auto;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      flex-direction: column;
      width: 100%;
    }
    .first__info__image {
      width: 50%;
      height: auto;
      margin-top: -4rem;
      margin-right: auto;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        width: 90%;
        margin: auto;
        margin-top: -5rem;
      }
    }
    .first__info__text__container {
      width: 40%;
      margin-top: -4rem;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        width: 90%;
        margin: auto;
        margin-top: 3rem;
      }
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
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          font-size: 0.9rem;
        }
      }
    }
  }
  .second__infoContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
    margin: auto;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      flex-direction: column-reverse;
      width: 100%;
    }
    .second__info__text__container {
      width: 40%;
      margin-top: -1.5rem;
      text-align: right;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        text-align: left;
        width: 90%;
        margin: auto;
        margin-top: 3rem;
      }
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
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          font-size: 0.9rem;
        }
      }
    }
    .second__info__image {
      width: 50%;
      height: auto;
      margin-bottom: 0.5rem;
      margin-left: auto;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        width: 90%;
        margin: auto;
        margin-top: 3rem;
      }
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
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      width: 100%;
      flex-direction: column;
    }
    .third__info__image {
      width: 50%;
      height: auto;
      margin-right: auto;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        width: 90%;
        margin: auto;
      }
    }
    .third__info__text__container {
      width: 40%;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        width: 90%;
        margin: auto;
        margin-top: 3rem;
      }
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
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          font-size: 0.9rem;
        }
      }
    }
  }
  .info__stop__line {
    width: 5vw;
    height: 5px;
    background-color: ${theme.color.primary};
    margin: 5rem auto auto;
    border-radius: 10px;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      width: 20vw;
      margin-top: 3rem;
    }
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
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      font-size: 2.5rem;
      padding-top: 3rem;
    }
  }
  .magic__details__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      flex-direction: column;
      margin-top: 5rem;
    }
    .magic__details {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .magic__img {
        width: 30%;
        height: 30%;
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          width: 50%;
          height: 50%;
        }
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
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          width: 90%;
          font-size: 0.9rem;
        }
      }
    }
  }
  .magic__footer {
    margin-top: 5rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      margin-top: 3rem;
    }
    .magic__footer__text {
      text-align: center;
      font-family: "Work Sans";
      font-size: 1.1rem;
      font-weight: 200;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        font-size: 0.9rem;
      }
    }
    .magic__btn__container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      margin: auto;
      margin-top: 2rem;
      .magic__sm__line {
        width: 50%;
        height: 0.5px;
        background-color: ${theme.color.primary};
      }
      .magic__btn {
        border: none;
        background-color: ${theme.color.primary};
        width: 30vw;
        height: 10vh;
        font-size: 1.5rem;
        font-family: "Work Sans";
        font-weight: 600;
        text-transform: uppercase;
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          font-size: 0.8rem;
          width: 50vw;
          height: 5vh;
          font-weight: 400;
        }
      }
    }
  }
`;

export const MeetUsContainer = styled.div`
  background-color: ${theme.color.origin};
  .meet__title {
    text-transform: uppercase;
    text-align: center;
    font-size: 3.5rem;
    padding-top: 10rem;
    font-weight: 600;
    margin-bottom: 2rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      padding-top: 3rem;
      font-size: 2.5rem;
    }
  }
  .loc__container {
    background-color: rgb(10, 10, 10);
    padding-top: 1rem;
    padding-bottom: 5rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      padding-bottom: 3rem;
    }
    .map__container {
      background-image: url("/images/about/Map.png");
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      height: 80vh;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        background-size: 80%;
        height: 50vh;
      }
      .meet__sm__line {
        height: 5px;
        width: 5vw;
        background-color: ${theme.color.primary};
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          width: 20vw;
        }
      }
      .meet__detail__text {
        width: 35%;
        font-family: "Work Sans";
        font-weight: 200;
        font-family: 1.1rem;
        line-height: 40px;
        backdrop-filter: blur(10px);
        padding: 30px;
        margin-left: 10rem;
        margin-top: 5rem;
        border-radius: 5px;
        box-shadow: 2px 1px 10px rgba(70, 70, 70, 0.2);
        @media screen and (max-width: 768px), screen and (max-width: 480px) {
          margin-left: auto;
          margin-right: auto;
          margin-top: 18rem;
          width: 90%;
          padding: 0;
          backdrop-filter: blur(20px);
        }
      }
    }

    .meet__btn {
      border: none;
      background-color: ${theme.color.primary};
      width: 25vw;
      height: 10vh;
      margin: 0 auto;
      display: block;
      font-size: 1.5rem;
      font-family: "Work Sans";
      font-weight: 600;
      text-transform: uppercase;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        margin-top: 13rem;
        width: 50vw;
        height: 5vh;
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
    .meet__lg__line {
      width: 90%;
      margin: 5rem auto 0 auto;
      @media screen and (max-width: 768px), screen and (max-width: 480px) {
        margin: 3rem auto 0 auto;
      }
    }
  }
`;
