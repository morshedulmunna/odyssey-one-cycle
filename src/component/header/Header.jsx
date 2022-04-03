import "./Header.css";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <>
      <div className="header__main">
        <Fade left>
          <div className="wrapper">
            <h1>
              Odyssey <span>ONE</span>
            </h1>
            <p>
              Available Best Electric Bike price In Bangladesh. Here we have
              sorted out top-ranked E bike, Electric Scooter, and E-mopeds
              currently available in the market from the various brands
              operating in Bangladesh.
            </p>
            <button>Buy One</button>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Header;
