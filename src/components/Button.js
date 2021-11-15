import propTypes from "prop-types";

const button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

button.defaultProps = {
  color: "blue",
};

button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func,
};

export default button;
