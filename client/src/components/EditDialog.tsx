import { Post } from "@/types"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useUpdatePost } from "@/hooks/useUpdatePost"
import { useState } from "react"

export const EditDialog = ({ post }: { post: Post }) => {
  const { mutate: updatePost, error } = useUpdatePost({ id: post.id })
  const [title, setTitle] = useState(post.title)
  const [description, setDescription] = useState(post.description)

  const handleUpdate = () => {
    const updatedPost = { ...post, title, description }
    updatePost(updatedPost)
  }
  return (
    <Dialog>
      <DialogTrigger>Edit</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit your post</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-1.5 mb-2">
          <Label htmlFor="name">Title</Label>
          <Input
            id="title"
            placeholder="Title of the Post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5 mb-2">
          <Label htmlFor="name">Description</Label>
          <Input
            id="description"
            placeholder="description of the Post"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button onClick={handleUpdate}> Edit</Button>
        {error && <div>There's an error</div>}
      </DialogContent>
    </Dialog>
  )
}
