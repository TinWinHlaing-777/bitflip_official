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
      <Link to="/">
        <NavLogo src="/images/logo/LogoFull_White.svg" />
      </Link>
      <NavList open={open}>
        <Link to="/" className="nav__list__item">
          <li className="nav__list__item__text">Home</li>
        </Link>
        <Link to="/about" className="nav__list__item">
          <li className="nav__list__item__text">About</li>
        </Link>
        <Link to="/services" className="nav__list__item">
          <li className="nav__list__item__text">Services</li>
        </Link>
        {/* <Link to="/blog-promo" className="nav__list__item">
          <li className="nav__list__item__text">Blogs</li>
        </Link> */}
        <Link to="/contact" className="nav__list__item">
          <li className="nav__list__item__text">Contact</li>
        </Link>
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
