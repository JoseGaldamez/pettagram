import styled, { css } from "styled-components";
import { moveFromTop } from "../../styles/Animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;

  ${(props) =>
    props.fixed &&
    css`
       {
        ${moveFromTop({ time: "400ms" })}
        background-color: white;
        border-radius: 60px;
        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 500px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: 0px;
        transform: scale(0.7);
        z-index: 1;
      }
    `}
`;

export const ListItem = styled.li`
  padding: 0px 8px;
`;
