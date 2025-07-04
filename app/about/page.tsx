"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const heroRef = useRef(null)
  const historyRef = useRef(null)
  const statsRef = useRef(null)
  const branchesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const historyInView = useInView(historyRef, { once: true })
  const statsInView = useInView(statsRef, { once: true })
  const branchesInView = useInView(branchesRef, { once: true })

  const stats = [
    {
      icon: "group",
      value: "9,076+",
      label: "People who trust us",
      color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
    },
    {
      icon: "trending_up",
      value: "₹409.96L",
      label: "In shared capital",
      color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
    },
    {
      icon: "business",
      value: "5",
      label: "Branches across Nagpur",
      color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
    },
    {
      icon: "schedule",
      value: "40+",
      label: "Years of not being jerks",
      color: "linear-gradient(127deg, #0ea5e9 0%, #2563eb 100%)",
    },
  ]

  const branches = [
    {
      name: "Jaripatka Branch",
      subtitle: "Where it all started",
      address: "504, 2nd Floor, Near Dayanand Park, Jaripatka, Nagpur - 440014",
      landmark: "Behind Bhambhani Complex",
      isHeadOffice: true,
    },
    {
      name: "Gandhibag Branch",
      subtitle: "Central hub",
      address: "Gandhibag, Nagpur",
      landmark: "Central Nagpur Location",
      isHeadOffice: false,
    },
    {
      name: "Ayodhya Nagar Branch",
      subtitle: "Community focused",
      address: "Ayodhya Nagar, Nagpur",
      landmark: "Residential Area",
      isHeadOffice: false,
    },
    {
      name: "Maskasath Branch",
      subtitle: "Business district",
      address: "Maskasath, Nagpur",
      landmark: "Commercial District",
      isHeadOffice: false,
    },
    {
      name: "Wadi Branch",
      subtitle: "Industrial zone",
      address: "Wadi, Nagpur",
      landmark: "Industrial Area",
      isHeadOffice: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative noise-overlay">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "91vh",
          paddingTop: "127px",
          paddingBottom: "89px",
          background :"white"
        }}
      >
        {/* Organic background elements */}
        

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
              About{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sadhana Sahakari Bank
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
              Four decades of treating people like humans, not account numbers. We've been serving the Nagpur community
              since 1984, and we're still here because we actually give a damn.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: 1, bottom: "23px" }}
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="arrow"></div>
          <div className="arrow"></div>
        </motion.div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className="bg-gray-50 relative overflow-hidden"
        style={{
          paddingTop: "89px",
          paddingBottom: "73px",
        }}
      >
        

        <div className="container mx-auto relative z-10" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -67 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
              className="lg:col-span-7"
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
                    background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  story so far
                </span>
              </h2>
              <div
                className="space-y-7 leading-relaxed"
                style={{ fontSize: "19px", lineHeight: 1.7 }}
              >
                <p>
                  Sadhana Sahakari Bank Ltd. was established on <strong>March 16, 1984</strong> (yes, we remember the
                  exact date), bearing registration number <strong>U.B.D. MH-396P</strong> under the Co-Operative
                  Society Act, 1960.
                </p>
                <p>
                  Located in the heart of Nagpur at Jaripatka, our bank has been a cornerstone of the local community.
                  We've been providing reliable banking services and fostering financial growth for nearly four decades,
                  and we're pretty proud of that.
                </p>
                <p>
                  We operate under the cooperative banking model, which means our members are also our stakeholders.
                  Every decision we make is in the best interest of our community - not some distant shareholders who've
                  never set foot in Nagpur.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 67 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="lg:col-span-5 relative"
            >
              <div
                className="text-white relative overflow-hidden"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  padding: "37px 43px 39px 43px",
                  borderRadius: "19px",
                  transform: "rotate(-0.5deg)",
                  boxShadow:
                    "0 1.3px 3.1px rgba(0,0,0,0.031), 0 3.7px 8.9px rgba(0,0,0,0.045), 0 11.2px 26.7px rgba(0,0,0,0.069)",
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
                  Key Milestones
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div
                      className="bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                      style={{
                        width: "7px",
                        height: "7px",
                      }}
                    >
                      <div
                        className="bg-white rounded-full"
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
                        1984 - The Beginning
                      </div>
                      <div
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Bank established under Co-Operative Society Act
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                      style={{
                        width: "7px",
                        height: "7px",
                      }}
                    >
                      <div
                        className="bg-white rounded-full"
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
                        CBS Implementation
                      </div>
                      <div
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        All branches upgraded to Core Banking Solution
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                      style={{
                        width: "7px",
                        height: "7px",
                      }}
                    >
                      <div
                        className="bg-white rounded-full"
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
                        Digital Transformation
                      </div>
                      <div
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Mobile banking and digital services that actually work
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="relative overflow-hidden"
        style={{
          paddingTop: "73px",
          paddingBottom: "89px",
          background: "white",

        }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
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
              Numbers that{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                actually matter
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
              Four decades of growth, trust, and community service
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.517,
                  delay: index * 0.067,
                  ease: [0.43, 0.195, 0.02, 1.01],
                }}
                whileHover={{
                  y: -7,
                  rotate: index % 2 === 0 ? 0.5 : -0.5,
                  transition: { duration: 0.267, ease: [0.34, 1.56, 0.64, 1] },
                }}
                className={`card-organic text-center ${index === 1 ? "slightly-off-3" : ""} ${index === 2 ? "slightly-off-4" : ""}`}
              >
                <div style={{ padding: "29px 23px 31px 23px" }}>
                  <div className="mb-7">
                    <span 
                      className="material-icons" 
                      style={{ 
                        fontSize: "43px",
                        background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      {stat.icon}
                    </span>
                  </div>
                  <div
                    className="font-bold text-slate-800 mb-3"
                    style={{
                      fontSize: "37px",
                      fontWeight: 725,
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-black"
                    style={{
                      fontSize: "17px",
                      fontWeight: 425,
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section
        ref={branchesRef}
        className="bg-gray-50"
        style={{
          paddingTop: "89px",
          paddingBottom: "73px",
        }}
      >
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
              Where you'll{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                find us
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
              Five strategically located branches across Nagpur to serve you better
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
                  y: -5,
                  rotate: index % 2 === 0 ? 0.3 : -0.3,
                  transition: { duration: 0.267, ease: [0.34, 1.56, 0.64, 1] },
                }}
                className={`card-organic ${
                  branch.isHeadOffice ? "bg-gradient-to-br from-[#0ea5e9] to-white" : "bg-white"
                } ${index === 2 ? "slightly-off-3" : ""}`}
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex items-start space-x-4 mb-5">
                    <div>
                      <span 
                        className="material-icons" 
                        style={{ 
                          fontSize: "29px",
                          background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}
                      >
                        location_on
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-bold text-slate-800 mb-1"
                        style={{
                          fontSize: "19px",
                          fontWeight: 525,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {branch.name}
                      </h3>
                      <p
                        className="text-black mb-2"
                        style={{
                          fontSize: "15px",
                          fontWeight: 425,
                          fontStyle: "italic",
                        }}
                      >
                        {branch.subtitle}
                      </p>
                      {branch.isHeadOffice && (
                        <span
                          className="inline-block px-3 py-1 bg-[#2563eb] text-white text-sm font-medium rounded-full"
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
                  <div className="space-y-2">
                    <p
                      className="text-black"
                      style={{
                        fontSize: "17px",
                        lineHeight: 1.6,
                      }}
                    >
                      {branch.address}
                    </p>
                    <p
                      className="text-black"
                      style={{
                        fontSize: "15px",
                        fontStyle: "italic",
                      }}
                    >
                      {branch.landmark}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Details Section */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "73px",
          paddingBottom: "89px",
          background: "white",
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <div className="text-center mb-19" style={{ marginBottom: "67px" }}>
            <h2
              className="font-bold text-slate-800 mb-7"
              style={{
                fontSize: "clamp(29px, 4.1vw, 53px)",
                fontWeight: 625,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              The{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                important details
              </span>
            </h2>
          </div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            <div className="card-organic text-center" style={{ padding: "29px 23px 31px 23px" }}>
              <div className="mb-7">
                <span 
                  className="material-icons" 
                  style={{ 
                    fontSize: "43px",
                    background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  verified
                </span>
              </div>
              <h3
                className="font-bold text-slate-800 mb-5"
                style={{
                  fontSize: "21px",
                  fontWeight: 525,
                  letterSpacing: "-0.01em",
                }}
              >
                Registration Details
              </h3>
              <div
                className="space-y-2 text-black"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-mono)",
                }}
              >
                <p>
                  <strong>Registration No:</strong> U.B.D. MH-396P
                </p>
                <p>
                  <strong>Act:</strong> Co-Operative Society Act, 1960
                </p>
                <p>
                  <strong>GSTIN:</strong> 27AAAAS0970J1ZE
                </p>
              </div>
            </div>

            <div className="card-organic text-center slightly-off-3" style={{ padding: "29px 23px 31px 23px" }}>
              <div className="mb-7">
                <span 
                  className="material-icons" 
                  style={{ 
                    fontSize: "43px",
                    background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  account_balance
                </span>
              </div>
              <h3
                className="font-bold text-slate-800 mb-5"
                style={{
                  fontSize: "21px",
                  fontWeight: 525,
                  letterSpacing: "-0.01em",
                }}
              >
                Banking Codes
              </h3>
              <div
                className="space-y-2 text-black"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-mono)",
                }}
              >
                <p>
                  <strong>IFSC:</strong> IBKL0041SSB
                </p>
                <p>
                  <strong>Alt IFSC:</strong> IBKL0041SB1
                </p>
                <p>
                  <strong>MICR:</strong> 440207000
                </p>
              </div>
            </div>

            <div className="card-organic text-center" style={{ padding: "29px 23px 31px 23px" }}>
              <div className="mb-7">
                <span 
                  className="material-icons" 
                  style={{ 
                    fontSize: "43px",
                    background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  computer
                </span>
              </div>
              <h3
                className="font-bold text-slate-800 mb-5"
                style={{
                  fontSize: "21px",
                  fontWeight: 525,
                  letterSpacing: "-0.01em",
                }}
              >
                Technology
              </h3>
              <div
                className="space-y-2 text-black"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.6,
                }}
              >
                <p>
                  <strong>System:</strong> Core Banking Solution (CBS)
                </p>
                <p>
                  <strong>Coverage:</strong> All Branches
                </p>
                <p>
                  <strong>Services:</strong> Digital Banking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}