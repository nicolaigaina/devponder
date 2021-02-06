import styled from 'styled-components';
import Prismic from '@prismicio/client';
import Nav from '../components/Navbar/Nav';
import { Client } from '../prismic-configuration';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home = ({ docs, err, tutorials }: any) => {
  console.log("docs.results", docs.results);
  console.log("err", docs);
  console.log("tutorials", tutorials);
  return (
    <Bg>
      <Nav />
      <Title>Hello!</Title>
    </Bg>
  );
};

export const getStaticProps = async () => {
  const client = Client();
  try {
    const doc = await client.query(
      Prismic.Predicates.at("document.type", "portfolio"),
      { orderings: "[document.last_publication_date desc]" }
    );
    return {
      props: {
        docs: doc,
        tutorials: [],
      },
    };
  } catch (err) {
    return {
      props: {
        err,
      },
    };
  }
};

export default Home;

const Bg = styled.div`
  background: ${({ theme }) => theme.bg};
`;
