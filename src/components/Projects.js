import "./Projects.css";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div id="projectsSection" className="portfolio-project-section">
      <h1 className="portfolio-project-header">Projects</h1>
      <div className="portfolio-project-block">
        <div className="portfolio-project-container">
          <div className="portfolio-project-image-div">
            <img
              src="images/favicon.png"
              loading="lazy"
              alt=""
              className="portfolio-project-image"
            />
          </div>
          <div className="portfolio-project-info-div">
            <h3 className="portfolio-project-info-title">Guess That Word</h3>

            <div className="portfolio-project-info-summary">
              Guess That Word is one of my first projects, drawing inspiration
              from the timeless game Hangman. Users can input a single letter to
              uncover the hidden word. Through this project, I gained valuable
              experience in using HTML, CSS, and JavaScript to create an
              interactive and engaging game.
              <br />
            </div>
            <div className="portoflio-project-info-question"></div>
            <div className="portfolio-project-info-summary">
              <br />
            </div>
            <div className="portoflio-project-info-question">
              Languages/Technologies
            </div>
            <div className="portfolio-project-info-summary">
              HTML, CSS, JavaScript, Netlify, Git
              <br />
            </div>
            <div className="portfolio-project-info-links">
              <div
                onClick={() =>
                  openInNewTab("https://github.com/kbrandt123/Guess-That-Word")
                }
                className="portfolio-project-button"
              >
                <img
                  src="images/github-svgrepo-com.svg"
                  loading="lazy"
                  alt=""
                  className="portfolio-project-github-link"
                />
                GitHub
              </div>
              <div
                onClick={() =>
                  openInNewTab("https://wondrous-kangaroo-cb54d1.netlify.app/")
                }
                className="portfolio-project-button"
              >
                <img
                  src="images/link-svgrepo-com.svg"
                  loading="lazy"
                  alt=""
                  className="portfolio-project-github-link"
                />
                Website
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-project-block">
        <div className="portfolio-project-container">
          <div className="portfolio-project-image-div">
            <img
              src="images/weather-svgrepo-com.svg"
              loading="lazy"
              alt=""
              className="portfolio-project-image"
            />
          </div>
          <div className="portfolio-project-info-div">
            <h3 className="portfolio-project-info-title">Weather Forecast</h3>
            <div className="portoflio-project-info-summary">
              I took on this project at the recommendation of my Angular/React
              professor to enhance my React skills. I had a great time working
              on it because it was both challenging and satisfying. In this
              project, users can input a zipcode, and the program connects to a
              weather API to fetch the current weather data for that zipcode.
              Users can also choose to check a 5-day forecast or delete entries
              they no longer need.
            </div>
            <br></br>
            <div className="portoflio-project-info-question">
              Languages/Technologies
            </div>
            <div className="portfolio-project-info-summary">
              React.js, openWeather API, NPM, Git, Netlify
              <br />
            </div>
            <div className="portfolio-project-info-links">
              <div
                onClick={() =>
                  openInNewTab("https://github.com/kbrandt123/weather-app")
                }
                className="portfolio-project-button"
              >
                <img
                  src="images/github-svgrepo-com.svg"
                  loading="lazy"
                  alt=""
                  className="portfolio-project-github-link"
                />
                GitHub
              </div>
              <div
                onClick={() =>
                  openInNewTab("https://keen-kataifi-db6707.netlify.app/")
                }
                className="portfolio-project-button"
              >
                <img
                  src="images/link-svgrepo-com.svg"
                  loading="lazy"
                  alt=""
                  className="portfolio-project-github-link"
                />
                Website
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-project-block">
        <div className="portfolio-project-container">
          <div className="portfolio-project-image-div">
            <img
              src="images/cocktail-svgrepo-com.svg"
              loading="lazy"
              alt=""
              className="portfolio-project-image"
            />
          </div>

          <div className="portfolio-project-info-div">
            <h3 className="portfolio-project-info-title">Cocktail Paradise</h3>

            <div className="portfolio-project-info-summary">
              <br />
              My girlfriend and her friends like to create unique cocktails. To
              make things more enjoyable, I decided to create an app that
              randomly generates cocktail recipes. This eliminates the hassle of
              deciding what to make. Users can either search for a specific
              cocktail or get a random suggestion, complete with an image,
              ingredients, and instructions.
            </div>
            <br />
            <div className="portoflio-project-info-question">
              Languages/Technologies
            </div>
            <div className="portfolio-project-info-summary">
              React.js, thecocktaildb API, NPM, Git, Netlify
              <br />
            </div>
            <div className="portfolio-project-info-links">
              <div
                onClick={() =>
                  openInNewTab(
                    "https://github.com/kbrandt123/Cocktail-Generator"
                  )
                }
                className="portfolio-project-button"
              >
                <img
                  src="images/github-svgrepo-com.svg"
                  loading="lazy"
                  alt=""
                  className="portfolio-project-github-link"
                />
                GitHub
              </div>
              <div
                onClick={() =>
                  openInNewTab("https://prismatic-tarsier-0045e6.netlify.app")
                }
                className="portfolio-project-button"
              >
                <img
                  src="images/link-svgrepo-com.svg"
                  loading="lazy"
                  alt=""
                  className="portfolio-project-github-link"
                />
                Website
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
