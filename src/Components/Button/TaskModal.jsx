import { useState } from "react";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

function TaskModal({ addTask, getModal, setModal }) {
  const [ newValue, setValue ] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    if(newValue.trim() !== '') {
      addTask(newValue)
      setValue('')
    } else {
      setModal(false)
    }
  }
  
  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onCancel = () => {
    setModal(false)
  }

  return (
    getModal && (
      <form 
        onSubmit={onSubmit}
        className="
          flex flex-col z-10 mx-auto my-8 p-3 text-center justify-center w-2/3 rounded-lg border-2 border-blue-500 bg-slate-950  gap-2
        ">
        <label className="

          "        
        >Add the new task</label>
        <textarea name="" id="" 
          placeholder="Type the new task here"
          onChange={onChange}
          className="
            text-gray-500 rounded-lg p-2 text-center 
          "
        />
        <div className="
          flex justify-center
        ">
          <button 
            type="summit"
            className="
            cursor-pointer text-gray-500 hover:text-green-700
            "
          > <HiOutlineCheckCircle size={'2rem'}/> </button>
          <button
            onCancel={onCancel}
            className="
            cursor-pointer text-gray-500 hover:text-red-700
            "
          ><HiOutlineXCircle size={'2rem'}/></button>
        </div>
      </form>
    )
  )
}

export { TaskModal }