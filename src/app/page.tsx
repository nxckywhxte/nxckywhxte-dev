import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <section>
      <div className='w-full p-4 items-center justify-center gap-4'></div>
      <Button>Hello world</Button>
      <ThemeToggle />
    </section>
  )
}
