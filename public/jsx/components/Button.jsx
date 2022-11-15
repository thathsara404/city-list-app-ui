import partiallyApply from '../partially/partiallyApply';

export const Button = ({ size, color, text, fontColor, ...props }) => {
    return (
        <button
            style={{
                padding: size === 'lg' ? '10px' : '8px',
                fontSize: size === 'lg' ? '15px' : '8px',
                cursor: 'pointer',
                backgroundColor: color,
                color: fontColor ? fontColor : 'black'
            }}
            {...props}
        >{text}</button>
    );
};

export const DangerButton = partiallyApply(Button, { color: 'red' });
export const BigSuccessButton = partiallyApply(Button, { color: '#3b923b', size: 'lg', fontColor: 'white' });
export const BigDangerButton = partiallyApply(Button, { color: '#e20000', size: 'lg', fontColor: 'white' });
export const BigInfoButton = partiallyApply(Button, { color: '#073eca', size: 'lg', fontColor: 'white' });
export const BigButton = partiallyApply(Button, { color: 'green', size: 'lg' });
