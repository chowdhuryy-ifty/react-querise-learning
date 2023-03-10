import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/comments`)
}
export default function Fetch_data_queries() {
  const { isLoading, data, isError, error } = useQuery(`posts`, fetchPosts)

  if(isLoading) {
    return <h2>Loading....</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      {data?.data.map(post => {
        return <li key={post.id}>{post.name}</li>
      })}
    </>
  )
}