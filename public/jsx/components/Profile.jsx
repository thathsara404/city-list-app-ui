import { UserContextConsumer } from '../context/userContext';

const Profile = () => {
    return (
        <UserContextConsumer>
            {
                ({ user, isLoggedIn }) => isLoggedIn !== false ? (
                    <>
                        <h1>User Profile</h1>
                        <h3>User Id: {user.id}</h3>
                        <h3>First Name: {user.firstName}</h3>
                        <h3>Last Name: {user.lastName}</h3>
                        <h3>Role: {user.role}</h3>
                    </>
                ) : <p>User should sign in to view the profile...</p>
            }
        </UserContextConsumer>
    );
};

export default Profile;
