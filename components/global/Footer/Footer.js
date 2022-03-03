import Container from '../Container/Container'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <Container width="wide">
                    <p>Created with create-next-app</p>
                </Container>
            </footer>
        </>
    )
}
