import { Link } from "react-router-dom";
import {
  NavListContainer,
  NavListItem,
  NavLists,
  NavLogo,
  NavbarContainer,
} from "../../styles/Navbar/Navbar.style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <NavLogo src="/images/logo/LogoFull_White.svg" alt="logo" />
      </Link>
      <NavListContainer>
        <NavLists>
          <NavListItem>
            <Link to="/" className="nav__link">
              <i className="ri-home-4-line nav__icon"></i>
              <span className="nav__text"> Home</span>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/about" className="nav__link">
              <i className="ri-information-line nav__icon"></i>
              <span className="nav__text"> About</span>

            </Link>
          </NavListItem>
          <NavListItem>
            <Link to="/services" className="nav__link">
              <i className="ri-list-check-3 nav__icon"></i>
              <span className="nav__text"> Services</span>

            </Link>
          </NavListItem>
        </NavLists>
      </NavListContainer>
    </NavbarContainer>
  );
};

export default Navbar;
