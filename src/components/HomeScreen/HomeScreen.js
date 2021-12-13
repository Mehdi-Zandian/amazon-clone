import Navbar from "./Navbar/Navbar";
// UI
import Banner from "../../assets/banner/prime-day-banner.jpg";
import "./HomeScreen.scss";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="homeScreen__wrapper mx-auto">
        <img
          src={Banner}
          className="homeScreen__banner w-100"
          alt="Prime day"
        />
      </div>
    </div>
  );
}

export default HomeScreen;
