export function Header({ loading, children }) {
  return (
    <header className={`
      ${ loading ? "opacity-25" : "" }
      w-full flex flex-col text-center justify-center gap-4 my-8 
    `}>
      <h1 className="
        text-3xl font-bold 
      ">To Do App</h1>

      {children}
    </header>
  )
}