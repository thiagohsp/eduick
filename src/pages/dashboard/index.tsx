import React from 'react';
import { DashboardHeader } from '../../components/Header/DashboardHeader';
import styles from './styles.module.scss'
// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <main>
        <section className={styles.title}>
          <img src="/images/detail-yellow-dashboard.svg" alt="detail" />
          <div className={styles.titleText}>
            <h1>Hello <strong>Student.</strong> </h1>
            <p>Whether you are a student trying to find your ideal private language teachers/tutors</p>
          </div>
          <img src="/images/meeting.jpg" alt="People Studying" />
        </section>
      </main>
    </div>
  )
}

export default Dashboard;