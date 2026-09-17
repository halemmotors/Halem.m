import { asset } from '../utils/asset';

const performancePartners = [
  { href: 'https://www.brabus.com/en', image: 'halemphotos/brabus.jpg', alt: 'Brabus', width: 200 },
  { href: 'https://www.hennesseyperformance.com/', image: 'halemphotos/Hennessey-logo2-768x192.png', alt: 'hennesey', width: 200 },
  { href: 'https://www.dreamworksmotorsports.com/', image: 'halemphotos/dreamworks2-removebg-preview.png', alt: 'dreamworks', width: 200 },
  { href: 'https://www.shelby.com/en-us/', image: 'halemphotos/shelbyinc-removebg-preview.png', alt: 'shelbyinc', width: 200 },
];

const brandPartners = [
  { href: 'https://www.dodge.com/', image: 'halemphotos/Dodge-logo-2011.png', alt: 'dodge', width: 200 },
  { href: 'https://www.infinitiusa.com/', image: 'halemphotos/infiniti-logo.png', alt: 'infiniti', width: 200 },
  { href: 'https://www.ferrari.com/en-EG', image: 'halemphotos/ferrari-logo.png', alt: 'ferrari', width: 150, height: 200 },
  { href: 'https://www.ford.com/', image: 'halemphotos/ford-logo-2017-show.png', alt: 'ford', width: 200 },
];

const insurancePartners = [
  { href: 'https://www.allianz.com.eg/en_GB.html', image: 'halemphotos/allianz.png', alt: 'allianz', width: 200 },
  { href: 'https://www.axa-egypt.com/', image: 'halemphotos/axa.png', alt: 'axa', width: 200 },
  { href: 'https://www.gig.com.eg', image: 'halemphotos/gig.png', alt: 'gig', width: 200 },
];

function PartnerRow({ partners }) {
  return (
    <table className="imglinkspartner">
      <tbody>
        <tr>
          {partners.map((p) => (
            <td className="partnertable" key={p.href}>
              <a href={p.href} target="_blank" rel="noreferrer">
                <img
                  src={asset(p.image)}
                  alt={p.alt}
                  style={{ width: p.width, height: p.height }}
                />
              </a>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default function Partners() {
  return (
    <>
      <div className="partnerparagraph" id="imglinkspartner">
        <h2>
          Halem Motors Partners
          <br />
          <br />
        </h2>
        <div id="partnersubtitle">We've integrated with the below partners and more</div>
      </div>
      <div id="partnertablecontainer">
        <div className="partnertableone">
          <PartnerRow partners={performancePartners} />
        </div>
        <div className="partnertableone">
          <PartnerRow partners={brandPartners} />
        </div>
        <div className="partnertabletwo">
          <PartnerRow partners={insurancePartners} />
        </div>
      </div>
    </>
  );
}
