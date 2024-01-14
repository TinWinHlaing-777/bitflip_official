import styled from "styled-components";

export const NavbarComponent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 12vh;
  background: #191919;
  color: #fff;
  padding: 0 2em;
  position: fixed;
  z-index: 1000;
  @media screen and (max-width: 480px) {
    /* padding: 0 0.5em; */
    height: 10vh;
    width: 100vw;
  }
`;

export const NavLogo = styled.img`
  width: 150px;
  height: 150px;
  /* @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  } */
`;

export const NavList = styled.ul`
  margin-left: auto;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .nav__list__item {
    padding: 0 2.5em;
    cursor: pointer;
    .nav__list__item__text {
      color: #fff;
      text-decoration: none;
    }
    @media screen and (max-width: 768px) {
      padding: 20px 0px;
      width: 100%;
      text-align: center;
      &:hover {
        background: #444;
        transition: all 0.3s ease;
      }
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    position: absolute;
    flex-direction: column;
    background: rgba(25, 25, 25, 0.95);
    width: 100%;
    height: ${(props) => (props.open ? "450px" : "0")};
    top: 10vh;
    left: 0;
    overflow: hidden;
    transition: height 0.3s ease;
  }
`;

export const IconContainer = styled.div`
  .menu__icons {
    display: none;
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    .menu__icons {
      display: flex;
      /* width: 20px;
      height: 20px; */
    }
  }
`;
