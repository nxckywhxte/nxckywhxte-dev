import Image from 'next/image'
import { descriptionList } from '@/lib/constants'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export const WelcomeSection = () => {
  return (
    <section className='container mx-auto flex flex-grow justify-center items-center'>
      <div className='w-full grid grid-cols-2 gap-20'>
        <div className='w-full '>
          <Image
            priority
            src={'/welcome-section-picture.svg'}
            alt={'main'}
            width={800}
            height={800}
          />
        </div>
        <div className='flex flex-1 flex-col justify-center w-full'>
          <h1 className='font-black text-4xl'>Добро пожаловать на проект</h1>
          <span className='text-accent text-4xl font-black'>
            Awesome <span className='text-drPurple'>Projects</span>
          </span>{' '}
          <p className='mt-4'>
            Здесь вы можете ознакомиться с проектами, написанными лично мной или
            же в кооперативе с другими людьми.
          </p>
          <p className='mt-2'>
            Присоединяйтесь к нашей команде для развития дополнительных навыков
            и умений.
          </p>
          <ul className='mt-4'>
            {descriptionList.map(list => (
              <li
                key={list.id}
                className='flex place-items-center gap-2'>
                <PlusCircledIcon
                  className='text-drPurple'
                  fontSize={24}
                />
                <p>{list.title}</p>
              </li>
            ))}
          </ul>
          <Button className='mt-8 self-start'>Присоединиться</Button>
        </div>
      </div>
    </section>
  )
}
