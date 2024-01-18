import {
  CustomServiceContainer,
  CustomizeForm,
  DesignServiceContainer,
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

const ServicesLists = ({ props }) => {
  return (
    <>
      <WebServiceContainer className={props === 0 ? "active" : null}>
        {webpackages.map((data, index) => (
          <PackageCard key={index}>
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
          <PackageCard key={index}>
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
        design
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
