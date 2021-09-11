import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";

interface Props {
  bgcolor: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const TitlePlan = styled.h2<Props>`
  font-size: 1.2rem;
  letter-spacing: 2px;
  line-height: 1.5;
  font-weight: bolder;
  color: ${({ bgcolor }) => bgcolor};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 4px;
  }
`;

export const Header = styled.div<Props>`
  background-color: ${({ bgcolor }) => bgcolor};
  width: 100%;
  height: 220px;
  border-radius: 0 70px;
  position: relative;

  @media (min-width: 768px) {
    height: 250px;
    border-radius: 0 80px;
  }
`;

export const ArrowDropdown = styled(IoIosArrowDown)<Props>`
  font-size: 30px;
  background-color: var(--bg-client-main);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0px;
  color: ${({ bgcolor }) => bgcolor};

  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

export const HeaderInfo = styled.h3`
  font-weight: 400;
  color: var(--bg-client-main);
  font-size: 32px;
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 30px 0 20px 0;

  @media (min-width: 768px) {
    font-size: 40px;
    padding: 40px 0 20px 0;
  }
`;

export const PriceInfo = styled.span`
  color: var(--bg-client-main);
  font-size: 10px;
  display: inline-block;
  width: 100%;
  text-align: center;
`;

export const PriceDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const HeaderPrice = styled.span`
  color: var(--bg-client-main);
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const PriceHighlight = styled(HeaderPrice)`
  font-size: 92px;
  font-weight: bolder;
  margin-top: -16px;

  @media (min-width: 768px) {
    font-size: 100px;
  }
`;

export const CheckCircle = styled(BsCheckCircle)<Props>`
  font-size: 1.4rem;
  color: ${({ bgcolor }) => bgcolor};

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const DescriptionArea = styled.div`
  background-color: #ececec;
  border-radius: 0 100px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  button {
    max-width: 90%;
  }
`;

export const DescriptionText = styled.p`
  padding: 16px;
  font-size: 1.2rem;
  align-self: flex-start;
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 24px;
  }
`;

export const DescriptionTextBorder = styled(DescriptionText)`
  border-bottom: 1px solid;
  margin-top: 10px;
`;
