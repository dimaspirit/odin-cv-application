const Input = ({ type = "text", name, label, value, onChangeHandler }) => {
  return (
    <div className="mt-4">
      <label 
        htmlFor={name}
        className="block text-sm/6 font-medium text-gray-900">{label}</label>
      <input 
        type={type} name={name} id={name}
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        value={value} onChange={(event) => onChangeHandler(event, name)} />
    </div>
  )
}

export default Input;