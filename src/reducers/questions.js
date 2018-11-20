import {
	ANSWER_QUESTION,
	RECIEVE_QUESTIONS,
	ADD_QUESTION
} from '../actions/questions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECIEVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};
		case ANSWER_QUESTION:
			const { qid, answer, authedUser } = action.question;
			console.log(qid, answer, authedUser);
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: [...state[qid][answer].votes, authedUser]
					}
				}
			};
		default:
			return state;
	}
}
