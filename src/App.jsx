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
    <div className="min-h-full bg-gray-100">
      <header class="bg-white shadow-sm">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">CV Application</h1>
        </div>
      </header>

      <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-sm p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm border-b border-gray-900/10 pb-12">
            <h2 class="text-base/7 font-semibold text-gray-900">General information</h2>
            <Input name="name" label="Full name" value={person.name} onChangeHandler={handlePersonUpdate} />
            <Input type="number" name="age" label="Age" value={person.age} onChangeHandler={handlePersonUpdate} />
            <Input type="email" name="email" label="Email" value={person.email} onChangeHandler={handlePersonUpdate} />
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm border-b border-gray-900/10 pb-12">
            <h2 class="text-base/7 font-semibold text-gray-900">Educational experience</h2>
            <Input name="schoolname" label="School Name" value={education.schoolname} onChangeHandler={handleEducationUpdate} />

            <Input name="titleofstudy" label="Title of study" value={education.titleofstudy} onChangeHandler={handleEducationUpdate} />
            
            <Input type="date" name="studystart" label="Start date of study" value={education.studystart} onChangeHandler={handleEducationUpdate} />
            <Input type="date" name="studyend" label="End date of study" value={education.studyend} onChangeHandler={handleEducationUpdate} />

          </div>

        </div>
      </main>
    </div>
  )
}

export default App
