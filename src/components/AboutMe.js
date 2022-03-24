import "../styles/AboutMe.scss";
import { Link } from "react-router-dom";
//Icons
import { FaRegHandPointRight } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const AboutMe = () => {
  return (
    <>
      <header className="headerAbout">
        <Link to="/">Volver al inicio</Link>
        <h1>
          <FaRegHandPointRight /> About Me
        </h1>
      </header>
      <main className="mainAbout">
        <section className="sectionSpaAbout">
          <p>
            <VscDebugBreakpointLog />
            Con ganas de un nuevo reto me adentré en el mundo de la
            programación, lo que me llevó a realizar el bootcamp de Adalab de
            desarrollo front-end, y a dar un giro a mi carrera profesional.
            Durante la duración del curso he aprendido mucho más que programar,
            sobre todo sobre mí misma y mi capacidad de superación.
          </p>
          <p>
            <VscDebugBreakpointLog />
            Como objetivo actualmente, busco centrarme en el sector IT, seguir
            formándome y poder dedicarme a ello profesionalmente.
          </p>
          <p>
            <VscDebugBreakpointLog />
            Previamente tengo 4 años de experiencia en el sector de atención al
            cliente, manejo de caja, de bases de datos y atención de
            reclamaciones, así como experiencia de trabajo en equipo.
          </p>
          <p>
            <VscDebugBreakpointLog />
            Mis puntos fuertes son el trabajo en equipo, dedicación y ganas de
            aprender, y una buena capacidad de gestión emocional. Durante esos
            años en el sector de atención al cliente se aprende a gestionar la
            frustración, algo muy importante también en este sector.
          </p>
          <p>
            <VscDebugBreakpointLog />
            Como hobbies, me gustan los escape room, los videojuegos, y visitar
            parques temáticos.
          </p>
        </section>

        <section className="sectionEngAbout">
          <p>
            <VscDebugBreakpointLog />
            Eager for a new challenge, I entered the world of programming, which
            led me to attend the Adalab bootcamp in front-end development, and
            to turn my professional career around. During the duration of the
            course I have learned much more than program, especially about
            myself and my ability to overcome.
          </p>
          <p>
            <VscDebugBreakpointLog />
            As a current objective, I seek to focus on the IT sector, continue
            training and being able to dedicate myself to it professionally.
          </p>
          <p>
            <VscDebugBreakpointLog />
            Previously I have 4 years of experience in the customer service
            sector, cash management, databases and claims attention, as well as
            teamwork experience.
          </p>
          <p>
            <VscDebugBreakpointLog />
            My strengths are teamwork, dedication and desire to learn, and a
            good capacity for emotional management. During those years in the
            customer service sector, you learn to manage the frustration,
            something very important also in this sector.
          </p>
          <p>
            <VscDebugBreakpointLog />
            As hobbies, I like escape rooms, video games, and visiting theme
            parks.
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutMe;
