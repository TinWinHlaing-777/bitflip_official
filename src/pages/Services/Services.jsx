import { useState } from "react";
import {
  ServiceBodyContainer,
  ServiceContainer,
  ServiceFooterContainer,
  ServiceHeaderContainer,
} from "../../styles/Services/Services.style";
import ServicesLists from "../../components/ServiceLists/ServicesLists";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const manageToggle = (index) => {
    setToggle(index);
  };

  return (
    <ServiceContainer>
      <ServiceHeaderContainer>
        <div className="service__card">
          <p className="service__card__header">You have your Goal,</p>
          <p className="service__card__body">
            Greate your idea might seems obsolate to others, but not to us.
          </p>
        </div>
        <div className="service__card">
          <p className="service__card__header">What's Missing?</p>
          <p className="service__card__body">
            Who will make it work for you? Well now you think -
          </p>
        </div>
        <div className="service__card">
          <p className="service__card__header">We make it happen!</p>
          <p className="service__card__body">
            Now together it's time to create the enterpreneur journey of your
            idea.
          </p>
          <button className="service__card__btn">explore</button>
          <p className="service__small__text">See the magic behind!</p>
        </div>
      </ServiceHeaderContainer>
      <ServiceBodyContainer>
        <div className="service__body__header">
          <hr className="m__line" />
          <h3 className="service__body__header__text">Let's make it work!</h3>
          <hr className="m__line" />
        </div>
        <div className="service__body__list">
          <div className="package__list__header">
            <p
              className={
                toggle === 0 ? "package__button active" : "package__button"
              }
              onClick={() => manageToggle(0)}
            >
              Web
            </p>
            <p
              className={
                toggle === 1 ? "package__button active" : "package__button"
              }
              onClick={() => manageToggle(1)}
            >
              Mobile
            </p>
            <p
              className={
                toggle === 2 ? "package__button active" : "package__button"
              }
              onClick={() => manageToggle(2)}
            >
              Design
            </p>
            <p
              className={
                toggle === 3 ? "package__button active" : "package__button"
              }
              onClick={() => manageToggle(3)}
            >
              Tailor Made
            </p>
          </div>
        </div>
        <ServicesLists props={toggle} />
      </ServiceBodyContainer>
      <ServiceFooterContainer>
        <p className="service__footer__text">
          Or, forget the headage, tell us your story and let us do the <br />
          work for you!
        </p>
        <button className="service__footer__btn">Contact Us</button>
      </ServiceFooterContainer>
    </ServiceContainer>
  );
};

export default Services;
