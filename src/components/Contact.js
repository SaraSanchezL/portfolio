import "../styles/Contact.scss";
import { Link } from "react-router-dom";
// Icons
import { FaRegHandPointRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
//Images
import LinkedIn from "../images/linkedin.png";
import Github from "../images/github.png";
import Email from "../images/email.png";

const Contact = () => {
  return (
    <>
      <header className="headerCont">
        <Link to="/">Volver al inicio</Link>
        <h1>
          {" "}
          <FaRegHandPointRight /> Contact Me
        </h1>
      </header>
      <main className="mainCont">
        <nav className="navCont">
          <ul className="listNavCont">
            <li className="liListCont">
              {" "}
              <img
                src={LinkedIn}
                alt="Logo LinkedIn"
                className="imgSocialLogo"
              />{" "}
              <a
                className="linkSocCont"
                href="https://www.linkedin.com/in/sara-sanchezlopez/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li className="liListCont">
              {" "}
              <img src={Github} alt="Logo Github" className="imgSocialLogo" />
              <a
                className="linkSocCont"
                href="https://github.com/SaraSanchezL"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li className="liListCont">
              {" "}
              <img src={Email} alt="Logo Email" className="imgSocialLogo" />
              <a
                className="linkSocCont"
                href="mailto:sarasanchezlopez93@gmail.com"
              >
                <IoIosMail /> Mail
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Contact;
