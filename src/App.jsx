import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    email: '',
  });

  const [education, setEducation] = useState({
    schoolname: '',
    titleofstudy: '',
    studystart: '',
    studyend: '',
  });

  const handlePersonUpdate = (event, prop) => {
    const { value } = event.target;
    setPerson({
      ...person,
      [prop]: value,
    })
  }

  const handleEducationUpdate = (event, prop) => {
    const { value } = event.target;
    setEducation({
      ...education,
      [prop]: value,
    })
  }


  return (
    <>
      <h1>CV Application</h1>

      <div>
        <h2>General information</h2>
        <div>
          <label htmlFor="name">Full name</label>
          <input 
            type="text" name="name" id="name" 
            value={person.name} onChange={(event) => handlePersonUpdate(event, 'name')} />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input 
            type="number" name="age" id="age"
            value={person.age} onChange={(event) => handlePersonUpdate(event, 'age')} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" name="email" id="email" 
            value={person.email} onChange={(event) => handlePersonUpdate(event, 'email')} />
        </div>
      </div>

      <div>
        <h2>
          Educational experience
        </h2>

        <div>
          <div>
            <label htmlFor="schoolname">School Name</label>
            <input 
              type="text" name="schoolname" id="schoolname" 
              value={person.schoolname} onChange={(event) => handleEducationUpdate(event, 'schoolname')} />
          </div>

          <div>
            <label htmlFor="titleofstudy">Title of study</label>
            <input 
              type="text" name="titleofstudy" id="titleofstudy" 
              value={person.titleofstudy} onChange={(event) => handleEducationUpdate(event, 'titleofstudy')} />
          </div>

          <div>
            <label htmlFor="studystart">Dates of studing</label>
            <input 
              type="date" name="studystart" id="studystart"
              value={person.studystart} onChange={(event) => handleEducationUpdate(event, 'studystart')} />
            <input 
              type="date" name="studyend" id="studyend"
              value={person.studyend} onChange={(event) => handleEducationUpdate(event, 'studyend')} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
