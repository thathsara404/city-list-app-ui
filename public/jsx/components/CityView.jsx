import { CityContextConsumer } from '../context/cityContext';

const CityView = () => {
    return (
        <CityContextConsumer>
            {
                ( {cityName, cityURL, cityId} ) => (
                    <>
                        <h1>Current City</h1>
                        <h3>City Id: {cityId}</h3>
                        <h3>City Name: {cityName}</h3>
                        <img src={cityURL} alt="city" height={'450px'} width={'700px'}/>
                    </>
                )
            }
        </CityContextConsumer>
    );
};

export default CityView;
