import styled from 'styled-components';
import { useEffect, useReducer } from 'react';

const ModelContainer = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
`;

const ModelBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;

const Model = ({ children }) => {

    const [isModelOpen, toggleModel] = useReducer((isModelOpen) => !isModelOpen, false);

    useEffect( () => {
        toggleModel();
    }, []);

    return (
        <>
            {isModelOpen && 
                <ModelContainer>
                    <ModelBody>
                        <button onClick={() => {
                            toggleModel();
                        }}>Close</button>
                        {children}
                    </ModelBody>   
                </ModelContainer>
            }
        </>
    );
};

export default Model;
