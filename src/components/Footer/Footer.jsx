import styles from './footer.module.scss';
import CopyrightIcon from './SvgComponent/CopyrightIcon';
import HeartIcon from './SvgComponent/HeartIcon';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className="container">
        <div className={styles.footerContainer}>
          <CopyrightIcon className={styles.copyrightIcon} color="white" />
          <p className={styles.footerText}>2022 | Developed</p>
          <motion.div
            className={styles.heart}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.5, 1],
              loop: Infinity,
            }}
          >
            <HeartIcon color="#aa73d6" />
          </motion.div>
          by Goncharenko O.
        </div>
      </section>
    </footer>
  );
}
