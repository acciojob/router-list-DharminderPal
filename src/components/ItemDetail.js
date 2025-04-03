import { useParams } from "react-router-dom";

const items = [
    { id: 1, name: "Item One", description: "This is the first item." },
    { id: 2, name: "Item Two", description: "This is the second item." },
    { id: 3, name: "Item Three", description: "This is the third item." }
];

const ItemDetail = () => {
    const { id } = useParams();
    const item = items.find(item => item.id === parseInt(id));

    if (!item) {
        return <h2>Item not found</h2>;
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;
