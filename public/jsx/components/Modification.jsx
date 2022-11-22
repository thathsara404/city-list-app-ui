import { useReducer, useRef } from 'react';
import { USER } from '../../js/const/userRolesConst';
import { HTTPHelper } from '../../js/util/httpHelper';
import { PATCH_CITY_URL } from '../../js/util/urlBuilder';
import { UserContextConsumer } from '../context/userContext';
import { BigInfoButton } from './Button';

const Modification = () => {

    const cityNameRef = useRef();
    const cityImageURLRef = useRef();
    const cityIdRef = useRef();

    const [state, setFormState] = useReducer((state, action) => {
        switch (action.type) {
            case 'update-city-name':
                return { ...state, cityName: cityNameRef.current.value };
            case 'update-city-url': 
                return { ...state, cityURL: cityImageURLRef.current.value };
            case 'update-city-id': 
                return { ...state, cityId: cityIdRef.current.value };
            default: 
                return { ...state };
        }
    }, {
        cityName: '',
        cityURL: '',
        cityId: 0
    }
    );

    const handleSubmit = (event, city) => {
        event.preventDefault();
        const patchData = { 'name': state.cityName, 'photoURL': state.cityURL };
        HTTPHelper.patch(`${PATCH_CITY_URL}${city.id}`, {}, patchData).then((response, error) => {
            if (response) {
                alert("Successful!!")
            }
        });
    };

    return (
        <UserContextConsumer>
            {({ user, isLoggedIn }) => isLoggedIn !== false &&
                                        user.role !== USER ? (
                <>
                    <h1>Update City</h1>
                    <form action='' method='post'>
                        <label htmlFor='id'>
                    City Id: <input ref={cityIdRef} type='text' name='id' id='id'
                                onChange={() => {
                                    setFormState({ type: 'update-city-id' });
                                }} required/>
                        </label><br/><br/>
                        <label htmlFor='name'>
                    City Name: <input ref={cityNameRef} type='text' name='name' id='name'
                                onChange={() => {
                                    setFormState({ type: 'update-city-name' });
                                }} required/>
                        </label><br/><br/>
                        <label htmlFor='cityURL'>
                    City Image URL: <input ref={cityImageURLRef} type='text' name='cityURL' id='cityURL'
                                onChange={() => {
                                    setFormState({ type: 'update-city-url' });
                                }} required/>
                        </label><br/><br/>
                        <BigInfoButton onClick={(event) =>
                        { handleSubmit(event, state.id); }} text='Update City' />
                    </form>
                </>
            ) : (
                <p>Authenticated useres are allowd to update a city...</p>
            )
            }
        </UserContextConsumer>
    );
};

export default Modification;
