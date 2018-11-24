import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authUser';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
						<div> Leader Board</div>
						<div>
							<button onClick={this.logOut}>Log Out</button>
							<span style={{ marginLeft: '20px' }}>
								{this.props.authUser}
							</span>
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
