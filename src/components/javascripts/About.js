import { useState } from "react";
import "../styles/About.scss";
import alphabetLetters from "../../images/default/alphabet-letters-from-magazine.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div id="About" className="about">
      <h1>About Me</h1>
      <h3>No, my name isn't actually open-meadow</h3>
      <div id="main">
        <ul>
          <li>
            <h4 className="question">Then who am I?</h4>
          </li>
          <li>
            <p className="answer">
              My name is Rohan Varughese. (It's pronounced: Ro-hun V-uhr-geese)
              Nice to meet you! This website is a way for me to show the
              projects I've made so far. I hope you like them.
            </p>
          </li>
          <li>
            <h4 className="question">How did I make these?</h4>
          </li>
          <h5>
            I typed{" "}
            <span
              id="alphabet"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              these symbols
            </span>
            {isHovering && (
              <img src={alphabetLetters} id="alphabet--img" alt="My Image" />
            )}{" "}
            into Notepad in such a way that made these bottom things happy
          </h5>
          <ul>
            <li>LANGUAGES: JavaScript, Ruby, HTML, CSS, Python, Java, C++</li>
            <li>
              FRAMEWORKS, LIBRARIES, AND ENVIRONMENTS: NodeJS, ReactJS, Ajax,
              Express, EJS, jQuery, Bootstrap, ActiveRecord, React Native,
              Rails, SASS, Linux{" "}
            </li>
            <li>TESTING: Storybook, Cypress, RSpec, Jest, Mocha, Chai </li>
            <li>SYSTEMS AND DATABASES: SQL, Git</li>
          </ul>
          <li>
            <h4 className="question">Where can I find myself?</h4>
          </li>
          <li>
            <p className="answer">Online, you can find me in these places:</p>
            <ul>
              <li>
                GitHub:{" "}
                <Link to={"https://github.com/open-meadow"}>
                  https://github.com/open-meadow
                </Link>
              </li>
              <li>
                LinkedIn:{" "}
                <Link to={"https://www.linkedin.com/in/rohanvarughese/"}>
                https://www.linkedin.com/in/rohanvarughese/
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <img src="https://via.placeholder.com/640x480" alt="placeholder" />
      </div>
    </div>
  );
};

export default About;
