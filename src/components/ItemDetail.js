import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === id);

  return (
    <div>
      <h1 data-testid="item-detail-name">{item?.name}</h1>
      <p data-testid="item-detail-description">{item?.description}</p>
    </div>
  );
};

export default ItemDetail;
