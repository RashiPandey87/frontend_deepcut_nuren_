import React from 'react';
import './LeadPage.css';

const RelatedList1 = ({ title, items }) => {
  return (
    <div className="related-list">
      <h3>{title}</h3>
      <ul className="related-list-items">
        {items.map((item, index) => (
          <li key={index} className="related-list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedList1;