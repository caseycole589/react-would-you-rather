import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authUser from './authUser';
import users from './users';

export default combineReducers({
	authUser,
	users,
	loadingBar: loadingBarReducer
});
