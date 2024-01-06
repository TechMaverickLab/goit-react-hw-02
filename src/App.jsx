import { useState } from 'react';
import Feedback from './Feedback';
import Options from './Options';
import Notification from './Notification';

function App() {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

    const handleFeedback = (type) => {
        setFeedback({ ...feedback, [type]: feedback[type] + 1 });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <Options onFeedback={handleFeedback} />
            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} total={totalFeedback} positivePercentage={positivePercentage} />
            ) : (
                <Notification message="No feedback given yet" />
            )}
        </div>
    );
}

export default App;
