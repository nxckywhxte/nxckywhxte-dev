import { AppLinksProps, DescriptionListProps } from '@/lib/types'

export const appLinks: AppLinksProps[] = [
  {
    key: 1,
    title: 'Главная',
    pathname: '/'
  },
  {
    key: 2,
    title: 'Проекты',
    pathname: '/projects'
  },
  {
    key: 3,
    title: 'Обо мне',
    pathname: '/about'
  },
  {
    key: 4,
    title: 'Контакты',
    pathname: '/contacts'
  }
]

export const descriptionList: DescriptionListProps[] = [
  {
    id: 1,
    title: 'Эффективная разработка с использованием последних технологий'
  },
  {
    id: 2,
    title: 'Постоянно пополняющийся список проектов'
  },
  {
    id: 3,
    title: 'Backend и Frontend разработка проектов'
  },
  {
    id: 4,
    title: 'Дружная команда и тяга к новым знаниям и умениям'
  }
]
