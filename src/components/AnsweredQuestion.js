import React, { Component } from 'react';
import { connect } from 'react-redux';
class AnsweredQuestion extends Component {
	render() {
		return (
			<div>
				<h3>Some Asked</h3>
			</div>
		);
	}
}
function mapStateToProps({ questions, authUser }) {
	return {
		authUser,
		questions
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
