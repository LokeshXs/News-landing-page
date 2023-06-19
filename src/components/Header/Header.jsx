import { useState, useRef, useEffect } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import MobileNav from "./MobileNav";
import OverLay from "../UI/overLay";


const Header = (props) => {
  const mobileNavRef = useRef();
  const { pageWidth } = props;
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [openNavClassName, setOpenNavClassName] = useState('');


  const toggleMobileNav = () => {

    setOpenMobileNav(prevState => !prevState);
  };


  useEffect(() => {

    if (openMobileNav) {
      setOpenNavClassName('openNav');
    } else {
      setOpenNavClassName('');
    }
  }, [openMobileNav]);


  return <header className={classes.headerBlock}>

    <img src={logo} alt="logo" />
    {openMobileNav && <OverLay handleMobileNav={toggleMobileNav} />}
    <MobileNav className={openNavClassName} ref={mobileNavRef} />

    {pageWidth < 752 && (openMobileNav ? <RxCross1 className={classes.icon} size="3rem" onClick={toggleMobileNav} style={{ position: 'fixed' }} /> : <HiMenu className={classes.icon} size="3rem" onClick={toggleMobileNav} />)}


    {pageWidth > 752 && <nav className={classes.navBar}>
      <ul className={classes['navBar-navigation']}>
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
      </ul>
    </nav>}
  </header>
};

export default Header;
