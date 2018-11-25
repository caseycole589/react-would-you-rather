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
		const { question, authUser, users } = this.props;
		const answer = question.optionOne.votes.includes(authUser)
			? 'optionOne'
			: 'optionTwo';
		const userImg = users[question.author].avatarURL;
		console.log(userImg);
		return (
			<div className="shadow">
				<img src={`images/${userImg}`} alt="avatar" />
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
function mapStateToProps({ authUser, users }) {
	return {
		authUser,
		users
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
