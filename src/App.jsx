import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Input from './components/Input';

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

        <Input name="name" label="Full name" value={person.name} onChangeHandler={handlePersonUpdate} />

        <Input type="number" name="age" label="Age" value={person.age} onChangeHandler={handlePersonUpdate} />

        <Input type="email" name="email" label="Email" value={person.email} onChangeHandler={handlePersonUpdate} />
      </div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h2>
          Educational experience
        </h2>

        <div>
          <Input name="schoolname" label="School Name" value={education.schoolname} onChangeHandler={handleEducationUpdate} />

          <Input name="titleofstudy" label="Title of study" value={education.titleofstudy} onChangeHandler={handleEducationUpdate} />

          <Input name="titleofstudy" label="Title of study" value={education.titleofstudy} onChangeHandler={handleEducationUpdate} />

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
