import { useState } from "react";
import {
  BrandCard,
  CustomServiceContainer,
  CustomizeForm,
  DesignDetailsContainer,
  DesignListContainer,
  DesignServiceContainer,
  LogoCard,
  MediaCard,
  MobileServiceContainer,
  PackageCard,
  QuoteContainer,
  WebServiceContainer,
} from "../../styles/Services/Services.style";

const webpackages = [
  {
    title: "Basic",
    price: "199",
    features: [
      "Functional Website",
      "Single Page",
      "Multiple Pages",
      "Flexible User Interface",
      "Speed Optimization",
      "Social Media Icons",
    ],
  },
  {
    title: "Standard",
    price: "799",
    features: [
      "Functional Website",
      "Single Page",
      "Multiple Pages",
      "Flexiable User Interface",
      "Content Upload",
      "Ecommerce Functionalities",
      "Speed Optimization",
      "Commercial Licensed Images",
      "Social Media Icons",
      "Admin Dashboard",
      "User Role Control",
      "Database Management System",
    ],
  },
  {
    title: "Premium",
    price: "999",
    features: [
      "Functional Website",
      "Single Page",
      "Multiple Pages",
      "Flexiable User Interface",
      "Content Upload",
      "Ecommerce Functionalities",
      "Payment Processing",
      "Otp-in form",
      "Autoresponder Integration",
      "Speed Optimization",
      "Commercial Licensed Images",
      "Social Media Icons",
      "Admin Dashboard",
      "User Role Control",
      "Database Management System",
    ],
  },
];

const mobilepackages = [
  {
    title: "Basic",
    price: "399",
    features: [
      "Functional Android app",
      "Functional iOS app",
      "Flexiable UI/ UX",
      "Performance Optimization",
      "Security Features",
      "Testing & Debugging",
      "Updates & Maintenance",
      "Compliance & Legal Considerations",
    ],
  },
  {
    title: "Standard",
    price: "999",
    features: [
      "Functional Android app",
      "Functional iOS app",
      "Flexiable UI/ UX",
      "Performance Optimization",
      "Security Features",
      "Offline Functionalities",
      "Integration with Device Features",
      "Scalability",
      "Testing & Debugging",
      "Updates & Maintenance",
      "Complex Functionalities",
      "Compliance & Legal Considerations",
    ],
  },
  {
    title: "Premium",
    price: "1099",
    features: [
      "Functional Android app",
      "Functional iOS app",
      "Flexiable UI/ UX",
      "Performance Optimization",
      "Security Features",
      "Offline Functionalities",
      "Integration with Device Features",
      "Scalability",
      "Testing & Debugging",
      "App Monetization",
      "Updates & Maintenance",
      "Complex Functionalities",
      "Database Implementation",
      "Admin Dashboard",
      "Analytics & User Feedback",
      "Compliance & Legal Considerations",
    ],
  },
];

const LogoBrandingList = [
  {
    title: "Basic",
    price: "50",
    features: [
      {
        indexName: "Concept",
        item: 2,
      },
      {
        indexName: "Revision",
        item: 4,
      },
      {
        indexName: "Color Palette",
        item: 2,
      },
      {
        indexName: "File Format",
        item: 3,
      },
      {
        indexName: "File Resolution",
        item: "Basic",
      },
      {
        indexName: "Color Theory",
        item: "Basic",
      },
      {
        indexName: "Adaptability",
        item: "Basic",
      },
      {
        indexName: "Logo Portfolio",
      },
      {
        indexName: "Source File",
      },
    ],
  },
  {
    title: "Standard",
    price: "140",
    features: [
      {
        indexName: "Concept",
        item: 5,
      },
      {
        indexName: "Revision",
        item: 8,
      },
      {
        indexName: "Color Palette",
        item: 4,
      },
      {
        indexName: "File Format",
        item: 4,
      },
      {
        indexName: "Mockup",
        item: 1,
      },
      {
        indexName: "File Resolution",
        item: "Standard",
      },
      {
        indexName: "Color Theory",
        item: "Standard",
      },
      {
        indexName: "Adaptability",
        item: "Standard",
      },
      {
        indexName: "Branding Guidline",
      },
      {
        indexName: "Logo Portfolio",
      },
      {
        indexName: "Source File",
      },
    ],
  },
  {
    title: "Premium",
    price: "220",
    features: [
      {
        indexName: "Concept",
        item: 9,
      },
      {
        indexName: "Revision",
        item: "Unlimitted",
      },
      {
        indexName: "Color Palette",
        item: 8,
      },
      {
        indexName: "File Format",
        item: 6,
      },
      {
        indexName: "Mockup",
        item: 3,
      },
      {
        indexName: "File Resolution",
        item: "High",
      },
      {
        indexName: "Color Theory",
        item: "High",
      },
      {
        indexName: "Adaptability",
        item: "High",
      },
      {
        indexName: "Branding Guidline",
      },
      {
        indexName: "Logo Portfolio",
      },
      {
        indexName: "Source File",
      },
    ],
  },
];

const MediaList = [
  {
    title: "Basic",
    price: "50",
    features: [
      {
        indexName: "Concept",
        item: 2,
      },
      {
        indexName: "Revision",
        item: 4,
      },
      {
        indexName: "Template",
        item: 2,
      },
      {
        indexName: "File Format",
        item: 2,
      },
      {
        indexName: "File Resolution",
        item: "Basic",
      },
      {
        indexName: "Color Theory",
        item: "Basic",
      },
      {
        indexName: "Adaptability",
        item: "Basic",
      },
      {
        indexName: "Social Media Portfolio",
      },
      {
        indexName: "Source File",
      },
    ],
  },
  {
    title: "Standard",
    price: "140",
    features: [
      {
        indexName: "Concept",
        item: 5,
      },
      {
        indexName: "Revision",
        item: 8,
      },
      {
        indexName: "Template",
        item: 4,
      },
      {
        indexName: "File Format",
        item: 4,
      },
      {
        indexName: "Platform",
        item: 1,
      },
      {
        indexName: "File Resolution",
        item: "Standard",
      },
      {
        indexName: "Color Theory",
        item: "Standard",
      },
      {
        indexName: "Adaptability",
        item: "Standard",
      },
      {
        indexName: "Documentation",
      },
      {
        indexName: "Social Media Portfolio",
      },
      {
        indexName: "Source File",
      },
    ],
  },
  {
    title: "Premium",
    price: "220",
    features: [
      {
        indexName: "Concept",
        item: 9,
      },
      {
        indexName: "Revision",
        item: "Unlimitted",
      },
      {
        indexName: "Color Palette",
        item: 8,
      },
      {
        indexName: "File Format",
        item: 6,
      },
      {
        indexName: "Platform",
        item: 3,
      },
      {
        indexName: "File Resolution",
        item: "High",
      },
      {
        indexName: "Color Theory",
        item: "High",
      },
      {
        indexName: "Adaptability",
        item: "High",
      },
      {
        indexName: "Documentation",
      },
      {
        indexName: "Social Media Portfolio",
      },
      {
        indexName: "Source File",
      },
    ],
  },
];

const ServicesLists = ({ props }) => {
  const [activeDesign, setActiveDesign] = useState(0);

  const toggleDesign = (index) => {
    setActiveDesign(index);
  };

  return (
    <>
      <WebServiceContainer className={props === 0 ? "active" : null}>
        {webpackages.map((data, index) => (
          <PackageCard key={index} data-aos="fade-up" data-aos-duration="700">
            <div className="package__card__header">
              <p className="card__title">{data.title}</p>
            </div>
            <div className="package__price__container">
              <p className="price__text">${data.price}</p>
            </div>
            <ul className="package__card__body">
              {data.features.map((feature, key) => (
                <li className="card__list__item" key={key}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="package__card__bottom">
              <button className="purchase__btn">Purchase</button>
              <img
                src="/images/logo/LogoOnly_White.svg"
                alt="logo"
                className="purchase__card__logo"
              />
            </div>
          </PackageCard>
        ))}
      </WebServiceContainer>
      <MobileServiceContainer className={props === 1 ? "active" : null}>
        {mobilepackages.map((data, index) => (
          <PackageCard key={index} data-aos="fade-in" data-aos-duration="800">
            <div className="package__card__header">
              <p className="card__title">{data.title}</p>
            </div>
            <div className="package__price__container">
              <p className="price__text">${data.price}</p>
            </div>
            <ul className="package__card__body">
              {data.features.map((feature, key) => (
                <li className="card__list__item" key={key}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="package__card__bottom">
              <button className="purchase__btn">Purchase</button>
              <img
                src="/images/logo/LogoOnly_White.svg"
                alt="logo"
                className="purchase__card__logo"
              />
            </div>
          </PackageCard>
        ))}
      </MobileServiceContainer>
      <DesignServiceContainer className={props === 2 ? "active" : null}>
        <DesignListContainer>
          <li
            onClick={() => toggleDesign(0)}
            className={
              activeDesign === 0
                ? "design__list__item active"
                : "design__list__item"
            }
          >
            Logo Branding
          </li>
          <li
            onClick={() => toggleDesign(1)}
            className={
              activeDesign === 1
                ? "design__list__item active"
                : "design__list__item"
            }
          >
            Social Media
          </li>
          <li
            onClick={() => toggleDesign(2)}
            className={
              activeDesign === 2
                ? "design__list__item active"
                : "design__list__item"
            }
          >
            Printing
          </li>
        </DesignListContainer>
        <DesignDetailsContainer>
          <LogoCard className={activeDesign === 0 ? "active" : null}>
            {LogoBrandingList.map((data, index) => (
              <div
                className="design__package__card"
                key={index}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="design__package__header">
                  <p className="design__package__title">{data.title}</p>
                </div>
                <div className="d_package__price__container">
                  <p className="d_price__text">${data.price}</p>
                </div>
                <ul className="design__package__body">
                  {data.features.map((data, key) => (
                    <li className="design__package__list__item" key={key}>
                      <span className="index__name__text">
                        {data.indexName}
                      </span>
                      <span className="item__text">{data.item}</span>
                    </li>
                  ))}
                </ul>
                <div className="design__package__footer">
                  <button className="d_purchase__btn">Purchase</button>
                  <img
                    src="/images/logo/LogoOnly_White.svg"
                    alt="logo"
                    className="d_purchase__card__logo"
                  />
                </div>
              </div>
            ))}
          </LogoCard>
          <MediaCard className={activeDesign === 1 ? "active" : null}>
            {MediaList.map((data, index) => (
              <div
                className="design__package__card"
                key={index}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="design__package__header">
                  <p className="design__package__title">{data.title}</p>
                </div>
                <div className="d_package__price__container">
                  <p className="d_price__text">${data.price}</p>
                </div>
                <ul className="design__package__body">
                  {data.features.map((data, key) => (
                    <li className="design__package__list__item" key={key}>
                      <span className="index__name__text">
                        {data.indexName}
                      </span>
                      <span className="item__text">{data.item}</span>
                    </li>
                  ))}
                </ul>
                <div className="design__package__footer">
                  <button className="d_purchase__btn">Purchase</button>
                  <img
                    src="/images/logo/LogoOnly_White.svg"
                    alt="logo"
                    className="d_purchase__card__logo"
                  />
                </div>
              </div>
            ))}
          </MediaCard>
          <BrandCard className={activeDesign === 2 ? "active" : null}>
            {MediaList.map((data, index) => (
              <div
                className="design__package__card"
                key={index}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="design__package__header">
                  <p className="design__package__title">{data.title}</p>
                </div>
                <div className="d_package__price__container">
                  <p className="d_price__text">${data.price}</p>
                </div>
                <ul className="design__package__body">
                  {data.features.map((data, key) => (
                    <li className="design__package__list__item" key={key}>
                      <span className="index__name__text">
                        {data.indexName}
                      </span>
                      <span className="item__text">{data.item}</span>
                    </li>
                  ))}
                </ul>
                <div className="design__package__footer">
                  <button className="d_purchase__btn">Purchase</button>
                  <img
                    src="/images/logo/LogoOnly_White.svg"
                    alt="logo"
                    className="d_purchase__card__logo"
                  />
                </div>
              </div>
            ))}
          </BrandCard>
        </DesignDetailsContainer>
      </DesignServiceContainer>
      <CustomServiceContainer className={props === 3 ? "active" : null}>
        <QuoteContainer>
          <p className="quote__text">
            Crafting success in bytes. Customized web packages for your unique
            ICT needs. Elevate your digital game with tailored solutions.
          </p>
        </QuoteContainer>
        <CustomizeForm>
          <div className="form__header">Customize your products</div>
          <div className="form__input__container">
            <input
              type="text"
              placeholder="Company Name"
              className="c__input"
            />
            <input type="email" placeholder="Email" className="c__input" />
            <input
              type="text"
              placeholder="Name of System"
              className="c__input"
            />
            <input
              type="file"
              name="proposal_file"
              id="proposal_file"
              placeholder="Upload File"
              className="c__input c__input__file"
            />
            <i className="c_span__text">
              Upload a file which contain the proposal and all the requirements
              of your system
            </i>
            <input
              type="number"
              name="budget"
              id="budget"
              placeholder="Budget"
              className="c__input"
            />
            <button className="c__form__btn">Mail to BitFlip</button>
          </div>
        </CustomizeForm>
      </CustomServiceContainer>
    </>
  );
};

export default ServicesLists;
