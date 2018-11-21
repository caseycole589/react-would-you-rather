import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import Main from './Main';
import NewQuestion from './NewQuestion';
import Loggin from './Loggin';
import Home from './Home';
import AnsweredQuestion from './AnsweredQuestion';
import UnAnsweredQuestion from './UnAnsweredQuestion';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <LoadingBar />
            <Main />
            {this.props.loading === true ? (
              <div>
                <Loggin />
              </div>
            ) : (
              <div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/add" component={NewQuestion} />
                  <Route
                    path="/questions/results/:id"
                    component={AnsweredQuestion}
                  />
                  <Route
                    path="/questions/ask/:id"
                    component={UnAnsweredQuestion}
                  />
                  <Route component={Loggin} />
                </Switch>
              </div>
            )}
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  };
}
export default connect(mapStateToProps)(App);
