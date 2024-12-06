import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Products from '../components/Products';
import Solution from '../components/Solution';
import Choose from '../components/Choose';
import Services from '../components/Services';
import SucessStory from '../components/SucessStory';
import Hero from '../components/Hero';
import Pathway from '../components/Pathway';
import TieUps from '../components/TieUps';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Pathway />
      <Products />
      <Solution />
      <Choose />
      <SucessStory />
      <TieUps />
      <Services />
    </>
  );
}

export default LandingPage;
