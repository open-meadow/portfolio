import "../styles/About.scss";
import { Link } from "react-router-dom";
import fix_my_face from "../../images/default/fix_my_face.png";
import add_text from "../../images/default/add_text.png";

import toolIcons from "../../db/toolIcons";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div id="About" className="about">
      <h1>About Me</h1>
      <div className="main">
        <div className="main--text">
          {" "}
          <p>
            Hello! My name is Rohan Varughese. (It's pronounced: Ro-hun
            V-uhr-geese) Nice to meet you! I made this website to show the
            projects I've made so far. I hope you like them.
          </p>
          <p>
            I'm a full stack web developer living in Toronto. I've graduated
            with a Diploma in Full Stack Web Development from Lighthouse Labs. I
            also have a degree in Animation from OCAD University.
          </p>
          <p>
            I like carousels. I like hot sauce. I like pretending to be funny. I
            like to use these tools mentioned below.
          </p>
          <div className="tool">
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
          </div>
          <p>
            I don't like having to update the above section, as I pick up new
            tools because react-icons doesn't always have the correct icon. I
            don't like being bald at age 22. I don't like how when I tell people
            I'm age 22, they don't believe me because how can someone be so bald
            and ugly at age 22? I don't like tomato ketchup.
          </p>
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
        </div>

        <div className="main--image-wrapper">
          <img
            src={fix_my_face}
            alt="Self Portrait"
            className="hover-image"
          />
          <img
            src={add_text}
            alt="Self Portrait"
            className="main--image-wrapper--image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
