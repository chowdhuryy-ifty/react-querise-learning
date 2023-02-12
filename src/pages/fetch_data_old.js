import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <h2>loading......</h2>
  }
  return (<>
      <h2>Post</h2>
      {data.map((post) => {
        return <li key={post.id}>{post.name}</li>
      })}
    </>)
}