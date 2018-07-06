import React from 'react';
import {
  BrowserRouter as Router

} from 'react-router-dom'

import './App.css';
import GatewayContainer from '../gateway/gateway.container'




const App = (store) => {
  return(
  <Router>
    <GatewayContainer />
  </Router>
  );
}





export default App;
