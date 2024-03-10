import { Container } from "react-bootstrap"
import { useEffect, useState } from 'react'
import educationHeader from '../assets/images/education-header.jpg'

export const Education = () => {
    const [education, setEducation] = useState([])


    useEffect(() => {
        getData() 
    }, [])

    const getData = async () => {
        const educationResponse = await fetch('/education')
        const educationData = await educationResponse.json()
        setEducation(educationData)
    }

    return (
        <section className="education" id="education">
            <Container>
                <div className="education-box">
            <div className='h-screen pt-16'>
            <div className='mb-5 mx-5'>
            <img className="education-top-image" src={educationHeader} alt="education-header"></img>
            <h1 className='text-5xl mb-3'>Education</h1>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-5'>
            {education && education.map(e => (
                <div key={e.id} className='border rounded-sm p-3 shadow'>
                <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{e.school}, {e.degree}</h3>
                <p>{e.description}</p>
                </div>    
            ))}
            </div>
            </div>
            </div>
            </Container>
        </section>

      


    )

}
export default Education