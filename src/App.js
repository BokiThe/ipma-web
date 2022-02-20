import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./screens/homePage/HomePage";
import Footer from "./screens/footer/footer";
import NavBar from "./screens/navigation/navigation";
import LevelCertification from "./elements/levelCertification/levelCertification";
import IndividualList from "./screens/individualsList/idividualsList";
import LevelCertificationA from "./screens/levelACertification/levelCertificationA";
import LevelCertificationB from "./screens/levelBCertification/levelCertificationB";
import LevelCertificationC from "./screens/levelCCertification/levelCertificationC";
import LevelCertificationD from "./screens/levelDCertification/levelCertificationD";
import ReCertificationAC from "./screens/Re-CertificationA-C/Re-CertificationA-C";
function App() {
  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      {/* <LevelCertificationA /> */}
      {/* <LevelCertificationB /> */}
      {/* <LevelCertificationC /> */}
      {/* <LevelCertificationD /> */}
      <ReCertificationAC />
      {/* <IndividualList /> */}
      <Footer />
    </div>
  );
}

export default App;
