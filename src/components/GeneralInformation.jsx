import { useState } from "react";
import Input from "./Input";

const GeneralInformationForm = ({personInfo, onUpdate}) => {
  const [person, setPerson] = useState(personInfo);

  const btnStyles = 'py-2.5 px-5 me-2 mb-2 mt-7 text-sm font-medium text-gray-900 cursor-pointer focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100';

  const handlePersonUpdate = (event, prop) => {
    const { value } = event.target;

    setPerson({
      ...person,
      [prop]: value,
    });
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    onUpdate(person);
  }

  return (
    <div className="p-6 mb-6 bg-white border rounded-lg shadow-sm border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">General information</h2>
      <Input name="name" label="Full name" value={person.name} onChangeHandler={handlePersonUpdate} />
      <Input type="number" name="age" label="Age" value={person.age} onChangeHandler={handlePersonUpdate} />
      <Input type="email" name="email" label="Email" value={person.email} onChangeHandler={handlePersonUpdate} />
      <button type="button" className={btnStyles} onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default GeneralInformationForm;