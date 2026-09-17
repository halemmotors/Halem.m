import { useState } from 'react';
import { asset } from '../utils/asset';

export default function Payment() {
  const [submitted, setSubmitted] = useState(false);

  // Card details are intentionally never read into state or persisted anywhere —
  // this form has no real payment processor behind it (see note below).
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form id="payment" onSubmit={handleSubmit}>
      <div className="PartOne">
        <h3>Billing Address</h3>
        <br />
        <p style={{ fontWeight: 'normal', fontSize: '0.85rem', marginBottom: '10px' }}>
          Demo checkout — this form isn't connected to a real payment processor yet.
        </p>
        <div className="infos">
          <label htmlFor="pay-fname">Full name:</label>
          <br />
          <input type="text" id="pay-fname" name="fname" placeholder="Name" />
        </div>
        <div className="infos">
          <label htmlFor="pay-email">Email:</label>
          <br />
          <input type="email" id="pay-email" name="email" placeholder="example@example.com" />
        </div>
        <div className="infos">
          <label htmlFor="pay-address">Address:</label>
          <br />
          <input type="text" id="pay-address" name="address" placeholder="Area - Street - Building Number" />
        </div>
        <div className="infos">
          <label className="city" htmlFor="pay-city">
            City:
          </label>
          <br />
          <input list="cities" id="pay-city" placeholder="Egypt" />
          <datalist id="cities">
            <option value="Cairo" />
            <option value="Giza" />
            <option value="Alexandria" />
          </datalist>
        </div>
        <div className="infos">
          <label htmlFor="pay-zip">ZipCode:</label>
          <br />
          <input type="text" id="pay-zip" name="zipcode" placeholder="123 456" />
        </div>
      </div>

      <div className="PartTwo">
        <h3>Payment</h3>
        <br />
        <p>Cards accepted:</p>
        <br />
        <img src={asset('halemphotos/card_img.png')} alt="Cards" />
        <br />
        <div className="infos">
          <label htmlFor="pay-name-on-card">Name On Card:</label>
          <br />
          <input type="text" id="pay-name-on-card" name="NameOnCard" placeholder="Name" />
        </div>
        <div className="infos">
          <label htmlFor="pay-card-number">Credit Card Number:</label>
          <br />
          <input type="text" id="pay-card-number" name="Cardnumber" placeholder="1111-1111-1111" autoComplete="off" />
        </div>
        <br />
        <div className="infos">
          <label htmlFor="pay-exp-month">Exp Month:</label>
          <br />
          <input type="text" id="pay-exp-month" name="expmonth" placeholder="january" />
        </div>
        <div className="infos">
          <label htmlFor="pay-exp-year">Exp Year:</label>
          <br />
          <input type="text" id="pay-exp-year" name="expyear" placeholder="2025" />
        </div>
        <div className="infos">
          <label htmlFor="pay-cvv">CVV:</label>
          <br />
          <input type="password" id="pay-cvv" name="CVV" placeholder="1234" autoComplete="off" />
        </div>
      </div>
      <input type="submit" value="Proceed to checkout" className="submit-btn" />
      {submitted && (
        <p style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
          This is a demo checkout — no charge was made and no card details were sent anywhere.
        </p>
      )}
    </form>
  );
}
