import "../styles/Technologies.scss";
import { Link } from "react-router-dom";
//Icons
import { FaRegHandPointRight } from "react-icons/fa";

const Technologies = () => {
  return (
    <>
      <header className="headerTecn">
        <Link to="/">Volver al inicio</Link>
        <h1>
          {" "}
          <FaRegHandPointRight /> Technologies
        </h1>
      </header>
      <main className="mainTecn">
        <section className="sectionSpaTec">
          <h2>Tecnologías aprendidas</h2>
          <ul>
            <li className="listTecn">
              Maquetación: HTML5, CSS3, Flexbox, CSS Grid, diseño responsive,
              SASS, Bootstrap.
            </li>
            <li className="listTecn">
              JavaScript (ES6) y servicios web (APIs) de terceros.
            </li>
            <li className="listTecn">Control de versiones con Git.</li>
            <li className="listTecn">Creación de SPAs sencillas con React.</li>
            <li className="listTecn">
              Conocimientos básicos de APIs y programación back: aplicaciones
              con Node JS, Express y SQL.
            </li>
            <li className="listTecn">
              Manejo de Slack, GitHub, VS Code, Terminal, Zeplin, Linter y Gulp.
            </li>
            <li className="listTecn">
              Experiencia en el desarrollo de proyecto usando filosofía Agile y
              marco de trabajo Scrum.
            </li>
            <li className="listTecn">
              Dominio de herramientas para trabajo en remoto.
            </li>
          </ul>
        </section>

        <section className="sectionEngTec">
          <h2>Technologies that I have learned</h2>
          <ul>
            <li className="listTecn">
              Layout: HTML5, CSS3, Flexbox, CSS Grid, responsive design, SASS,
              Bootstrap.
            </li>
            <li className="listTecn">
              JavaScript (ES6) and third-party web services (APIs).
            </li>
            <li className="listTecn">Version control with Git.</li>
            <li className="listTecn">Creation of simple SPAs with React.</li>
            <li className="listTecn">
              Basic knowledge of APIs and back programming: applications with
              Node JS, Express and SQL.
            </li>
            <li className="listTecn">
              Management of Slack, GitHub, VS Code, Terminal, Zeplin, Linter and
              Gulp.
            </li>
            <li className="listTecn">
              Experience in project development using Agile philosophy and Scrum
              framework.
            </li>
            <li className="listTecn">Management of tools for remote work.</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Technologies;
