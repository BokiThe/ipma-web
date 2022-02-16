import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./screens/homePage/HomePage";
import Footer from "./screens/footer/footer";
import NavBar from "./screens/navigation/navigation";
import LevelCertification from "./elements/levelCertification/levelCertification";

function App() {
  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      <LevelCertification />
      <Footer />
    </div>
  );
}

export default App;
