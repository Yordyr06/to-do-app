export function Main({
  error,
  loading,
  totalTasks,
  getTasks,
  onError,
  onLoading,
  onEmpty,
  noResults,
  renderTasks,
}) {

  const mainRender = () => {
    if (error) {
      return onError
    } else if (loading) {
      return onLoading
    } else if (!loading && totalTasks === 0) {
      return onEmpty
    } else if (totalTasks != 0 && getTasks.length === 0) {
      return noResults
    } else if (!loading && !error) {
      return renderTasks
    }
  }

  return(
    <main className="
      w-full mt-5 
    ">
      <section>
        { mainRender() }
      </section>
    </main>
  )
}

