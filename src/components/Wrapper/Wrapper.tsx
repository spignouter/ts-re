import { ReactNode } from 'react'
import styles from './Wrapper.module.scss'

export interface WrapperProps {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
)
