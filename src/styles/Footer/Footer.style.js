import styled from "styled-components";
import theme from "../../theme";

const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-self: center;
  width: 100%;
  height: 30vh;
  background: rgba(0, 0, 0, 0.25);
  margin-top: -5em;
  .session {
    display: flex;
    justify-content: center;
    color: ${theme.color.primary};
    font-size: 12px;
  }
`;

const ContactSession = styled.div`
  flex-direction: column;
  align-items: flex-start;
  a {
    text-decoration: none;
    color: ${theme.color.primary};
    margin-bottom: 10px;
  }
`;

const PolicySession = styled.div`
  flex-direction: column;
  align-items: flex-start;
  a {
    text-decoration: none;
    color: ${theme.color.primary};
    margin-bottom: 10px;
  }
`;

const SocialMediaSession = styled.div`
  flex-direction: row;
  align-items: center;
  .social__icon {
    width: 28px;
    height: 28px;
    margin: 0 2em;
  }
`;

export { FooterContainer, ContactSession, PolicySession, SocialMediaSession };
