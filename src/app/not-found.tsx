import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-grow items-center justify-center'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center text-7xl font-bold dark:text-drYellow'>
            404
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Упс! Страница вышла погулять. Зайдите немного попозже.</p>
        </CardContent>
        <CardFooter className='flex items-center justify-center'>
          <Button>
            <Link href={'/'}>Вернуться на главную</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
