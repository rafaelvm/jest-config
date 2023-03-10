import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

type ModifiersProp = Pick<ButtonProps, 'variant'>

const variantModifiers = {
  outline: ({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.darkBlue};
    color: ${theme.colors.darkBlue};
  `,
  primary: ({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    border: 2px solid ${theme.colors.darkBlue};
    color: ${theme.colors.white};
  `,
}

export const Container = styled.button<ModifiersProp>`
  ${({ theme, variant }) => css`
    cursor: pointer;
    max-width: 180px;
    width: 100%;
    height: 44px;
    margin: 24px;
    border-radius: 8px;
    font-size: 16px;

    ${!!variant && variantModifiers[variant]}
  `}
`
