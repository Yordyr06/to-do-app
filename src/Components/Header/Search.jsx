import { HiSearch } from "react-icons/hi"

export function Search({ loading, value, setFilter }) {
  return (
    <div className="
      flex gap-3 bg-transparent py-2 justify-evenly border-2 border-sky-500 w-2/3 m-auto rounded-full transition ease-in-out hover:border-slate-900
    ">
      <p className="text-end text-gray-500 font-normal">
        <span className="
          bg-inherit basis-1/5
        ">
          <HiSearch size={'1.5rem'} />
        </span>
      </p>
      <input
        value={value}
        onChange={(event) => setFilter(event.target.value)} 
        placeholder="What you want search?"
        disabled={loading}
        className="
        text-gray-500 bg-inherit basis-4/5 text-start outline-none
        "></input>
    </div>
  )
}