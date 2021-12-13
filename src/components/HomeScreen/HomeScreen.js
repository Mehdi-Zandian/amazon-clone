import Navbar from "./Navbar/Navbar";
// UI
import "./HomeScreen.scss";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="homeScreen__wrapper mx-auto">
        <div className="homeScreen__banner w-100"></div>
      </div>
    </div>
  );
}

export default HomeScreen;
