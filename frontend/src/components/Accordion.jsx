import React, { useState } from 'react';
import Section from "./Section";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
      {content.map((sub_content, i) => {
                    return (
                        <Section
                            key = {i}
                            section={sub_content.section}
                            data={sub_content.data}
                        />
                    );
                })}
      </div>}
    </div>
  );
};

export default Accordion;