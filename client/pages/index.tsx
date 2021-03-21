import Navbar from '../components/Navbar';

import tw from 'twin.macro';

const Container = tw.div`h-screen`;
function Home() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default Home;
