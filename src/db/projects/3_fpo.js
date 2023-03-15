import { images } from "../images";

const fpo = {
  name: "Two Sam's and a Rohan",
  tools: ["Node.js", "jQuery", "PostgreSQL"],
  description: (
    <div className="description">
      2 Sam's and a Rohan is a website that allows users to place orders from a
      menu, and it allows the restaurant to respond to said orders. The website
      allows users to add menu items to a cart and place the order. When placing
      the order, a user must input their phone number. Placing the order will
      send the restaurant an SMS message notifying them that the order has been
      placed. On the restaurant end, there is a portal that allows owners to
      view incoming orders. For new orders, it allows the owner to insert the
      time in minutes, indicating how long it would take for an order to finish.
      When the order is complete, the user would recieve a message on their
      phone. A 'pending' order will include a timer showing how long an order
      will take to finish. Once the order is finished, the user recieves a
      completion message.
    </div>
  ),
  features: (
    <>
      <div className="working--intro--elements">
        <h3>The website includes the following features:</h3>
        <ul id="small-margin">
          <li>
            The website consists of two pages. A client page where a user can place orders, and a restaurant page where a restaurant can change the status of an order.
          </li>
          <li>
            The client page shows several menu items. A user can click the [+] or [-] buttons to add and remove the menu items to and from the cart.
          </li>
          <li>
            The cart updates with order information, and calculates the necessary fees and taxes. A user can submit this order.
          </li>
          <li>
            Once submitted, the order appears on the restaurant page. From there, a user can input in the search bar, the amount of time (in minutes) it would take to complete the order.
          </li>
          <li>
            Once the user has input this, it starts a timer counting down from said number of minutes. This information is simultaneously shown on the client screen.
          </li>
          <li>
            Separate tabs that divide orders for each phase of their orders.
          </li>
          <li>
            Once an order is placed, and once an order is completed, an SMS message is sent to the user.
          </li>
        </ul>
      </div>
    </>
  ),
  challenges: [
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Timer</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            I was working almost entirely on the restaurant page. The most challenging part for me was to implement the timer.
          </li>
          <li>
            The usual way of generating a timer is to get the current time, get (current time + number of minutes), subtract the two and continuously show the subtraction on-screen.
          </li>
          <li>
            I had to figure out how to perform mathematical functions on time values. To do this, I had to convert the obtained time from minutes to milliseconds, add the two, convert it back to minutes and show it on screen.
          </li>
          <li>
            This alone was causing errors. Hence, I stored the time values in the browser's sessionStorage. This fixed the errors, and allowed the timer to persist upon refresh
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.fpo_restaurantPending}
        alt="project"
      />
    </div>,
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Cart</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            I didn't work on this. My teammates did. It was quite challenging, and I'd like to write a few sentences on how they did it in case I need to take credit for their hard work.
          </li>
          <li>
            The details about the cart are stored in the browser's local storage. The local storage holds an object which contains the menu ID, order name and quantity. Once this object is created, there are separate functions that use the menu ID to increase and decrease the quantity.
          </li>
          <li>
            A separate function uses information from the local storage to calculate the price. Upon clicking submit, All the info is stored in the database (to be used by the restaurant), and the local storage is cleared. 
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.fpo_ordersMain}
        alt="project"
      />
    </div>,
        <div className="working--challenges--carousel--item">
        <div>
          <h3>Cart</h3>
          <hr className="working--challenges--carousel--item--line" />
          <ul className="working--challenges--carousel--item--text">
            <li>
              I didn't work on this. My teammates did. It was quite challenging, and I'd like to write a few sentences on how they did it in case I need to take credit for their hard work.
            </li>
            <li>
              The details about the cart are stored in the browser's local storage. The local storage holds an object which contains the menu ID, order name and quantity. Once this object is created, there are separate functions that use the menu ID to increase and decrease the quantity.
            </li>
            <li>
              A separate function uses information from the local storage to calculate the price. Upon clicking submit, All the info is stored in the database (to be used by the restaurant), and the local storage is cleared. 
            </li>
          </ul>
        </div>
        <img
          className="working--challenges--carousel--item--image"
          src={images.fpo_ordersMain}
          alt="project"
        />
      </div>,
  ],
  lessons_learnt: (
    <>
      <h3>What I Learnt</h3>
      <ul>
        <li>
          This was my first experience collaborating on a coding project with a team. We were able to equally divide the tasks among ourselves, and we all put in our best effort.
        </li>
        <li>
          Trello is a very useful tool. One of my teammates was a project manager, and because of him, we created a Trello board very early on. This helped keep us accountable and on-track for the rest of our project. I've been using it since.
        </li>
        <li>
          Don't add a login feature unless it's absolutely required. We had plans for a login feature that were later scrapped when it was clear that it would take too long and we wouldn't be able to finish it in time (I was working on it 😢).  
        </li>
      </ul>
    </>
  ),
  images: [
    images.fpo_ordersMain,
    images.fpo_restaurantPending,
    images.fpo_restaurantView,
    images.fpo_inputDetails,
    images.fpo_mobileSidebar,
    images.fpo_mobileView,
    images.fpo_restaurantComplete,
    images.fpo_restaurantTimeUp,
  ],
  githubLink: "https://github.com/open-meadow/food-pickup-ordering",
};

export default fpo;
