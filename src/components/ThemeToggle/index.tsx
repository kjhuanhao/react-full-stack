import { SunOne, DarkMode } from '@icon-park/react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='inline-flex hover:bg-zinc-100 dark:hover:bg-zinc-900'
    >
      <SunOne theme='outline' className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <DarkMode theme='outline' className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
    </Button>
  )
}

export default ThemeToggle
