import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";

import Login from "./components/Login";
import SearchAppBar from "./components/SearchAppBar";
import theme from "./theme/muiTheme";
import styles from "./theme/styles";
import ListShow from "./components/list/ListShow";

class Index extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <SearchAppBar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={ListShow} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const App = withStyles(styles)(Index);
ReactDOM.render(<App />, document.getElementById("root"));
