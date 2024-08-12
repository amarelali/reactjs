import React from 'react';
import PropTypes from 'prop-types';

// Define the Button component and use React.memo to optimize it
const Button = React.memo(({ handleClick, children }) => {
    return (
        <button onClick={handleClick} className='bg-red-400 p-2 rounded mt-2'>
            {children}
        </button>
    );
});
Button.displayName = 'Button';

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired, 
};

export default Button;
