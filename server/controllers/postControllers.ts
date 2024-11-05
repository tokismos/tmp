import {
  createNewPost,
  deletePostById,
  getAllPosts,
  getPostsByAuthor,
  updatePostById,
} from "../models/postsModel"
import { Response, Request } from "express"

export const getPosts = async (_, res) => {
  const posts = await getAllPosts()
  res.json(posts)
}

export const getByAuthor = async (req: Request, res: Response) => {
  const author = req.params.author
  const post = await getPostsByAuthor(author)

  if (!post) {
    res.status(404).json({ message: "Post not found" })
    return
  }
  res.json(post)
}
export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = await createNewPost(req.body)

    if (!newPost) {
      res.status(404).json({ message: "Post not created" })
      return
    }
    res.status(201).json(newPost)
  } catch (error) {
    res.status(404).json({ message: "Post not created", error })
    return
  }
}

export const deletePost = async (req: Request, res: Response) => {
  try {
    await deletePostById(parseInt(req.params.id))

    res.status(200).json({ message: "Post deleted" })
  } catch (error) {
    res.status(500).json({ message: "Post NOT deleted" })
  }
}
export const updatePost = async (req: Request, res: Response) => {
  try {
    await updatePostById(parseInt(req.params.id), req.body)
    res.status(200).json({ message: "Post  updated" })
  } catch (error) {
    res.status(500).json({ message: "Post  NOT updated", error })
  }
}
