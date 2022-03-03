import React from 'react'
import styles from '@digdir/ds-core-css/build/src/button.scss'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  const classes = styles['dds-button']

  return <button className={classes}> {children} </button>
}

export default Button
