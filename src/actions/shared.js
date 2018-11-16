import { _getUsers, _getQuestions } from '../utils/_DATA';
import { showLoading, hideLoading } from 'react-redux-loading';
import { recieveUsers } from '../actions/users';

export const handleInitialData = () => dispatch => {
	dispatch(showLoading());
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => {
			console.log(users, questions);
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
