import { Navbar, NavbarMobile } from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <NavbarMobile />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
