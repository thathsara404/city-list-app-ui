'use strict';

const partiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />;
    };
};

export default partiallyApply;
