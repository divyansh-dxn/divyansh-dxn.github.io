import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { myProjects } from '../models/Project'

function Projects() {
  return (
    <Section title='MY 🪲 PROJECTS'>
      <div className="flex flex-wrap gap-8 justify-center">
        {myProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </Section>
  )
}

export default Projects