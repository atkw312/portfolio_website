import '../projects/projects.css'
import './education.css'

export default function Page() {
  return (
    <div className='navbar-adj w-full h-full'>
      <div className='education-title'>
        <h1>University of Toronto</h1>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <img src="/uoft.jpg" className='uoft-img' />
      </div>
    </div>
  )
} 