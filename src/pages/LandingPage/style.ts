import styled from "styled-components";
import banner from "../../assets/img/home-banner.png";

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100vw;
  background-color: var(--bg-color-main);
  padding: 0.8rem 1rem;
  box-shadow: 0 0 4px 2px rgba(17, 0, 102, 0.6);
`;

export const Container = styled.div`
  position: relative;
  padding-right: 0.5rem;
  max-width: 1360px;
  margin: 0 auto;

  @media (min-width: 848px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    @media (max-width: 1024px) {
      width: 150px;
    }
    @media (max-width: 480px) {
      width: 120px;
    }
  }

  label {
    color: #fafafa;
    font-size: 2rem;
    cursor: pointer;
    line-height: 0;
    position: absolute;
    right: 8px;
    top: -4px;
    transition: color 300ms ease-in-out;

    &:hover,
    &:focus {
      color: #90cbfb;
    }

    @media (min-width: 480px) {
      top: unset;
    }
    @media (min-width: 848px) {
      display: none;
    }
  }

  input {
    display: none;

    &:checked ~ nav {
      display: block;
    }
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;

    li {
      a {
        color: #fafafa;
        cursor: pointer;
        font-weight: bold;
        padding: 0 0.8rem;
        outline: none;
        position: relative;
        transition: color 300ms ease-in-out;

        &:hover,
        &:focus {
          color: #90cbfb;
        }

        &::before {
          content: "";
          position: absolute;
          height: 1px;
          left: 0.8rem;
          bottom: 0;
          right: 0.8rem;
          background-color: #ffd432;
          transform: scaleX(0);
          transition: transform 300ms ease-in-out;
        }

        &:hover::before,
        &:focus::before {
          transform: scaleX(1);
        }

        &.active {
          color: #90cbfb;
        }
      }

      &:last-child {
        a {
          color: #000000;
          background-color: #fafafa;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0.6rem;
          border-radius: 8px;
          border: 1px solid #000000;
          transition: background 300ms ease-in-out;

          &::before {
            height: 0;
          }

          svg {
            font-size: 0%.8rem;
            border: 2px solid #000000;
            border-radius: 50%;
            padding: 0.1rem;
            margin-right: 0.4rem;
          }

          &:hover,
          &:focus {
            background-color: #ffd432;
          }
        }
      }
    }
  }
  @media (max-width: 847px) {
    display: none;

    ul {
      flex-direction: column;
      align-items: flex-end;
      line-height: 2;
      padding-top: 1rem;

      li {
        a {
          padding: 0;

          &::before {
            left: 0;
            right: 0;
          }
        }
      }
    }
  }
`;

export const Banner = styled.div`
  height: 50vh;
  max-height: 430px;
  background: url(${banner}) no-repeat left bottom;
  background-size: cover;
  filter: hue-rotate(25deg);

  div {
    color: #ffffff;
    font-weight: bold;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 70px 40px 0 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    @media (max-width: 847px) {
      padding: 70px 0 0 0;
      align-items: center;
    }

    p {
      font-size: clamp(1.4rem, 7vw, 4rem);
      text-transform: uppercase;
    }

    span {
      font-size: clamp(1rem, 5vw, 2rem);

      @media (max-width: 847px) {
        max-width: calc(100vw - 120px);
      }
      @media (max-width: 600px) {
        text-align: end;
      }
    }
  }
`;

export const Main = styled.main`
  color: var(--text-color-main);
  line-height: 1.5;
  overflow-x: hidden;

  h2 {
    font-size: 2rem;

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;

export const MainContainer = styled.div`
  padding: 1rem 2rem;
  max-width: 1360px;
  margin: 0 auto;

  @media (min-width: 768px) {
    row-gap: 2rem;
  }
  @media (min-width: 1400px) {
    padding: 1rem 0;
  }
`;

export const AboutUs = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  h2 {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }
  p {
    padding: 0.5rem 1.5rem;

    @media (min-width: 768px) {
      padding: 0;
    }
  }
`;

export const Services = styled.section`
  h2 {
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    p {
      padding: 0.5rem 1.5rem;

      @media (min-width: 768px) {
        padding-right: 0;
      }
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 768px) {
        justify-content: flex-start;
      }

      &:first-child {
        @media (min-width: 768px) {
          padding-left: 1.5rem;
        }
      }

      svg {
        font-size: 1.2em;
        color: #4d65fd;
        margin-right: 8px;
      }
    }

    &:last-child {
      img {
        @media (min-width: 768px) {
          order: 1;
          padding: 0;
        }
      }

      p {
        @media (min-width: 768px) {
          padding: 0.5rem 1.5rem 0.5rem 0;
        }
      }

      h3 {
        @media (min-width: 768px) {
          padding: 0;
        }
      }
    }

    img {
      filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
      width: 90vw;
      max-width: 480px;
      padding: 1rem 0;

      @media (min-width: 768px) {
        width: 50%;
        max-width: unset;
      }
    }
  }
`;

export const PlanOptions = styled.section`
  padding-bottom: 1rem;
  h2 {
    @media (max-width: 767px) {
      text-align: center;
    }
  }
`;

export const Coverage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
  div {
    @media (min-width: 768px) {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      max-width: 860px;
      padding-bottom: 1rem;
    }

    section {
      padding: 0.5rem 0;

      span {
        font-size: 1.6rem;
        font-weight: bold;
      }

      ul {
        li {
          list-style-type: disc;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export const ContactUs = styled.div`
  @media (min-width: 768px) {
    background-color: #ececec;
  }

  section {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (min-width: 768px) {
      padding: 2rem 0;
    }

    svg {
      font-size: 2.5rem;
      margin-right: 8px;
      transition: color 300ms ease-in-out;
    }

    a {
      display: flex;
      align-items: center;
    }

    a,
    span {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--text-color);
    }

    span {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    div:nth-child(4) {
      display: flex;
      justify-content: space-between;
      width: 100px;

      a {
        justify-content: center;
        width: fit-content;
        background-color: var(--bg-color-main);
        color: #fafafa;
        border-radius: 50%;
        padding: 0.3rem;

        &:first-child {
          &:hover {
            svg {
              color: #1877f2;
            }
          }
        }

        &:last-child {
          &:hover {
            svg {
              color: #d62976;
            }
          }
        }

        svg {
          font-size: 2rem;
          margin: 0;
        }
      }
    }

    @media (min-width: 768px) {
      padding: 2rem 0 2rem 2rem;
      align-items: flex-start;
    }

    @media (min-width: 1400px) {
      padding: 2rem 0;
    }
  }
`;

export const Whats = styled.a`
  margin: 1.5rem 0;
  @media (max-width: 767px) {
    padding: 0.2rem 0.5rem;
    border: 1px solid #25d366;
    border-radius: 8px;
    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
      background-color: #25d366;
      color: #fafafa;

      svg {
        color: #fafafa;
      }
    }
  }
  &::after {
    content: "Enviar mensagem";

    @media (min-width: 768px) {
      content: "(47) 3307-9192";
    }
  }

  svg {
    color: #25d366;
  }
`;

export const Animation = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  color: #ffffff;
  font-size: 0.6rem;
  font-weight: bold;
  text-align: center;
  background-color: var(--bg-color-main);
  padding: 0.8rem 0.5rem;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;
