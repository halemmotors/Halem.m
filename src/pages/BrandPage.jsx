import { Link, Navigate, useParams } from 'react-router-dom';
import { brands } from '../data/brands';
import Slideshow from '../components/Slideshow';
import { asset } from '../utils/asset';

function chunk(arr, size) {
  const rows = [];
  for (let i = 0; i < arr.length; i += size) rows.push(arr.slice(i, i + size));
  return rows;
}

export default function BrandPage() {
  const { brandId } = useParams();
  const brand = brands[brandId];

  if (!brand) return <Navigate to="/" replace />;

  const rows = chunk(brand.models, brand.modelColumns.length);

  return (
    <>
      <div id="page-logo">
        <div id="car-cont">
          <img id={brand.logoElId} src={asset(brand.logo)} alt={brand.logoAlt} />
        </div>
      </div>

      <div>
        <br />
        <ul id="car-desc">
          {brand.description.map((paragraph, i) => (
            <li key={i} id={i === brand.description.length - 1 ? 'car-desc2' : undefined}>
              {paragraph}
            </li>
          ))}
        </ul>
      </div>

      {brand.video && (
        <video id="videoford" width="1300px" height="660" controls autoPlay muted>
          <source src={asset(brand.video)} type="video/mp4" />
        </video>
      )}

      <div className="first-table">
        <span id="title-car">Our models</span>
        <table id="car-table">
          <tbody>
            <tr>
              {brand.modelColumns.map((col) => (
                <th key={col}>
                  <span>{col}</span>
                </th>
              ))}
            </tr>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {brand.modelColumns.map((_, colIndex) => {
                  const model = row[colIndex];
                  if (!model) return <td id="removeline" key={colIndex} />;
                  return (
                    <td key={model.id}>
                      <Link to={`/models/${model.id}`}>
                        <img
                          src={asset(model.image)}
                          alt={model.name}
                          style={model.imgHeight ? { height: model.imgHeight } : undefined}
                        />
                      </Link>
                      <h3>{model.name}</h3>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="first-table">
        <span id="title-about">About {brand.name}</span>
        <br />
        <br />
        <br />
        <Slideshow slides={brand.slides} />
      </div>
    </>
  );
}
