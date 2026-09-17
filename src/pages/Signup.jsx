import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
  }

  return (
    <form id="signup" onSubmit={handleSubmit}>
      <div className="PartOnesignup">
        <h3 id="signup-title">Sign up</h3>
        <br />
        <div className="infos">
          <label htmlFor="signup-fname">Full name:</label>
          <br />
          <input type="text" id="signup-fname" name="fname" placeholder="Name" required />
        </div>
        <div className="infos">
          <label htmlFor="signup-email">Email:</label>
          <br />
          <input type="email" id="signup-email" name="email" placeholder="example@example.com" required />
        </div>
        <div className="infos">
          <label htmlFor="signup-password">Set Password:</label>
          <br />
          <input
            type="password"
            id="signup-password"
            name="password"
            placeholder="*****"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="infos">
          <label htmlFor="signup-confirm-password">Confirm Password:</label>
          <br />
          <input
            type="password"
            id="signup-confirm-password"
            name="confirmPassword"
            placeholder="*****"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && (
          <p>This is a demo — there's no account system connected yet, so no account was actually created.</p>
        )}
      </div>
      <div id="nothing">
        <div>
          <input type="submit" value="Sign up" id="submit-btnsignup" />
        </div>
        <div id="exiacc">Already have an account? </div>
        <Link id="login-btnsignup" to="/login">
          Log in
        </Link>
      </div>
    </form>
  );
}
