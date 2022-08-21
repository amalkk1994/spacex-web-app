import React from "react"
import LaunchCard from "./LaunchCard"

const LaunchContainer = ({ data }) => {
  return (
    <div className="mt-12">
      <ul className="grid grid-cols-3 gap-10 ">
        {data?.map((dataItem) => (
          <li key={dataItem.flight_number}>
            <LaunchCard launchItem={dataItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LaunchContainer
