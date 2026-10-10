import Navigation from "../components/javascripts/Navigation";
import ProjectSection from "../components/javascripts/ProjectSection"
import "../components/styles/ProjectPage.scss";

export const ProjectPage = () => {
    return(<>
        <Navigation />
        <div className="projectpage">
            <h1>Projects</h1>
            <p>
                These are the projects I worked on when I first started programming. I've made a lot more since then, but haven't had a chance to write about them in more detail. My resume has a more accurate version of my real projects
            </p>
            <hr/>
            <ProjectSection/>

        </div>
    </>)
}