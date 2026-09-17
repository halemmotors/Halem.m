import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const brandLogos = [
  { id: 'dodge', src: 'halemphotos/Dodge-logo-2011.png', alt: 'Dodge', width: 200 },
  { id: 'infiniti', src: 'halemphotos/infiniti-logo.png', alt: 'Infiniti', width: 200 },
  { id: 'ferrari', src: 'halemphotos/ferrari-logo.png', alt: 'Ferrari', width: 100 },
  { id: 'ford', src: 'halemphotos/ford-logo-2017-show.png', alt: 'Ford', width: 200 },
];

export default function Home() {
  return (
    <>
      <div className="homeparagraph" id="imglinkshome">
        <h2>Who are we?</h2>
        <p>
          Welcome to Halem Motors, your premier destination for exotic cars in Egypt. We specialize in importing
          top-of-the-line vehicles from foreign countries, providing our customers with only the finest selection of
          luxury automobiles. Our knowledgeable and experienced team is dedicated to ensuring your complete
          satisfaction, from the moment you step into our showroom to the moment you drive off our lot. Discover the
          thrill of driving a truly exceptional car with Halem Motors.
        </p>
        <p>
          Make sure to join us and{' '}
          <Link to="/signup" id="signupp">
            sign up now.
          </Link>
        </p>
      </div>

      <div className="homelinks">
        <Link to="/signup" id="signuplink">
          Sign up
        </Link>
        <br />
        <Link to="/login" id="loginlink">
          Log in
        </Link>
      </div>

      <table className="imglinkshome">
        <tbody>
          <tr>
            {brandLogos.map((logo) => (
              <td className="hometable" key={logo.id}>
                <Link to={`/brands/${logo.id}`}>
                  <img src={asset(logo.src)} alt={logo.alt} style={{ width: logo.width }} />
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
