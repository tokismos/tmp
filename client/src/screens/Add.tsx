import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../components/ui/button"
import { useAddPost } from "@/hooks/useAddPost"
import { useAuth } from "@/hooks/useAuth"
import { useToast } from "@/hooks/use-toast"

export const Add = () => {
  const { toast } = useToast()

  const { user } = useAuth()
  const [formData, setFormData] = useState({ title: "", description: "" })
  const { mutate: addPost, error, isPending, isSuccess } = useAddPost()

  const handleSubmit = () => {
    if (!user) return

    addPost({ ...formData, author: user })
  }

  useEffect(() => {
    if (isSuccess) toast({ title: "Post added" })
    if (error) toast({ title: "error", description: error.message })
  }, [error, isSuccess])

  return (
    <div className="bg-red-400 h-full items-center justify-center flex">
      <Card className="bg-white w-1/3 ">
        <CardHeader>
          <CardTitle>Add a new post</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col space-y-1.5 mb-2">
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                placeholder="Title of the Post"
                value={formData.title}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, title: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Input
                value={formData.description}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, description: e.target.value }))
                }
                id="name"
                placeholder="Description of your post"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button disabled={isPending} onClick={handleSubmit}>
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
    // <div className="bg-orange-600 justify-center items-center flex h-full ">
    //   <Form
    //     method="post"
    //     className=" bg-red-400 w-1/2 h-1/2 items-center justify-center flex border-2 rounded-md"
    //   >
    //     <label>
    //       Add name:
    //       <input type="text" name="name" />
    //     </label>
    //     <button type="submit">Add</button>
    //   </Form>
    // </div>
  )
}
