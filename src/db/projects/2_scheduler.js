import { images } from "../images";

const scheduler = {
  name: "Interview Scheduler",
  tools: ["Node.js", "React", "PostgreSQL"],
  description: (
    <div className="description">
      This is an Interview Scheduling App. It allows users to easily create new
      appointments, by typing in a name, and selecting an interviewer. The
      information is stored on a database. Therefore, it is not lost upon
      refresh or closing the browser page. Furthermore, data is stored across
      devices. It is a responsive app that shows a different layout for computer
      and mobile devices. It makes use of AJAX requests so that the data gets
      immediately updated. The webpage was created using Node and React and
      tested with Storybook, Jest and Cypress.
    </div>
  ),
  features: (
    <>
      <div className="working--intro--elements">
        <h3>The website includes the following features:</h3>
        <ul id="small-margin">
          <li>
            A user can select a day to add an appointment. Once selected, the user can create a new appointment by typing in a name, selecting an interviewer and clicking 'submit'. The appointment will be shown for said day.
          </li>
          <li>
            A user can edit and delete existing appointments.
          </li>
          <li>
            All appointments are stored on a shared database, and the app makes use of WebSockets. Due to this, a user logging in on one device can see and edit appointments from other users. (This is done for practice purposes).
          </li>
          <li>
            The app has been deployed and can be accessed from here (https://scheduler-rv.netlify.app/). It may not always be deployed, but I shall do my best to keep it up. Please let me know if you are unable to access it.
          </li>
          <li>
            Alternate view for mobile devices.
          </li>
        </ul>
      </div>
    </>
  ),
  challenges: [
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Deployment</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            This was my first time deploying a web app, and I found it to be quite difficult. I used Railway to deploy the server and database, CircleCI for Continuous Integration, and Netlify for the client.
          </li>
          <li>
            CircleCI was the most difficult aspect for me to understand. It took me awhile to understand what Continuous Integration was and to understand the CircleCI interface.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.scheduler_displayingAppointments}
        alt="project"
      />
    </div>,
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Web Sockets</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            The web sockets were a later addition. I hadn't fully understood how they worked, and they were initially causing a lot of problems.
          </li>
          <li>
            When I initially started the web sockets, it would lead to the dreaded white screen whenever I made a change (such as adding a new appointment). As it turns out, each major change was restarting the web socket all over again.
          </li>
          <li>
            What I found was, I had to start the Web Socket inside a useRef hook. This would make it so that the state of the socket would persist between re-renders.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.scheduler_addingNewAppointments}
        alt="project"
      />
    </div>,
  ],
  lessons_learnt: (
    <>
      <h3>What I Learnt</h3>
      <ul>
        <li>
          This was my first time deploying a website. It was a long and tough road, but it was the first time I could tell my friends and family to just go to a URL and see what I had made. It was really nice.
        </li>
        <li>
          This was my first proper webpage created using React. I greatly enjoyed the experience, and I have continued using it since.
        </li>
      </ul>
    </>
  ),
  images: [
    images.scheduler_addingNewAppointments,
    images.scheduler_confirmDeleteAppointment,
    images.scheduler_displayingAppointments,
    images.scheduler_mobileView,
  ],
  githubLink: "https://github.com/open-meadow/scheduler",
};

export default scheduler;
