
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
const items = [
  { id: '1', name: 'Item 1', description: 'Description for Item 1' },
  { id: '2', name: 'Item 2', description: 'Description for Item 2' },
  { id: '3', name: 'Item 3', description: 'Description for Item 3' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList items={items} />} />
        <Route path="/items/:id" element={<ItemDetail items={items} />} />
      </Routes>
    </Router>
  );
}

export default App;
