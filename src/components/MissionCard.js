import React from "react"
import FieldValueItem from "./FieldValueItem"

const MissionCard = ({ missionItem }) => {
  console.log("mission card")
  return (
    <div>
      <FieldValueItem field="Mission Id" value={missionItem.mission_id} />
      <FieldValueItem field="Mission Name" value={missionItem.mission_name} />
      <FieldValueItem field="Description" value={missionItem.description} />
    </div>
  )
}

export default MissionCard
