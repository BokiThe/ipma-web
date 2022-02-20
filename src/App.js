import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./screens/homePage/HomePage";
import Footer from "./screens/footer/footer";
import NavBar from "./screens/navigation/navigation";
import IndividualList from "./screens/individualsList/idividualsList";
import LevelCertificationA from "./screens/levelACertification/levelCertificationA";
import LevelCertificationB from "./screens/levelBCertification/levelCertificationB";
import LevelCertificationC from "./screens/levelCCertification/levelCertificationC";
import LevelCertificationD from "./screens/levelDCertification/levelCertificationD";
import ReCertificationAC from "./screens/Re-CertificationA-C/Re-CertificationA-C";
import ReCertificationD from "./screens/Re-CertificationD/Re-CertificationD";
import OrganisationStructure from "./screens/OrganisationStructure/organoisationStructure";
import Costumers from "./screens/costumers/costumers";
function App() {
  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      {/* <LevelCertificationA /> */}
      {/* <LevelCertificationB /> */}
      {/* <LevelCertificationC /> */}
      {/* <LevelCertificationD /> */}
      {/* <ReCertificationAC /> */}
      {/* <ReCertificationD /> */}
      {/* <IndividualList /> */}
      {/* <OrganisationStructure /> */}
      <Costumers />
      <Footer />
    </div>
  );
}

export default App;
