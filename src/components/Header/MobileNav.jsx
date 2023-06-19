import classes from './MobileNav.module.css';
import React from 'react';


const MobileNav = React.forwardRef((props,ref) => {
  return (
    <div className={`${classes.MobileNav} ${classes[props.className]}`} ref={ref} >
      <nav className={classes.mobileNavBar}>
        <ul className={classes['mobileNavBar-navigation']}>
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
      </nav>

    </div>
  )

});

export default MobileNav;