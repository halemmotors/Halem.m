import { Link, useParams } from 'react-router-dom';
import { models } from '../data/models';
import ColorSwatchGallery from '../components/ColorSwatchGallery';
import { asset } from '../utils/asset';

function chunk(arr, size) {
  const rows = [];
  for (let i = 0; i < arr.length; i += size) rows.push(arr.slice(i, i + size));
  return rows;
}

export default function ModelPage() {
  const { modelId } = useParams();
  const model = models[modelId];

  if (!model) {
    return (
      <div className="first-table" style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '80px' }}>
        <h1 id="CTitle">Model details coming soon</h1>
        <p style={{ marginTop: '20px' }}>
          We're still putting together the full specs and photo gallery for this model — check back soon, or get in
          touch and we'll help you right away.
        </p>
        <Link to="/contact" className="TDbutton" style={{ marginTop: '30px', display: 'inline-block', position: 'static' }}>
          Contact Us
        </Link>
      </div>
    );
  }

  const galleryRows = chunk(model.gallery, 2);

  return (
    <>
      <h1 id="carname">{model.title}</h1>
      <h2 id="carinfo">{model.tagline}</h2>
      <p id="carinfo2">{model.intro}</p>

      <div className="fade-in" id="carimg">
        <table id="cargal">
          <tbody>
            {galleryRows.map((row, i) => (
              <tr key={i}>
                {row.map((photo) => (
                  <td key={photo.image}>
                    <img className="timg" src={asset(photo.image)} alt={photo.alt} height="300" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link className="TDbutton" to="/contact">
        Arrange a Test Drive
      </Link>
      <Link className="TDbutton" to="/payment">
        Purchase
      </Link>

      <hr id="cline" />

      <ColorSwatchGallery colors={model.colorPreview.colors} initialImage={model.colorPreview.colors[0].image} />

      <hr />

      <div className="table-scroll">
        <table id="carspecs">
          <caption>{model.specs.caption}</caption>
          <tbody>
            {model.specs.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
