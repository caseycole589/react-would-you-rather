import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
	render() {
		const { users, questions } = this.props;
		console.log(users, questions);
		return (
			<div>
				<strong>Hello world this is the main component</strong>
			</div>
		);
	}
}
function mapStateToProps({ users, questions }) {
	return {
		questions,
		users
	};
}

export default connect(mapStateToProps)(Main);
