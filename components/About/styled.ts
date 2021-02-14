import { Element } from 'react-scroll';
import styled from 'styled-components';

export const Container = styled(Element)`
  max-width: 1000px;
  margin: auto;
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  a {
    margin: auto;
  }
  h1,
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  .bold-stack {
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 4rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    text-align: center;
    font-weight: 200;

    .bold {
      font-weight: 600;
    }

    .primary {
      color: ${({ theme }) => theme.primary};
      font-weight: 400;
    }

    .secondary {
      color: ${({ theme }) => theme.secondary};
      font-weight: 400;
    }

    .underline {
      text-decoration: underline;
    }
  }
  .italic {
    font-style: italic;
  }
`;
