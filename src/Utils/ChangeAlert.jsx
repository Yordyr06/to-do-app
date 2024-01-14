import { useListener } from "./useListener"

export function ChangeAlert({ syncTask }) {
  const { show, toggleShow } = useListener(syncTask)

  if (show) {
    return (
      <div>
        <p>Had Changes</p>
        <button 
          onClick={() => toggleShow(false)}
        >
          Refresh
        </button>
      </div>
    )
  } else {
    return null
  }
}