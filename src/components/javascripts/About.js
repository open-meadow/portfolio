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
          <p>
            Hello! My name is <span id="name">Rohan Varughese</span>. (It's pronounced: Ro-hun
            V-uhr-geese). Thanks for checking out my website! I'm a full stack web developer living in Toronto. I've
            graduated with a Diploma in Full Stack Web Development from
            Lighthouse Labs. I also have a degree in Animation from OCAD
            University. Nice to meet you!
            <br />
            <br />I made this website to show the projects I've made so far. The
            website is named <span id="open-meadow">open-meadow</span> based on
            my GitHub profile. I like nature. I find that nature gives me a
            sense of peace and calm. When picking my GitHub name, I was too shy
            to use my real name, but I still wanted something that would seem
            professional. <span id="open-meadow">open-meadow</span> felt like a
            name that was tranquil and limitless. I tried to make the website so
            that it evokes a similar feeling of calm. I hope you like it.
          </p>
          <p>
            I bring these tools to the table. This list is not exhaustive, and
            it will continue to be updated as I learn more.
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
  );
};

export default About;
