import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Acess to wide <br className='sm:block hidden' /> Collaborative Network.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Collaboration tools can be either of a non-technological nature
        suchpaper, flipcharts, post-it notes.A collaboration tool helps people
        group of two or more individuals to accomplish a common goal or
        objective.
      </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='billing' className='w-[100%] h-[100%]' />
    </div>
  </section>
);

export default CardDeal;
