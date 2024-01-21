// import React from 'react';
import PropTypes from 'prop-types';

function Options({ onFeedback, options }) {
    return (
        <div>
            {options.map(option => (
                <button key={option.type} onClick={() => onFeedback(option.type)}>
                    {option.name}
                </button>
            ))}
        </div>
    );
}

Options.propTypes = {
    onFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        })
    ).isRequired
};


export default Options;
