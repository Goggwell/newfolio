import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const themes = [
  { name: 'Dark' },
  { name: 'Coquelicot' },
  { name: 'Vice' },
  { name: 'Nostalgia' },
  { name: 'Forest' },
  { name: 'Lab' },
  { name: 'Zomp' },
]

const ThemeProgram = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <select
      name="theme"
      id="theme-select"
      onChange={(e) => setTheme(e.currentTarget.value)}
      value={theme}
    >
      <option value="">Select Theme</option>
      {themes.map((theme) => (
        <option key={theme.name.toLowerCase()} value={theme.name.toLowerCase()}>
          {theme.name}
        </option>
      ))}
    </select>
  )
}

export default ThemeProgram
