import "./Hero.css";

const Hero = () => {
  return (
    <div id="aboutSection" className="portfolio-hero-section">
      <div className="portfolio-hero-center-container">
        <div className="portfolio-hero-left">
          <h1 className="portfolio-hero-header">Hi, I'm Kevin</h1>
          <div className="portfolio-hero-descriptor">
            Fully self-taught developer from
            <br />
            Sacramento, California
          </div>
        </div>
        <img
          src="images/kevin-cartoon-face.svg"
          loading="lazy"
          alt=""
          className="portfolio-hero-notion-style-image"
        />
      </div>
      <div className="portfolio-hero-center-links">
        <div className="portfolio-hero-center-link-div">
          <img
            src="images/curriculum-vitae-svgrepo-com.svg"
            loading="lazy"
            alt=""
            className="portfolio-hero-image-link"
          />
          <a
            href="./resume.pdf"
            download={"./resume.pdf"}
            className="portfolio-hero-center-link"
          >
            Resume
          </a>
        </div>
        <div className="portfolio-hero-center-link-div">
          <img
            src="images/linkedin-svgrepo-com.svg"
            loading="lazy"
            alt=""
            className="portfolio-hero-image-link"
          />
          <a
            href="https://www.linkedin.com/in/kevin-brandt-4b03ab1a4/"
            target={"_blank"}
            rel={"noopener noreferrer"}
            className="portfolio-hero-center-link"
          >
            LinkedIn
          </a>
        </div>
        <div className="portfolio-hero-center-link-div">
          <img
            src="images/github-svgrepo-com.svg"
            loading="lazy"
            alt=""
            className="portfolio-hero-image-link"
          />
          <a
            href="https://github.com/kbrandt123"
            target={"_blank"}
            rel={"noopener noreferrer"}
            className="portfolio-hero-center-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
