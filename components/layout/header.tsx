'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useDialog } from "@/app/context/dialog-context";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavItems = [
    { label: "Overview", href: '/', id: 1 },
    { label: "Amenities", href: '#amenities', id: 2 },
    { label: "Pricing", href: '#pricing', id: 3 },
    { label: "Location", href: '#location', id: 4 },
    { label: "Contact", href: '#contact', id: 5 },
]

function Header() {
    const { openDialog } = useDialog()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="border-b sticky top-0 z-50 bg-[rgb(72,120,0)]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-6">
                    <img
                        className="h-[60px] w-[70px] object-contain"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLpozS4CvBMiZBu9-CfItDhGXLs6tBVg0IaIkGNzknw&s&ec=121643274"
                        alt="Logo"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="flex items center gap-4">
                    <nav className="hidden md:flex items-center gap-6">
                        {NavItems.map(navItem => (
                            <Link
                                key={navItem.id}
                                href={navItem.href}
                                className="text-white text-lg font-medium transition-colors hover:text-gray-200"
                            >
                                {navItem.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden md:flex items-center gap-2">
                        <Button
                            onClick={openDialog}
                            variant="outline"
                            className="btn-shine bg-white text-sm cursor-pointer hover:bg-[#3a4e10] hover:text-white transition-colors"
                        >
                            Download Brochure
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
            {menuOpen && (
                <div className="md:hidden bg-[rgb(72,120,0)] border-t border-green-700 px-4 py-4 flex flex-col gap-4">

                    {/* Mobile Nav Links */}
                    {NavItems.map(navItem => (
                        <Link
                            key={navItem.id}
                            href={navItem.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-white text-sm font-medium py-2 border-b border-green-700 hover:text-gray-200 transition-colors"
                        >
                            {navItem.label}
                        </Link>
                    ))}

                    {/* Mobile Button */}
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
            )}

        </header>
    )
}

export default Header;