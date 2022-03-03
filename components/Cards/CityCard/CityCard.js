import styles from './CityCard.module.css'
import Link from 'next/link'

export default function CityCard({city}) {
    const slugify = str =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '')

    const citySlug = slugify(city)
    return(
        <div className={styles.city}>
            <Link as={`/city/${citySlug}`} href="city/[slug]">
                <a>{city}</a>
            </Link>
        </div>
    )
}
