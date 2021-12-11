import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" />

          {/* Checkout */}
          {/* Login page */}
          {/* 404 page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
