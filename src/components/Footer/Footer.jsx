import { Link } from "react-router-dom";
import {
  ContactInfoContainer,
  CopyrightContainer,
  ExploreInfoContainer,
  FooterContainer,
  FooterIcon,
  FooterListContainer,
  LegalInfoContainer,
} from "../../styles/Footer/Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcon src="/images/logo/LogoFull_White.svg" />
      <FooterListContainer>
        <ContactInfoContainer>
          <h3 className="info__header">Contact Information</h3>
          <ul className="info__list">
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Instagram
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Discord
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Facebook
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Email Address
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Call Us
              </Link>
            </li>
          </ul>
        </ContactInfoContainer>
        <ExploreInfoContainer>
          <h3 className="info__header">Explore</h3>
          <ul className="info__list">
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Service
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Early Access
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Memberships
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                FAQs
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                About Us
              </Link>
            </li>
          </ul>
        </ExploreInfoContainer>
        <LegalInfoContainer>
          <h3 className="info__header">Legal Notice</h3>
          <ul className="info__list">
            <li className="info__list__item">
              <Link to="/contact-details" className="info__text">
                Contact Details
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="/terms-of-use" className="info__text">
                Terms of use
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="/privacy-policy" className="info__text">
                Privacy Policy
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Newsletter Information
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="/user-conduct" className="info__text">
                User Conduct
              </Link>
            </li>
            <li className="info__list__item">
              <Link to="#" className="info__text">
                Trademarks
              </Link>
            </li>
          </ul>
        </LegalInfoContainer>
      </FooterListContainer>
      <CopyrightContainer>
        <p className="copyright__text">
          Copyright &#169; 2023 BitFlip Official | All rights reserved
        </p>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
