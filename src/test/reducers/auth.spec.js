import expect from 'expect';
import auth, {inititalState} from '../../reducers/auth';

describe('reducers', () => {
	describe('auth', () => {

		it('should provide initital state', () => {
			expect(auth(undefined, {})).toEqual(inititalState);
		});
		
	});
});