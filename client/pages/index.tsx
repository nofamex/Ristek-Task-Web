import { Navbar, NavbarMobile } from '../components/Navbar';

import tw from 'twin.macro';

const Container = tw.div`h-screen`;
function Home() {
  return (
    <Container>
      <Navbar />
      <NavbarMobile />
    </Container>
  );
}

export default Home;
