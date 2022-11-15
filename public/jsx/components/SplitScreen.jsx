import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 10px;
`;

const Pane = styled.div`
`;

const SplitScreen = ({
    children
}) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane>
                {left}
            </Pane>
            <Pane>
                {right}
            </Pane>
        </Container>
    );
};

export default SplitScreen;
