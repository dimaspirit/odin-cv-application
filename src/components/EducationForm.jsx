import { useState } from "react";
import Input from "./Input";

function getDefaultEducation() {
  return {
    schoolname: '',
    titleofstudy: '',
    studystart: '',
    studyend: '',
  }
};

export default function EductionForm({ onUpdate }) {
  const [education, setEducation] = useState(getDefaultEducation());

  const updateInput = (event) => {
    const { name, value } = event.target;

    setEducation({ ...education, [name]: value });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    onUpdate(education);
    setEducation(getDefaultEducation());
  }

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">Educational experience</h2>

      <form onSubmit={submitHandler}>
        <Input 
          name="schoolname" label="School Name" 
          value={education.schoolname} onChangeHandler={updateInput} />
        
        <Input 
          name="titleofstudy" label="Title of study" 
          value={education.titleofstudy} onChangeHandler={updateInput} />
        
        <Input 
          type="date" name="studystart" label="Start date of study" 
          value={education.studystart} onChangeHandler={updateInput} />
        
        <Input 
          type="date" name="studyend" label="End date of study" 
          value={education.studyend} onChangeHandler={updateInput} />

        <button type="submit" className="py-2.5 px-5 me-2 mb-2 mt-7 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Add more education</button>
      </form>
    </div>
  )
}