import React, { useEffect, useState } from "react"
import AppPagination from "../components/AppPagination"
import { getLaunches } from "../redux/launchReducer"
import { useDispatch, useSelector } from "react-redux"
import LaunchContainer from "../components/LaunchContainer"
import axios from "axios"

const Launches = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.launch.data)
  const [pageCount, setPageCount] = useState(10)

  console.log("data launch from lauches", data)

  function handlePagination(pageNo) {
    dispatch(getLaunches({ pageNo: pageNo, limit: 15 }))
  }

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches`)
      .then((response) => {
        console.log("data initial", response.data)
        setPageCount(Math.floor(response.data.length / 15))
        return response.data
      })
      .catch((err) => console.log("error:" + err))
  }, [])

  useEffect(() => {
    dispatch(getLaunches({ pageNo: 1, limit: 15 }))
  }, [dispatch])

  return (
    <div>
      <h1 className="text-4xl font-black text-center">LAUNCHES</h1>
      <LaunchContainer data={data} />
      <AppPagination onChange={handlePagination} pageCount={pageCount} />
    </div>
  )
}

export default Launches
