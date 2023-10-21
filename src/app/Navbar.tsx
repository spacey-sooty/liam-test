import Link from "next/link"
import styles from './nav.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.home}> Home </Link>
      <Link href="/about" className={styles.about}> About </Link>
    </nav>
  )
}

