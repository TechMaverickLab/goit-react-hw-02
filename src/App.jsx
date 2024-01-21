import { useState } from 'react';
import Feedback from './components/Feedback.jsx';
import Options from './components/Options.jsx';
import Notification from './components/Notification.jsx';

function App() {
    const initialFeedback = { good: 0, neutral: 0, bad: 0 };
    const [feedback, setFeedback] = useState(initialFeedback);

    const handleFeedback = (type) => {
        setFeedback({ ...feedback, [type]: feedback[type] + 1 });
    };

    const resetFeedback = () => {
        setFeedback(initialFeedback);
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    const feedbackOptions = [
        { name: "Good", type: "good" },
        { name: "Neutral", type: "neutral" },
        { name: "Bad", type: "bad" }
    ];

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options onFeedback={handleFeedback} onReset={resetFeedback} options={feedbackOptions} />
            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} total={totalFeedback} positivePercentage={positivePercentage} />
            ) : (
                <Notification message="No feedback given yet" />
            )}
        </div>
    );
}

export default App;