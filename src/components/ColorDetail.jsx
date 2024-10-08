import PropTypes from 'prop-types';
import { useParams, Link, Navigate } from "react-router-dom";

function ColorDetail({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: selectedColor.color, height: "100vh" }}>
      <h1>{selectedColor.name}</h1>
      <p>This is {selectedColor.name}.</p>
      <Link to="/colors">Go back to the color list</Link>
    </div>
  );
}

ColorDetail.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ColorDetail;
