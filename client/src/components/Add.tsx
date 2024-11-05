import React from "react"
import { Form, useLocation } from "react-router-dom"

export const Add = () => {
  const location = useLocation()
  console.log("lo", location)

  return (
    <div className="bg-orange-600 justify-center items-center flex h-full ">
      <Form
        method="post"
        className=" bg-red-400 w-1/2 h-1/2 items-center justify-center flex border-2 rounded-md"
      >
        <label>
          Add name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Add</button>
      </Form>
    </div>
  )
}
