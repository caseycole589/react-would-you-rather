import { _getUsers, _getQuestions } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
import { recieveUsers } from '../actions/users';
import { recieveQuestions } from '../actions/questions';
export const handleInitialData = () => dispatch => {
	dispatch(showLoading());
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => {
			dispatch(recieveUsers(users));
			dispatch(recieveQuestions(questions));
			dispatch(hideLoading());
		}
	);
	// return getInitialData().then(({ users, tweets }) => {
	// 	dispatch(recieveUsers(users));
	// 	dispatch(recieveTweets(tweets));
	// 	dispatch(setAuthedUser(AUTHED_ID));
	// 	dispatch(hideLoading());
	// });
};
