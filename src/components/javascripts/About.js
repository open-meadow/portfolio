import "../styles/About.scss";
import { Link } from "react-router-dom";
import fix_my_face from "../../images/default/fix_my_face.png";
import add_text from "../../images/default/add_text.png";

import toolIcons from "../../db/toolIcons";
import { Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown"
import { Disclaimer } from "./Disclaimer.tsx";

const About = () => {

  const aboutMe = `
    Hello 👋
    
    This website is under construction. It was originally made back when I did a lot more frontend work with React.
    But I'm much more of a backend person now. So I'm erasing and rewriting a whole bunch of stuff.
    
    Anyways, my name is Rohan. I live in Bangalore (India). I do backend development work with Python and FastAPI, while also working creating frontends (as and when needed) with React. I've worked a bunch with RAG-based AI systems, as well as working on Agentic AI systems.

    You can find my resume [here](src/db/resume/resume.html)
    
    I like blogs, I like tech and programming. I like Improv comedy, Celtic music, Business/Self-help books, One Piece, Driving (yes, really), and a whole bunch of other things. But for the sake of this website, lets keep things at tech and programming for now.
  `
    .split('\n')
    .map(line => line.trim())
    .join('\n')

  return (
    <div className="about-bg">
      <div id="About" className="about">
        <h1>About Me</h1>
        <div className="main">
          <div className="main--text">
            <ReactMarkdown>{aboutMe}</ReactMarkdown>
            {/* <div className="tool">
            <div className="tool--single">
              {toolIcons["React"]}
              <span className="tool--single--name">{"React"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["Node.js"]}
              <span className="tool--single--name">{"Node JS"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["Sass"]}
              <span className="tool--single--name">{"Sass"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["PostgreSQL"]}
              <span className="tool--single--name">{"PostgreSQL"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["jQuery"]}
              <span className="tool--single--name">{"jQuery"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["Ruby"]}
              <span className="tool--single--name">{"Ruby"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["on Rails"]}
              <span className="tool--single--name">{"Ruby on Rails"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["Python"]}
              <span className="tool--single--name">{"Python"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["Git"]}
              <span className="tool--single--name">{"Git"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["Java"]}
              <span className="tool--single--name">{"Java"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["C++"]}
              <span className="tool--single--name">{"C++"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["Cypress"]}
              <span className="tool--single--name">{"Cypress"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["HTML"]}
              <span className="tool--single--name">{"HTML"}</span>
            </div>
            <div className="tool--single">
              {toolIcons["CSS"]}
              <span className="tool--single--name">{"CSS"}</span>
            </div>
          </div> */}
            <p className="answer">Online, you can find me in these places:</p>
            <div id="pers-buttons">
              <div className="main--text--links">
                <Link to={"https://github.com/open-meadow"} target="_blank">
                  <Button variant="outline-dark" size="lg">
                    {toolIcons["GitHub"]}
                    <span id="remove-underline">Github</span>
                  </Button>
                </Link>
              </div>
              <div className="main--text--links">
                <Link
                  to={"https://www.linkedin.com/in/rohanvarughese/"}
                  target="_blank"
                >
                  <Button variant="outline-dark" size="lg">
                    {toolIcons["LinkedIn"]}
                    <span id="remove-underline">LinkedIn</span>
                  </Button>
                </Link>
              </div>
              <div className="main--text--links">
                <Link
                  to={"https://www.youtube.com/channel/UCekoxi_cyYfd383gKMY6Icg"}
                  target="_blank"
                >
                  <Button variant="outline-dark" size="lg">
                    {toolIcons["YouTube"]}
                    <span id="remove-underline">YouTube</span>
                  </Button>
                </Link>
              </div>
            </div>
            <p>You can contact me on my e-mail here</p>
            {toolIcons["E-mail"]}
            <a href="mailto:rohan.varughese200@gmail.com" id="email">
              rohan.varughese200@gmail.com
            </a>
          </div>

          <div className="main--image-wrapper">
            <img src={fix_my_face} alt="Self Portrait" className="hover-image" />
            <img
              src={add_text}
              alt="Self Portrait"
              className="main--image-wrapper--image"
            />
          </div>
        </div>
      </div>
      <Disclaimer/>
    </div>
  );
};

export default About;
