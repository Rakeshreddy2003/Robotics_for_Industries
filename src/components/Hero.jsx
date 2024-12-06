import HeroImg from '../Assets/images/HeroPic.jpeg';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <img className="hero-img" src={HeroImg} alt="AI Solutions" />
      <div className="hero-para">
        <h1>Transform Your Industry with AI-Powered Solutions</h1>
        <h2>Connect - Correct - Create</h2>
        <div className="hero-btn-grp">
          <button type="button" className="btn hero-btn hero-btn-1">Explore Our Products</button>
          <button type="button" className="btn hero-btn">Get a Demo</button>
          <button type="button" className="btn hero-btn hero-btn-1">Talk to our Expert</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
