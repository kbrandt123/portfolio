import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  return (
    <div className="portfolio-nav">
      <div className="portfolio-nav-section">
        <div className="portfolio-nav-title">Kevin Brandt</div>
      </div>
      <nav className="portfolio-nav-links-section">
        <Link
          className="portfolio-nav-links"
          to={"aboutMeSection"}
          spy={true}
          smooth={true}
          offset={-30}
        >
          About
        </Link>

        <Link
          to={"projectsSection"}
          spy={true}
          smooth={true}
          offset={-30}
          className="portfolio-nav-links"
        >
          Projects
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
