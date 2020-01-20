import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SuspenseListNoKeys from './SuspenseListNoKeys';
import SuspenseListWithKeys from './SuspenseListWithKeys';
import SuspenseListWithKeysAndTransition from './SuspenseListWithKeysAndTransition';
import SuspenseListNestedInSuspense from './SuspenseListNestedInSuspense';
import SuspenseListHacky from './SuspenseListHacky';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <div className='App-main'>
      <h1 className='project-title'>Suspense API Demo</h1>
      <Router>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/suspense-list-no-keys`}>
            <SuspenseListNoKeys />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/suspense-list-with-keys`}>
            <SuspenseListWithKeys />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/suspense-list-with-keys-and-transition`}>
            <SuspenseListWithKeysAndTransition />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/suspense-list-nested-in-suspense`}>
            <SuspenseListNestedInSuspense />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/suspense-list-hacky`}>
            <SuspenseListHacky />
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
