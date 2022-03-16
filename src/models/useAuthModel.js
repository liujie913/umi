import { useState, useEffect, useCallback } from 'react'

export default function useAuthModel() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState({});
  const [id, setId] = useState();

  const loadData = useCallback((account, password) => {
      const arr = [{id: 1, name: '小王'},{id: 2, name: '中王'},{id: 3, name: '大王'}];
      setData(arr);
  }, [])

  useEffect(() =>{
      setCurrent((data.filter(item => item.id === id))[0]);
  }, [data, id])

  return {
    loadData,
    setId,
    current,
    data
  }
}
