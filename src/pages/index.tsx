import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/Button";
import { HomeHeader } from "../components/Header/HomeHeader";
import Input from "../components/Input";
import RadioBox from "../components/RadioBox";

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  }
}

type PersonType = "teacher" | "student";

export default function Home({ product }: HomeProps) {
  const [personType, setPersonType] = useState<PersonType>("teacher");
  const handleButtonClick = (type: PersonType) => {
    setPersonType(type);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduick | Find your BEST Teacher</title>
      </Head>

      <HomeHeader />

      <main className={styles.contentContainer}>
        <img src="/images/hero.svg" alt="Girl Coding" />
        <section className={styles.hero}>
          <span>Find your</span>
          <h1>BEST TEACHER</h1>
          <p>
            Whether you are a student trying to find your ideal private language
            teachers/tutors or a teacher trying to find great students for your
            customised private lessons!
          </p>
          <div className={styles.hero__formContainer}>
            <Input name="search" placeholder="Type here what are you looking for" />
            <div className={styles.formContainer__searchContainer}>
              <div className={styles.radioBoxContainer}>
                <RadioBox
                  isActive={personType === "teacher"}
                  onClick={() => handleButtonClick("teacher")}
                >
                  <span>I'M A TEACHER</span>
                </RadioBox>
                <RadioBox
                  isActive={personType === "student"}
                  onClick={() => handleButtonClick("student")}
                >
                  <span>I'M A STUDENT</span>
                </RadioBox>

              </div>
              <div>
                <Button>SEARCH</Button>
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  )
}