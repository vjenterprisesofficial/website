import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import FloatingActions from './FloatingActions.jsx';
import ProposalModal from './ProposalModal.jsx';

export default function Layout({ children }) {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <>
      <Navbar onGetProposalClick={() => setIsProposalOpen(true)} />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingActions />
      
      <ProposalModal 
        isOpen={isProposalOpen} 
        onClose={() => setIsProposalOpen(false)} 
      />
    </>
  );
}

