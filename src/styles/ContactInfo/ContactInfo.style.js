import styled from "styled-components";
import theme from "../../theme";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    padding: 8rem 0 5rem 0;
  }
  .contact__header {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 7rem;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

export const ContactLeftContainer = styled.div`
  width: 40%;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    width: 100%;
  }
  .contact__left__text {
    font-family: "Work Sans";
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 40px;
    padding: 0 3rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      text-align: center;
    }
  }
  .contact__form__img {
    width: 30w;
    height: 30vh;
    margin-top: 2rem;
    @media screen and (max-width: 768px), screen and (max-width: 480px) {
      width: 80vw;
      height: 50vh;
      margin-top: 1rem;
    }
  }
`;

export const ContactRightContainer = styled.div`
  width: 70%;
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const ContactForm = styled.form`
  width: 90%;
`;

export const ContactInput = styled.div`
  position: relative;
  margin-left: 10%;
  margin-bottom: 2rem;
  .contact__input {
    font-family: "Work Sans";
    font-size: 1.1rem;
    outline: none;
    color: ${theme.color.primary};
    padding-left: 5rem;
    padding-bottom: 20px;
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
  .contact__icon {
    position: absolute;
    left: 10px;
    top: calc(50% - 10px);
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ContactBtn = styled.button`
  margin-left: 80%;
  margin-top: 1rem;
  border: none;
  background-color: ${theme.color.primary};
  width: 10rem;
  height: 3rem;
  font-family: "Work Sans";
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 768px), screen and (max-width: 480px) {
    margin-left: 55%;
  }
`;
