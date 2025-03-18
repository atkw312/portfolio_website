import Link from 'next/link'
import './contact.css'

export default function Page() {
  return (
    <div className='navbar-adj contact'>
      <div className='linkedin-box'>
        <div className='linkedin-img'>
          <img src='../yoru.jpeg'/>
        </div>
        <div className='linkedin-box-desc'>
          <h1 className='name-title'>Tony Wang</h1>
          <p className='role'>Software Engineer</p>
          <p className='profile-description'>University of Toronto student. Aspiring full-stack dev who is experienced with Python, Java, React, Node, Pytorch, RestAPI.</p>
          <p className='university'>University of Toronto</p>
          <button className='linkedin-button'><a href="" className='flex flex-row gap-1'><img src="/linkedin.svg"/> View profile</a></button>
        </div>
      </div>
      <h2>Please feel free to reach out!</h2>
      <div className='animate-hover'>
        <button className='contact-buttons'><a>tkwang312@gmail.com</a></button>
      </div>
      <div className='animate-hover'>
        <button className='contact-buttons'><a>+1 778-926-2867</a></button>
      </div>
      <h2>Please consider hiring me I need a job 😭</h2>
    </div>
  )
}