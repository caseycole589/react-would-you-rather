import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
	state = {
		showAnswered: true
	};
	toggleShowAnswered = e => {
		this.setState({
			showAnswered: !this.state.showAnswered
		});
	};
	render() {
		const { users, unAnsweredQuestions, answeredQuestions } = this.props;
		const { showAnswered } = this.state;
		return (
			<div className="flex row space-around">
				<div className="flex column center">
					<div className="flex row space-around">
						<h2
							className={`${!showAnswered ? '' : 'focus-tab'}`}
							onClick={this.toggleShowAnswered}
							style={{ marginRight: '5px' }}
						>
							Unanswered Questions
						</h2>
						<h2
							className={`${!showAnswered ? 'focus-tab' : ''}`}
							onClick={this.toggleShowAnswered}
							style={{ marginLeft: '5px' }}
						>
							Answered Questions
						</h2>
					</div>
					{showAnswered && (
						<div>
							{unAnsweredQuestions &&
								unAnsweredQuestions.map(question => (
									<div
										key={question.id}
										className="shadow flex column"
										style={{
											marginBottom: '20px',
											textAlign: 'start'
										}}
									>
										<div>
											<strong>
												{' '}
												{question.author} ask:{' '}
											</strong>{' '}
											Would Your rather
										</div>
										<div>1. {question.optionOne.text}</div>
										<div>2. {question.optionTwo.text}</div>
										<Link to={`/questions/${question.id}`}>
											<button className="mui-btn mui-btn--raised mui-btn--primary">
												View Poll
											</button>
										</Link>
									</div>
								))}
						</div>
					)}
					{!showAnswered && (
						<div>
							{answeredQuestions &&
								answeredQuestions.map(question => (
									<div
										key={question.id}
										className="shadow flex column"
										style={{
											marginBottom: '20px',
											textAlign: 'start'
										}}
									>
										<div>
											<strong>
												{' '}
												{question.author} ask:{' '}
											</strong>{' '}
											Would Your rather
										</div>
										<div>1. {question.optionOne.text}</div>
										<div>2. {question.optionTwo.text}</div>
										<Link to={`/questions/${question.id}`}>
											<button className="mui-btn mui-btn--raised mui-btn--primary">
												View Poll
											</button>
										</Link>
									</div>
								))}
						</div>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ users, questions, authUser }) {
	const questionsArr = Object.values(questions).sort(
		(a, b) => b.timestamp > a.timestamp
	);

	return {
		authUser,
		answeredQuestions: questionsArr.filter(question => {
			const authorVoted =
				question.optionOne.votes.includes(authUser) ||
				question.optionTwo.votes.includes(authUser);
			return authorVoted;
		}),
		unAnsweredQuestions: questionsArr.filter(question => {
			const authorVoted = !(
				question.optionOne.votes.includes(authUser) ||
				question.optionTwo.votes.includes(authUser)
			);
			return authorVoted;
		}),
		users
	};
}

export default connect(mapStateToProps)(Home);
