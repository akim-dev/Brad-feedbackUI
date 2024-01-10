import PropTypes from "prop-types";

function FeedbackStats({ feedbackprops }) {
  let average =
    feedbackprops.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackprops.length;

  average = average.toFixed(1).replace(/\.0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedbackprops.length} Reviews</h4>
      <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbackprops: PropTypes.array.isRequired,
};

export default FeedbackStats;
