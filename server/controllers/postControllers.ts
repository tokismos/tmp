import {
  createNewPost,
  deletePostById,
  getAllPosts,
  getPostsByAuthor,
  updatePostById,
} from "../models/postsModel"
import { Response, Request } from "express"

export const getPosts = (_, res) => {
  const posts = getAllPosts()
  res.json(posts)
}

export const getByAuthor = (req: Request, res: Response) => {
  const author = req.params.author
  const post = getPostsByAuthor(author)

  if (!post) {
    res.status(404).json({ message: "Post not found" })
    return
  }
  res.json(post)
}
export const createPost = (req: Request, res: Response) => {
  const newPost = createNewPost(req.body)

  if (!newPost) {
    res.status(404).json({ message: "Post not created" })
    return
  }
  res.status(201).json(newPost)
}

export const deletePost = (req: Request, res: Response) => {
  const status = deletePostById(req.params.id)
  if (status !== "deleted") {
    res.status(404).json({ message: "Post not deleted" })
    return
  }
  res.status(200).json({ message: "Post deleted" })
}
export const updatePost = (req: Request, res: Response) => {
  const updatedPost = updatePostById(req.params.id, req.body)
  if (!updatedPost) {
    res.status(404).json({ message: "Post not updated" })
    return
  }
  res.status(200).json({ message: "Post  updated" })
}
