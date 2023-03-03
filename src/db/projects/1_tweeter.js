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
            extra number of characters. It also shows an error if the user tries
            to submit.
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
          <li>The character counter dynamically updates as the user types.</li>
          <li>
            To implement this, I had to use jQuery to select the counter element
            (the text that says 140) and convert that to a jQuery object. Then I
            made it so it would constantly check the length of the string the
            user had input in the text field.
          </li>
          <li>
            If (140 - length) was lesser than zero, the counter turns red and
            trying to submit instead shows an error.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.tweeter_errorIfTextIsTooLong}
      />
    </div>,
    <div className="working--challenges--carousel--item">
      <div>
        <h3>IIFE's</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            After coding the webpage, I refactored the code using IIFE's
            (Immediately Invoked Function Expressions). This was a more advanced
            concept I hadn't yet learnt at the time.
          </li>
          <li>
            This helped to better organize the code, it created a private scope
            so that the variables and functions could not be declared from
            outside the modules. It apparently also increases performance, but
            for my purposes, it was negligible.
          </li>
          <li>
            I don't think this was strictly necessary. (I wasn't using a global
            scope or any repeating function names). But it made the code more
            readable and work better. And I learnt something from it.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.tweeter_characterCounter}
      />
    </div>,
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Protection against XSS Injections</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            If a user were to type, say, 
            <code>$("body").empty();</code> into the text box, it would display as a tweet instead of clearing the body. 
          </li>
          <li>
            To do this, I had to create an escape function. This takes the content from the form, creates a new div and makes said content a child of the div.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.tweeter_protectAgainstXSS}
      />
    </div>,
  ],
  lessons_learnt: (
    <>
      <h3>What I Learnt</h3>
      <ul>
        <li>
          This was my first time using Sass, and I would go on to use it in future projects. This project was our introduction to AJAX requests and creating Single-Page Applications.
        </li>
        <li>
          While I had used jQuery before, this project allowed me to stretch those muscles further. It was also during this project that I understood what the "$" in jQuery did.
        </li>
        <li>
          I was also inroduced to IIFE's and XSS attacks. While they were helpful to learn, I haven't had to use escape functions in my later React projects. I still make sure to keep them in mind.
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
