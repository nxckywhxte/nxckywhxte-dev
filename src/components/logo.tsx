import Link from 'next/link'

export function Logo({ title }: { title: string }) {
  return (
    <Link
      href='/'
      className='font-semibold dark:hover:text-drPurple'>
      @{title}
    </Link>
  )
}
