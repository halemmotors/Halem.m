import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [message, setMessage] = useState('');
  const [forgotMessage, setForgotMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("This is a demo — there's no account system connected yet, so nothing was actually logged in.");
  }

  return (
    <form id="login-page" onSubmit={handleSubmit}>
      <div className="login-container">
        <h3>Log In</h3>
        <br />
        <div className="login-info">
          <label htmlFor="login-email">Email Address</label>
          <br />
          <input type="email" id="login-email" placeholder="email" required />
          <br />
          <label htmlFor="login-password">Password</label>
          <br />
          <input type="password" id="login-password" placeholder="password" required />
          <br />
        </div>
        <div id="login-middle-part">
          <div className="login-checkbox">
            <input type="checkbox" id="login-checkbox-input" />
            <label id="login-remember" htmlFor="login-checkbox-input">
              Remember Me
            </label>
          </div>

          <button
            type="button"
            id="login-forgot"
            onClick={() => setForgotMessage(true)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              font: 'inherit',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            Forgot Password?
          </button>
        </div>
        {forgotMessage && <p>Password reset isn't available yet — please contact us directly for help.</p>}
      </div>
      <div id="loginbox">
        <input type="submit" value="log in" id="login-btn" />
        {message && <p style={{ marginTop: '10px' }}>{message}</p>}
        <div id="needsignup">
          <div id="noacc">Don't have an account? </div>
          <Link id="signup-btnlogin" to="/signup">
            sign up
          </Link>
        </div>
      </div>
    </form>
  );
}
