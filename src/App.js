import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {pages} from '../src/constants/page';

function App() {
  return (
    <Router>
      <Switch>
      {
        pages.map((page, index)=>(
          <Route exact = {page.isExact} render = {(props)=><page.component {...props}/>} path = {page.path} key = {index}></Route>
        ))
      }
      </Switch>
    </Router>
  );
}

export default App;
