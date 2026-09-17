import { asset } from '../utils/asset';

const services = [
  { image: 'halemphotos/cexhaust.jpg', alt: 'Car Exhaust', label: 'Exhaust System' },
  { image: 'halemphotos/cwrap1.jpg', alt: 'Protective Wrap', label: 'Protective Wrap' },
  { image: 'halemphotos/cwrap2.jpg', alt: 'Vinyl Wrap', label: 'Vinyl Car Wrap' },
  { image: 'halemphotos/cinterior.jpg', alt: 'Car Interior', label: 'Custom Car Interior' },
  { image: 'halemphotos/cwheels.jpg', alt: 'Wheels', label: 'Wheels & Tires' },
  { image: 'halemphotos/ctuning.jpg', alt: 'Car Tuning', label: 'Car Tuning' },
  { image: 'halemphotos/ctint.jpg', alt: 'Window Tinting', label: 'Window Tinting' },
  { image: 'halemphotos/cpaint.jpg', alt: 'Paint Job', label: 'Custom Paint Job' },
];

function chunk(arr, size) {
  const rows = [];
  for (let i = 0; i < arr.length; i += size) rows.push(arr.slice(i, i + size));
  return rows;
}

export default function Customization() {
  const rows = chunk(services, 4);

  return (
    <>
      <h2 id="CuTitle">
        There are countless ways to make your car uniquely your own. Whether you're a driving enthusiast or simply
        looking to add some personal flair to your ride.
      </h2>

      <h3 id="CuDetails">
        To truly explore all of your customization options and find the ones that fit your personal style and
        driving preferences, we recommend visiting your nearest showroom.
      </h3>

      <section className="ccards" id="cnewtop">
        <h2 className="cnewtitle">Services Available</h2>
        {rows.map((row, i) => (
          <div className="cnewcontent" key={i}>
            {row.map((service) => (
              <div className="cnewcard" key={service.label}>
                <img src={asset(service.image)} alt={service.alt} />
                <p className="cdesc">{service.label}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
