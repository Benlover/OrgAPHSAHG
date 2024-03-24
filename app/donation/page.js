import Donate from '@/components/Donate'
import React from 'react'

const page = () => {
  return (
    <main className='w-full bg-[url(/assets/hop5.jpeg)] min-h-[100vh] bg-no-repeat bg-fixed bg-cover bg-center'>
      <div className='w-full h-full bg-[rgba(0,0,0,.6)] py-20 px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%] flex items-start justify-end'>
        <Donate />
      </div>
    </main>
  )
}

export default page