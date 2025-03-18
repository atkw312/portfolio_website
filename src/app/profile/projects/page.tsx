import './projects.css'
import { projects_list } from './projects_constants'

export default function Page() {
  return (
    <div className='navbar-adj'>
      <div className='project_grid'>
        {projects_list.map((project, projectIndex) => (
          <div key={projectIndex} className='project_card'>
            <div className='image_container'><img src={project.imageUrl}/></div>
            <div className='px-8'>
              <h2 className='name'>{project.name}</h2>
              <p className='text-xs py-4'>{project.description}</p>
              <div className="flex flex-row gap-2 flex-wrap">
                {project.skills.map((skill, skillInd)  => (
                  <div key={skillInd} className='skill_container_projects'>
                    <img className="skill_image" src={skill.imageUrl}/>
                    <p className='text-xs'>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}