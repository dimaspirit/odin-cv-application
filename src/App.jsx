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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">CV Application</h1>

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

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h2>
          Educational experience
        </h2>

        <div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label 
              htmlFor="schoolname"
              className="block text-sm/6 font-medium text-gray-900">School Name</label>
            <input 
              type="text" name="schoolname" id="schoolname"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
