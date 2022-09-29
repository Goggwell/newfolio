// NOTE: customTheme.js only changes the font of the Storybook UI, NOT your stories/components
import { create } from '@storybook/theming'

export default create({
  // base theme
  base: 'light',

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"JetBrains Mono", monospace',

  // Branding of custom theme
  brandTitle: 'My Custom Theme',
})
