import React, { useEffect, useState } from "react"
import AppPagination from "../components/AppPagination"
import { getAllLaunches } from "../redux/launchReducer"
import { useDispatch, useSelector } from "react-redux"
import LaunchContainer from "../components/LaunchContainer"
import { FaSearch } from "react-icons/fa"

const Launches = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.launch.data)
  const [fltData, setFltData] = useState(data.slice(0, 14))

  console.log("data launch from lauches", data)

  function handlePagination(pageNo) {
    // dispatch(getLaunches({ pageNo: pageNo, limit: 15 }))
    let limit = 15
    let startIndex = (pageNo - 1) * limit
    let endIndex = startIndex + limit
    setFltData(data.slice(startIndex, endIndex))
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    /*
    axios
      .get(`https://api.spacexdata.com/v3/launches`)
      .then((response) => {
        console.log("data initial", response.data)
        setPageCount(Math.floor(response.data.length / 15))
        return response.data
      })
      .catch((err) => console.log("error:" + err))
      */
    dispatch(getAllLaunches(setFltData))
  }, [dispatch])

  /*
  useEffect(() => {
    dispatch(getLaunches({ pageNo: 1, limit: 15 }))
  }, [dispatch])
*/

  return (
    <div>
      <h1 className="text-4xl font-black text-center">LAUNCHES</h1>
      <input
        type="search"
        name="search"
        placeholder="search"
        className="p-2 bg-slate-200"
      />
      <button className="p-4">
        <FaSearch />
      </button>
      <LaunchContainer data={fltData} />
      <AppPagination
        onChange={handlePagination}
        pageCount={Math.ceil(data.length / 15)}
      />
    </div>
  )
}

export default Launches
