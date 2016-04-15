import expect from 'expect';
import auth, {inititalState} from '../../reducers/auth';
import { AUTH } from '../../constants/actionConstants';

describe('reducers', () => {
	describe('auth', () => {

		it('should provide initital state', () => {
			expect(auth(undefined, {})).toEqual(inititalState);
		});

		describe('login', () => {

			it(`should handle ${AUTH.LOGIN_REQUEST} action`, () => {
				expect(auth(inititalState, {type: AUTH.LOGIN_REQUEST}))
					.toEqual({...inititalState, fetching: true});
			});

			it(`should handle ${AUTH.LOGIN_FAILURE} action`, () => {
				expect(auth(inititalState, {type: AUTH.LOGIN_FAILURE, payload: 'Error'}))
					.toEqual({...inititalState, errorMessages: 'Error', fetching: false});
			});

			it(`should handle ${AUTH.LOGIN_SUCCESS} action`, () => {
				expect(auth(inititalState, {
					type: AUTH.LOGIN_SUCCESS, 
					payload: {username: 'user'}
				})).toEqual({...inititalState, currentUser: {
					id: 1, username: 'user', token: 'token'
				}});
			});

		});


	});
});