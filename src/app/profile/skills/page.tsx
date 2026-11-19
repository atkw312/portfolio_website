import Image from 'next/image'
import { skills_list } from './skill_constants'
import './skills.css'

export default function Page() {
  return (
    <div className='skill_container navbar-adj'>
      {skills_list.map((category) => (
        <section key={category.type}>
          <h1 className='skill_type'>{category.type}</h1>
          <div className='card_container'>
            {category.skills.map((skill) => (
              <div key={skill.names} className='skill_card'>
                <Image className='icon' src={skill.imageUrl} alt='' width={30} height={30} />
                <h2 className='skill_name'>{skill.names}</h2>
                <p className='skill_description'>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
