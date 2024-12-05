import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button className="bg-blue-300 px-4 py-2 rounded-md">Button</Button>
      <br />
      <Button>Click me -default</Button>
      <br />
      <Button variant={'destructive'} size={'sm'}>
        Click me -destructive
      </Button>
      <br />
      <Button variant={'outline'} size={'lg'}>
        Click me -outline, lg
      </Button>
      <br />
      <Button variant={'secondary'} size={'icon'}>
        Click me - second
      </Button>
    </div>
  )
}
