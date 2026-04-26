'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useDialog } from "@/app/context/dialog-context";





function Header() {

    const { openDialog } = useDialog()



    const NavItems = [{
        label: "Overview",
        href: '/',
        id:1
    },
    {
        label: "Amenities",
        href: '',
        id:2
    },
    {
        label: "Pricing",
        href: '',
        id:3
    },
    {
        label: "Location",
        href: '',
        id:4
    },
    {
        label: "Contact",
        href: '',
        id:5
    },
    ]

    return (
        <header className="border-b sticky top-0 z-50 bg-[rgb(72,120,0)]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                <div className="flex items-center  gap-6">
                    {/* <Link href='/' className="font-bold text-xl">
                        Property Site
                    </Link> */}
                    <img className="h-[60] w-[70]" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLpozS4CvBMiZBu9-CfItDhGXLs6tBVg0IaIkGNzknw&s&ec=121643274" alt="" />



                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block ">

                    </div>

                    <nav className="flex items-center gap-8">
                        {
                            NavItems.map(navItem => (
                                <div key={navItem.id}>
                                    <Link key={navItem.id} href={navItem.href}
                                        className="text-lg  transition-colors  hover:text-primary">
                                        {navItem.label}
                                    </Link>
                                </div>
                            ))
                        }

                    </nav>


                    <div className="flex items-center gap-2 btn-shine
                    ">
                        <Button onClick={openDialog}
                         variant={"outline"}  className="  bg-[rgb(248, 249, 246)] text-1xl cursor-pointer
                         hover:bg-[#3a4e10]"
                            >
                            Download Brochure
                            
                        </Button>

                    </div>

                </div>

            </div>

        </header>
    )
}

export default Header;