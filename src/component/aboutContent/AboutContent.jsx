import "./AboutContent.css";
import logo from "../../asset//logo.png";

const AboutContent = () => {
  return (
    <>
      <div className="about_page">
        <div className="about_wrapper">
          <img src={logo} alt="" />
          <h1>About</h1>
          <p>
            This is a fictional firm made just to show you how design and
            animations are handled in Adobe XD. All of this is made to help
            those who have a desire to learn web design and animation design.
            All renders are made in the Adobe Dimensions 3D program and are free
            to use. <br /> <br /> This is a fictional firm made just to show you
            how design and animations are handled in Adobe XD. All of this is
            made to help those who have a desire to learn web design and
            animation design. All renders are made in the Adobe Dimensions 3D
            program and are free to use.
          </p>

          <span>Thanks For Visiting Our Site</span>
          <span>Design and Develop by morshedulmunna</span>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
