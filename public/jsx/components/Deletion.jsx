import { HTTPHelper } from '../../js/util/httpHelper';
import { DELETE_USER_URL } from '../../js/util/urlBuilder';
import { UserContextConsumer } from '../context/userContext';
import { BigDangerButton } from './Button';

const Deletion = ({ updateUserState }) => {

    const handleClick = (event, user) => {
        event.preventDefault();
        HTTPHelper.delete(`${DELETE_USER_URL}${user.id}`, {}, {}).then((response, error) => {
            if (!error) {
                // eslint-disable-next-line no-alert
                alert('Profile deleted successfully !');
            } else {
                console.error('An error occurred: ' + error);
            }
        });
        updateUserState(state => ({ ...state,
            user: {}, isLoggedIn: false }));
    };

    return (
        <UserContextConsumer>
            {
                ({ user, isLoggedIn }) => isLoggedIn !== false ? (
                    <>
                        <h1>Delete User</h1>
                        <BigDangerButton onClick={(event) => {
                            handleClick(event, user);
                        }} text='Delete User' />
                    </>
                ) : <p>User should sign in to delete...</p>
            }
        </UserContextConsumer>
    );
};

export default Deletion;
