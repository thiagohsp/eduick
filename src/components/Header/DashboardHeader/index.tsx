import { GetStartedButton } from '../../GetStartedButton';
import styles from './styles.module.scss';
import ActiveLink from '../../ActiveLink';
import { useRouter } from 'next/router';
import { randomBytes } from 'crypto';

export function DashboardHeader() {
  const avatarRandomString = randomBytes(20).toString('hex');

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/"><img src="/images/logo.svg" alt="eduick" /></a>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>MyClasses</a>
          </ActiveLink>
        </nav>
        <img className={styles.avatar} src={`https://avatars.dicebear.com/api/avataaars/${avatarRandomString}.svg?style=circle`} />
      </div>
    </header>
  )

}