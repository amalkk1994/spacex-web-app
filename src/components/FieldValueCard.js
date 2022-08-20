import React from "react"

const FieldValueCard = (props) => {
  return (
    <div className="p-10 bg-slate-200">
      <p className="text-2xl font-semibold text-center">{props.field}</p>
      <p className="text-xl text-center">{props.value}</p>
    </div>
  )
}

export default FieldValueCard
