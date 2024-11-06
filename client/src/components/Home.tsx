import { useGetPosts } from "@/hooks/useGetPosts"
import { PostList } from "./PostsList"
import { SignIn } from "./SignIn"

export const Home = () => {
  const { data: posts, isLoading, error } = useGetPosts()
  if (isLoading) return <div>LOADING.....</div>

  return (
    <div className="bg-red-300 justify-center flex flex-col items-center">
      <PostList posts={posts} />
    </div>
  )
}
