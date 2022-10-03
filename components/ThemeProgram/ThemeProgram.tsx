import { MouseEventHandler, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import styles from './ThemeProgram.module.scss'

const themes = [
  { name: 'Dark' },
  { name: 'Coquelicot' },
  { name: 'Vice' },
  { name: 'Nostalgia' },
  { name: 'Forest' },
  { name: 'Lab' },
  { name: 'Zomp' },
]

export interface IThemeItem {
  themeName?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  value?: string
}

const ThemeItem = ({ themeName, onClick, value }: IThemeItem) => {
  return (
    <button
      onClick={onClick}
      value={value}
      className={styles.themeProgram__button}
    >
      {themeName}
    </button>
  )
}

const ThemeProgram = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    // setting defaultValue to theme to avoid no-unused-vars error since we aren't using it
    <section className={styles.themeProgram} defaultValue={theme}>
      <h3 className={styles.themeProgram__title}>Select Theme</h3>
      {themes.map((theme) => (
        <ThemeItem
          themeName={theme.name}
          key={theme.name.toLowerCase()}
          value={theme.name.toLowerCase()}
          onClick={(e) => setTheme(e.currentTarget.value)}
        />
      ))}
    </section>
  )
}

export default ThemeProgram
