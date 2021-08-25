// import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import { GetStartedButton } from '../GetStartedButton';
import styles from './styles.module.scss';
// import ActiveLink from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContainer__content}>
        <img src="/images/logo.svg" alt="eduick" />
        <nav>
          <a href="">How it works?</a>
          <a href="">About us</a>
        </nav>
        <GetStartedButton />
      </div>
    </header>
  )
}