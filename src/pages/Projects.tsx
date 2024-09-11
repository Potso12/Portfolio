import './styles/Projects.css'
import projects from '../projects'
//import { Project } from '../types/types'

interface ProjectsProps {
    isMobile: Boolean;
  }

const Projects: React.FC<ProjectsProps> = ({isMobile}) => {

    return (
        <div className="projectsContainer"> 
            <h1>Projects</h1>
            {projects.map((project, index) => (
            <div key={index} className="projectContainer">
                <div className='projectLeft'>
                    <h1>{project.name}</h1>
                    <strong>{project.tech}</strong>
                    <p>{project.info}</p>
                    {project.repoURl && <a href={project.repoURl}>{project.repoURl.includes('github') ? 'github' : 'gitlab'}</a>}
                </div>
                <div className='projectRight'>
                    <img src={project.logoUrl} alt='Pallaksen pöllöt'></img>
                </div>
            </div>
            ))}

            {/*<div>
                <strong>Disgcowery</strong>
                <p>
                    After second in college we decided to complete course called 
                    "Full stack open". Part of it was creating project were each 
                    individual needs to contribute at least 175 hours to it. We 
                    decided to do it with two of my friends. At the time it felt 
                    like coolest thing ever. Looking back to it I am bit ebarrassed, 
                    but everoone starts somewhere! :) 
                </p>
            </div>
            <div>
                <strong>Portfolio</strong>
                <p>
                    By portfolio I mean this page. When I started web development I 
                    just jumped right into it without learning basics like css too well.
                    I had worked mostly on backend before and also noticed that typeScript
                    is everywhere if you want to get job. I thought that this is great idea 
                    to paractice css and frontend more as well as get more familiar with typescript.  
                </p>
            </div>*/}
        </div>
    )}
    
    export default Projects