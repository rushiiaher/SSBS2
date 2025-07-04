"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 67)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Loans & Advances", href: "/services#loans" },
        { name: "Term Deposits", href: "/services#deposits" },
        { name: "Account Services", href: "/services#accounts" },
        { name: "Digital Banking", href: "/services#digital" },
      ],
    },
    { name: "Mobile Banking", href: "/mobile-banking" },
    {
      name: "Resources",
      href: "#",
      dropdown: [
        { name: "Annual Reports", href: "/annual-reports" },
        { name: "News & Events", href: "/news-events" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    { name: "Organization", href: "/organization" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-[0_0.9px_2.2px_rgba(0,0,0,0.024),_0_2.1px_5.3px_rgba(0,0,0,0.035),_0_6.9px_17.9px_rgba(0,0,0,0.051)]"
      style={{
        backdropFilter: "blur(13px)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1240px" }}>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            transition={{ duration: 0.267, ease: [0.43, 0.195, 0.02, 1.01] }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="/imgs/logo.jpg"
                alt="Sadhana Sahakari Bank Logo"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-black text-base sm:text-lg">
                SSB Ltd
              </div>
              <div className="text-slate-600 text-xs">
                Since 1984
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  whileHover={{ y: -1, rotate: 0.2 }}
                  transition={{ duration: 0.183, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-black hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <span className="material-icons text-sm">
                      keyboard_arrow_down
                    </span>
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white border border-blue-200 rounded-xl shadow-lg z-50"
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <motion.a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          whileHover={{ x: 4, backgroundColor: "#dbeafe" }}
                          transition={{ duration: 0.15 }}
                          className="block px-4 py-3 text-black hover:text-blue-600 transition-colors first:rounded-t-xl last:rounded-b-xl"
                        >
                          {dropdownItem.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden p-2 text-black hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-icons text-xl">
              menu
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="fixed top-0 left-0 h-screen w-80 max-w-[85vw] bg-white shadow-xl z-[60] lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image
                        src="/imgs/logo.jpg"
                        alt="Sadhana Sahakari Bank Logo"
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-black text-lg">SSB Ltd</div>
                      <div className="text-slate-600 text-xs">Since 1984</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="material-icons text-xl">close</span>
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                      >
                        <div
                          className="flex items-center justify-between p-3 rounded-lg text-black hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                          onClick={() => {
                            if (item.dropdown) {
                              setMobileDropdown(mobileDropdown === item.name ? null : item.name)
                            } else {
                              window.location.href = item.href
                              setIsOpen(false)
                            }
                          }}
                        >
                          <span className="font-medium">{item.name}</span>
                          {item.dropdown && (
                            <span className={`material-icons text-slate-600 transition-transform duration-200 ${
                              mobileDropdown === item.name ? 'rotate-90' : ''
                            }`}>
                              keyboard_arrow_right
                            </span>
                          )}
                        </div>
                        
                        <AnimatePresence>
                          {item.dropdown && mobileDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <a
                                  key={dropdownIndex}
                                  href={dropdownItem.href}
                                  className="block p-2 pl-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropdownItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}