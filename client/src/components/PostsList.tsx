import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { EditDialog } from "./EditDialog"
import { Post } from "@/types"
import { useAuth } from "@/hooks/useAuth"

const ListItem = ({ post, canEdit }: { post: Post; canEdit: boolean }) => {
  return (
    <Card className="rounded-none w-1/2 my-2">
      <CardHeader className="flex-row justify-between">
        <div>
          <CardTitle> {post.title}</CardTitle>
          <CardDescription className="ml-2 text-xs mt-1">
            by {post.author}
          </CardDescription>
        </div>
        {canEdit && (
          <div>
            <EditDialog post={post} />
          </div>
        )}
      </CardHeader>
      <CardContent> {post.description}</CardContent>
    </Card>
  )
}

export const PostList = ({ posts }: { posts?: Post[] }) => {
  const { user } = useAuth()
  return posts?.map((item, index) => (
    <ListItem key={index} post={item} canEdit={item.author === user} />
  ))
}
