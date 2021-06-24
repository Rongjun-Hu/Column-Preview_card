import sedans from "../images/icon-sedans.svg";
import suv from "../images/icon-suvs.svg";
import luxury from "../images/icon-luxury.svg";

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__details">
        <div className="card__detail card--sedans">
          <div className="card__detail-content">
            <img src={sedans} alt="seadans icon" />
            <h1>Sedans</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <div className="card__detail-button">
            <button className="seadans__btn">Learn more</button>
          </div>
        </div>
        <div className="card__detail card--suvs">
          <div className="card__detail-content">
            <img src={suv} alt="seadans icon" />
            <h1>Sedans</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <div className="card__detail-button">
            <button className="suv__btn">Learn more</button>
          </div>
        </div>
        <div className="card__detail card--luxury">
          <div className="card__detail-content">
            <img src={luxury} alt="seadans icon" />
            <h1>Sedans</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <div className="card__detail-button">
            <button className="luxury__btn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
