import classes from "./HeadLinesContainer.module.css";


const HeadLineBlock = (props) => {

  return (
    <div className={classes.HeadLineBlock}>
      <h3>{props.heading}</h3>
      <p>{props.subtext}?</p>
    </div>
  )

};

const HeadLinesContainer = () => {

  return (
    <div className={classes.HeadLinesContainer}>
      <h2>New</h2>
      <div className={classes.Headlines}>

        <HeadLineBlock heading='Hydrogen Vs Electric Cars' subtext='Will hydrogen-fueled cars ever catch up to EVs?' />
       
        <HeadLineBlock heading='The Downsides of AI Artistry' subtext='What are the possible adverse effects of on-demand AI image generation?' />
        
        <HeadLineBlock heading='Is VC Funding Drying Up?' subtext='Private funding by VC firms is down 50% YOY. We take a look at what that means.' />

      </div>

    </div>
  )
};

export default HeadLinesContainer;