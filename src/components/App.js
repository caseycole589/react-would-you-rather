import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import Main from './Main';
import NewQuestion from './NewQuestion';
import Loggin from './Loggin';
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
                  <Route exact path="/" />
                  <Route path="/questions/add" component={NewQuestion} />
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
