import { Router, Response, Request } from "express"
import {
  createPost,
  deletePost,
  getByAuthor,
  getPosts,
  updatePost,
} from "../controllers/postControllers"

const router = Router()

router.get("/", getPosts)
router.get("/author/:author", getByAuthor)
router.post("/", createPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)

export default router
