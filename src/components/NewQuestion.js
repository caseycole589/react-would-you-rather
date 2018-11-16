import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

const paddingStyle = {
	margin: '10px'
};
class NewQuestion extends Component {
	state = {
		optionOneText: '',
		optionTwoText: '',
		toHome: false
	};
	//TODO: put toHome in redux
	handleSubmit = e => {
		e.preventDefault();
		const { dispatch, author } = this.props;
		const { optionOneText, optionTwoText } = this.state;
		const question = {
			optionOneText,
			optionTwoText,
			author
		};
		dispatch(handleAddQuestion(question));
		this.setState({ toHome: true });
	};
	handleChange = e => {
		const { value, name } = e.target;
		this.setState({
			[name]: value
		});
	};
	render() {
		const { optionOneText, optionTwoText, toHome } = this.state;
		if (toHome) {
			return <Redirect to={'/'} />;
		}
		return (
			<div>
				<h2>Create New Question</h2>
				<h4>Would You Rather...</h4>
				<form onSubmit={this.handleSubmit}>
					<div className="flex column space-around center">
						<input
							name="optionOneText"
							style={paddingStyle}
							type="text"
							value={optionOneText}
							onChange={this.handleChange}
							placeholder="Enter First Option Here"
						/>
						<strong style={paddingStyle}>or</strong>
						<input
							name="optionTwoText"
							style={paddingStyle}
							type="text"
							onChange={this.handleChange}
							value={optionTwoText}
							placeholder="Enter Second Option Here"
						/>
						<button style={paddingStyle} type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
function mapStateToProps({ authUser }) {
	return {
		author: authUser
	};
}

export default connect(mapStateToProps)(NewQuestion);
