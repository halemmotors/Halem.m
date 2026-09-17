import { useRef, useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const panelRefs = useRef([]);

  return (
    <div id="accdiv">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            className={`accordion${openIndex === i ? ' active' : ''}`}
            onClick={() => setOpenIndex((current) => (current === i ? null : i))}
          >
            {item.title}
          </button>
          <div
            className="panel"
            ref={(el) => (panelRefs.current[i] = el)}
            style={{ maxHeight: openIndex === i ? `${panelRefs.current[i]?.scrollHeight ?? 0}px` : '0px' }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
