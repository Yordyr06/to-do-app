import { useEffect, useState } from "react"

export function useStorage(storage, initialStorage) {
  const [data, setData] = useState(initialStorage)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [syncData, setSyncData] = useState(true)

  
  useEffect(() => {
    setTimeout(() => {
      try {
        let dataList 
        const getStorage = localStorage.getItem(storage)
    
        if(getStorage) {
          dataList = JSON.parse(getStorage)
          setData(dataList )
        } else {
          localStorage.setItem(getStorage, JSON.stringify(initialStorage)),
          dataList = initialStorage
        }
  
        setLoading(false)
        setSyncData(true)
      } catch(error) {
        setLoading(false)
        setError(true)
      }
    }, 5000)
  }, [syncData])

  const setStorage = (newStorage) => {
    localStorage.setItem(storage, JSON.stringify(newStorage))
    setData(newStorage)
  }

  const syncStorage = () => {
    setLoading(true)
    setSyncData(false)
  }

  return { data, setStorage, loading, error, syncStorage }
}