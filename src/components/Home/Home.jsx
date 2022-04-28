import girl from '../../images/girl.png';
import { techSkills } from './techSkills';
import TechSkills from '../TechSkills/TechSkills';
import Contacts from '../Contacts/Contacts';
import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.sectionLeft}>
            <img src={girl} alt="Olga Goncharenko" />
          </div>
          <div className={styles.sectionRight}>
            <h1 className={styles.title}>Hello to all!</h1>
            <p className={styles.text}>
              My name's Olga and I’m a Junior Front-end Developer!
            </p>
          </div>
        </div>
        <div className={styles.sectionCenter}>
          <h2 className={styles.subTitle}>[ Tech Skills_ ]</h2>
          <ul className={styles.list}>
            {techSkills.map(({ id, icon, label }) => (
              <TechSkills key={id} label={label} icon={icon} />
            ))}
          </ul>
          <div className={styles.sectionCenter}>
            <h2 className={styles.subTitle}>[ Contacts_ ]</h2>
            <Contacts />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
