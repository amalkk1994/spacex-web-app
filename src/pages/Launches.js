import React, { useEffect, useState } from "react"
import AppPagination from "../components/AppPagination"
import { getAllLaunches } from "../redux/launchReducer"
import { useDispatch, useSelector } from "react-redux"
import LaunchContainer from "../components/LaunchContainer"
import { debounce } from "../utils/UtilFunctions"
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
    let limit = 15
    let startIndex = (pageNo - 1) * limit
    let endIndex = startIndex + limit
    setPageData(fltData.slice(startIndex, endIndex))
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  function handleOnChange(e) {
    console.log("key press", e.target.value)
    if (e.target.value) {
      let filteredData = data.filter((dataItem) => {
        if (
          dataItem.mission_name
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return true
        } else {
          return false
        }
      })
      console.log("filtered Data", filteredData)
      setFltData(filteredData)
      setPageData(filteredData.slice(0, 14))
    } else {
      console.log("default filtered Data", data)
      setFltData(data)
      setPageData(data.slice(0, 14))
    }
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
