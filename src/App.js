import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FetchOnRenderExample from './FetchOnRenderExample';
import FetchThenRenderExample from './FetchThenRenderExample';
import SuspenseExample from './SuspenseExample';
import SuspenseListExample from './SuspenseListExample';
import UseTransitionExample from './UseTransitonExample';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <div className='App-main'>
      <h1 className='project-title'>Suspense API Demo</h1>
      <Router>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/fetch-on-render`}>
            <FetchOnRenderExample />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/fetch-then-render`}>
            <FetchThenRenderExample />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/suspense`}>
            <SuspenseExample />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/suspense-list`}>
            <SuspenseListExample />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/use-transition`}>
            <UseTransitionExample />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/`}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
