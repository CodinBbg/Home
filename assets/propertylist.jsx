// src/components/PropertyList.jsx
import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>Available Properties</h2>
      <div className="property-list">
        {properties.map(property => (
          <div key={property.id} className="property-item">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
