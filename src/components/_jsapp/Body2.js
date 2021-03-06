import LegoHalfInverted from "../img/lego-half-inverted.png";
import BlueDot from "../img/bluedot.svg";

const Body2 = () => {
  return (
    <div className='body2'>
      <div className="lego">
        <img src={LegoHalfInverted}
          className='right'
          alt='lego-half-inverted' />
      </div>
      <div className="quote">

        <p>
          <b>Definition;</b> a practice or exercise to test or imporve one's
        fitness for athelitc compettition, ability, or performance to exhaust
        (something, such as mine) by working to devise, arrange, or achieve by
        resolving difficulties. <cite>Merriem-webster.com</cite> Dictionary.
      </p>

        <p>
          <i>-weekend team</i>
        </p>
      </div>
      <div className="bluedot">
        <img src={BlueDot}
          alt='bluedot' />
      </div>
    </div>
  );
};

export default Body2;
