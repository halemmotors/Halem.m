import { Link } from 'react-router-dom';
import { footerColumns, socialLinks, footerEmail, footerTagline } from '../data/nav';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from './SocialIcons';

const socialIcons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Youtube: YoutubeIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Halem Motors</div>
            <p className="footer-tagline">{footerTagline}</p>
            <a className="footer-mail" href={`mailto:${footerEmail}`}>
              {footerEmail}
            </a>
            <div className="footer-social">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label];
                return (
                  <a key={link.label} href={link.href} aria-label={link.label}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-links">
            {footerColumns.map((col) => (
              <div className="footer-col" key={col.title}>
                <div className="footer-heading">{col.title}</div>
                {col.links.map((link) => (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="footer-newsletter">
            <div className="footer-heading">Get updates</div>
            <p className="footer-newsletter-copy">Join our newsletter for new arrivals and offers.</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Join</button>
            </form>
            <div className="footer-account-links">
              <Link to="/signup">Sign Up</Link>
              <span>/</span>
              <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        &copy; {new Date().getFullYear()} Halem-Motors Egypt, Inc. All rights reserved.
      </div>
    </footer>
  );
}
