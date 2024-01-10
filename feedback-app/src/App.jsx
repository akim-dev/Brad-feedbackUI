import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import AboutPages from "./pages/AboutPages";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const hapusFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  return (
    <Router>
      <Header text="Feedback UI" />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbackprops={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={hapusFeedback}
                />
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/about"
            element={
              <>
                <AboutPages />
                <AboutIconLink />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
