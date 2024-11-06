import { updatePost } from "@/api/posts"
import { Post } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useUpdatePost = ({ id }: { id: Post["id"] }) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (updatedPost: Post) => updatePost({ id, updatedPost }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPosts"] })
    },
  })
}
