import React, { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useAuth } from "@/hooks/useAuth"
import { Card } from "./ui/card"

export const SignIn = () => {
  const [value, setValue] = useState("")
  const { signIn } = useAuth()
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="bg-white flex-col flex gap-8 p-8 w-1/4">
        <div>You are not signed in , please login below</div>

        <Input
          className="w-[90%] self-center"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Put your username"
        />

        <Button
          disabled={value === ""}
          className=""
          onClick={() => signIn(value)}
        >
          Login
        </Button>
      </Card>
    </div>
  )
}
