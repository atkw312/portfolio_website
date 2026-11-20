import Image from 'next/image'
import './education.css'

export default function Page() {
  return (
    <div className='navbar-adj w-full h-full'>
      <div className='education-title'>
        <h1>University of Toronto</h1>
      </div>
      <div className='flex flex-col items-center justify-center px-4'>
        <Image src="/uoft.jpg" alt="University of Toronto campus" className='uoft-img' width={799} height={533} sizes="(max-width: 480px) 100vw, 450px" />
      </div>
    </div>
  )
}
