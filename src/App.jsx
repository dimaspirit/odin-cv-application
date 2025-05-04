import { useState } from 'react'
import './App.css'

import Input from './components/Input';
import GeneralInformationForm from './components/GeneralInformation';
import EductionForm from './components/EducationForm';

function App() {
  const [person, setPerson] = useState({ name: '', age: '', email: '' });
  const [educationList, setEducationList] = useState([]);

  const educationAddHandler = (educationInfo) => {
    const education = {
      ...educationInfo,
      uuid: crypto.randomUUID(),
    };

    setEducationList([...educationList, education]);
  }

  return (
    <div className="min-h-full bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">CV Application</h1>
        </div>
      </header>

      <main className="grid grid-cols-3 gap-6 px-4 py-6">
        <div className="grid-col-1">
          <GeneralInformationForm personInfo={person} onUpdate={setPerson} />
          <EductionForm onUpdate={educationAddHandler} />
        </div>

        <div className='col-span-2'>
          <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm border-b border-gray-900/10 pb-12">
            <div className="text-2xl">
              <h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{person.name}</h2>
              <div class="mt-2 flex items-center text-sm text-gray-500 gap-1">
                <h4>{person.age && `${person.age} years`}</h4>
                <h4>{person.email && `| ${person.email}`}</h4>
              </div>
            </div>

            <dl class="divide-y divide-gray-100">
              {educationList.map((ed) => 
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm/6 font-medium text-gray-900">{ed.schoolname}</dt>
                  <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <p>{ed.titleofstudy}</p>
                    <p>{(ed.studystart && ed.studyend) && `${ed.studystart} -- ${ed.studyend}`}</p>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
