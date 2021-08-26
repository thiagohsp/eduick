import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import ActiveLink from '../ActiveLink';

export function Header() {
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
        <SignInButton />
      </div>
    </header>
  )
}