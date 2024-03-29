import { useState } from "react";
import {
  IconContainer,
  NavList,
  NavLogo,
  NavbarComponent,
} from "../../styles/Navbar/Navbar.style";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <NavbarComponent open={open}>
      <NavLogo src="/images/logo/LogoFull_White.svg" />
      <NavList open={open}>
        <li className="nav__list__item">
          <a href="/" className="nav__list__item__text">
            Home
          </a>
        </li>
        <li className="nav__list__item">
          <Link to="/about" className="nav__list__item__text">
            About
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/services" className="nav__list__item__text">
            Services
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/bolgs" className="nav__list__item__text">
            Blogs
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/contact" className="nav__list__item__text">
            Contact
          </Link>
        </li>
        <li className="nav__list__item sub__list">
          <Link to="/partnership" className="nav__list__item__text">
            Partnership
          </Link>
        </li>
      </NavList>
      <IconContainer>
        {open === false ? (
          <AiOutlineBars onClick={handleOpen} className="menu__icons" />
        ) : (
          <AiOutlineClose onClick={handleClose} className="menu__icons" />
        )}
      </IconContainer>
    </NavbarComponent>
  );
};

export default Navbar;
