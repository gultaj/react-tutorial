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
				expect(auth(inititalState, {type: AUTH.LOGIN_REQUEST})).toEqual({...inititalState, fetching: true});
			});


		});


	});
});