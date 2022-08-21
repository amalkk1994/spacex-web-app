import React, { useEffect } from "react"
import AppPagination from "../components/AppPagination"
import { getLaunches } from "../redux/launchReducer"
import { useDispatch, useSelector } from "react-redux"
import LaunchContainer from "../components/LaunchContainer"

const Launches = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.launch.data)

  console.log("data launch from lauches", data)

  function handlePagination(pageNo) {
    dispatch(getLaunches({ pageNo: pageNo, limit: 15 }))
  }

  useEffect(() => {
    dispatch(getLaunches({ pageNo: 1, limit: 15 }))
  }, [dispatch])

  return (
    <div>
      <h1 className="text-4xl font-black text-center">LAUNCHES</h1>
      <LaunchContainer data={data} />
      <AppPagination onChange={handlePagination} />
    </div>
  )
}

export default Launches
