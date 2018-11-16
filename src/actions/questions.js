import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveQuestion } from '../utils/_DATA';

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export const recieveQuestions = questions => {
	return {
		type: RECIEVE_QUESTIONS,
		questions
	};
};

export const addQuestion = question => {
	return {
		type: ADD_QUESTION,
		question
	};
};
export const handleAddQuestion = question => {
	return dispatch => {
		dispatch(showLoading());
		return _saveQuestion(question).then(resp => {
			dispatch(addQuestion(resp));
			dispatch(hideLoading());
		});
	};
};
