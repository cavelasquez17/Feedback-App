import React from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackStats from "./FeedbackStats";
import FeedbackList from "./FeedbackList";

const Home = ({ feedback, addFeedback, deleteFeedback }) => {
  return (
    <div>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </div>
  );
};

export default Home;
