import { useParams } from 'react-router-dom';

const ItemDetail = ({ items }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>ID: {item.id}</p>
    </div>
  );
};

export default ItemDetail;
