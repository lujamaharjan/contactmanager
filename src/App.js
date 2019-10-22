import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layouts/Header";
import AddContact from "./components/contacts/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound.js";
import EditContact from "./components/contacts/EditContact";
import "./App.css";
import { Provider } from "./context";

class App extends React.Component {
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "The App Component")
  // );

  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
