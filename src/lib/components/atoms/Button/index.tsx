import React from 'react'
import { cva } from 'cva'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'primary'
}

const buttonStyles = cva(
  [
    'vector-ui-h-12',
    'vector-ui-shadow-xl',
    'vector-ui-p-2',
    'vector-ui-rounded',
    'vector-ui-transition',
    'vector-ui-duration-300',
    'vector-ui-border-2',
  ],
  {
    variants: {
      variant: {
        primary: [
          'vector-ui-bg-white',
          'hover:vector-ui-bg-gray-200',
          'vector-ui-border-black',
          'vector-ui-text-black',
        ],
        secondary: [
          'vector-ui-bg-black',
          'vector-ui-text-white',
          'vector-ui-border-white',
          'hover:vector-ui-bg-gray-900',
        ],
      },
    },
  },
)

const Button: React.FC<ButtonProps> = ({ className = '', variant = 'primary', ...props }) => (
  <button className={`${buttonStyles({ variant })} ${className}`} {...props} />
)

export { Button }
export type { ButtonProps }
