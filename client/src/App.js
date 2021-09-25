import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation'
import { DbProvider  } from './DbContext';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
// const Cushion = require('cushiondb-client');

//Pages
import NotFoundPage from './Pages/NotFoundPage'
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import InputPage from './Pages/InputPage';

function App() {
    return (
      <DbProvider>
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/Dashboard" component={DashboardPage} />
              <Route exact path="/Input" component={InputPage} />
              <Route exact path="/404" component={NotFoundPage} />
              <Redirect to="/404"/>
            </Switch>
          </Router>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn React
            </a>
            <button>
              Sign Up
            </button>
          </header> */}
        </div>
      </DbProvider>
  );
}

export default App;
