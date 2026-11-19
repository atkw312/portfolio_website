import Image from 'next/image'
import './contact.css'

const LINKEDIN_URL = 'https://www.linkedin.com/in/tkwang312'
const EMAIL = 'tkwang312@gmail.com'

export default function Page() {
  return (
    <div className='navbar-adj contact'>
      <div className='linkedin-box'>
        <div className='linkedin-img'>
          <Image src='/yoru.jpeg' alt='Tony Wang avatar' width={70} height={70} />
        </div>
        <div className='linkedin-box-desc'>
          <h1 className='name-title'>Tony Wang</h1>
          <p className='role'>Software Engineer</p>
          <p className='profile-description'>University of Toronto student. Aspiring full-stack dev who is experienced with Python, Java, React, Node, Pytorch, RestAPI.</p>
          <p className='university'>University of Toronto</p>
          <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer' className='linkedin-button'>
            <Image src="/linkedin.svg" alt='' width={16} height={16} /> View profile
          </a>
        </div>
      </div>
      <h2>Please feel free to reach out!</h2>
      <div className='animate-hover'>
        <a className='contact-buttons' href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
      <h2>Please consider hiring me I need a job 😭</h2>
    </div>
  )
}
