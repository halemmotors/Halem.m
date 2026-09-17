import { useState } from 'react';
import { asset } from '../utils/asset';

export default function ColorSwatchGallery({ colors, initialImage }) {
  const [image, setImage] = useState(initialImage);

  return (
    <>
      <img className="cuscarimg" src={asset(image)} alt="Selected color preview" />
      <h2 id="CTitle">Preview Colors</h2>
      <div id="divbuttons">
        {colors.map((c) => (
          <button
            key={c.id}
            className="cbutton"
            style={{ backgroundColor: c.swatch, color: c.textDark ? 'black' : 'white' }}
            onClick={() => setImage(c.image)}
          >
            {c.id}
          </button>
        ))}
      </div>
    </>
  );
}
