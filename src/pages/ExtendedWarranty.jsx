import { useState } from 'react';

export default function ExtendedWarranty() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w1">
        <h1 id="gg">Warranty</h1>
        <br />
        <div id="brb">
          <label className="fname" htmlFor="ew-fname">
            First name:
          </label>
          <br />
          <input type="text" className="fname" id="ew-fname" name="fname" />
          <br />
          <br />

          <label className="lname" htmlFor="ew-lname">
            Last name:
          </label>
          <br />
          <input type="text" className="lname" id="ew-lname" name="lname" />
          <br />
          <br />

          <label className="carc" htmlFor="ew-carc">
            Car company:
          </label>
          <br />
          <select id="ew-carc" name="carc" className="carc">
            <option value="dodge">dodge</option>
            <option value="Ferrari">Ferrari</option>
            <option value="ford">ford</option>
            <option value="Infinity">Infinity</option>
          </select>
          <br />
          <br />

          <label className="rdate" htmlFor="ew-rdate">
            Receiving date
          </label>
          <br />
          <input type="date" className="rdate" id="ew-rdate" />
          <br />
          <br />

          <label className="phn" htmlFor="ew-phn">
            Phone number
          </label>
          <br />
          <input className="phn" id="ew-phn" type="tel" />
        </div>
        <div id="f3">
          <label className="email" htmlFor="ew-email">
            E-mail
          </label>
          <br />
          <input type="email" id="ew-email" />
          <br />
          <br />

          <label className="pdate" htmlFor="ew-pdate">
            Purchase date
          </label>
          <br />
          <input type="date" className="pdate" id="ew-pdate" />
          <br />
          <br />

          <div className="vp">
            <p>Valid per:</p>
            <br />
            <input className="KM" type="radio" id="valid" name="validationType" />
            <label className="KM" htmlFor="valid">
              KM
            </label>
            <br />
            <input className="RD" id="RD1" type="radio" name="validationType" />
            <label className="RD" htmlFor="RD1">
              Years
            </label>
            <br />
            <br />
          </div>

          <label className="Pcode" htmlFor="ew-pcode">
            Purchase code
          </label>
          <br />
          <input type="password" className="Pcode" id="ew-pcode" />
        </div>

        <input id="sub" type="submit" value="Submit" />
        {submitted && (
          <p style={{ marginTop: '20px' }}>
            Thanks! This is a demo form — no warranty system is connected yet, so nothing was actually submitted.
          </p>
        )}
      </div>
    </form>
  );
}
