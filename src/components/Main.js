import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authUser';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		marginRight: 20
	}
};
class Main extends Component {
	logOut = () => {
		console.log('logging out');
		this.props.dispatch(setAuthedUser(null));
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<div
							className="flex row space-between"
							style={{ width: '100%' }}
						>
							<div className="flex center">
								<NavLink to="/" exact>
									<Typography
										variant="h6"
										color="inherit"
										className={classes.grow}
									>
										Home
									</Typography>
								</NavLink>
								<NavLink to="/add" exact>
									<Typography
										variant="h6"
										color="inherit"
										className={classes.grow}
									>
										New Question
									</Typography>
								</NavLink>
								<NavLink to="/leaderboard" exact>
									<Typography
										variant="h6"
										color="inherit"
										className={classes.grow}
									>
										Leader Board
									</Typography>
								</NavLink>
							</div>
							<div>
								<button
									className="mui-btn mui-btn--raised"
									onClick={this.logOut}
								>
									Log Out
								</button>
								<span style={{ marginLeft: '20px' }}>
									{this.props.authUser}
								</span>
							</div>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
function mapStateToProps({ authUser }) {
	return {
		authUser
	};
}

export default connect(mapStateToProps)(withStyles(styles)(Main));
