import styles from './Container.module.css'
import cn from 'classnames'

export default function Container({width, children, type}) {
    return (
        <div className={cn(
            styles.container,
            width && styles.wide,
            type && styles.gridContainer
            )}>
            {children}
        </div>
    )
}
