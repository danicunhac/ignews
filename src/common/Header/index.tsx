import { SignInButton } from '@/common'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ignews" />
        <nav>
          <a className={styles.active} href="/">
            Home
          </a>
          <a href="/posts">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
