import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getInfo } from "../redux/infoReducer"

const Footer = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.info.data)
  const error = useSelector((state) => state.info.error)
  const loading = useSelector((state) => state.info.loading)

  useEffect(() => {
    dispatch(getInfo())
  }, [dispatch])
  return (
    <footer className="flex text-zinc-200 bg-slate-800 p-10 justify-around">
      <div className="flex gap-5">
        <p>{data.headquarters.address}</p>
        <p>{data.headquarters.city}</p>
        <p>{data.headquarters.state}</p>
      </div>
      <div className="flex gap-5">
        <a href={data.links.website} target="_blank">
          Website
        </a>
        <a href={data.links.flickr} target="_blank">
          flickr
        </a>
        <a href={data.links.twitter} target="_blank">
          twitter
        </a>
      </div>
    </footer>
  )
}

export default Footer
