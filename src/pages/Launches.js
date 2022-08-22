import React, { useEffect, useState } from "react"
import AppPagination from "../components/AppPagination"
import { getAllLaunches } from "../redux/launchReducer"
import { useDispatch, useSelector } from "react-redux"
import LaunchContainer from "../components/LaunchContainer"
import {
  debounce,
  paginationLogic,
  onChangeLogic,
} from "../utils/UtilFunctions"
import SearchBar from "../components/SearchBar"

const Launches = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.launch.data)
  const [fltData, setFltData] = useState()
  const [pageData, setPageData] = useState(data.slice(0, 14))
  // const [pageCount, setPageCount] = useState()

  console.log("data launch from lauches", data)

  function handlePagination(pageNo) {
    // dispatch(getLaunches({ pageNo: pageNo, limit: 15 }))
    paginationLogic(pageNo, setPageData, fltData)
  }

  function handleOnChange(e) {
    console.log("key press", e.target.value)
    onChangeLogic(e, data, setFltData, setPageData, "mission_name")
    // setPageCount(Math.ceil(fltData.length / 15))
  }

  useEffect(() => {
    dispatch(getAllLaunches({ setFltData, setPageData }))
  }, [dispatch])

  return (
    <div>
      <h1 className="text-4xl font-black text-center">LAUNCHES</h1>
      <SearchBar
        placeholder="search launch by mission"
        onChange={debounce(handleOnChange, 3000)}
      />
      <LaunchContainer data={pageData} />
      <AppPagination
        onChange={handlePagination}
        pageCount={Math.ceil(fltData?.length / 15)}
      />
    </div>
  )
}

export default Launches
