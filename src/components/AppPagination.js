import React from "react"
import { Pagination } from "@material-ui/lab"

const AppPagination = () => {
  const handleChange = (e) => {
    console.log("Page selected:" + e.target.textContent)
  }

  return (
    <div>
      <Pagination
        onChange={(e) => {
          handleChange(e)
        }}
        count={10}
      />
    </div>
  )
}

export default AppPagination
