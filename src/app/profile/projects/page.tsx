import Image from 'next/image'
import { projects_list } from './projects_constants'
import './projects.css'

export default function Page() {
  return (
    <div className='navbar-adj'>
      <div className='project_grid'>
        {projects_list.map((project) => (
          <article key={project.name} className='project_card'>
            <div className='image_container'>
              {project.imageUrl ? (
                <Image src={project.imageUrl} alt={`${project.name} screenshot`} fill sizes="(max-width: 480px) 100vw, 350px" />
              ) : (
                <span className='image_placeholder' aria-hidden="true">{project.name}</span>
              )}
            </div>
            <div className='px-8 pb-6'>
              <h2 className='name'>{project.name}</h2>
              <p className='text-xs py-4'>{project.description}</p>
              <ul className="flex flex-row gap-2 flex-wrap">
                {project.skills.map((skill) => (
                  <li key={skill.name} className='skill_container_projects'>
                    <Image className="skill_image" src={skill.imageUrl} alt='' width={16} height={16} />
                    <span className='text-xs'>{skill.name}</span>
                  </li>
                ))}
              </ul>
              {project.link && (
                <a className='project_link' href={project.link} target='_blank' rel='noopener noreferrer'>
                  View on GitHub →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
