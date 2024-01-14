import { useState } from "react"

export function useListener(syncTask) {
  const [storageChange, setStorageChange] = useState(false)

  window.addEventListener('storage', (change) => {
    if (change.key === "TASK_V1") {
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    syncTask()
    setStorageChange(false)
  }

  return {
    storageChange,
    toggleShow
  }
}
