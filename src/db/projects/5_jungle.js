import { images } from "../images";

const jungle = {
  name: "Jungle",
  tools: ["Ruby", "on Rails", "Cypress"],
  description: (
    <div className="description">
      Jungle is an inherited codebase in which I performed several bug fixes and
      feature additions.
    </div>
  ),
  features: (
    <>
      <div className="working--intro--elements">
        <h3>On this website, I made the following additions:</h3>
        <ul id="small-margin">
          <li>
            User Authentication to hide Admin features from regular users. User login and registration.
          </li>
          <li>
            Admin dashboard that allows admin users to create and edit product categories and holiday sales/discounts.
          </li>
          <li>
            Send an e-mail receipt once an order is placed by the user.
          </li>
          <li>
            Review system that allows users to add product reviews, view other reviews and delete own reviews. 
          </li>
          <li>
            Badge shown for products where quantity is zero. Bugfix to ensure that users cannot purchase more.
          </li>
        </ul>
      </div>
    </>
  ),
  challenges: [
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Ruby on Rails</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            Until now, I had been working with JavaScript, jQuery and React and related libraries. For this project, we were asked to work on a codebase created with Ruby on Rails. It was a big leap, and we had to adapt quickly. 
          </li>
          <li>
            The biggest challenges involved: getting to grips with Ruby syntax, understanding how the Model-View-Controller pattern worked, Working with views and controllers and using Rails tools like ActiveRecord and ActionMailer.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.jungle_adminDashboard}
        alt="project"
      />
    </div>,
  ],
  lessons_learnt: (
    <>
      <h3>What I Learnt</h3>
      <ul>
        <li>
          Simply put, not to get complacent. Working on this project pushed me far outside my comfort zone. Not only did I have to learn a new language with drastically different syntax, not only did I have to learn a new framework that used a different architectural pattern, I had to understand and make changes to an existing codebase. It was difficult but also enjoyable.
        </li>
      </ul>
    </>
  ),
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
};

export default jungle;
