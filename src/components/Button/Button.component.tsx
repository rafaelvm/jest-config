import { FunctionComponent } from 'react'
import { ButtonProps } from './Button.types'
import { Container } from './Button.styles'

export const Button: FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  label,
}) => {
  return <Container variant={variant}>{label}</Container>
}
