
import classes from "./OverLay.module.css";

const OverLay = (props) =>{
  return <div className={classes.overLay} onClick={props.handleMobileNav} />

}

export default OverLay;