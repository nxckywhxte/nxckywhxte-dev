import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Logo } from '@/components/logo'
import { AppLinks } from '@/components/app-links'

export function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 container mx-auto'>
      <Logo title='nxckywhxte' />
      <AppLinks />
      <div className='flex items-center gap-4'>
        <Button>Авторизоваться</Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
