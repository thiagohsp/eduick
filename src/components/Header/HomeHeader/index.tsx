import ActiveLink from '../../ActiveLink';
import { GetStartedButton } from '../../GetStartedButton';
import styles from './styles.module.scss';

export function HomeHeader() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="eduick" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>How it Works?</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>About Us</a>
          </ActiveLink>
        </nav>
        <GetStartedButton />
      </div>
    </header>
  )

}