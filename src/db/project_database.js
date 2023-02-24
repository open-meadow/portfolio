const portfolio = {
  1: {
    name: "Tiny App",
    tools: ["Node.js", "EJS", "Bootstrap CSS"],
    how_it_works:
      "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly). It allows users to register and login. (passwords saved with military-grade encryption). It allows users to store multiple short URL's and it saves how many times a URL is visited.",
    programming_notes: "Analytics. Just.....analytics.",
  },
  2: {
    name: "Tweeter",
    tools: ["Node.js", "Sass", "jQuery"],
    how_it_works:
      "Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS, jQuery, AJAX, Node and Express. This app has strict content moderation policies. Any hate-speech posted gets deleted the second you shut down the server.",
    programming_notes: "This app was my introduction to AJAX, jQuery and Sass.",
  },
  3: {
    name: "Interview Scheduler",
    tools: ["Node.js", "React", "PostgreSQL"],
    how_it_works:
      "This is an Interview Scheduling App. It allows users to easily create new appointments, by typing in a name, and selecting an interviewer. The information is stored on a database. Therefore, it is not lost upon refresh or closing the browser page. Furthermore, data is stored across devices. It is a responsive app that shows a different layout for computer and mobile devices. It makes use of AJAX requests so that the data gets immediately updated. The webpage was created using Node and React and tested with Jest and Cypress.",
    programming_notes: "My first deployment.",
  },
  4: {
    name: "Two Sam's and a Rohan",
    tools: ["Node.js", "jQuery", "PostgreSQL"],
    how_it_works:
      "2 Sam's and a Rohan is a website that allows users to place orders from a menu, and it allows the restaurant to respond to said orders. The website allows users to add menu items to a cart and place the order. When placing the order, a user must input their phone number. Placing the order will send the restaurant an SMS message notifying them that the order has been placed. On the restaurant end, there is a portal that allows owners to view incoming orders. For new orders, it allows the owner to insert the time in minutes, indicating how long it would take for an order to finish. When the order is complete, the user would recieve a message on their phone. A 'pending' order will include a timer showing how long an order will take to finish. Once the order is finished, the user recieves a completion message.",
    programming_notes:
      "Surprisingly SMS was not the toughest thing to implement. Because I didn't implement it, my teammate did.",
  },
  5: {
    name: "Your-Tube",
    tools: ["Node.js", "React", "PostgreSQL", "FFmpeg"],
    how_it_works:
      "Your-Tube is an alternative YouTube front-end that removes all external distractions to create a minimalist interface to help users focus on studies or work. It obtains data search and video data from the Invidious API.It has the following features: Audio-only mode: Allows users to listen to videos. (Helps to reduce bandwidth when listening to music compilations) Ad-free streaming, Video Downloads, Toggle between Multiple Players: Invidious player allows audio-only mode and ad-free streaming. YouTube player allows faster loading and plays live-streams.        Automatic switching between instances: If an Invidious instance is down, the app will automatically switch to a working one. Playlists: Players can create custom playlists to add and delete videos. Videos accessed from playlists have autoplay enabled as well as their own interface allowing easy access to other videos. You will never need to alt-tab back to the browser.Zero distractions: Clean interface with no unneeded tab elements. We aim to keep you on our site as little as possible.",
    programming_notes:
      "Downloads..........",
  },
  5: {
    name: "Jungle",
    tools: ["Ruby", "on Rails", "ActiveRecord"],
    how_it_works:
      "Jungle is an inherited codebase in which I performed several bug fixes and feature additions.",
    programming_notes:
      "RAILS!!!!!!!!!!",
  },
};
