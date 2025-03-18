import './skills.css'
import {skills_list} from './skill_constants'

export default function Page() {
  return (
    <div className='skill_container navbar-adj'>
      {skills_list.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h1 className='skill_type'>{category.type}</h1>
          <div className='card_container'>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className='skill_card'>
                <img className='icon' src={skill.imageUrl} />
                <h2 className='skill_name'>{skill.names}</h2>
                <p className='skill_desciption'>{skill.desciption}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}