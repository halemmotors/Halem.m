import { asset } from '../utils/asset';

export default function AboutUs() {
  return (
    <div id="mainabout">
      <h2 id="abouttitle">
        About us
        <br />
      </h2>
      <div id="aboutcontent">
        <div id="aboutus">
          <br />
          <p>
            <span className="aboutus-title">What is the purpose of our website?</span>
            <br />
            The purpose of this website is to provide cars that are not easily found in Egypt, by importing cars
            from foreign countries. Offering a wide selection of luxury cars and imported cars, and providing
            complete satisfaction to the customer, as we offer an online experience that takes the showroom right
            to the comfort of their own home.
          </p>
          <p>
            <span className="aboutus-title">Who are our customers?</span>
            <br />
            We are targeting High-Class customers including (businessmen, celebrities, and important people)
            seeking all categories of cars. These customers are strictly above the age of 18 as they have the right
            to buy and drive a car.
          </p>
        </div>

        <div id="aboutimg">
          <img src={asset('halemphotos/about1.png')} alt="about us" style={{ width: 225 }} />
        </div>
      </div>

      <hr />
      <br />
      <br />
      <h2 id="whattitle">What issue does our website address?</h2>
      <div id="whatwedo">
        <p>
          Our site gives the opportunity to our customers to acquire hard-to-reach expensive and foreign cars.
          Furthermore, enhance the overall experience of buying cars online.
        </p>
      </div>

      <br />
      <hr />
      <br />
      <br />

      <h2 id="whotitle">What kind of content is to be expected on our website?</h2>
      <div id="whocontent">
        <div id="whoimg">
          <img src={asset('halemphotos/about2.png')} alt="about us" style={{ width: 350 }} />
        </div>
        <div>
          <p>
            The type of content on our website includes various information concerning lots of cars and their
            specifications, also contains pictures and video of the cars themselves and other essential pictures
            and logos for the icons to help the user navigate throughout the website. Furthermore, other services
            related to cars such as (warranty, insurance, car customization).
          </p>
        </div>
      </div>
    </div>
  );
}
