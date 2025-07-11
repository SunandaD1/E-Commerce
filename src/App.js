import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import NavScroll, {Navbar} from "./components/navbar";
import Shop from './pages/shop/Shop';
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from './context/shop-context';
import {Survey} from "./pages/survey/survey";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavScroll></NavScroll>
          <Routes>
              <Route path="/" element={<Shop></Shop>} />
              <Route path="/cart"element={<Cart></Cart>}/>
              <Route path="/survey" element={<Survey />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
