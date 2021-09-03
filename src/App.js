import "./App.css"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/profile" component={Profile} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
