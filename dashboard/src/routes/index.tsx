import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
/* PLOP_INJECT_IMPORT */
import TestPage from '../pages/test-page/test';
import TestPage2 from '../pages/test-page/test2';
import React from 'react'

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={TestPage} />
      {/* PLOP_INJECT_ROUTE */}
      <Route exact path="/test2" component={TestPage2} />
    </Router>
  );
}

export default Routes;
