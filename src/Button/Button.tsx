import React from 'react'
import cl from 'classnames'
import '@digdir/ds-core-css/build/src/button.scss'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content of component.
   */
  children: React.ReactNode
  /**
   * Changes design to various contexts.
   * Default value is a passive choice (no-operation).
   * @default "primary"
   */
  variant?: 'primary' | 'secondary'
  /**
   * Changes size attributes (width, height, font-size).
   * Default value is a passive choice (no-operation).
   * @default "medium"
   */
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
  /**
   * Disable interaction with the button, but keep it available for screen reader.
   * @default false
   */
  disabled?: boolean
  /**
   * Add SVG icon to the left of the children inside the button.
   * Applies suitable styling (padding).
   */
  iconLeft?: React.ReactNode
  /**
   * Add SVG icon to the right of the children inside the button.
   * Applies suitable styling (padding).
   */
  iconRight?: React.ReactNode
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  iconLeft,
  iconRight,
  className,
  disabled = false,
  ...rest
}: ButtonProps) => {
  const classPrefix = 'dds-button'
  const baseClasses = cl(
    classPrefix,
    { [`${classPrefix}--${variant}`]: variant !== 'primary' },
    { [`${classPrefix}--${size}`]: size !== 'medium' },
    { [`${classPrefix}--disabled`]: disabled },
    { [`${classPrefix}--icon-left`]: iconLeft },
    { [`${classPrefix}--icon-right`]: iconRight },
  )

  return (
    <button className={cl(baseClasses, className)} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}

export default Button
