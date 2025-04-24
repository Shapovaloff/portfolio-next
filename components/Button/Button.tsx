import React, { JSX } from 'react';
import { ButtonProps, LinkProps } from './Button.interface';
import styles from './Button.module.scss';

function Button({
  children,
  className = '',
  type = 'button',
  variant = 'default',
  href = '',
  ...props
}: ButtonProps | LinkProps): JSX.Element {
  const baseClasses = `${styles['button']} ${styles[variant]} ${className}`;

  if (type === 'link' || href) {
    const { ...rest } = props as LinkProps;
    return (
      <a href={href} className={`${baseClasses} `} {...rest}>
        {children}
      </a>
    );
  }

  const { ...rest } = props as ButtonProps;
  return (
    <button type={type} className={`${baseClasses}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
