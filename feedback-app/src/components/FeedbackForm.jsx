import Card from "../shared/Card";
import { useState } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import PropTypes from "prop-types";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handleTextChange = (e) => {
    // check if text is not empty for validation
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      //   console.log(newFeedback);
      handleAdd(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - raing select components */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="'Write review"
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

FeedbackForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default FeedbackForm;
