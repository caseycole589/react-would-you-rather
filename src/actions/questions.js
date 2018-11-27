import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { handleInitialData } from './shared';
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

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

export const answerQuestion = question => {
	return {
		type: ANSWER_QUESTION,
		question
	};
};

export const handleAnswerQuestion = question => {
	return dispatch => {
		dispatch(showLoading());
		return _saveQuestionAnswer(question).then(resp => {
			dispatch(answerQuestion(question));
			dispatch(handleInitialData());
			dispatch(hideLoading());
		});
	};
};

export const handleAddQuestion = question => {
	return dispatch => {
		dispatch(showLoading());
		return _saveQuestion(question).then(resp => {
			dispatch(addQuestion(resp));
			dispatch(handleInitialData());
			dispatch(hideLoading());
		});
	};
};
