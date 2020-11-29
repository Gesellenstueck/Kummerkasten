import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  small: {
    width: "30vw",
    height: "1rem",
    font: "Oxygen-Regular",
  },
  medium: {},
  large: {
    width: "40vw",
    height: "2rem",
    font: "Oxygen-Bold",
  },
};

const BoardCard = styled.div`
  border-radius: 1.875rem;
  text-transform: uppercase;
  color: var(--emphasis-color);
  background: var(--basic-color);
  font-family: ${(props) => sizes[props.size].font};
  :active {
    background: var(--emphasis-color);
    color: var(--basic-color);
  }
  width: ${(props) => sizes[props.size].width};
  height: ${(props) => sizes[props.size].height};
`;

/**
 * Primary UI component for user interaction
 */
const Card = ({ backgroundColor, size, label, ...props }) => {
  return <BoardCard size={size}>{label}</BoardCard>;
};

Card.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

BoardCard.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Card;