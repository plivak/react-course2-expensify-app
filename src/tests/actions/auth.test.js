import { login, logout } from '../../actions/auth';

test('should generate LOGIN action object', () => {
    const action = login('abc123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate LOGOUT action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});