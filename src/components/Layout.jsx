import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingActions from './FloatingActions.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
