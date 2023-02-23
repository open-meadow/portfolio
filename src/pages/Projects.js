import "../components/styles/Projects.scss";

import Navigation from "../components/javascripts/Navigation";

const Projects = () => {
  return (
    <>
      <Navigation />
      <main className="main-section">
        <h1>Lorem Ipsum</h1>
        <div className="tools">
          <div className="tools--single">
            <img src="https://via.placeholder.com/30x30" />
            <span>Tool</span>
          </div>
          <div className="tools--single">
            <img src="https://via.placeholder.com/30x30" />
            <span>Tool</span>
          </div>
          <div className="tools--single">
            <img src="https://via.placeholder.com/30x30" />
            <span>Tool</span>
          </div>
          <div className="tools--single">
            <img src="https://via.placeholder.com/30x30" />
            <span>Tool</span>
          </div>
          <div className="tools--single">
            <img src="https://via.placeholder.com/30x30" />
            <span>Tool</span>
          </div>
        </div>

        <hr className="line--first" />

        <div className="working">

          <div className="working--border">
            <div className="working--details">
              <h1 id="work">How it works</h1>
              <hr className="line--second" />
              <div id="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo. Tristique nulla aliquet enim
                tortor at. Aenean vel elit scelerisque mauris pellentesque. Orci
                nulla pellentesque dignissim enim sit amet venenatis urna
                cursus. Amet dictum sit amet justo donec enim. Mauris pharetra
                et ultrices neque. Congue eu consequat ac felis donec et odio
                pellentesque. Odio ut sem nulla pharetra diam.
              </div>
            </div>
            <img src="https://via.placeholder.com/640x480" />
          </div>

          <div className="working--border">
            <img src="https://via.placeholder.com/640x480" />
            <div className="working--details--right">
              <h1 id="notes">Programming Notes</h1>
              <hr className="line--third" />
              <div id="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo. Tristique nulla aliquet enim
                tortor at. Aenean vel elit scelerisque mauris pellentesque. Orci
                nulla pellentesque dignissim enim sit amet venenatis urna
                cursus. Amet dictum sit amet justo donec enim. Mauris pharetra
                et ultrices neque. Congue eu consequat ac felis donec et odio
                pellentesque. Odio ut sem nulla pharetra diam.
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Projects;
