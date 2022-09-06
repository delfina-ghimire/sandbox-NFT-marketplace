import React from 'react';
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Hero,
  Navbar,
  Partners,
  Stats,
  Testimonials,
} from './components';
import Showcase from './components/Showcase';
import styles from './style';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Showcase/>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Partners />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App
