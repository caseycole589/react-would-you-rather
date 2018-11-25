import '../App.css';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import LoadingBar from 'react-redux-loading';
import Loggin from './Loggin';
import Main from './Main';
import NewQuestion from './NewQuestion';
import QuestionMaster from './QuestionMaster';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

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
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/questions/:id" component={QuestionMaster} />
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
