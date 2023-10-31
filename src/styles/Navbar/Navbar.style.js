import styled from "styled-components";
import theme from "../../theme";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background: linear-gradient(60deg, #0a0a0a, #212121);
  position: fixed;
`;

export const NavLogo = styled.img`
  width: 150px;
  height: 150px;
`;

export const NavListContainer = styled.div`
  @media (max-width: 768px) {
    /* background: linear-gradient(60deg, #0a0a0a, #212121); */
    backdrop-filter: blur;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;
    border: 1px solid;
    padding: 20px;
    border-radius: 50px;
  }
`;

export const NavLists = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  @media (max-width: 768px) {
    position: relative;
  }
`;

export const NavListItem = styled.li`
  margin: 0px 30px;
  .nav__link {
    text-decoration: none;
    color: ${theme.color.primary};
    .nav__text {
      font-size: 18px;
      letter-spacing: 2px;
      text-align: center;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .nav__icon {
      font-size: 24px;
      font-weight: 400;
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
    }

  }
`;
