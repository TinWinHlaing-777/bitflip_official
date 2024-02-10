import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  ContactBtn,
  ContactContainer,
  ContactForm,
  ContactFormContainer,
  ContactInput,
  ContactLeftContainer,
  ContactRightContainer,
} from "../../styles/ContactInfo/ContactInfo.style";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

const ContactInfo = () => {
  return (
    <>
      <Navbar />
      <ContactContainer>
        <p className="contact__header">Contact us</p>
        <ContactFormContainer>
          <ContactLeftContainer>
            <p className="contact__left__text">
              Whether you're seeking our service, interested in collaboration,
              or simply wanto to meet our team, we welcome you with open arms.
            </p>
            <img
              src="/images/contact/Side_Illustration.svg"
              alt="contact-image"
              className="contact__form__img"
            />
          </ContactLeftContainer>
          <ContactRightContainer>
            <ContactForm>
              <ContactInput>
                <IoPersonOutline className="contact__icon" />
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  placeholder="User Name"
                  className="contact__input"
                />
              </ContactInput>
              <ContactInput>
                <MdOutlineEmail className="contact__icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="contact__input"
                />
              </ContactInput>
              <ContactInput>
                <FaPhoneAlt className="contact__icon" />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="contact__input"
                />
              </ContactInput>
              <ContactInput>
                <PiTelegramLogo className="contact__icon" />
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  className="contact__input"
                />
              </ContactInput>
              <ContactBtn>Send Message</ContactBtn>
            </ContactForm>
          </ContactRightContainer>
        </ContactFormContainer>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default ContactInfo;
