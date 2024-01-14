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
              <a href="#" className="info__text">
                Instagram
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Discord
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Facebook
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Email Address
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Call Us
              </a>
            </li>
          </ul>
        </ContactInfoContainer>
        <ExploreInfoContainer>
          <h3 className="info__header">Explore</h3>
          <ul className="info__list">
            <li className="info__list__item">
              <a href="#" className="info__text">
                Service
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Early Access
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Memberships
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                FAQs
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                About Us
              </a>
            </li>
          </ul>
        </ExploreInfoContainer>
        <LegalInfoContainer>
          <h3 className="info__header">Legal Notice</h3>
          <ul className="info__list">
            <li className="info__list__item">
              <a href="/contact-details" className="info__text">
                Contact Details
              </a>
            </li>
            <li className="info__list__item">
              <a href="terms-of-use" className="info__text">
                Terms of use
              </a>
            </li>
            <li className="info__list__item">
              <a href="privacy-policy" className="info__text">
                Privacy Policy
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Newsletter Information
              </a>
            </li>
            <li className="info__list__item">
              <a href="user-conduct" className="info__text">
                User Conduct
              </a>
            </li>
            <li className="info__list__item">
              <a href="#" className="info__text">
                Trademarks
              </a>
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
