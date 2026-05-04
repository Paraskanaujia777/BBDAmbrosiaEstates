'use client';

import { Button } from "../ui/button";
import { useDialog } from "@/app/context/dialog-context";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const NavItems = [
    { label: "Overview", href: '#overview', id: 1 },
    { label: "Amenities", href: '#amenities', id: 2 },
    { label: "Pricing", href: '#pricing', id: 3 },
    { label: "Floor Plan", href: '#floorplan', id: 4 }, // ← no space
    { label: "Location", href: '#location', id: 5 },
    { label: "Contact", href: '#contact', id: 6 },
]

function Header() {
    const phone = "+919918016160";

    const { openDialog } = useDialog()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNavClick = (href: string) => {
        setMenuOpen(false)

        // smooth scroll to section
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="border-b sticky top-0 z-50 bg-[rgb(72,120,0)]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        BBD Ambrosia Estates
                    </h2>
                </div>

                {/* Desktop Nav + Button */}
                <div className="flex items-center gap-4">

                    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                        {NavItems.map(navItem => (
                            <a

                                key={navItem.id}
                                href={navItem.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavClick(navItem.href)
                                }}
                                className="text-white text-sm lg:text-base font-medium transition-colors hover:text-gray-200 cursor-pointer"
                            >
                                {navItem.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden md:flex animate-bounce-slow">
                        <Button
                            onClick={openDialog}
                            variant="outline"
                            className="btn-shine bg-white text-sm cursor-pointer hover:bg-[#3a4e10] hover:text-white transition-colors"
                        >
                            Download Brochure
                        </Button>
                    </div>
                    <div className="hidden md:flex">
                        

                        <Button asChild variant="outline" className="animate-bounce-slow">
                            <a
                                href={`tel:${phone}`}
                                className="btn-shine w-full text-sm cursor-pointer flex items-center gap-2 justify-center 
    !bg-white !text-black  
    hover:!bg-[#3a4e10] hover:!text-white transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="font-medium text-sm">+91-9918016160 </span>
                            </a>
                        </Button>
                    </div>

                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {/* Mobile Menu */}
            {
                menuOpen && (
                    <div className="md:hidden bg-[rgb(72,120,0)] border-t border-green-700 px-4 py-4 flex flex-col gap-3">

                        {NavItems.map(navItem => (
                            <a

                                key={navItem.id}
                                href={navItem.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavClick(navItem.href)
                                }}
                                className="text-white text-sm font-medium py-2 border-b border-green-700 hover:text-gray-200 transition-colors cursor-pointer"
                            >
                                {navItem.label}
                            </a>
                        ))}

                        {/* Mobile Button */}
                        <div className="animate-bounce-slow">
                            <Button
                                onClick={() => {
                                    openDialog()
                                    setMenuOpen(false)
                                }}
                                variant="outline"
                                className="btn-shine w-full bg-white text-sm cursor-pointer hover:bg-[#3a4e10] hover:text-white transition-colors"
                            >
                                Download Brochure
                            </Button>


                        </div>

                        {/* const phone = "+918858544549"; */}

                        <Button asChild variant="outline">
                            <a
                                href={`tel:${phone}`}
                                className="btn-shine w-full text-sm cursor-pointer flex items-center gap-2 justify-center 
    !bg-white !text-black 
    hover:!bg-[#3a4e10] hover:!text-white transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="font-medium text-sm">Call Us</span>
                            </a>
                        </Button>




                    </div>
                )
            }

        </header >
    )
}

export default Header;