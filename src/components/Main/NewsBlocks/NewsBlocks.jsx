import classes from "./NewsBlocks.module.css";
import gaming from "../../../assets/image-gaming-growth.jpg";
import retro from "../../../assets/image-retro-pcs.jpg";
import laptops from "../../../assets/image-top-laptops.jpg";

const NewsBlock = (props) => {

  return (
    <div className={classes.NewsBlock}>
      <img src={props.image} alt="" className={classes.NewsBlockImg} />
      <div className={classes.newsBlockInfo}>
        <p className={classes.newsNumber}>{props.number}</p>
        <h3 className={classes.newsHeading}>{props.title}</h3>
        <p className={classes.newsSubtext}>{props.subtext}</p>
      </div>
    </div>
  );
};

const NewsBlocks = () => {

  return (
    <div className={classes.NewsBlocks}>
      <NewsBlock image={gaming} number='01' title='Reviving Retro PCs' subtext='What happens when old PCs are given modern upgrades?' />
      <NewsBlock image={retro} number='02' title='Top 10 Laptops of 2022' subtext='Our best picks for various needs and budgets.' />
      <NewsBlock image={laptops} number='03' title='The Growth of Gaming' subtext='How the pandemic has sparked fresh opportunities.' />
    </div>
  )
};

export default NewsBlocks;