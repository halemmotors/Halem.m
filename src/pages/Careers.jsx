import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

export default function Careers() {
  return (
    <section id="careersec">
      <img id="careerimg" src={asset('halemphotos/business.jpg')} alt="business" />
      <div id="careerdes">
        <h2 id="careertit">JOIN OUR TEAM</h2>

        <p>
          We are a fast-growing company looking to expand our team with driven and skilled individuals. If you are
          passionate about your work and strive for excellence, we want to hear from you.
        </p>
        <br />
        <p>We are currently seeking individuals to fill various positions including:</p>

        <ul>
          <li>Sales Representatives</li>
          <li>Marketing Specialists</li>
          <li>Customer Support Associates</li>
        </ul>
        <br />
        <p>
          If you are interested in joining our team, please contact us and we will send you the requirements. We
          look forward to hear from you!
        </p>

        <Link id="careercontact" to="/contact">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
