import { Navbar, NavbarMobile } from './Navbar';
import Footer from './Footer';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col`;

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
