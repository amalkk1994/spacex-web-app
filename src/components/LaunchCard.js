import React from "react"
import FieldValueItem from "./FieldValueItem"

const LaunchCard = ({ launchItem }) => {
  return (
    <div className="bg-slate-200 p-10">
      <h1 className="text-3xl font-semibold text-center">
        {launchItem.mission_name}
      </h1>
      <div className="grid grid-cols-4 gap-2 mt-6 items-center">
        <FieldValueItem
          field="Flight Number"
          value={launchItem.flight_number}
        />
        <FieldValueItem field="Launch year" value={launchItem.launch_year} />
        <FieldValueItem
          className="col-span-4"
          field="Details"
          value={
            launchItem.details || "No Details available regarding this mission"
          }
        />
      </div>
    </div>
  )
}

export default LaunchCard
