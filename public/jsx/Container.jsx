import styled from 'styled-components';

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-content: center;
    font-family: sans-serif;
    margin: 50px 200px 20px 200px;
`;

const Container = ({ children }) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    );
};

export default Container;
