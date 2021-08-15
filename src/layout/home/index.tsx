import Head from "next/head";

import { SubscribeButton } from "@/common";

import styles from "./home.module.scss";

export type HomeProps = {
  name: string;
  product: {
    priceId: string;
    amount: number;
  };
};

export const Home = ({ name, product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            👏 Hey, welcome <strong>{name}!</strong>
          </span>
          <h1>
            News about <br /> the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount}/month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};
