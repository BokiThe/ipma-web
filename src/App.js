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
import ContactUs from "./screens/ContactUs/contactUs";
import CertificationInfo from "./screens/CertificationInfo/certificationInfo";
import CertificationLevel from "./screens/CertificationLevel/certificationLevel";
import AssessorCriteria from "./screens/AssessorCriteria/assessorCriteria";
import AboutUs from "./screens/AboutUs/aboutUs";
import AssessorList from "./screens/AssessorsList/AssessorsList";
import LatestNews from "./screens/LatestNews/latestNews";
import LatestBlogspots from "./screens/LatestBlogspots/latestBlogspots";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  console.log = console.warn = console.error = () => {};
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/assessors">
            <AssessorList />
          </Route>
          <Route path="/assessorCriteria">
            <AssessorCriteria />
          </Route>
          <Route path="/certificationA">
            <LevelCertificationA />
          </Route>
          <Route path="/certificationB">
            <LevelCertificationB />
          </Route>
          <Route path="/certificationC">
            <LevelCertificationC />
          </Route>
          <Route path="/certificationD">
            <LevelCertificationD />
          </Route>
          <Route path="/reCertificationAC">
            <ReCertificationAC />
          </Route>
          <Route path="/reCertificationD">
            <ReCertificationD />
          </Route>
          <Route path="/certificationInfo">
            <CertificationInfo />
          </Route>
          <Route path="/certificationLevels">
            <CertificationLevel />
          </Route>
          <Route path="/latestNews">
            <LatestNews />
          </Route>
          <Route path="/latestBlogs">
            <LatestBlogspots />
          </Route>
          <Route path="/organisationStructure">
            <OrganisationStructure />
          </Route>
          <Route path="/individualList">
            <IndividualList />
          </Route>
          <Route path="/costumers">
            <Costumers />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
