import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header/Header';
import ClubDetails from './Components/ClubDetails/ClubDetails';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/clubDetails/:idTeam">
            <ClubDetails />
          </Route>
          <Route path="*">
            <h1>404 - Not Found!</h1>
          </Route>
        </Switch>
        <Footer />
      </Router >
    </div>
  );
}

export default App;
