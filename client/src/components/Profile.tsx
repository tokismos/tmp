import React from "react"
import {
  useLoaderData,
  useNavigation,
  useParams,
  useSearchParams,
} from "react-router-dom"

export const getProfile = (value) => {
  return new Promise((resolve, rej) => setTimeout(() => resolve(value), 3000))
}

export const Profile = () => {
  const { name } = useParams()
  console.log("navigation", name)

  //   if (navigation.state === "loading") return <div>LOADING....</div>

  return <div>Hello {name}</div>
}
