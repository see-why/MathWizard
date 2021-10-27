import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/NavBar';
import NotMatch from './pages/NoMatch';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <div className="flex">
              <h2> Let&apos;s Do some Math! </h2>
              <Calculator tableButtons={this.tableButtons} />
            </div>
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
