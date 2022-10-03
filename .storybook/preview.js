import * as NextImage from 'next/image'
import { styled } from '@storybook/theming'
import '../styles/globals.scss'

// Override default font
const p = styled.p(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
}))
const h1 = styled.h1(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
}))
const div = styled.div(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
}))
const span = styled.span(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
}))

// Set media breakpoints
const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ]
  })
)

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  docs: {
    components: {
      p: p,
      div: div,
      h1: h1,
      span: span,
    },
  },
}
