
import React from 'react';
import Home from './pages/home';
import Content from './pages/content';
import { Route, BrowserRouter as Router } from 'react-router-dom';





function App() {
  return (
    <Router>
      <div className="App">
        <p>Routing</p>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/content" component={Content} />
    </Router>
  );
}

export default App;
