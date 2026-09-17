import { useLayoutEffect, useRef, useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const panelRefs = useRef([]);

  useLayoutEffect(() => {
    if (openIndex === null) return;
    const el = panelRefs.current[openIndex];
    if (el) {
      setHeights((prev) => ({ ...prev, [openIndex]: el.scrollHeight }));
    }
  }, [openIndex]);

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
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            style={{ maxHeight: openIndex === i ? `${heights[i] ?? 0}px` : '0px' }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
