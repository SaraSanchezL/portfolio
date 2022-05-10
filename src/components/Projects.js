import "../styles/Projects.scss";
import { Link } from "react-router-dom";
//Images
import notesImg from "../images/simple-notes-app.png";
import musicImg from "../images/music-player.png";
import tetrisImg from "../images/tetris.png";
import rpsGameImg from "../images/rock-paper-scissors.png";
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
            src={musicImg}
            alt="Music Player"
          />
          <h3 className="titleEachProj">Music Player</h3>
          <p>
            Music player made with javascript, this time we play four songs from the original soundtrack of the Mass Effect video game.
            Full structure of HTML. Functions in JavaScript: using DOM. Listen audio element. Click controls events. Load songs and list, load selected song. Upgrade cover. Update a song progress bar. Play or change a song. Go to the next when the current ends.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://sarasanchezl.github.io/music-player/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/music-player"
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
            src={tetrisImg}
            alt="Tetris Game"
          />
          <h3 className="titleEachProj">Tetris Game</h3>
          <p>
            Tetris is a tile-matching puzzle game from the 80’s. Try to get your personal high score by moving each of the 5 randomly selected Tetromino shapes sideways and/or rotating by quarter-turns, so that they form a solid horizontal line without gaps. When such a line is formed, it disappears and any blocks above it fall down to fill the space. For each line you will receive 10 points.
            Main functions: the game should stop if a Tetrimino fills the highest row of the game board. The player should be able to rotate each Tetrimino about its own axis. If a line is completed it should be removed and the pieces above should take its place. Render a grid-based game in the browser.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://sarasanchezl.github.io/tetris-game/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/tetris-game"
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
            src={notesImg}
            alt="Simple Notes App"
          />
          <h3 className="titleEachProj">Simple Notes App</h3>
          <p>
            A small application to keep notes. Made with SQL, Node JS and React. It is designed to practice basic Backend concepts with Node JS and SQL.
            Node JS is used to create static server, create communication with the database through endpoints (read, save, delete notes).
            SQL is used to create the database where the notes written in the app will be saved. At the moment you can only add title and description.
            React is used to create application functions with events (API requests to paint previously saved notes, save notes, delete notes, save form input values...).
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://mini-note-app.herokuapp.com/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/mini-note-app"
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
            src={rpsGameImg}
            alt="Rock Paper Scissors Game"
          />
          <h3 className="titleEachProj">Rock Paper Scissors Game</h3>
          <p>
            The project consists of developing the game "Rock, Paper and Scissors". In the game both players have to choose rock, paper or scissors. It only has two possible outcomes: a tie or a win for a player and a loss for the other player. We will design the game using JavaScript where a player will play against the computer. The program generates a random movement between paper, rock and scissors (the indications to generate the random motion are later). Later the user plays, the program compares the moves and decides if the user has won, lost or tied against the computer. Also in turn the program is counting the number of points of the player and the computer. The game restarts when do 10 moves. Add a graphic representation for the scoreboard that is updated according to the plays, with total rounds, ties, cpu points and player points. Made with Highcharts.
          </p>
          <nav>
            <ul>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://sarasanchezl.github.io/game-with-scoreboard-highcharts/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to view in browser
                </a>
              </li>
              <li className="listProj">
                <a
                  className="linksProj"
                  href="https://github.com/SaraSanchezL/game-with-scoreboard-highcharts"
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
