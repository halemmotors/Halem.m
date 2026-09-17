import { useState } from 'react';
import Accordion from '../components/Accordion';

const locations = [
  {
    title: 'SHOWROOMS',
    entries: [
      {
        name: 'HM HQ',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B010'07.7%22N+31%C2%B030'25.3%22E/@30.1688102,31.5048392,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.1688102!4d31.5070279",
        address: 'KM28 Ismailia Desert Road',
        phone: '+201552963437',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
      {
        name: 'Roxy Showroom',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B005'38.6%22N+31%C2%B018'45.1%22E/@30.094054,31.3103334,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.094054!4d31.3125221",
        address: '11 Qoba St. Roxy, Heliopolis',
        phone: '+201011063899',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
      {
        name: 'Nozha Showroom',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B004'47.9%22N+31%C2%B020'22.8%22E/@30.079974,31.3374803,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.079974!4d31.339669",
        address: '12 Nozha St. Ard El Golf, Nasr City',
        phone: '+201141619906',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
      {
        name: 'Maadi Showroom',
        mapUrl: 'https://www.google.com/maps?q=29.9607893,31.3227983',
        address: '11742 Zahraa Al Maadi, Industrial Zone, Maadi',
        phone: '+201093760265',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
      {
        name: 'Alexandria Showroom',
        mapUrl:
          "https://www.google.com/maps/place/31%C2%B012'35.5%22N+29%C2%B056'05.6%22E/@31.2098606,29.9326875,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.2098606!4d29.9348762",
        address: '4 Tout Ankh Amoun - Fawazy Moaz - Smouha',
        phone: '+201098929981',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
      {
        name: 'Dodge Auto HM Flagship',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B001'01.1%22N+31%C2%B023'20.1%22E/@30.0169571,31.3867221,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0169571!4d31.3889108",
        address: 'Al-Mosheer Tantawy Axis, beside Al Manara International Conference Center',
        phone: '+201099183646',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
    ],
  },
  {
    title: 'PART OUTLETS',
    entries: [
      {
        name: 'Obour Parts Outlet',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B010'07.7%22N+31%C2%B030'25.3%22E/@30.1688102,31.5048392,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.1688102!4d31.5070279",
        address: 'KM28 Ismailia Desert Road',
        phone: '+201552963437',
        hours: 'Opening 8:30-5:30 PM - From Saturday till Thursday',
      },
      {
        name: 'Maadi Parts Outlet',
        mapUrl: 'https://www.google.com/maps?q=29.9607893,31.3227983',
        address: '11742 Zahraa Al Maadi, Industrial Zone, Maadi',
        phone: '+201093760265',
        hours: 'Opening 8:30-5:30 - From Saturday till Thursday',
      },
      {
        name: 'Dimishq Parts Outlet',
        mapUrl: 'https://www.google.com/maps?q=30.093632,31.322281',
        address: '23 Ibrahim St., El Montazah, Heliopolis',
        phone: '+201093760265',
        hours: 'Opening 9:30-10:00 PM - From Saturday till Thursday',
      },
    ],
  },
  {
    title: 'SERVICE CENTERS',
    entries: [
      {
        name: 'Obour Service Complex',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B010'07.7%22N+31%C2%B030'25.3%22E/@30.1688102,31.5048392,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.1688102!4d31.5070279",
        address: 'KM28 Ismailia Desert Road',
        phone: '+201552963437',
        hours: 'Opening 8:30-5:30 PM - From Saturday till Thursday',
      },
      {
        name: 'Maadi Service Center',
        mapUrl: 'https://www.google.com/maps?q=29.9607893,31.3227983',
        address: '11742 Zahraa Al Maadi, Industrial Zone, Maadi',
        phone: '+201093760265',
        hours: 'Opening 8:30-5:30 - From Saturday till Thursday',
      },
      {
        name: 'Ford Auto HM Service Center',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B001'01.1%22N+31%C2%B023'20.1%22E/@30.0169571,31.3867221,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0169571!4d31.3889108",
        address: 'Al-Mosheer Tantawy Axis, beside Al Manara International Conference Center',
        phone: '+201099183646',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
      {
        name: 'HM Service Center',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B010'07.7%22N+31%C2%B030'25.3%22E/@30.1688102,31.5048392,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.1688102!4d31.5070279",
        address: 'KM28 Ismailia Desert Road',
        phone: '+201552963437',
        hours: 'Opening 10:00-7:00 PM - From Saturday till Thursday',
      },
    ],
  },
  {
    title: 'CAR DETAILING',
    entries: [
      {
        name: 'Obour Car Detailing',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B010'07.7%22N+31%C2%B030'25.3%22E/@30.1688102,31.5048392,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.1688102!4d31.5070279",
        address: 'KM28 Ismailia Desert Road',
        phone: '+201552963437',
        hours: 'Opening 8:30-5:30 PM - From Saturday till Thursday',
      },
    ],
  },
  {
    title: 'TRADE IN',
    entries: [
      {
        name: 'Obour TradeIn',
        mapUrl:
          "https://www.google.com/maps/place/30%C2%B010'07.7%22N+31%C2%B030'25.3%22E/@30.1688102,31.5048392,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.1688102!4d31.5070279",
        address: 'KM28 Ismailia Desert Road',
        phone: '+201552963437',
        hours: 'Opening 8:30-5:30 PM - From Saturday till Thursday',
      },
    ],
  },
];

const accordionItems = locations.map((group) => ({
  title: group.title,
  content: group.entries.map((entry) => (
    <p key={entry.name}>
      <a target="_blank" rel="noreferrer" href={entry.mapUrl} className="acclinks">
        {entry.name}
      </a>
      <br />
      <a className="acclinks2">{entry.address}</a>
      <br />
      <span className="accnums">{entry.phone}</span>
      <br />
      <span className="timings">{entry.hours}</span>
      <br />
      <br />
    </p>
  )),
}));

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mknakeyy';

export default function ContactUs() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <h2 id="contact">Contact us</h2>
      <div id="undercontactus">Halem Motors</div>

      <div id="contctfulltop">
        <Accordion items={accordionItems} />

        <div>
          <p id="contactusparagraph">
            Thank you for your interest in our website! make sure to check our locations for any assistance.
            <br />
            <br />
            If you need further information or have any specific requirements,
            <span id="fillformbelow"> please feel free to fill out the form below.</span>
          </p>
        </div>
      </div>

      <div id="bgts">
        <form id="contactform" onSubmit={handleSubmit}>
          <h2 id="formcontctus">CONTACT US</h2>
          <div className="cfdiv">
            <label className="clabl" htmlFor="CFullname">
              Full Name <span className="ast">&#42;</span>
            </label>
            <input className="cinp" size="40" type="text" id="CFullname" name="CFullname" required />
          </div>
          <div className="cfdiv">
            <label className="clabl" htmlFor="Cnumber">
              Mobile Number <span className="ast">&#42;</span>
            </label>
            <input className="cinp" size="40" type="tel" id="Cnumber" name="Cnumber" required />
          </div>
          <div className="cfdiv">
            <label className="clabl" htmlFor="Cemail">
              Email <span className="ast">&#42;</span>
            </label>
            <input className="cinp" size="40" type="email" id="Cemail" name="Cemail" required />
          </div>
          <div className="cfdiv">
            <label className="clabl" htmlFor="Csubject">
              Subject <span className="ast">&#42;</span>
            </label>
            <input className="cinp" size="40" type="text" id="Csubject" name="Csubject" required />
          </div>
          <div className="cfdiv">
            <label className="clabl" htmlFor="Cmessage">
              Message (optional)
            </label>
            <textarea className="cinp" cols="30" rows="4" id="Cmessage" name="Cmessage"></textarea>
          </div>

          <input type="submit" name="submit" id="Csub" value={status === 'sending' ? 'Sending…' : 'Submit'} disabled={status === 'sending'} />

          {status === 'success' && <p style={{ marginTop: '15px' }}>Thanks — your message has been sent!</p>}
          {status === 'error' && (
            <p style={{ marginTop: '15px' }}>Something went wrong sending that. Please try again in a moment.</p>
          )}
        </form>
      </div>
    </>
  );
}
