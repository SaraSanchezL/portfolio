import "../styles/Landing.scss";
import { Link } from "react-router-dom";
import photo from "../images/photo.jpg";
//Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

const Landing = () => {
  return (
    <>
      <main className="main">
        <section className="sectionOne">
          <div className="containerMainTitle">
            <h1>I'm Sara</h1>
            <h2>Frontend Developer</h2>
          </div>

          <img
            className="mainPhoto"
            src={photo}
            alt="Mi Foto"
            title="Mi foto"
          />

          <nav>
            <ul>
              <li className="listNav">
                <h3>Do you want to know more?</h3>
              </li>
              <li className="listNav">
                <Link className="linksLanding" to="/aboutme">
                  About Me
                </Link>
              </li>
              <li className="listNav">
                <Link className="linksLanding" to="/technologies">
                  Technologies
                </Link>
              </li>
              <li className="listNav">
                <Link className="linksLanding" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="listNav">
                <Link className="linksLanding" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="sectionTwo">
          <p>
            <BiCopyright /> Sara Sánchez
          </p>
          <nav>
            <ul>
              <li className="listNav">
                <FaLinkedin className="iconsReact" />
                <a
                  className="linksLandingSocial"
                  href="https://www.linkedin.com/in/sara-sanchezlopez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="listNav">
                <FaGithub className="iconsReact" />
                <a
                  className="linksLandingSocial"
                  href="https://github.com/SaraSanchezL"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
};

export default Landing;
