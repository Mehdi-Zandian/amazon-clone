import HomeScreen from "../components/HomeScreen/HomeScreen";
import CheckoutScreen from "../components/CheckoutScreen/CheckoutScreen";
import OrderList from "../components/OrderList/OrderList";
import Navbar from "../components/HomeScreen/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app" style={{ overflow: "hidden" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/checkout" element={<CheckoutScreen />} />
          <Route exact path="/order" element={<OrderList />} />
          {/* 404 page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
