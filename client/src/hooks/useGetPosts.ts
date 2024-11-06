import { getPosts } from "@/api/posts"
import { useQuery } from "@tanstack/react-query"

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
  })
}
