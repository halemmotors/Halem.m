import { asset } from '../utils/asset';

const partners = [
  { id: 'ls', name: 'Allianz', href: 'https://www.allianz.com.eg/en_GB.html', image: 'halemphotos/allianz.png', className: 'instable inshover' },
  { id: 'as', name: 'AXA', href: 'https://www.axa-egypt.com/', image: 'halemphotos/axa.png', imgId: 'axa' },
  { id: 'ms', name: 'GIG', href: 'https://www.gig.com.eg', image: 'halemphotos/gig.png' },
];

export default function Insurance() {
  return (
    <>
      <div id="ins0">
        "Don't let an unexpected accident or theft leave you with financial burden and stress, invest in car
        insurance today for peace of mind on the road."
      </div>
      <div id="ins1">
        <ul id="inslist" style={{ listStyleType: 'square' }}>
          <li>Having car insurance is a smart investment for any driver.</li>
          <li>It provides financial protection in case of accidents, theft, or damage to your car.</li>
          <li>It can also cover medical expenses and legal fees. Plus, it's often required by law.</li>
          <li>Don't take the risk of driving without insurance, get covered today and drive with peace of mind.</li>
        </ul>
      </div>
      <div id="ins2">These are top 3 companies in car insurance, do not lose the chance to invest in one of them</div>
      <table className="imglinksins">
        <tbody>
          <tr>
            {partners.map((p) => (
              <td className={p.className ?? 'instable'} key={p.id}>
                <a id={p.id} href={p.href} target="_blank" rel="noreferrer">
                  <img id={p.imgId} src={asset(p.image)} alt={p.name} style={{ width: 200 }} />
                </a>
                <p className="instext">{p.name}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
