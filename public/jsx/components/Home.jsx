import { useReducer, useRef } from 'react';
import { HTTPHelper } from '../../js/util/httpHelper';
import { CREATE_USER_URL } from '../../js/util/urlBuilder';
import { BigInfoButton } from './Button';

const Home = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const roleRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const teleRef = useRef();

    const [state, setFormState] = useReducer((state, action) => {
        switch (action.type) {
            case 'update-first-name':
                return { ...state, firstName: firstNameRef.current.value };
            case 'update-last-name': 
                return { ...state, lastName: lastNameRef.current.value };
            case 'update-email': 
                return { ...state, email: emailRef.current.value };
            case 'update-role':
                return { ...state, role: roleRef.current.value };
            case 'update-username':
                return { ...state, username: usernameRef.current.value };
            case 'update-password': 
                return { ...state, password: passwordRef.current.value };
            case 'update-tele': 
                return { ...state, tele: teleRef.current.value };
            default: 
                return { ...state };
        }
    }, {  
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        username: '',
        password: '',
        tele: ''
    }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        const userPayload = {
            'firstName': state.firstName,
            'lastName': state.lastName,
            'userRole': state.role,
            'email': state.email,
            'username': state.username,
            'password': state.password,
            'tele': state.tele
        };
        HTTPHelper.post(CREATE_USER_URL, {}, userPayload).then((response, error) => {
            if (!error) {
                // eslint-disable-next-line no-alert
                alert('Your profile has been created successfully !');
            } else {
                console.error('An error occurred: ' + error);
            }
        });
    };

    return (
        <>
            <h1>Welcome to User City App UI</h1>
            <h3>Please register here</h3>

            <form action='' method='post'>
                <label htmlFor='firstName'>
                    First Name: <br/><input ref={firstNameRef} type='text' name='firstName' id='firstName'
                        onChange={() => {
                            setFormState({ type: 'update-first-name' });
                        }} required/>
                </label><br/><br/>
                <label htmlFor='lastName'>
                    Last Name: <br/><input ref={lastNameRef} type='text' name='lastName' id='lastName'
                        onChange={() => {
                            setFormState({ type: 'update-last-name' });
                        }} required/>
                </label><br/><br/>
                <label htmlFor='email'>
                    Email: <br/><input ref={emailRef} type='text' name='email' id='email'
                        onChange={() => {
                            setFormState({ type: 'update-email' });
                        }} required/>
                </label><br/><br/>
                <label htmlFor='role'>
                    Role: <br/><input ref={roleRef} type='text' name='role' id='role'
                        onChange={() => {
                            setFormState({ type: 'update-role' });
                        }} required/>
                </label><br/><br/>
                <label htmlFor='username'>
                    Username: <br/><input ref={usernameRef} type='text' name='username' id='username'
                        onChange={() => {
                            setFormState({ type: 'update-username' });
                        }} required/>
                </label><br/><br/>
                <label htmlFor='password'>
                    Password: <br/><input ref={passwordRef} type='password' name='password' id='password'
                        onChange={() => {
                            setFormState({ type: 'update-password' });
                        }} required/>
                </label><br/><br/>
                <label htmlFor='tele'>
                    Tele: <br/><input ref={teleRef} type='text' name='tele' id='tele'
                        onChange={() => {
                            setFormState({ type: 'update-tele' });
                        }} required/>
                </label><br/><br/>
                <BigInfoButton onClick={(event) =>
                { handleSubmit(event); }} text='Register User' />
            </form>
            
        </>
    );
};

export default Home;
