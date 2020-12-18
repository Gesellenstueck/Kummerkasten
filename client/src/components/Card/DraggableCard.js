import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Draggable from "react-draggable";
import { ReactComponent as Chat } from "../../assets/icons/Chat.svg";

const colors = {
  primaryDark: {
    background: "var(--primaryDark)",
    fill: "var(--primaryLight)",
  },
  secondaryLight: {
    background: "var(--secondayLight)",
    fill: "var(--secondaryDark)",
  },
  secondaryDark: {
    background: "var(--secondayDark)",
    fill: "var(--secondaryLight)",
  },
  primaryLight: {
    background: "var(--primaryLight)",
    fill: "var(--primaryDark)",
  },
};

const DragCard = styled.div`
  border-radius: 1.875rem;
  padding: 2rem;

  box-shadow: 6px 11px 15px 4px rgba(0, 0, 0, 0.2);

  display: inline-block;
  background: ${(props) => colors[props.color].background};
  textarea {
    border: none;
    background: var(--primaryLight);
    :focus {
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  height: 44px;
  width: 100%;
  svg {
    fill: ${(props) => colors[props.color].fill};
  }
`;

export const DraggableCard = ({ color, label, textarea, ...props }) => {
  return (
    <Draggable bounds="parent" cancel="textarea">
      <DragCard color={color} {...props}>
        <h3>{label}</h3>

        <textarea placeholder="What's on your mind?"></textarea>
        <IconContainer color={color}>
          <Chat />
        </IconContainer>
      </DragCard>
    </Draggable>
  );
};

DraggableCard.propTypes = {
  color: PropTypes.oneOf([
    "primaryDark",
    "secondaryDark",
    "primaryLight",
    "secondaryLight",
  ]),

  label: PropTypes.string,

  onClick: PropTypes.func,

  textarea: PropTypes.string,
};