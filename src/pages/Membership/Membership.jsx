import { useState } from "react";
import {
  CuponForm,
  FirstStep,
  FloatBehindImage,
  FormCard,
  MembershipContainer,
  NormalPlanContainer,
  PlanBtnContainer,
  PlansContainerOne,
  PlansContainerThree,
  PlansContainerTwo,
  PlansHeader,
  PlusContainer,
  PlusPriceContainer,
  PlusPromoCard,
  PlusPromoListContainer,
  ProContainer,
  ProListContainer,
  PromoIntroContainer,
  PromoPlansContainer,
  SecondStep,
  StarterContainer,
  StarterListContainer,
} from "../../styles/Membership/Membership.style";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Membership = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    console.log(index);
    setToggle(index);
  };

  return (
    <MembershipContainer>
      <FloatBehindImage
        src="/images/plus/Float_Behind.png"
        alt="float_behind"
      />
      <PromoIntroContainer>
        <div className="glassy__background" />
        <div className="main__promo__container">
          <div className="text__container">
            <img
              src="/images/plus/Float_1.png"
              alt="float"
              className="inner__float__image"
            />
            <div className="promo__header__container">
              <h3 className="promo__header">Exclusivly FREE!</h3>
              <p className="promo__span__text">Unlock Elite Privilages</p>
              <button className="promo__btn">
                Apply Now
                <FiArrowUpRight />
              </button>
            </div>
            <div className="promo__text__container">
              <p className="promo__text">
                Bitflip membership is not just a status.
                <br />
                It's your key to unlock a world of discounts, <br />
                early access, and premium experiences.
              </p>
            </div>
            <div className="learn__more__container">
              <p className="learn__more__text">Learn more</p>
              <i className="ri-arrow-down-double-line down__icon"></i>
            </div>
          </div>
          <div className="image__container">
            <img
              src="/images/plus/Float2.png"
              alt="float2"
              className="left__float__image"
            />
            <img
              src="/images/plus/Vector.png"
              alt="vector"
              className="vector__image"
            />
          </div>
        </div>
      </PromoIntroContainer>
      <PromoPlansContainer>
        <PlansHeader>
          <div onClick={() => toggleTab(0)}>
            <p className="plansHeaderText">How does it work?</p>
            <hr
              className={toggle === 0 ? "small__line active" : "small__line"}
            />
          </div>
          <div onClick={() => toggleTab(1)}>
            <p className="plansHeaderText">Membership Plans</p>
            <hr
              className={toggle === 1 ? "small__line active" : "small__line"}
            />
          </div>
          <div onClick={() => toggleTab(2)}>
            <p className="plansHeaderText">Grab your Coupun</p>
            <hr
              className={toggle === 2 ? "small__line active" : "small__line"}
            />
          </div>
        </PlansHeader>
        <PlansContainerOne className={toggle === 0 ? "active" : null}>
          <FirstStep>
            <p className="number">
              <span className="step">Step</span>
              <span className="numberText">1</span>
            </p>
            <p className="StepText">
              Sign up for a FREE Bitflip membership. <br />
              After finishing signing up, you will receive our special coupon
              upon registration.
            </p>
          </FirstStep>
          <SecondStep>
            <p className="number">
              <span className="step">Step</span>
              <span className="numberText">2</span>
            </p>
            <p className="StepText">
              Activate your coupon, granting one year of access as our Member.
              <br />
              Enjoy the perks and discounts, up to 40% Off by upgrading your
              coupon for additional benefits.
            </p>
          </SecondStep>
          <PlanBtnContainer>
            <button className="member__btn">
              Membership
              <i className="ri-arrow-right-s-line member__right"></i>
            </button>
            <div className="register__btn__container">
              <button className="register__btn">Register</button>
              <p className="credit__card__text">No credit card required</p>
            </div>
          </PlanBtnContainer>
        </PlansContainerOne>
        <PlansContainerTwo className={toggle === 1 ? "active" : null}>
          <h2 className="container__two__header">BitFlip</h2>
          <div className="container__two__promo__text">
            <p className="promo__text__one">
              Join a community committed to growth and innovation
            </p>
            <p className="promo__text__two">
              Or even batter{" "}
              <i className="ri-arrow-down-s-line promo__two__icon"></i>
            </p>
          </div>
          <NormalPlanContainer>
            <StarterContainer>
              <h2 className="starterHeader">Starter</h2>
              <p className="starterText">Our most basic yet powerful</p>
              <h1 className="starterPromoHeader">
                <span className="dollar__icon">$</span>FREE
              </h1>
              <p className="starterPromoText">Exclusively for a limited time</p>
              <button className="starterPromoBtn">Get Started</button>
              <StarterListContainer>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  5% Discount on Service
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Member-only Resources
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Priority Support
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Community Forums
                </p>
                <p className="list de__active">Exclusive Meetups</p>
                <p className="list de__active">VIP Events Access</p>
                <p className="list de__active">Additional Services</p>
              </StarterListContainer>
            </StarterContainer>
            <ProContainer>
              <h2 className="proHeader">Pro</h2>
              <p className="proText">Ultimately Experiences</p>
              <h1 className="proPromoHeader">
                <span className="nested__text">$ starting from</span>10/mo
              </h1>
              <button className="proPromoBtn">Learn More</button>
              <ProListContainer>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  5% Discount on Service
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Member-only Resources
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Priority Support
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Community Forums
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Exclusive Meetups
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  VIP Events Access
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Additional Services
                </p>
              </ProListContainer>
            </ProContainer>
          </NormalPlanContainer>
          <PlusContainer>
            <h1 className="plus__header">BitFlip+</h1>
            <p className="plus__text">
              Our most esteemed and elite features, with life-time subscription
            </p>
            <PlusPromoCard>
              <PlusPromoListContainer>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  40% Discounts on all Services
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Member-only Resources
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Influential Communities
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Exclusive Events, Clubs, Opportunities +
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Life-time VIP Supports
                </p>
                <p className="list">
                  <i className="ri-arrow-right-s-line list__icon"></i>
                  Additional Premium Services
                </p>
              </PlusPromoListContainer>
              <PlusPriceContainer>
                <h1 className="plusPromoHeader">
                  <span className="nested__text">$ starting from</span>166/yr
                </h1>
                <button className="plus__btn">Learn more</button>
              </PlusPriceContainer>
            </PlusPromoCard>
          </PlusContainer>
        </PlansContainerTwo>
        <PlansContainerThree className={toggle === 2 ? "active" : null}>
          <h1 className="planThree__header">
            Ready to flip? Let us know who you are!
          </h1>
          <CuponForm>
            <div className="name">
              <i className="ri-user-line cupon__form__icon"></i>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="cupon__input"
              />
            </div>
            <div className="email">
              <i className="ri-mail-line cupon__form__icon"></i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="cupon__input"
              />
            </div>
            <div className="phone">
              <i className="ri-phone-fill cupon__form__icon"></i>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Ph Number"
                className="cupon__input"
              />
            </div>
            <button className="apply__btn">Apply</button>
          </CuponForm>
          <FormCard>
            <p className="intro">
              This form is specifically for applying the Free Membership Coupon.
            </p>
            <p className="body">
              Once you've submitted the form, our team will promptly review your
              application. <br />
              To ensure you receive the latest updates, including your coupon
              activation status,
            </p>
            <Link className="link">
              Check our FAQs How can I activate my Free Membership coupon?
            </Link>
          </FormCard>
        </PlansContainerThree>
      </PromoPlansContainer>
    </MembershipContainer>
  );
};

export default Membership;
