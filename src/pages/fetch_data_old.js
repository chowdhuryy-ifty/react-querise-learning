import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      setData(res.data)
      setLoading(false)
    }).catch(error => {
      setError(error.message)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <h2>loading......</h2>
  }

  if(error) {
    return <h2>{error}</h2>
  }
  return (<>
    <h2>Post</h2>
    {data.map((post) => {
      return <li key={post.id}>{post.name}</li>
    })}
  </>)
}