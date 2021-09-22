import styled, { css } from "styled-components";

interface ContainerProps {
  schema: "login" | "register";
}

interface InputContainerProps {
  schema: "login" | "register";
}

export const Container = styled.div<ContainerProps>`
  text-align: left;

  ${({ schema }) =>
    schema === "login" &&
    css`
      font-size: 1.1rem;
      font-weight: 400;
      color: lightgray;

      div {
        span {
          color: red;
          font-size: 1rem;
        }
      }
    `}

  ${({ schema }) =>
    schema === "register" &&
    css`
      font-size: 1.1rem;
      font-weight: 400;
      color: lightgray;

      div {
        span {
          color: red;
          font-size: 1rem;
        }
      }
    `}
`;

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;

  ${({ schema }) =>
    schema === "login" &&
    css`
      border-bottom: 2px solid gray;
      padding: 1rem;
      display: flex;

      input {
        font-weight: 400;
        font-size: 1.1rem;
        align-items: center;
        flex: 1;
        border: 0;
        outline: none;
        color: gray;
        &::placeholder {
          color: gray;
        }
      }
      svg {
        color: gray;
        margin-right: 16px;
      }
    `}

  ${({ schema }) =>
    schema === "register" &&
    css`
      border: 2px solid black;
      padding: 1rem;
      display: flex;
      border-radius: 8px;
      color: var(--bg-client-main);

      input {
        font-weight: 400;
        font-size: 1.1rem;
        align-items: center;
        flex: 1;
        border: 0;
        outline: none;
        color: black;
      }
      svg {
        color: black;
        margin-right: 16px;
      }
    `}
`;
