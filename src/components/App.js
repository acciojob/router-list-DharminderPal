
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import "../../styles/App.css"; // Keeping your existing style import

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ItemList />} />
                <Route path="/items/:id" element={<ItemDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
