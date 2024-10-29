import React from 'react'
import styles from './footerComponent.module.css'

function FooterComponent({completedTodos,totalTodos}) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos:{completedTodos}</span>
      <span className={styles.item}>Total Todos:{totalTodos}</span>
    </div>
  )
}

export default FooterComponent
