type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  label: string
  variant?: 'primary' | 'outline'
} & ButtonType
