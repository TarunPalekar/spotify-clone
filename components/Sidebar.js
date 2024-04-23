"use client"
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import Box from "./Box";
import SidebarItem from "./SidebarItem"
import Image from "next/image";
import Library from "./Library";




const Sidebar = ({ children }) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: "Home",
            active: pathname !== '/search',
            href: '/',


        },
        {
            icon: BiSearch,
            label: "Search",
            active: pathname === '/search',
            href: '/search'

        },
    ], [pathname])
    return (
        <div className={twMerge(`
    flex
    h-full
`,

        )}>
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-1">

                <Box>
                    <div className="px-7 mt-5" > <Image
      src="/spotify.png"
      width={80}
      height={80}
      alt=""
    /></div>
                    <div className="flex flex-col gap-y-2 px-7 py-5">
                        {routes.map((item) => (

                            <SidebarItem key={item.label} {...item}
                            />

                        ))}

                    </div>
                </Box>
                <Box className=" h-[450px] overflow-y-auto" >
                   
                 <Library/>
                   
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>








        </div>
    )
}
export default Sidebar;
