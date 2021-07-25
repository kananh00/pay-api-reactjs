import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home/> */}
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/pricing" component = {Pricing} />
          <Route exact path = "/contact" component = {Contact} />    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
