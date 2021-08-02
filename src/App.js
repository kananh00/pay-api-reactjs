import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home/> */}
        <Header/>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/pricing" component = {Pricing} />
          <Route exact path = "/contact" component = {Contact} />    
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
