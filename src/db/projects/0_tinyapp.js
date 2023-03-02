import { images } from "../images";

const tinyapp =  {
  name: "Tiny App",
  tools: ["Node.js", "EJS", "Bootstrap CSS"],
  description: (
    <div className="description">
      TinyApp is a full stack web application built with Node and Express that
      allows users to shorten long URLs (à la bit.ly). It was created during
      my studies at Lighthouse Labs, and served as an introduction to several
      aspects of full-stack web development.
    </div>
  ),
  features: (
    <>
      <div className="working--intro--elements">
        <h3>The website includes the following features:</h3>
        <ul id="small-margin">
          <li>
            Upon inputting a long URL in the given form, the website generates
            a short URL. This can be used to navigate to the long URL
          </li>
          <li>
            The Dashboard allows users to view a list of shortened URL's under
            their account and quickly navigate to them, edit them or delete
            the URL's.
          </li>
          <li>
            An Edit screen allows users to quickly edit a URL under said ID
          </li>
          <li>
            The screen keeps track of the number of times a URL is visited and
            displays it to the user
          </li>
          <li>
            Login and Registration capabilities allowing users to only view
            their URL's
          </li>
          <li>
            Login details are stored in cookies and are not lost upon browser
            shutdown
          </li>
        </ul>
      </div>
    </>
  ),
  challenges: [
    <div className="working--challenges--carousel--item">
      <div>
        <h3>User Authentication</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            Upon filling the form and clicking "submit", the app checks if the
            user exists in the database. As I hadn't yet learnt SQL, I was
            storing the details in a JavaScript object.
          </li>
          <li>
            If the user did not already exist, the app would create a new
            user. It was then hash the given password using the bcrypt module
            from npm.
          </li>
          <li>
            During login, I had initially made an error. When logging in,
            instead of checking if the supplied password matched the one in
            the database, I had checked if the supplied password was equal to
            itself. It was quite funny once it was pointed out to me, and I
            have since fixed the mistake.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.tinyapp_loginPage}
      />
    </div>,
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Analytics</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            This was really tricky to implement. I actually spent a lot of
            time trying to figure something out for this, and I had to get
            help from a teacher.
          </li>
          <li>
            I was trying to save the number of times a user views a page. For
            a long time, I was using the cookie-session module from npm to
            store the value in a cookie. This led to a long and complicated
            series of steps where the page would crash if I hadn't passed the
            value correctly to the page. Not to mention, there would be times
            when the value would start incrementing from zero instead of one
          </li>
          <li>
            As a compromise, I ended up storing the value of timesViewed in
            the database (a JS object), and I would directly call the value
            from the database. It's a somewhat hacky solution. It wouldn't
            work at a large scale, but for the purposes of the exercise, it
            got the job done.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.tinyapp_singleUrlPage}
      />
    </div>,
  ],
  lessons_learnt: (
    <>
      <h3>What I Learnt</h3>
      <ul>
        <li>
          I had gotten an introduction to HTTP requests and Web Servers
          before, and now I had to use them here. This was my first time
          manually setting up an Express server, using authentication, using
          cookies.
        </li>
        <li>
          When the user types in a password, it should be compared to the
          existing password in the database. It should not be compared to
          itself. Yes, this is plainly obvious, and hopefully I won't make
          this mistake again.
        </li>
      </ul>
    </>
  ),
  images: [
    images.tinyapp_singleUrlPage,
    images.tinyapp_urlsPage,
    images.tinyapp_createNewUrlPage,
    images.tinyapp_loginPage,
    images.tinyapp_urlsPageBeforeLogin,
  ],
  githubLink: "https://github.com/open-meadow/tinyapp",
}

export default tinyapp;