import PropTypes from "prop-types";
import styled from "styled-components/macro";

const sizes = {
  mini: {
    padding: "4.5vw",
  },
  small: {
    padding: "5vw",
  },
  medium: {
    padding: "5.5vw",
  },
  large: {
    padding: "6vw",
  },
};

const Button = styled.button`
  border-radius: 50%;
  border: 3px solid var(--emphasis-color);
  background: none;
  /* height: ${(props) => sizes[props.size].height};
  width: ${(props) => sizes[props.size].width}; */
  padding: ${(props) => sizes[props.size].padding};
  :active {
    background-color: var(--emphasis-color);
  }
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),

  onClick: PropTypes.func,
};

// Button.defaultProps = {
//   size: "medium",
// };

export default Button;
