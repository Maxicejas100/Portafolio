import "./Hero.css";

export const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="hero__text--container">
        <h1 className="hero__title">
          <span className="first__letter">M</span>AXI
          <br />
          <span className="first__letter">C</span>EJAS
        </h1>
        <p className="hero__subtitle">FRONTEND DEVELOPER</p>
      </div>
      <img
            className="hero__arrow"
            src="./src/assets/images/hero/arrow.png"
            alt=""
          />
    </div>
    <div className="div-space"></div>
    </>
  );
};
