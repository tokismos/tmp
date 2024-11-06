import { addPost } from "@/api/posts"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPosts"] })
    },
  })
}
