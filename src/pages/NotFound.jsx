import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="first-table" style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '100px' }}>
      <h1 id="CTitle">404 — Page Not Found</h1>
      <p style={{ marginTop: '20px' }}>The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="TDbutton" style={{ marginTop: '30px', display: 'inline-block', position: 'static' }}>
        Back to Home
      </Link>
    </div>
  );
}
