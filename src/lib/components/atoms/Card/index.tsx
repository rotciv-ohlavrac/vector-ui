import React from 'react'
import { cva } from 'cva'

type CardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  variant?: 'primary'
  size?: 'xs' | 's'
}

const cardStyles = cva(['vector-ui-shadow-md', 'vector-ui-border-2', 'vector-ui-p-2 '], {
  variants: {
    variant: {
      primary: ['vector-ui-border-black', 'vector-ui-text-black', 'vector-ui-bg-white'],
      secondary: ['vector-ui-bg-black', 'vector-ui-text-white', 'vector-ui-border-white'],
    },
    size: { xs: ['vector-ui-h-36', 'vector-ui-w-52'], s: [''] },
  },
})

const Card: React.FC<CardProps> = ({ className = '', variant = 'primary', size = 'xs', ...props }) => (
  <div className={`${cardStyles({ variant, size })}`} {...props}>
    This is a Card!
  </div>
)

export { Card }
export type { CardProps }
