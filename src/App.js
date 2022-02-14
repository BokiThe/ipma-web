import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./screens/homePage/HomePage";
import Footer from "./screens/footer/footer";
import NavBar from "./screens/navigation/navigation";


function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
