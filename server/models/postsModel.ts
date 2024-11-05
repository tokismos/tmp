import { log } from "console"
import { Post } from "../types"
import { v4 as uuidv4 } from "uuid"

let posts: Post[] = [
  {
    id: "15579b9f-7356-494d-9fc1-9ca5546056c2",
    title: "hello title2222222",
    description: "thiuis is desc2222233322",
    author: "MOI",
    createdAt: new Date("2024-11-04T16:42:47.035Z"),
  },
  {
    id: "de05a4af-ad8f-4f76-b9d5-ab454b717554",
    title: "hello title2222222",
    description: "thiuis is desc2222233322",
    author: "MOI",
    createdAt: new Date("2024-11-04T16:42:47.720Z"),
  },
  {
    id: "72350c3e-6dad-44a3-9aca-99a2e3ec29f0",
    title: "hello title2222222",
    description: "thiuis is desc2222233322",
    author: "moi",
    createdAt: new Date("2024-11-04T16:42:50.843Z"),
  },
]

export const getAllPosts = () => {
  return posts
}

export const getPostsByAuthor = (author: Post["author"]) => {
  if (!author) return null
  return posts.filter((post) => post.author === author)
}

export const getPostById = (id: Post["id"]) => {
  if (!id) return null
  return posts.find((post) => post.id === id)
}
export const deletePostById = (id: Post["id"]) => {
  if (!id) return null
  posts = posts.filter((post) => post.id !== id)
  return "deleted"
}

export const updatePostById = (
  id: Post["id"],
  updatedPost: Omit<Post, "id">
) => {
  const postIndex = posts.findIndex((post) => post.id === id)
  if (postIndex === -1) return null

  posts[postIndex] = {
    ...posts[postIndex],
    ...updatedPost,
    updatedAt: new Date(),
  }

  return posts[postIndex]
}
export const createNewPost = (postData: Omit<Post, "id">) => {
  const newPost: Post = {
    id: uuidv4(),
    ...postData,
    createdAt: new Date(),
  }

  posts = [...posts, newPost]
  console.log("newPost", newPost)

  return newPost
}
