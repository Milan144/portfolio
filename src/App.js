import './App.css';
import cv from './cv.png';

function App() {
  return (
    <div className="App">
      <div className="typeme">
        <span className="text-secondary">milan@hommet.ch </span>
        <span className="text-background">~ </span>
        <span className="cursor">$ </span>me -h
      </div>

      <section className="output">
        <ul className="links">
          <li>
            <a className="github" href="https://github.com/milan144" target="_blank" rel="noopener noreferrer" alt="github">
              GitHub
            </a>
          </li>
          <li>
            <a className="linkedin" href="https://www.linkedin.com/in/milan-hommet-840414315/" target="_blank" rel="noopener noreferrer" alt="linkedin">
              LinkedIn
            </a>
          </li>

        </ul>

        <p>
          I'm a software developer based in France, specializing in software and mobile development but I'm also interested in game development.
        </p>
        <p>
          I'm currently persuing a MBA in development and management. I like to learn new languages and frameworks in my free time.

          I have a work-study contract at <a href="https://www.teicee.com/" target="_blank" rel="noopener noreferrer" alt="teicee">Téïcée</a> as a backend developer.
        </p>
        <p>
          I'm always looking for new challenges and opportunities, so feel free to contact me. I'm open to new projects and collaborations.
        </p>

        <div>
          <span className="text-secondary">milan@hommet.ch </span>
          <span className="text-background">~ </span>
          <span className="cursor">$ </span>cat interests.txt
        </div>

        <h3>Interests</h3>
        <ul>
          <li>backend development</li>
          <li>mobile development</li>
          <li>game development</li>
          <li>linux</li>
          <li>CLI tools</li>
        </ul>
      </section>

      <div>
        <span className="text-secondary">milan@hommet.ch </span>
        <span className="text-background">~ </span>
        <span className="cursor">$ </span>open cv.pdf 
    </div>

    <h3>CV</h3>
    <img src={cv} alt="cv" />
  </div>
  );
}

export default App;

