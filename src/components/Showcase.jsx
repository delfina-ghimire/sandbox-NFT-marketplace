import { showcase } from '../constants';
import styles from '../style';
import ShowcaseCard from './ShowcaseCard';

const Showcase = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    {/* gradient start */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
    {/* gradient Ends */}

    <div className='w-full flex justify-center items-center flex-col sm:mb-16 mb-6 relative z-[1] '>
      <h2 self-center className={styles.heading2}>
        Discover <br className='sm:block hidden' /> What's Hot 🔥🔥🔥
      </h2>
      <div className='flex self-start w-[200px]  border-t-[5px] border-t-[#3F3E45]' />
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center  w-full feedback-container  relative z-[1]'>
      {showcase.map((card) => (
        <ShowcaseCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Showcase;
