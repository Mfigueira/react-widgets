import React, { useState } from 'react';

const items = [
  {
    title: 'React ?',
    content: 'is a framework noma',
  },
  {
    title: 'React 2?',
    content: 'is a 222framework noma',
  },
  {
    title: 'React 3?',
    content: 'is a  333 framework noma',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = index => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, i) => {
    const active = activeIndex === i ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => handleTitleClick(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
