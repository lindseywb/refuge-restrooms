import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import PageHeader from '../components/global/PageHeader'
import Container from '../components/global/Container/Container'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {


  return (
    <>
      <Header />
      <PageHeader />
      <main>
        <Container>
          <h3>View safe bathrooms for selected cities</h3>
          <Link href="/city">
              <a className={styles.Button}>Cities</a>
          </Link>
        </Container>
      </main>

      <Footer />
    </>
  )
}
