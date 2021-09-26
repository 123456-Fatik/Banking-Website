import React from 'react';
import { Switch, Route } from 'react-router';
import About from './Pages/About';
import Home from './Home';
import ContactUs from './Pages/ContactUs';
import Service from './Pages/Service';
import Error from './Pages/Error';

const App = () => {
    return (
        <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/contact" component={ContactUs} />
          <Route  component={Error} />
        </Switch>
        
        </>
    )
};

export default App;
