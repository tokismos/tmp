import { Post } from "../types"
import { v4 as uuidv4 } from "uuid"
import { db } from "../prisma/client"

// let posts: Post[] = [
//   {
//     id: "15579b9f-7356-494d-9fc1-9ca5546056c2",
//     title: "hello title2222222",
//     description: "thiuis is desc2222233322",
//     author: "MOI",
//     createdAt: new Date("2024-11-04T16:42:47.035Z"),
//   },
//   {
//     id: "de05a4af-ad8f-4f76-b9d5-ab454b717554",
//     title: "hello title2222222",
//     description: "thiuis is desc2222233322",
//     author: "MOI",
//     createdAt: new Date("2024-11-04T16:42:47.720Z"),
//   },
//   {
//     id: "72350c3e-6dad-44a3-9aca-99a2e3ec29f0",
//     title: "hello title2222222",
//     description: "thiuis is desc2222233322",
//     author: "moi",
//     createdAt: new Date("2024-11-04T16:42:50.843Z"),
//   },
// ]

export const getAllPosts = async () => {
  const posts = await db.posts.findMany()
  return posts
}

export const getPostsByAuthor = async (author: Post["author"]) => {
  if (!author) return null
  const posts = await db.posts.findMany({ where: { author } })
  return posts
}

export const getPostById = async (id: Post["id"]) => {
  if (!id) return null
  const posts = await db.posts.findMany({ where: { id } })

  return posts.find((post) => post.id === id)
}

export const deletePostById = async (id: Post["id"]) => {
  if (!id) return null
  await db.posts.delete({ where: { id: +id } })
}

export const updatePostById = async (
  id: Post["id"],
  updatedPost: Omit<Post, "id">
) => {
  // const postIndex = posts.findIndex((post) => post.id === id)
  // if (postIndex === -1) return null

  // posts[postIndex] = {
  //   ...posts[postIndex],
  //   ...updatedPost,
  //   updatedAt: new Date(),
  // }

  // return posts[postIndex]

  const updateUser = await db.posts.update({
    where: {
      id,
    },
    data: updatedPost,
  })
}

export const createNewPost = async (postData: Omit<Post, "id">) => {
  // const newPost: Post = {
  //   id: uuidv4(),
  //   ...postData,
  //   createdAt: new Date(),
  // }
  const { title, description, author } = postData
  const newData = await db.posts.create({
    data: { title, description, author },
  })

  return newData
}
