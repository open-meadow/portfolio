import { images } from "../images";

const tweeter = {
  name: "Tweeter",
  tools: ["Node.js", "Sass", "jQuery"],
  description: (
    <div className="description">
      Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS,
      jQuery, AJAX, Node and Express. This app has strict content moderation
      policies. Any hate-speech posted gets deleted the second you shut down the
      server.
    </div>
  ),
  features: (
    <>
      <div className="working--intro--elements">
        <h3>The website includes the following features:</h3>
        <ul id="small-margin">
          <li>
            The user can use the text box to create and submit text under a
            limit of 140 characters.
          </li>
          <li>
            A character counter that counts down from 140 and updates
            automatically based on the number of characters a user has typed.
          </li>
          <li>
            If it goes above the limit, the counter turns red and shows the
            extra number of characters. It also shows an error if the user tries to submit.
          </li>
          <li>
            If the character length is valid, it submits the text as a new tweet
            (in the same format as the others).
          </li>
          <li>
            Randomly generates a new user id and profile picture for each tweet.
            (For practice purposes)
          </li>
          <li>
            Alternate view for mobile devices. A scroll-to-top button to
            automatically scroll up.
          </li>
        </ul>
      </div>
    </>
  ),
  challenges: [
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Character Counter</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            The character counter dynamically updates as the user types.
          </li>
          <li>
            To implement this, I had to use jQuery to select the counter element (the text that says 140) and convert that to a jQuery object. Then I made it so it would constantly check the length of the string the user had input in the text field.
          </li>
          <li>
            If (140 - length) was lesser than zero, the counter turns red and trying to submit instead shows an error.
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
            This was really tricky to implement. I actually spent a lot of time
            trying to figure something out for this, and I had to get help from
            a teacher.
          </li>
          <li>
            I was trying to save the number of times a user views a page. For a
            long time, I was using the cookie-session module from npm to store
            the value in a cookie. This led to a long and complicated series of
            steps where the page would crash if I hadn't passed the value
            correctly to the page. Not to mention, there would be times when the
            value would start incrementing from zero instead of one
          </li>
          <li>
            As a compromise, I ended up storing the value of timesViewed in the
            database (a JS object), and I would directly call the value from the
            database. It's a somewhat hacky solution. It wouldn't work at a
            large scale, but for the purposes of the exercise, it got the job
            done.
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
          I had gotten an introduction to HTTP requests and Web Servers before,
          and now I had to use them here. This was my first time manually
          setting up an Express server, using authentication, using cookies.
        </li>
        <li>
          When the user types in a password, it should be compared to the
          existing password in the database. It should not be compared to
          itself. Yes, this is plainly obvious, and hopefully I won't make this
          mistake again.
        </li>
      </ul>
    </>
  ),
  images: [
    images.tweeter_mainPageDesktop,
    images.tweeter_mainPageMobile,
    images.tweeter_scrollToTopButton,
  ],
  githubLink: "https://github.com/open-meadow/tweeter",
};

export default tweeter;
