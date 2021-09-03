import styled, { css } from "styled-components";

interface ContainerProps {
  admin: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: ${(props) => (props.admin ? "1920px" : "1360px")};

  ${(props) =>
    !props.admin &&
    css`
      margin: 0 auto;
    `}
`;
