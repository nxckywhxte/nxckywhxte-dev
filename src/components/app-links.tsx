'use client'

import Link from 'next/link'
import { appLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function AppLinks() {
  const pathname = usePathname()
  return (
    <ul className='flex items-center gap-4'>
      {appLinks.map(link => (
        <li key={link.key}>
          <Link
            href={link.pathname}
            className={cn(
              'dark:hover:text-drOrange px-4 py-2',
              pathname === link.pathname
                ? 'dark:border dark:border-drCurrentLine dark:rounded-md dark:bg-drCurrentLine/20 dark:text-drYellow dark:hover:text-drOrange'
                : ''
            )}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
