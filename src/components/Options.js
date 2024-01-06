// import React from 'react';
import PropTypes from 'prop-types';


function Options({ onFeedback }) {
    return (
        <div>
            <button onClick={() => onFeedback('good')}>Good</button>
            <button onClick={() => onFeedback('neutral')}>Neutral</button>
            <button onClick={() => onFeedback('bad')}>Bad</button>
        </div>
    );
}

Options.propTypes = {
    onFeedback: PropTypes.func.isRequired
};

export default Options;
