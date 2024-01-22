import Link from 'next/link'

export function Logo({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <Link
      href='/'
      className='font-semibold dark:hover:text-drOrange flex flex-col'>
      {title}
      <span className='font-light text-xs'>{description}</span>
    </Link>
  )
}
