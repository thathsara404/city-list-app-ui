import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Deletion from './components/Deletion';
import Home from './components/Home';
import Login from './components/Login';
import Modification from './components/Modification';
import Profile from './components/Profile';
import Container from './Container';
import '../scss/container.scss';
import { useState } from 'react';
import { UserContext } from './context/userContext';
import ErrorBoundary from './error/ErrorBoundary';
import { CityContext } from './context/cityContext';
import SplitScreen from './components/SplitScreen';
import CityView from './components/CityView';

const AppRouter = () => {

    const [state, setUserState] = useState({ user: {},
            isLoggedIn: false,
            city: {cityName: '', cityURL: '', cityId: ''} });

    return (
        <ErrorBoundary>
            <UserContext.Provider value={state}>

                <Router>
                    <nav className='navigation'>
                        <Link to='/'>Home</Link> <br />
                        <Link to='/login'>Login</Link><br />
                        <Link to='/profile'>Profile</Link><br />
                        <Link to='/update'>Update</Link><br />
                        <Link to='/delete'>Delete</Link><br />
                    </nav>
                    <Switch>

                        <Route path='/login' component={() => <Container>
                            <Login updateUserState={setUserState}/>
                        </Container>}>
                        </Route>

                        <Route path='/profile' component={() => <Container>
                            <Profile/>
                        </Container>}>
                        </Route>

                        <Route path='/update' component={() => <Container>
                            <CityContext.Provider value={state.city}>
                                <SplitScreen>
                                    <CityView />
                                    <Modification updateUserState={setUserState}/>
                                </SplitScreen>
                            </CityContext.Provider>
                        </Container>}>
                        </Route>

                        <Route path='/delete' component={() => <Container>
                            Need to implement
                        </Container>}>
                        </Route>

                        <Route path='/' component={() => <Container>
                            <Home updateUserState={setUserState}/>
                        </Container>}>
                        </Route>

                    </Switch>
                </Router>

            </UserContext.Provider>
        </ErrorBoundary>
    );
};

export default AppRouter;
