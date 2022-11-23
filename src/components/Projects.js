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
              src="images/league.png"
              loading="lazy"
              alt=""
              className="portfolio-project-image"
            />
          </div>
          <div className="portfolio-project-info-div">
            <h3 className="portfolio-project-info-title">
              League Of Legends Survey
            </h3>

            <div className="portfolio-project-info-summary">
              League of Legends is a game I grew up playing with my friends
              during my youth period. Although I dont nearly play as much
              anymore, I still wanted to create something to get feedback about
              the current state of the game from new and seasoned players. This
              survey allows users to enter how long they have been playing the
              game, select their favorite character, and provide feedback, and
              displays a fun statistic once submitted!
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
              Next.js, Node.js, MySQL, Git, Nginx, Axios, DigitalOcean
              <br />
            </div>
            <div className="portfolio-project-info-links">
              <div
                onClick={() =>
                  openInNewTab("https://github.com/kbrandt123/lol-survey")
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
                onClick={() => openInNewTab("https://leaguesurvey.com/")}
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
              This project was recommended to be by an Angular/React professor
              to further strengthen my react fundementals. I enjoyed making this
              project as it was challengng but also rewarding. When a user
              submits a zipcode, the program reaches out to a weather API which
              returns the current weather data for the given zipcode. The user
              has the options to route to a 5-day forcast or delete an entry
              they no longer want to view.
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
              My girlfriend and her friends always have a tough time deciding on
              what alcoholic beverages to make. I thought it would be fun to
              spin up an application that generates a cocktail at random to
              eliminate the process of deciding what to make! A user may search
              or generate at random to display a cocktails image, ingredients,
              and instructions!
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
                  openInNewTab(
                    "https://superlative-croissant-d5e681.netlify.app/"
                  )
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
