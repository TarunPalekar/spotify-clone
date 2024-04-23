"use client"
import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight, RxDividerVertical } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import { FaUserAlt } from "react-icons/fa";




 const Header = ({children, className}) => {
  return (
    <div className={twMerge(
        `h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6`, className

    )}>
        <div className="w-full mb-4 flex items-center justify-between">
            <div className="hidden md:flex gap-x-2 items-center">
                <button className="rounded-full 
                bg-black
                flex
                items-center
                justify-center
                hover:opacity-75
                trasition">
                    <RxCaretLeft className="text-white" size={35}/>

                </button>
                <button className="    rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition"><RxCaretLeft className="text-white" size={35}/>
                    
                </button>
            </div>
            <div className="flex md:hidden gap-x-2 items-center">
            <button
						className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "><HiHome className="text-black" size={20}/>

            </button>
            <button
						className="
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            "
					>
                        <BiSearch
							className="text-black"
							size={20}
						/>
                    </button>

            </div>
            <div className="flex
            justify-between
            items-center
            gap-x-4">

            </div>
        </div>
    </div>
  )
}
export default Header
