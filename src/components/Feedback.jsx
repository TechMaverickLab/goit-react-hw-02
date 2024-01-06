// import React from 'react';
import PropTypes from 'prop-types';
function Feedback({ feedback, total, positivePercentage }) {
    return (
        <div>
            <h2>Feedback Statistics:</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total feedback: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
}

Feedback.propTypes = {
    feedback: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired
    }).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};
export default Feedback;
