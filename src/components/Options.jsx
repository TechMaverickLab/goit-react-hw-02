// import React from 'react';
import PropTypes from 'prop-types';

function Options({ onFeedback, onReset, options }) {
    return (
        <div>
            {options.map(({ name, type }) => (
                <button key={type} onClick={() => onFeedback(type)}>{name}</button>
            ))}
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

Options.propTypes = {
    onFeedback: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired
};

export default Options;
