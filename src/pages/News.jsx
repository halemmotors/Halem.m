import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const articles = [
  { to: '/models/mustang', image: 'halemphotos/mustang-2024.png', alt: '2024 mustang', caption: 'Check out our new ford mustang 2024.' },
  { to: '/customization', image: 'halemphotos/customization.jpg', alt: 'customization', caption: 'See what you can do for your car.', height: 135 },
  { to: '/customization', image: 'halemphotos/Laptop-tuning-landscape-scaled.avif', alt: 'tuning', caption: 'Available now our new tuning service.', height: 135 },
  { to: '/contact', image: 'halemphotos/now-open.jpg', alt: 'now-open', caption: 'Come and visit us at our newest branch.', height: 135 },
];

export default function News() {
  return (
    <section className="cards" id="newtop">
      <h2 className="newtitle">News</h2>
      <div className="newcontent">
        {articles.map((article) => (
          <Link className="newslink" to={article.to} key={article.caption}>
            <div className="newcard">
              <img src={asset(article.image)} alt={article.alt} style={article.height ? { height: article.height } : undefined} />
              <p className="newdec">{article.caption}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
