// import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

// function Manual() {
//   return React.createElement("div", null, "hello");
// }

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const hapusFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    // <div className="container">
    //   <h1>{title}</h1>
    //   <p>{body}</p>
    //   {Math.random() > 0.5 ? <p>true</p> : <p>false</p>}
    //   {/* <Manual /> */}
    //   {/* map start here */}
    //   <div className="">
    //     <h3>{comment.length}</h3>
    //     {comment.map((comment) => (
    //       <ul key={comment.id}>
    //         <li>{comment.text}</li>
    //       </ul>
    //     ))}
    //   </div>
    //   {/* // map end here */}
    // </div>

    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbackprops={feedback} />
        <FeedbackList feedback={feedback} handleDelete={hapusFeedback} />
      </div>
    </>
  );
}

export default App;
