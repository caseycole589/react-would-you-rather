import React, { Component } from 'react';
import { handleAnswerQuestion } from '../actions/questions';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
class UnAnsweredQuestion extends Component {
	state = {
		answer: '',
		toHome: false
	};
	handleSubmit = e => {
		e.preventDefault();
		const postData = {
			authedUser: this.props.authUser,
			qid: this.props.id,
			answer: this.state.answer
		};
		this.props.dispatch(handleAnswerQuestion(postData));
		this.setState({ toHome: true });
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	render() {
		const { question, id } = this.props;
		const answer = this.state.answer;
		const toHome = this.state.toHome;
		if (toHome) {
			return <Redirect to={'/'} />;
		}
		return (
			<div>
				<h3>{question.author} Asked Would You Rather...</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="flex column  center">
						<div className="flex row">
							<input
								type="radio"
								name="answer"
								value="optionOne"
								checked={answer === 'optionOne'}
								onChange={this.handleChange}
							/>
							{question.optionOne.text}
						</div>
						<div className="flex row">
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
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(UnAnsweredQuestion);
