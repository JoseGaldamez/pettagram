import styled, { css, keyframes } from "styled-components";

export const fadeIn = ({ time = "1s", type = "ease" } = {}) => css`
  animation: ${fadeInKeyframes} ${time} ${type};
`;

export const moveFromTop = ({ time = "1s", type = "ease" } = {}) => css`
  animation: ${moveFromTopKeyframe} ${time} ${type};
`;

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const moveFromTopKeyframe = keyframes`
  from {
    top: -100px;
  }

  to {
    top: 0px;
  }
`;
