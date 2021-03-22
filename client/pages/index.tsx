import Layout from '../components/Layout';

import tw from 'twin.macro';

const Container = tw.div`h-screen`;
function Home() {
  return (
    <Container>
      <Layout>
        <Container />
      </Layout>
    </Container>
  );
}

export default Home;
