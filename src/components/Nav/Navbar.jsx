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
          <a href="/about" className="nav__list__item__text">
            About
          </a>
        </li>
        <li className="nav__list__item">
          <Link to="/services" className="nav__list__item__text">
            Services
          </Link>
        </li>
        <li className="nav__list__item">
          <a href="/blog-promo" className="nav__list__item__text">
            Blogs
          </a>
        </li>
        <li className="nav__list__item">
          <a href="/contact" className="nav__list__item__text">
            Contact
          </a>
        </li>
        {/* <li className="nav__list__item sub__list">
          <a href="/partnership" className="nav__list__item__text">
            Partnership
          </a>
        </li> */}
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
