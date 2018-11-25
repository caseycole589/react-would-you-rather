import React, { Component } from 'react';
import { handleAnswerQuestion } from '../actions/questions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class UnAnsweredQuestion extends Component {
	state = {
		answer: '',
		toAnsweredQuestion: false
	};
	handleSubmit = e => {
		e.preventDefault();
		const postData = {
			authedUser: this.props.authUser,
			qid: this.props.id,
			answer: this.state.answer
		};
		this.props.dispatch(handleAnswerQuestion(postData));
		this.setState({ toAnsweredQuestion: true });
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	render() {
		const { question, id, users } = this.props;
		const { answer, toAnsweredQuestion } = this.state;
		const userImg = users[question.author].avatarURL;
		if (toAnsweredQuestion) {
			return <Redirect to={`/questions/${id}`} />;
		}
		return (
			<div className="container">
				<div className="shadow">
					<div className="flex row">
						<img src={`images/${userImg}`} alt="avatar" />
						<div>
							<h3>{question.author} Asked Would You Rather...</h3>
							<form onSubmit={this.handleSubmit}>
								<div className="flex column">
									<div className="flex row mui-radio">
										<label>
											<input
												type="radio"
												name="answer"
												value="optionOne"
												checked={answer === 'optionOne'}
												onChange={this.handleChange}
											/>
											{question.optionOne.text}
										</label>
									</div>
									<div className="flex row mui-radio">
										<label>
											<input
												type="radio"
												name="answer"
												value="optionTwo"
												checked={answer === 'optionTwo'}
												onChange={this.handleChange}
											/>
											{question.optionTwo.text}
										</label>
									</div>
								</div>
								<button
									type="submit"
									className="mui-btn mui-btn--raised mui-btn--primary"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ users }) {
	return {
		users
	};
}
export default connect(mapStateToProps)(UnAnsweredQuestion);
