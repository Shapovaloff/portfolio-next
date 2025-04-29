import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | 'link';
type ButtonVariant =
  | 'default'
  | 'primary'
  | 'transparent'
  | 'primary-100 '
  | 'opacity';

export interface ButtonBase {
  children: ReactNode;
  className?: string;
  type?: ButtonType;
  variant?: ButtonVariant;
  href?: string;
}

export type ButtonProps = ButtonBase & ButtonHTMLAttributes<HTMLButtonElement>;
export type LinkProps = ButtonBase & AnchorHTMLAttributes<HTMLAnchorElement>;
