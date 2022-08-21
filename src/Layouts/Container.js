import React from "react"
import { Outlet } from "react-router-dom"

const Container = () => {
  return (
    <div className="mx-24">
      <Outlet />
    </div>
  )
}

export default Container
