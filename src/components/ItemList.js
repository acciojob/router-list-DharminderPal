import { Link } from "react-router-dom";

const items = [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
    { id: 3, name: "Item Three" }
];

const ItemList = () => {
    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/items/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
