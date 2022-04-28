import GoogleMail from './SocialIcons/GoogleMail';
import Linkedin from './SocialIcons/Linkedin';
import GitHubItem from './SocialIcons/GitHubItem';
import TeleGram from './SocialIcons/TeleGram';
import styles from './contacts.module.scss';

export default function Contacts() {
  return (
    <ul className={styles.contactsLict}>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="mailto:goncharenko86@gmail.com"
          aria-label="Email"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GoogleMail className={styles.item} color="#b8bcb8" />
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="https://github.com/GoncharenkoO/"
          aria-label="GitHub"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubItem className={styles.item} color="#b8bcb8" />
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/helga-goncharenko/"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin className={styles.item} color="#b8bcb8" />
        </a>
      </li>
      <li className={styles.contactsItem}>
        <a
          className={styles.icon}
          href="https://t.me/Himerys"
          aria-label="Telegram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TeleGram className={styles.item} color="#b8bcb8" />
        </a>
      </li>
    </ul>
  );
}
