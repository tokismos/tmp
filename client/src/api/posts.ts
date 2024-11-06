import { Post } from "@/types"
import axios from "axios"

const API_URL = "http://localhost:3000/api/posts"

const api = axios.create({
  baseURL: API_URL,
  // headers: { "Content-Type": "application/json" },
})

export const getPosts = async () => {
  try {
    const response = await api.get<Post[]>("/", {
      headers: { Authorization: "Bearer aaaa" },
    })
    return response.data
  } catch (e) {
    console.log("AN ERROR", e)
  }
}
export const addPost = async (post: Omit<Post, "id">) => {
  try {
    await api.post<Post[]>("/", post, {
      headers: { Authorization: "Bearer aaaa" },
    })
  } catch (e) {
    console.log("wreror x dnem", e)

    throw Error(`Error ${e}`)
  }
}
export const updatePost = async ({
  id,
  updatedPost,
}: {
  id: Post["id"]
  updatedPost: Post
}) => {
  try {
    await api.put<Post[]>(`/${id}`, updatedPost, {
      headers: { Authorization: "Bearer aaaa" },
    })
  } catch (e) {
    throw Error(`Error ${e}`)
  }
}
