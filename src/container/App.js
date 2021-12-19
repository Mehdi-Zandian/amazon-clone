import HomeScreen from "../components/HomeScreen/HomeScreen";
import CheckoutScreen from "../components/CheckoutScreen/CheckoutScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app" style={{ overflow: "hidden" }}>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/checkout" element={<CheckoutScreen />} />
          {/* Login page */}
          {/* 404 page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
