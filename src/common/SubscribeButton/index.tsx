import { signIn, useSession } from 'next-auth/client'
import styles from './styles.module.scss'

type SubscribeButtonProps = {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()

  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }
  }

  return (
    <button
      onClick={handleSubscribe}
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}
