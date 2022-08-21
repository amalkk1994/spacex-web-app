import React from "react"
import { Pagination } from "@material-ui/lab"

const AppPagination = (props) => {
  /*
  const handleChange = (e) => {
    console.log("Page selected:" + e.target.textContent)
  }
  */

  return (
    <div className="flex justify-center pb-32">
      <Pagination
        onChange={(e) => {
          props.onChange(e.target.textContent)
        }}
        count={props.pageCount}
      />
    </div>
  )
}

export default AppPagination
