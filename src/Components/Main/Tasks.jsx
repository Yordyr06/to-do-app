import { HiOutlineCheckCircle, HiOutlineMinusCircle } from "react-icons/hi"

export function Tasks({ getTasks, successTask, deleteTask }) {
  return (
    <ul className="
      flex flex-col m-auto px-4 justify-center gap-2
      justify-items-center place-items-center hyphens-auto
    ">
      {
        getTasks.map(task => (
          <li
            key={task.text}
            className="
            flex flex-row list-none px-3 py-2 justify-between items-center w-full h-auto bg-slate-950 rounded-full text-center gap-2 tracking-tight font-normal leading-5 border-2 border-blue-500 text-slate-100
          ">
            <span 
              onClick={() => successTask(task.text)} 
              className={`
              ${task.completed ? "text-green-700" : "text-gray-500"}
              cursor-pointer hover:text-green-700
            `}> <HiOutlineCheckCircle size={'1.4rem'}/> </span>
            <p className={`
              ${task.completed ? "line-through" : "" }
            `}>{task.text}
            </p>
            <span
              onClick={() => deleteTask(task.text)} 
              className="
              cursor-pointer text-gray-500 hover:text-red-700
            "> <HiOutlineMinusCircle size={'1.4rem'}/> </span>
          </li>
        ))
      }
    </ul>  
  )
}