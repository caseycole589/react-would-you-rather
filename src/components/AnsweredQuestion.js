import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnsweredQuestion extends Component {
	state = {
		answer: '',
		toHome: false
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	render() {
		const { question, authUser } = this.props;
		const answer = question.optionOne.votes.includes(authUser)
			? 'optionOne'
			: 'optionTwo';
		return (
			<div className="shadow">
				<h3>{question.author} Asked Would Your Rather...</h3>
				<div className="flex column center ">
					<div className="flex row mui-radio">
						<input
							type="radio"
							name="answer"
							value="optionOne"
							checked={answer === 'optionOne'}
							onChange={this.handleChange}
						/>
						{question.optionOne.text}
					</div>
					<div className="flex row mui-radio">
						<input
							type="radio"
							name="answer"
							value="optionTwo"
							checked={answer === 'optionTwo'}
							onChange={this.handleChange}
						/>
						{question.optionTwo.text}
					</div>
				</div>
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
