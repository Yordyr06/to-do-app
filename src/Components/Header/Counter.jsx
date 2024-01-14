export function Counter({ tasksCompleted, totalTasks }) {  
  return (
    <h2 className="
      text-lg
    ">
      You have completed <span className="font-bold">{tasksCompleted}</span> of <span className="font-bold">{totalTasks}</span> Task
    </h2>
  )
}