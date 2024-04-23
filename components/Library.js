"use client"

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

 const Library = () => {
   const onClick=(()=>{})
  return (
    <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4">
            <div className="inline-flex items-center gap-x-3">
<TbPlaylist size={26} className="text-neutral-400 "/>
<p className="text-neutral-400 font-bold ">Your Library</p>
            </div>
            <AiOutlinePlus
            onclick={onClick} 
            size={20}
            className="text-neutral-400 cursor-pointer hover:text-white transition"/>
        </div>
        <div></div>
    </div>
  )
}
export default Library
