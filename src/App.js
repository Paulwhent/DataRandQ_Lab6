import React, { Component } from 'react'; //import React to enable use of React library
//import logo from './logo.svg'; //import logo
import './App.css'; //import css styling 
//import { Header } from './components/header'; // import Header component from components folder
//import { Footer } from './components/.footer';// import Footer component from components folder
import { Content } from './components/content'; // import Content component from components folder
import { Read } from './components/read';       // import Read component from components folder
import { Create } from './components/create';   // import Create component from components folder
import 'bootstrap/dist/css/bootstrap.min.css';  //import React bootstrap to gain access to css library content
import { Navbar, Nav } from 'react-bootstrap';  //import Navigation bar and navigation features from bootstrap library

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  //import controls from dom

class App extends Component {
  render() {
    return (

      //div containing definition of navigation bar and hyperlinks (urls) to other components/
      //switch control for component  selection path
      //enable Routing from source component to div
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />

          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/read' component={Read} exact></Route>
            <Route path='/create' component={Create} exact></Route>
          </Switch>

        </div>
      </Router>//close routing
    );
  }
}
export default App;
