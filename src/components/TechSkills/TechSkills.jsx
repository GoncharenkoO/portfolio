import styles from './techSkills.module.scss';

export default function TechSkills({ icon, label }) {
  return (
    <li className={styles.item}>
      <img
        className={styles.techSkillsImg}
        src={icon}
        alt={label}
        width="40"
        height="40"
      />
      <span className={styles.techSkillsText}>{label}</span>
    </li>
  );
}
