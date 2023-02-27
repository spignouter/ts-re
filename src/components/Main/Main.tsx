import { ReactNode } from 'react'
import styles from './Main.module.scss'

export interface MainProps {
  children: ReactNode
}

export const Main = ({children}: MainProps) => (
  <main className={styles.main}>{children}</main>
)
