import React from "react";
import classes from "./Main.module.css";
import mainNewsPhoto from "../../assets/image-web-3-desktop.jpg";
import HeadLinesContainer from "./HeadLinesContainer/HeadLinesContainer";
import NewsBlocks from "./NewsBlocks/NewsBlocks";

const Main = () => {
  return <main className={classes.mainBlock}>
    <div className={classes.mainNewsHighlight}>
      <img src={mainNewsPhoto} alt="main news image" />
      <div className={classes['mainNewsHighlight-info-block']}>
        <h2>The Bright Future of web 3.0?</h2>
        <div>
          <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?</p>
          <button className={classes.readMore}>READ MORE</button>
        </div>
      </div>
    </div>
    <HeadLinesContainer />
    <NewsBlocks />
  </main>;
};

export default React.memo(Main);
