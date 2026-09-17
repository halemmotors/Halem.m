import { useState } from 'react';
import { asset } from '../utils/asset';

export default function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);

  function move(delta) {
    setIndex((current) => (current + delta + slides.length) % slides.length);
  }

  const slide = slides[index];

  return (
    <div className="slideshow-container">
      <div className="mySlides fade" style={{ display: 'block' }}>
        <div className="numbertext">
          {index + 1} / {slides.length}
        </div>
        <img src={asset(slide.image)} alt={slide.alt} style={{ width: '100%' }} />
        <div className={slide.variant}>{slide.caption}</div>
      </div>

      <a className="prev" onClick={() => move(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => move(1)}>
        &#10095;
      </a>
    </div>
  );
}
