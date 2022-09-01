import React from 'react';
import { Business, Hero, Navbar, Stats, Testimonials } from './components';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
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
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials /> Clients Click to Action Footer
      </div>
    </div>
  </div>
);

export default App
