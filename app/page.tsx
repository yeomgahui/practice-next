import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (<main className={styles.main}>
    <h1>main Page</h1>
    <p>
      <Link href={"/stores"}>Stores</Link>
    </p>
  </main>)
}
