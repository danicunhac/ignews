import Head from 'next/head'

import { SubscribeButton } from '@/common'

import styles from './home.module.scss'
import { useSession } from 'next-auth/client'

export type HomeProps = {
  product: {
    priceId: string
    amount: number
  }
}

export const Home = ({ product }: HomeProps) => {
  const [session] = useSession()

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          {session && (
            <span>
              👏 Hey, welcome
              <strong>{session.user.name}!</strong>
            </span>
          )}
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
  )
}
