import { GetStaticProps } from "next";
import Head from "next/head";
import { Button } from "../components/Button";
import { GetStartedButton } from "../components/GetStartedButton";
import Input from "../components/Input";
import RadioBox from "../components/RadioBox";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduick | Find your BEST Teacher</title>
      </Head>

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
                  isActive={true}
                >
                  <span>I'M A TEACHER</span>
                </RadioBox>
                <RadioBox
                  isActive={false}
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

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IdRzvGYTsQDym9mRbuf6joF')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}