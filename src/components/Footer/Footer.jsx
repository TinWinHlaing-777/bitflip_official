import {
  ContactSession,
  FooterContainer,
  PolicySession,
  SocialMediaSession,
} from "../../styles/Footer/Footer.style";
import { FaFacebookF, FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactSession className="session">
        <a href="#">BitFlip</a>
        <a href="mailto:bitflipofficial@gmail.com">bitflipofficial@gmail.com</a>
        <p>Yangon, Myanmar</p>
      </ContactSession>
      <PolicySession className="session">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Services</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Copyright Information</a>
      </PolicySession>
      <SocialMediaSession className="session">
        <FaFacebookF className="social__icon" />
        <FaDiscord className="social__icon" />
        <BiLogoGmail className="social__icon" />
      </SocialMediaSession>
    </FooterContainer>
  );
};

export default Footer;
