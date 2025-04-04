import React from "react";
import { useParams } from 'react-router-dom';
const ItemDetail = ({ items }) => {
  const { id } = useParams();
  
  // Find the item with matching ID
  const item = items.find(item => item.id === id);

  if (!item) {
    return (
      <div>
        <h2>Item not found</h2>
        <p>No item exists with ID: {id}</p>
        <p>Available IDs: {items.map(i => i.id).join(', ')}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
