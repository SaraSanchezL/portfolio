import "../styles/Projects.scss";
import { Link } from "react-router-dom";
//Images
import proxyImg from "../images/anonymous-proxy.png";
import animeImg from "../images/anime-series-finder.png";
import harryImg from "../images/harry-potter-characters-finder.png";
import bravoImg from "../images/bravo-profile-cards.png";
import hangmanImg from "../images/hangman-game.png";

const Projects = () => {
  return (
    <>
      <header className="headerProj">
        <Link to="/">Volver al inicio</Link>
        <h1>Projects</h1>
      </header>
      <main className="mainProj">
        <nav className="allSection">
          <a
            className="linksProj"
            href="https://github.com/SaraSanchezL?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            All Repositories
          </a>
        </nav>

        <section className="allSection">
          <img
            className="imgPrevious"
            src={proxyImg}
            alt="Previous Anonymous Proxy"
          />
          <h3 className="titleEachProj">Anonymous Proxy</h3>
          <p>
            The project consist of laying out a web page from scratch with a
            given design in Zeplin. It is done with HTML and SCSS. The layout
            begins by modules (header, main, footer) divided into sections. Each
            section is laid out using different CSS properties (Flexbox,
            Grid...). More information in the repository readme.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://sarasanchezl.github.io/anonymous-proxy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/anonymous-proxy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to GitHub
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="allSection">
          <img
            className="imgPrevious"
            src={animeImg}
            alt="Previous Anime Series Finder"
          />
          <h3 className="titleEachProj">Anime Series Finder</h3>
          <p>
            The project consist of making a website to search for anime series.
            To do this, an API is used that returns the data of the series
            filtered by the value entered in the search field. In addition, it
            allows marking/unmarking the desired series as a favorite, as well
            as deleting both the results list and the favorites list, which is
            saved in the LocalStorage. It is done with JavaScript, HTML and
            SCSS.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://sarasanchezl.github.io/anime-series-finder/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/anime-series-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to GitHub
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="allSection">
          <img
            className="imgPrevious"
            src={harryImg}
            alt="Previous Harry Potter Series Finder"
          />
          <h3 className="titleEachProj">Harry Potter Characters Finder</h3>
          <p>
            The project consist of carrying out a SPA, in this case a search for
            Harry Potter characters. An API is used that returns character data
            filtered by house (Gryffindor by default). Allows you to filter by
            name, house, gender, species, or students. Beneath each character,
            their specific details can be accessed through routes. Made with
            React, HTML and SCSS.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://sarasanchezl.github.io/harry-potter-characters-finder/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/harry-potter-characters-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to GitHub
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="allSection">
          <img
            className="imgPrevious"
            src={bravoImg}
            alt="Previous Bravo Profile Cards"
          />
          <h3 className="titleEachProj">Bravo Profile Cards</h3>
          <p>
            Group project, in which the backend part is programmed, with Node
            JS, Express and SQL. Endpoints are used for the different components
            of the page, for the request to the API (when creating the card it
            will be saved in a database), the template engine is used to
            customize the view of the created card and the use of static servers
            to the CSS styles and the public folder for the display of the
            application only starting local server. Frontend part made with
            React (separation into components, routes, different events, API
            call, localStorage...) HTML and SCSS.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://bravo-profile-card.herokuapp.com/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/project-bravo-profile-cards"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to GitHub
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="allSection">
          <img
            className="imgPrevious"
            src={hangmanImg}
            alt="Previous Hangman Game"
          />
          <h3 className="titleEachProj">Hangman Game</h3>
          <p>
            The project consist of making the hangman game, the HTML and SCSS
            base is delivered to, starting from there, insert functionalities
            with React. An API of random words is used, the different components
            are programmed (solution, wrong letters, user letters, doll,
            instructions, game options...) for this with routes. React, HTML and
            SCSS are used.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://sarasanchezl.github.io/hangman-game/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/hangman-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to GitHub
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </>
  );
};

export default Projects;
