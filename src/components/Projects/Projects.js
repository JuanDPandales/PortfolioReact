import { projects } from '../../portafolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import { useId } from 'react'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Proyectos</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={useId} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
