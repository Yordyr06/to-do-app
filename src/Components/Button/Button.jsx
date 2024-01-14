import { HiOutlinePlusCircle } from "react-icons/hi"

function Button({ setModal }) {
  return (
    <section className="
      min-w-max flex fixed bottom-5 inset-x-1/3 justify-center z-10 bg-blue-500 p-2.5 rounded-full font-medium text-sm
      transition ease-in-out delay-150 hover:bg-blue-900 duration-300 cursor-pointer
    ">
      <span className="mr-4"> <HiOutlinePlusCircle size={'1.4rem'}/> </span>
      <button onClick={() => setModal(event => !event)}>Add a new task</button>
    </section>
  )
}

export { Button }