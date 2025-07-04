"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Clock, Mail, Building2, CreditCard } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  const heroRef = useRef(null)
  const branchesRef = useRef(null)
  const contactRef = useRef(null)
  const mapRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const branchesInView = useInView(branchesRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })
  const mapInView = useInView(mapRef, { once: true })

  const branches = [
    {
      name: "Jaripatka Branch (Head Office)",
      address: "504, 2nd Floor, Near Dayanand Park, Jaripatka, Nagpur - 440014",
      landmark: "Behind Bhambhani Complex",
      timing: "9:30 AM - 3:30 PM",
      isHeadOffice: true,
    },
    {
      name: "Gandhibag Branch",
      address: "Gandhibag, Nagpur",
      landmark: "Central Nagpur Location",
      timing: "9:30 AM - 3:30 PM",
      isHeadOffice: false,
    },
    {
      name: "Ayodhya Nagar Branch",
      address: "Ayodhya Nagar, Nagpur",
      landmark: "Residential Area",
      timing: "9:30 AM - 4:00 PM",
      isHeadOffice: false,
    },
    {
      name: "Maskasath Branch",
      address: "Maskasath, Nagpur",
      landmark: "Commercial District",
      timing: "9:30 AM - 3:30 PM",
      isHeadOffice: false,
    },
    {
      name: "Wadi Branch",
      address: "Wadi, Nagpur",
      landmark: "Industrial Area",
      timing: "9:30 AM - 6:30 PM",
      isHeadOffice: false,
    },
  ]

  const contactInfo = [
    {
      icon: Building2,
      title: "Bank Details",
      items: ["Registration: U.B.D. MH-396P", "GSTIN: 27AAAAS0970J1ZE", "Established: March 16, 1984"],
    },
    {
      icon: CreditCard,
      title: "Banking Codes",
      items: ["IFSC: IBKL0041SSB", "Alt IFSC: IBKL0041SB1", "MICR: 440207000"],
    },
    {
      icon: Clock,
      title: "Banking Hours",
      items: ["Monday - Friday: 9:30 AM - 3:30 PM", "Saturday: 9:30 AM - 1:30 PM", "Some branches: Extended hours"],
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Visit our branches for direct assistance",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries and we'll respond promptly",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "5 convenient locations across Nagpur",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative noise-overlay">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden" style={{
        minHeight: "91vh",
        paddingTop: "127px",
        paddingBottom: "89px",
      }}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute rounded-full opacity-30"
            style={{
              top: "89px",
              left: "43px",
              width: "134px",
              height: "134px",
              background: "linear-gradient(127deg, #0ea5e9 0%, #0ea5e9 100%)",
              transform: "rotate(-11deg)",
            }}
          />
          <div
            className="absolute opacity-25 organic-shape-1"
            style={{
              top: "267px",
              right: "67px",
              width: "89px",
              height: "89px",
              background: "#0ea5e9",
              transform: "rotate(17deg)",
            }}
          />
          <div
            className="absolute rounded-full opacity-20"
            style={{
              bottom: "123px",
              left: "29%",
              width: "156px",
              height: "156px",
              background: "linear-gradient(113deg, #0ea5e9 0%, #0ea5e9 100%)",
              transform: "rotate(-7deg)",
            }}
          />
        </div>

        <div className="container mx-auto relative z-10" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 67 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="font-bold text-slate-800 mb-9 leading-tight"
              style={{
                fontSize: "clamp(37px, 5.2vw, 67px)",
                fontWeight: 725,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Contact{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Us
              </span>
            </h1>
            <p
              className="text-black mb-11 max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: "21px",
                lineHeight: 1.7,
                letterSpacing: "0.003em",
              }}
            >
              Get in touch with us for all your banking needs. Visit any of our branches or reach out to us online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section ref={contactRef} className="bg-gray-50 relative overflow-hidden" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center mb-19"
            style={{ marginBottom: "67px" }}
          >
            <h2
              className="font-bold text-slate-800 mb-7"
              style={{
                fontSize: "clamp(29px, 4.1vw, 53px)",
                fontWeight: 625,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Bank{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Information
              </span>
            </h2>
            <p
              className="text-black max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Essential banking details and contact information for your convenience
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.517,
                  delay: index * 0.067,
                  ease: [0.43, 0.195, 0.02, 1.01],
                }}
                whileHover={{
                  y: -3,
                  rotate: index % 2 === 0 ? 0.3 : -0.3,
                  transition: { duration: 0.267, ease: [0.34, 1.56, 0.64, 1] },
                }}
                className={`card-organic text-center ${index === 1 ? "slightly-off-3" : ""}`}
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="mb-7">
                    <info.icon 
                      className="text-black mx-auto" 
                      style={{ 
                        fontSize: "48px",
                        width: "48px",
                        height: "48px"
                      }} 
                    />
                  </div>
                  <h3
                    className="font-bold text-slate-800 mb-5"
                    style={{
                      fontSize: "21px",
                      fontWeight: 525,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                    }}
                  >
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.items.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-black"
                        style={{
                          fontSize: "17px",
                          lineHeight: 1.6,
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section ref={branchesRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "linear-gradient(127deg, #0ea5e9 0%, #0ea5e9 100%)",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={branchesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center mb-19"
            style={{ marginBottom: "67px" }}
          >
            <h2
              className="font-bold text-slate-800 mb-7"
              style={{
                fontSize: "clamp(29px, 4.1vw, 53px)",
                fontWeight: 625,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Branches
              </span>
            </h2>
            <p
              className="text-black max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Visit any of our conveniently located branches across Nagpur
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={branchesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.517,
                  delay: index * 0.067,
                  ease: [0.43, 0.195, 0.02, 1.01],
                }}
                whileHover={{
                  y: -3,
                  rotate: index % 2 === 0 ? 0.3 : -0.3,
                  transition: { duration: 0.267, ease: [0.34, 1.56, 0.64, 1] },
                }}
                className={`card-organic ${branch.isHeadOffice ? "bg-gradient-to-br from-[#0ea5e9] to-white" : "bg-white"} ${index === 2 ? "slightly-off-3" : ""}`}
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex items-start space-x-4 mb-4">
                    <div>
                      <MapPin 
                        className="text-black" 
                        style={{ 
                          fontSize: "29px",
                          width: "29px",
                          height: "29px"
                        }} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-bold text-slate-800 mb-2"
                        style={{
                          fontSize: "19px",
                          fontWeight: 525,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {branch.name}
                      </h3>
                      {branch.isHeadOffice && (
                        <span
                          className="inline-block px-3 py-1 bg-[#2563eb] text-white text-sm font-medium rounded-full mb-2"
                          style={{
                            fontSize: "13px",
                            fontWeight: 525,
                            padding: "3px 11px 5px 11px",
                            borderRadius: "19px",
                          }}
                        >
                          Head Office
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin 
                        className="text-black mt-1" 
                        style={{ 
                          fontSize: "15px",
                          width: "15px",
                          height: "15px"
                        }} 
                      />
                      <div>
                        <p
                          className="text-black"
                          style={{
                            fontSize: "15px",
                            fontWeight: 425,
                          }}
                        >
                          {branch.address}
                        </p>
                        <p
                          className="text-black"
                          style={{
                            fontSize: "13px",
                            fontStyle: "italic",
                          }}
                        >
                          {branch.landmark}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock 
                        className="text-black" 
                        style={{ 
                          fontSize: "15px",
                          width: "15px",
                          height: "15px"
                        }} 
                      />
                      <p
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          fontWeight: 425,
                        }}
                      >
                        {branch.timing}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="bg-gray-50" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -67 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <h2
                className="font-bold text-slate-800 mb-7"
                style={{
                  fontSize: "clamp(29px, 4.1vw, 53px)",
                  fontWeight: 625,
                  letterSpacing: "-0.018em",
                  lineHeight: 1.3,
                }}
              >
                Get in{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Touch
                </span>
              </h2>
              <p
                className="text-black mb-11 leading-relaxed"
                style={{
                  fontSize: "19px",
                  lineHeight: 1.7,
                  letterSpacing: "0.003em",
                }}
              >
                Have a question or need assistance? We're here to help you with all your banking needs.
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <method.icon 
                      className="text-black mt-1" 
                      style={{ 
                        fontSize: "29px",
                        width: "29px",
                        height: "29px"
                      }} 
                    />
                    <div>
                      <h4
                        className="font-semibold text-slate-800 mb-2"
                        style={{
                          fontSize: "19px",
                          fontWeight: 525,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {method.title}
                      </h4>
                      <p
                        className="text-black"
                        style={{
                          fontSize: "17px",
                          lineHeight: 1.6,
                        }}
                      >
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 67 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.667, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="relative"
            >
              <div
                className="text-[#f8fafc] relative overflow-hidden"
                style={{
                  background: "linear-gradient(113deg, #2563eb 0%, #1e293b 100%)",
                  padding: "37px 43px 39px 43px",
                  borderRadius: "19px",
                  transform: "rotate(-0.7deg)",
                }}
              >
                <h3
                  className="font-bold mb-7"
                  style={{
                    fontSize: "23px",
                    fontWeight: 625,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Quick Contact Info
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Head Office", desc: "504, 2nd Floor, Near Dayanand Park, Jaripatka" },
                    { title: "Banking Hours", desc: "Monday - Friday: 9:30 AM - 3:30 PM" },
                    { title: "Saturday Hours", desc: "9:30 AM - 1:30 PM (All branches)" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className="bg-gray-50 bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                        style={{
                          width: "7px",
                          height: "7px",
                        }}
                      >
                        <div
                          className="bg-gray-50 rounded-full"
                          style={{
                            width: "2px",
                            height: "2px",
                          }}
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{
                            fontSize: "17px",
                            fontWeight: 525,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-black"
                          style={{
                            fontSize: "15px",
                            lineHeight: 1.6,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "linear-gradient(113deg, #0ea5e9 0%, #0ea5e9 100%)",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center mb-19"
            style={{ marginBottom: "67px" }}
          >
            <h2
              className="font-bold text-slate-800 mb-7"
              style={{
                fontSize: "clamp(29px, 4.1vw, 53px)",
                fontWeight: 625,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Find{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Us
              </span>
            </h2>
            <p
              className="text-black max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Locate our branches and plan your visit
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 43 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, delay: 0.2, ease: [0.43, 0.195, 0.02, 1.01] }}
            className="card-organic overflow-hidden"
          >
            <div
              className="flex items-center justify-center"
              style={{
                background: "linear-gradient(113deg, #f8f9fa 0%, #e9ecef 100%)",
                height: "400px",
              }}
            >
              <div className="text-center">
                <MapPin 
                  className="text-black mx-auto mb-4" 
                  style={{ 
                    fontSize: "67px",
                    width: "67px",
                    height: "67px"
                  }} 
                />
                <h3
                  className="font-bold text-slate-800 mb-3"
                  style={{
                    fontSize: "23px",
                    fontWeight: 625,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Interactive Map
                </h3>
                <p
                  className="text-black max-w-md mx-auto"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.6,
                  }}
                >
                  Interactive map showing all our branch locations will be integrated here for easy navigation and
                  directions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}