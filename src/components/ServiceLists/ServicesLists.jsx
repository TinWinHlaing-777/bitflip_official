import {
  CustomServiceContainer,
  DesignServiceContainer,
  MobileServiceContainer,
  WebServiceContainer,
} from "../../styles/Services/Services.style";

const ServicesLists = ({ props }) => {
  console.log(props);
  return (
    <>
      <WebServiceContainer className={props === 0 ? "active" : null}>
        {" "}
        web
      </WebServiceContainer>
      <MobileServiceContainer className={props === 1 ? "active" : null}>
        {" "}
        mobile
      </MobileServiceContainer>
      <DesignServiceContainer className={props === 2 ? "active" : null}>
        {" "}
        design
      </DesignServiceContainer>
      <CustomServiceContainer className={props === 3 ? "active" : null}>
        {" "}
        customize
      </CustomServiceContainer>
    </>
  );
};

export default ServicesLists;
