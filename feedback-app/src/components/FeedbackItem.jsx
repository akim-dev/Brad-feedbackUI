import Card from "../shared/Card";
import PropTypes from "prop-types";

import { FaTimes } from "react-icons/fa";
function FeedbackItem({ item, handleHapus }) {
  //   console.log(item);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleHapus(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleHapus: PropTypes.func.isRequired,
};
export default FeedbackItem;
