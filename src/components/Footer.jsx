import { Link } from 'react-router-dom';
import { footerColumns, footerNavigateLinks, companyBlurb } from '../data/nav';

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        {footerColumns.map((col) => (
          <div className="footerheading" key={col.title}>
            <div className="titles">{col.title}</div>
            {col.links.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to}>
                  {link.label}{' '}
                </Link>
              ) : (
                <a key={link.label} href={link.href}>
                  {link.label}{' '}
                </a>
              )
            )}
          </div>
        ))}
        <div className="footerheading">
          <div className="titles">Info About our company</div>
          {companyBlurb}
        </div>
        <div className="footerheading">
          <div className="titles">Navigate</div>
          {footerNavigateLinks.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            )
          )}
        </div>
        <div className="footeremail-col">
          <div className="titles">Join Our News letter</div>
          <input type="email" placeholder="Enter your email address" className="footeremail" />
          <input type="submit" value="Join" id="footernews" onClick={(e) => e.preventDefault()} />
          <Link to="/signup">Sign Up</Link>/<Link to="/login">Log in</Link>
        </div>
      </div>
      <div id="footer-bottom">
        &copy; {new Date().getFullYear()} Halem-Motors Egypt, Inc. All rights reserved.
      </div>
    </footer>
  );
}
