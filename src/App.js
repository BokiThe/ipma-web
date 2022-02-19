import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./screens/homePage/HomePage";
import Footer from "./screens/footer/footer";
import NavBar from "./screens/navigation/navigation";
import LevelCertification from "./elements/levelCertification/levelCertification";
import IndividualList from "./screens/individualsList/idividualsList";
import LevelCertificationA from "./screens/levelACertification/levelCertificationA";
function App() {
  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      <LevelCertificationA />
      {/* <IndividualList /> */}
      <Footer />
    </div>
  );
}

export default App;
