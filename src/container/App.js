import HomeScreen from "../components/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          {/* Checkout */}
          {/* Login page */}
          {/* 404 page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
