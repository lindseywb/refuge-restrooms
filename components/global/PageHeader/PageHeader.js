import styles from './PageHeader.module.css'
import Container from '../Container/Container'

export default function PageHeader() {
    return (
        <header className={styles.PageHeader}>
            <Container width="wide">
                <h1>Refuge Restrooms</h1>
                <h2>A Next.js project by Lindsey Bell</h2>
                <h3>About:</h3>
                <p>This project uses data from Refuge Restrooms, an application that seeks to provide safe restroom access for transgender, intersex, and gender non-confirming individuals. Learn more.</p>
            </Container>
        </header>
    )
}
