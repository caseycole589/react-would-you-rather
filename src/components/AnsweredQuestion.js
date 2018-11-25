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
	percentageString = (numVotes, totalVotes) => {
		const num = ((100 * numVotes) / totalVotes).toFixed(2);
		return `${numVotes} out of ${totalVotes} votes ${num}%`;
	};
	render() {
		const { question, authUser, users } = this.props;
		const answer = question.optionOne.votes.includes(authUser)
			? 'optionOne'
			: 'optionTwo';
		const answerText = question[answer].text;
		const userImg = users[question.author].avatarURL;
		const numVotes_1 = question.optionOne.votes.length;
		const numVotes_2 = question.optionTwo.votes.length;
		const totalVotes = numVotes_2 + numVotes_1;
		return (
			<div className="container">
				<div className="shadow">
					<h5>You Voted For The Answer {answerText}</h5>
					<img src={`images/${userImg}`} alt="avatar" />
					<h2>{question.author} Asked Would Your Rather...</h2>

					<div className="flex row space-around">
						<div className="flex column">
							<h4>{`${question.optionOne.text} ${
								answer === 'optionOne' ? '✓' : ''
							}`}</h4>
							<div>
								{this.percentageString(numVotes_1, totalVotes)}
							</div>
						</div>
						<div className="flex column">
							<h4>{`${question.optionTwo.text} ${
								answer === 'optionTwo' ? '✓' : ''
							}`}</h4>
							<div>
								{this.percentageString(numVotes_2, totalVotes)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ authUser, users }) {
	return {
		authUser,
		users
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
