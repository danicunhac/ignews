import Head from "next/head";

import { SubscribeButton } from "@/common";

import styles from "./home.module.scss";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90/month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
  // return [
  //   <Head>
  //     <title>Início | ig.news</title>
  //   </Head>,
  //   <h1 className={styles.title}>
  //     Hello <span>World</span>
  //   </h1>,
  // ];
};
