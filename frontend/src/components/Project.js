import { Container } from "react-bootstrap"
import { useEffect, useState } from 'react'
import projectHeader from '../assets/images/project-header.jpg'

export const Project = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        getData() 
    }, [])

    const getData = async () => {
        const projectResponse = await fetch('/projects')
        const projectData = await projectResponse.json()
        setProject(projectData)
    }

    return (
        <section className="projects" id="projects">
            <Container>
                <div className="project-box">
                    <div className='mb-5 mx-5'>
                    <img className="projects-top-image" src={projectHeader} alt="project-header"></img>
                        <h1 className='text-5xl mb-3'>My Projects</h1>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-5'>
                        {project && project.map(e => (
                            <div key={e.id} className='border rounded-sm p-3 shadow'>
                                <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{e.title}</h3>
                                <p>{e.description}</p> 
                            </div>    
                    ))}
                    </div>
                </div>
            </Container>
        </section>

      


    )

}
export default Project
