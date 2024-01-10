import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPages() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
}

export default AboutPages;
