import React from "react";
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ margin: '10px 0' }}>
            <Link 
              to={`/items/${item.id}`} 
              style={{ textDecoration: 'none', color: 'blue' }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
