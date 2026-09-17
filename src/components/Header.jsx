import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { primaryNav } from '../data/nav';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setNavOpen(false);
        setOpenDropdown(null);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function closeMenu() {
    setNavOpen(false);
    setOpenDropdown(null);
  }

  function handleDropdownClick(label, e) {
    e.preventDefault();
    if (window.innerWidth > 900) return;
    setOpenDropdown((current) => (current === label ? null : label));
  }

  return (
    <header>
      <div id="logo">
        <Link id="headerlogo" to="/">
          <h1>Halem Motors</h1>
        </Link>
      </div>
      <button
        className={`nav-toggle${navOpen ? ' open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={navOpen}
        aria-controls="siteNav"
        onClick={() => setNavOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="siteNav" className={navOpen ? 'nav-open' : ''}>
        <ul>
          {primaryNav.map((item) =>
            item.dropdown ? (
              <li
                key={item.label}
                className={`dropdown${openDropdown === item.label ? ' dropdown-open' : ''}`}
              >
                <a
                  href="#"
                  className="company-link"
                  onClick={(e) => handleDropdownClick(item.label, e)}
                >
                  {item.label}
                </a>
                <ul className="dropdown-content">
                  {item.dropdown.map((sub) => (
                    <li className="dropdownedit" key={sub.to}>
                      <Link to={sub.to} onClick={closeMenu}>
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
