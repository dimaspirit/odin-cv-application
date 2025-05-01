import { useState } from 'react'
import './App.css'

import Input from './components/Input';
import GeneralInformationForm from './components/GeneralInformation';

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

  const handleEducationUpdate = (event, prop) => {
    const { value } = event.target;
    setEducation({
      ...education,
      [prop]: value,
    })
  }


  return (
    <div className="min-h-full bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">CV Application</h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6">
          <GeneralInformationForm personInfo={person} onUpdate={setPerson} />

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Educational experience</h2>

            <Input name="schoolname" label="School Name" value={education.schoolname} onChangeHandler={handleEducationUpdate} />
            <Input name="titleofstudy" label="Title of study" value={education.titleofstudy} onChangeHandler={handleEducationUpdate} />
            <Input type="date" name="studystart" label="Start date of study" value={education.studystart} onChangeHandler={handleEducationUpdate} />
            <Input type="date" name="studyend" label="End date of study" value={education.studyend} onChangeHandler={handleEducationUpdate} />

            <button type="button" className="py-2.5 px-5 me-2 mb-2 mt-7 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Add more education</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
