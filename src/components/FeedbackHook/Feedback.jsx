import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification/Notification';

export default function FeedbackHook() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  const handleLeavFeedback = button => {
    setFeedback(prev => ({
      ...prev,
      [button]: prev[button] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedback);
    return values.reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = total => {
    const percentage = Math.round((feedback.good * 100) / total);
    return percentage > 0 ? percentage : 0;
  };

  const total = countTotalFeedback();
  const options = Object.keys(feedback);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeavFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
