import "../components/styles/Projects.scss";

import Navigation from "../components/javascripts/Navigation";

const Projects = () => {
  return (
    <>
      <Navigation />
      <main className="main-section">
        <h2>Lorem Ipsum</h2>
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
      </main>
    </>
  );
};

export default Projects;
