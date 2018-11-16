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
