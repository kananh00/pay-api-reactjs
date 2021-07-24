import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import About from "./pages/About.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home/> */}
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/about" component = {About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
