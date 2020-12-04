import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";

const bgColors = {
  primaryDark: css`
    background: var(--card-pink);
  `,

  secondaryLight: css`
    background: var(--card-yellow);
  `,
  secondaryDark: css`
    background: var(--card-orange);
  `,
  primaryLight: css`
    background: var(--card-rose);
  `,
};

const BoardCard = styled.div`
  border-radius: 1.875rem;
  padding: 2rem;

  box-shadow: 6px 11px 15px 4px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: auto 5% 1fr;
  grid-template-rows: auto 1fr;
  ${(props) => bgColors[props.bgColor]};

  img {
    align-self: center;
    grid-column-start: 3;
    max-width: 44px;
    max-height: 44px;
  }
  h4 {
    grid-column: span 3;
    grid-row-start: 2;
    align-self: end;
    margin: 1.5rem 0 0 0;
  }
  h2 {
    margin: 0;
  }
`;

const Card = ({ bgColor, label, imgSrc, alt, subline, ...props }) => {
  return (
    <BoardCard bgColor={bgColor}>
      <h2>{label}</h2>

      <img src={imgSrc} alt={alt} />

      <h4>{subline}</h4>
    </BoardCard>
  );
};

Card.propTypes = {
  bgColor: PropTypes.oneOf([
    "primaryDark",
    "secondaryDark",
    "primaryLight",
    "secondaryLight",
  ]),

  label: PropTypes.string,

  onClick: PropTypes.func,

  imgSrc: PropTypes.string,

  alt: PropTypes.string,

  subline: PropTypes.string,

  iconProps: PropTypes.oneOf(["teamIcon"]),
};

BoardCard.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Card;
