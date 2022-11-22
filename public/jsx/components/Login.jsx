import { useReducer, useRef } from 'react';
import { setAuthToken } from '../../js/util/browserStorageUtil';
import { HTTPHelper } from '../../js/util/httpHelper';
import { LOGIN_USER_URL } from '../../js/util/urlBuilder';
import { UserContextConsumer } from '../context/userContext';
import { BigSuccessButton } from './Button';

const Login = ({ updateUserState }) => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const [state, setFormState] = useReducer((state, action) => {
        switch (action.type) {
            case 'update-username':
                return { ...state, username: usernameRef.current.value };
            case 'update-password': 
                return { ...state, password: passwordRef.current.value };
            default: 
                return { ...state };
        }
    }, {
        username: '',
        password: ''
    }
    );

    const handleSubmit = (event, user) => {

        event.preventDefault();
        const payload = {
            'username': state.username,
            'password': state.password
        };

        HTTPHelper.post(LOGIN_USER_URL, {}, payload).then((response, error) => {
            if (!error) {
                updateUserState(state => ({ ...state, isLoggedIn: true,
                    user: { ...user} }));
                setAuthToken(response.headers.get("Authorization"));
                // eslint-disable-next-line no-alert
                alert('Login Success !. You have access to other sections now.');
            } else {
                console.error('An error occurred: ' + error);
            }
        });
    };

    return (
        <>
            <UserContextConsumer>
                {({ user, isLoggedIn }) => (
                    <>
                        <h1>User Login</h1>
                        <form action='' method='post'>
                            <label htmlFor='username'>
                            Username: <input ref={usernameRef} type='text' name='username' id='username'
                                    onChange={() => {
                                        setFormState({ type: 'update-username' });
                                    }} required/>
                            </label><br/><br/>
                            <label htmlFor='password'>
                            Password: <input ref={passwordRef} type='password' name='password' id='password'
                                    onChange={() => {
                                        setFormState({ type: 'update-password' });
                                    }} required/>
                            </label><br/><br/>
                            <BigSuccessButton onClick={(event) => {
                                handleSubmit(event, user);
                            }} text='Login' />
                        </form>
                    </>
                )}
            </UserContextConsumer>
        </>
    );
};

export default Login;
