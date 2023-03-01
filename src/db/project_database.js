import { images } from "./images";

const portfolio = {
  0: {
    name: "Tiny App",
    tools: ["Node.js", "EJS", "Bootstrap CSS"],
    description:
      "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly)",
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
      <div className="working--challenges--carousel-item">
        <div>
          <h3>Analytics</h3>
          <hr className="working--challenges--carousel-item--line" />
          <ul className="working--challenges--carousel-item--text">
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
          className="working--challenges--carousel-item--image"
          src={images.tinyapp_singleUrlPage}
        />
      </div>,
      <div className="working--challenges--carousel-item">
        <div>
          <h3>Analytics</h3>
          <hr className="working--challenges--carousel-item--line" />
          <ul className="working--challenges--carousel-item--text">
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
          className="working--challenges--carousel-item--image"
          src={images.tinyapp_singleUrlPage}
        />
      </div>,
    ],
    how_it_works:
      "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). It allows users to register and login. (passwords saved with military-grade encryption). It allows users to store multiple short URL's and it saves how many times a URL is visited.",
    programming_notes: "Analytics. Just.....analytics.",
    images: [
      images.tinyapp_singleUrlPage,
      images.tinyapp_urlsPage,
      images.tinyapp_createNewUrlPage,
      images.tinyapp_loginPage,
      images.tinyapp_urlsPageBeforeLogin,
    ],
    githubLink: "https://github.com/open-meadow/tinyapp",
  },
  1: {
    name: "Tweeter",
    tools: ["Node.js", "Sass", "jQuery"],
    description:
      "Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS, jQuery, AJAX, Node and Express. This app has strict content moderation policies. Any hate-speech posted gets deleted the second you shut down the server.",
    how_it_works:
      "Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS, jQuery, AJAX, Node and Express. This app has strict content moderation policies. Any hate-speech posted gets deleted the second you shut down the server.",
    programming_notes: "This app was my introduction to AJAX, jQuery and Sass.",
    images: [
      images.tweeter_mainPageDesktop,
      images.tweeter_mainPageMobile,
      images.tweeter_scrollToTopButton,
    ],
    githubLink: "https://github.com/open-meadow/tweeter",
  },
  2: {
    name: "Interview Scheduler",
    tools: ["Node.js", "React", "PostgreSQL"],
    description:
      "This is an Interview Scheduling App. It allows users to easily create new appointments, by typing in a name, and selecting an interviewer. The information is stored on a database. Therefore, it is not lost upon refresh or closing the browser page. Furthermore, data is stored across devices. It is a responsive app that shows a different layout for computer and mobile devices. It makes use of AJAX requests so that the data gets immediately updated. The webpage was created using Node and React and tested with Jest and Cypress.",
    how_it_works:
      "This is an Interview Scheduling App. It allows users to easily create new appointments, by typing in a name, and selecting an interviewer. The information is stored on a database. Therefore, it is not lost upon refresh or closing the browser page. Furthermore, data is stored across devices. It is a responsive app that shows a different layout for computer and mobile devices. It makes use of AJAX requests so that the data gets immediately updated. The webpage was created using Node and React and tested with Jest and Cypress.",
    programming_notes: "My first deployment.",
    images: [
      images.scheduler_addingNewAppointments,
      images.scheduler_confirmDeleteAppointment,
      images.scheduler_displayingAppointments,
      images.scheduler_mobileView,
    ],
    githubLink: "https://github.com/open-meadow/scheduler",
  },
  3: {
    name: "Two Sam's and a Rohan",
    tools: ["Node.js", "jQuery", "PostgreSQL"],
    description:
      "2 Sam's and a Rohan is a website that allows users to place orders from a menu, and it allows the restaurant to respond to said orders. The website allows users to add menu items to a cart and place the order. When placing the order, a user must input their phone number. Placing the order will send the restaurant an SMS message notifying them that the order has been placed. On the restaurant end, there is a portal that allows owners to view incoming orders. For new orders, it allows the owner to insert the time in minutes, indicating how long it would take for an order to finish. When the order is complete, the user would recieve a message on their phone. A 'pending' order will include a timer showing how long an order will take to finish. Once the order is finished, the user recieves a completion message.",
    how_it_works:
      "2 Sam's and a Rohan is a website that allows users to place orders from a menu, and it allows the restaurant to respond to said orders. The website allows users to add menu items to a cart and place the order. When placing the order, a user must input their phone number. Placing the order will send the restaurant an SMS message notifying them that the order has been placed. On the restaurant end, there is a portal that allows owners to view incoming orders. For new orders, it allows the owner to insert the time in minutes, indicating how long it would take for an order to finish. When the order is complete, the user would recieve a message on their phone. A 'pending' order will include a timer showing how long an order will take to finish. Once the order is finished, the user recieves a completion message.",
    programming_notes:
      "Surprisingly SMS was not the toughest thing to implement. Because I didn't implement it, my teammate did.",
    images: [
      images.fpo_inputDetails,
      images.fpo_mobileSidebar,
      images.fpo_mobileView,
      images.fpo_ordersMain,
      images.fpo_restaurantComplete,
      images.fpo_restaurantPending,
      images.fpo_restaurantTimeUp,
      images.fpo_restaurantView,
    ],
    githubLink: "https://github.com/open-meadow/food-pickup-ordering",
  },
  4: {
    name: "Your-Tube",
    tools: ["Node.js", "React", "PostgreSQL", "FFmpeg"],
    description:
      "Your-Tube is an alternative YouTube front-end that removes all external distractions to create a minimalist interface to help users focus on studies or work. It obtains data search and video data from the Invidious API.It has the following features: Audio-only mode: Allows users to listen to videos. (Helps to reduce bandwidth when listening to music compilations) Ad-free streaming, Video Downloads, Toggle between Multiple Players: Invidious player allows audio-only mode and ad-free streaming. YouTube player allows faster loading and plays live-streams.        Automatic switching between instances: If an Invidious instance is down, the app will automatically switch to a working one. Playlists: Players can create custom playlists to add and delete videos. Videos accessed from playlists have autoplay enabled as well as their own interface allowing easy access to other videos. You will never need to alt-tab back to the browser.Zero distractions: Clean interface with no unneeded tab elements. We aim to keep you on our site as little as possible.",
    how_it_works:
      "Your-Tube is an alternative YouTube front-end that removes all external distractions to create a minimalist interface to help users focus on studies or work. It obtains data search and video data from the Invidious API.It has the following features: Audio-only mode: Allows users to listen to videos. (Helps to reduce bandwidth when listening to music compilations) Ad-free streaming, Video Downloads, Toggle between Multiple Players: Invidious player allows audio-only mode and ad-free streaming. YouTube player allows faster loading and plays live-streams.        Automatic switching between instances: If an Invidious instance is down, the app will automatically switch to a working one. Playlists: Players can create custom playlists to add and delete videos. Videos accessed from playlists have autoplay enabled as well as their own interface allowing easy access to other videos. You will never need to alt-tab back to the browser.Zero distractions: Clean interface with no unneeded tab elements. We aim to keep you on our site as little as possible.",
    programming_notes: "Downloads..........",
    images: [
      images.yourTube_addToNewPlaylist,
      images.yourTube_homePage,
      images.yourTube_playlistSidebar,
      images.yourTube_searchResults,
      images.yourTube_videoPageAudioMode,
      images.yourTube_videoPageDownloads,
      images.yourTube_videoPageInvidiousVideo,
      images.yourTube_videoPageInvidiousVideoBottom,
      images.yourTube_videoPagePlaylistView,
      images.yourTube_videoPageYoutube,
    ],
    githubLink: "https://github.com/open-meadow/your-tube",
  },
  5: {
    name: "Jungle",
    tools: ["Ruby", "on Rails", "Cypress"],
    description:
      "Jungle is an inherited codebase in which I performed several bug fixes and feature additions.",
    how_it_works:
      "Jungle is an inherited codebase in which I performed several bug fixes and feature additions.",
    programming_notes: "RAILS!!!!!!!!!!",
    images: [
      images.jungle_adminAuthentication,
      images.jungle_adminCategories,
      images.jungle_adminDashboard,
      images.jungle_createNewSale,
      images.jungle_email,
      images.jungle_reviews,
      images.jungle_salesDashboard,
      images.jungle_showCurrentSale,
      images.jungle_soldOutBadge,
    ],
    githubLink: "https://github.com/open-meadow/jungle",
  },
};

export default portfolio;
