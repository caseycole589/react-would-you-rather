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
		const { unAnsweredQuestions, answeredQuestions } = this.props;
		const { showAnswered } = this.state;
		return (
			<div className="flex row space-around">
				<div className="flex column  center">
					<h2 onClick={this.toggleShowAnswered}>
						Unanswered Questions
					</h2>
					{showAnswered && (
						<div>
							{unAnsweredQuestions &&
								unAnsweredQuestions.map(question => (
									<div key={question.id}>
										<strong>{question.author} ask: </strong>
										Would Your rather
										<ol>
											<li>{question.optionOne.text}</li>
											<li>{question.optionTwo.text}</li>
										</ol>
										<Link to={`/questions/${question.id}`}>
											<button>View Poll</button>
										</Link>
									</div>
								))}
						</div>
					)}
				</div>
				<div className="flex column  center">
					<h2 onClick={this.toggleShowAnswered}>
						Answered Questions
					</h2>
					{!showAnswered && (
						<div>
							{answeredQuestions &&
								answeredQuestions.map(question => (
									<div key={question.id}>
										<strong>{question.author} ask: </strong>
										Would Your rather
										<ol>
											<li>{question.optionOne.text}</li>
											<li>{question.optionTwo.text}</li>
										</ol>
										<Link to={`/questions/${question.id}`}>
											<button>View Poll</button>
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
		})
	};
}

export default connect(mapStateToProps)(Home);
