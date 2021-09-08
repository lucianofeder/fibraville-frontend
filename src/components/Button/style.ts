import styled, { css } from "styled-components";

interface ContainerProps {
  theme: string;
  bgColor?: string;
}

export const Container = styled.button<ContainerProps>`
  height: 45px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius);
  outline: none;

  ${({ theme }) =>
    theme === "mobileLogin" &&
    css`
      color: white;
      background-color: var(--bg-color-main);
      width: 250px;

      &:hover,
      &:focus {
        letter-spacing: 2px;
        background-color: #362f7d;
      }
    `}

  ${({ theme }) =>
    theme === "mobileCheckPlans" &&
    css`
      color: var(--bg-color-main);
      background-color: white;
      border: 2px solid var(--bg-color-main);
      width: 250px;
    `}

  ${({ theme, bgColor }) =>
    theme === "plans" &&
    css`
      color: white;
      background-color: ${bgColor};
      width: 280px;
      border-radius: 30px;
      font-size: 1.4rem;
      font-weight: 500;

      &:hover,
      &:focus {
        letter-spacing: 2px;
      }
    `}

${({ theme }) =>
    theme === "admin" &&
    css`
      color: white;
      background-color: var(--text-color-secondary);
      width: 300px;
    `}

${({ theme }) =>
    theme === "user" &&
    css`
      color: white;
      background: var(--bg-color-secondary);
      width: 130px;
      font-family: "Poppins", sans-serif;
      font-weight: 100;
    `}
`;
