"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Navigation from "@/components/navigation"
import InfinitySlider from "@/components/InfinitySlider"
import Image from "next/image"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const aboutInView = useInView(aboutRef, { once: true })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <div className="min-h-screen bg-white relative noise-overlay">
      <Navigation />
      <InfinitySlider />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "87vh",
          paddingTop: "94px",
          paddingBottom: "73px",
        }}
      >
        

        <div className="container mx-auto relative z-10" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 67 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -7 }}
              animate={heroInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.667, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="mb-11 text-center"
            >
              <div className="mb-6">
                <Image
                  src="/imgs/logo.jpg"
                  alt="SADHANA SAHAKARI BANK LTD Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl mx-auto shadow-lg"
                />
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">SADHANA SAHAKARI BANK LTD</h2>
              <p className="text-slate-800 font-medium">Established 1984</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 43 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.667, delay: 0.267, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-bold text-slate-800 mb-7 leading-tight"
              style={{
                fontSize: "clamp(37px, 5.2vw, 67px)",
                fontWeight: 725,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              Banking that feels{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                genuinely yours
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 29 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.517, delay: 0.334, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="text-slate-800 mb-11 max-w-3xl mx-auto"
              style={{
                fontSize: "21px",
                lineHeight: 1.7,
                letterSpacing: "0.003em",
              }}
            >
              Since 1984, SADHANA SAHAKARI BANK LTD has been more than just numbers and transactions. With 9,076+ members across 5 branches,
              we're your neighbors who happen to understand money really, really well.
            </motion.p>


          </motion.div>
        </div>

        <motion.div
          style={{ opacity, bottom: "23px" }}
          className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="arrow"></div>
          <div className="arrow"></div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="bg-gray-50 relative overflow-hidden"
        style={{
          paddingTop: "67px",
          paddingBottom: "71px",
        }}
      >
        

        <div className="container mx-auto relative z-10" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
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
              What we're{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                really good at
              </span>
            </h2>
            <p
              className="text-slate-800 max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Five things we've perfected over four decades of actually caring about your financial well-being
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {[
              {
                icon: "savings",
                title: "Loans that make sense",
                description: "Home, personal, auto, education, business - we'll find rates that don't make you wince",
                color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                delay: 0,
              },
              {
                icon: "trending_up",
                title: "Deposits worth your time",
                description:
                  "Fixed deposits with flexible terms. Monthly, quarterly, yearly - however you want your money back",
                color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                delay: 67,
              },
              {
                icon: "phone_android",
                title: "Mobile banking that works",
                description: "SSB Mbank app - manage multiple accounts, transfer money, actually get things done",
                color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                delay: 134,
              },
              {
                icon: "account_balance_wallet",
                title: "Savings that grow",
                description:
                  "Easy deposits, smooth withdrawals, designed for people who want their money to work harder",
                color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                delay: 201,
              },
              {
                icon: "business_center",
                title: "Business accounts that get it",
                description: "Unlimited transactions, overdraft facilities, built for people who mean business",
                color: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                delay: 268,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.517,
                  delay: service.delay / 1000,
                  ease: [0.43, 0.195, 0.02, 1.01],
                }}
                whileHover={{
                  y: -3,
                  rotate: index % 2 === 0 ? 0.3 : -0.3,
                  transition: { duration: 0.267, ease: [0.34, 1.56, 0.64, 1] },
                }}
                className={`card-organic ${index === 1 ? "slightly-off-3" : ""} ${index === 3 ? "slightly-off-4" : ""}`}
              >
                <div className="p-8 text-center" style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="mb-7">
                    <span className="material-icons" style={{ fontSize: "48px", color: "#2563eb" }}>
                      {service.icon}
                    </span>
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
                    {service.title}
                  </h3>
                  <p
                    className="text-slate-800 leading-relaxed"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="relative overflow-hidden"
        style={{
          paddingTop: "73px",
          paddingBottom: "67px",
          background: "white",
        }}
      >
        

        <div className="container mx-auto relative z-10" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -67 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
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
                Forty years of{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  not being jerks
                </span>
              </h2>
              <p
                className="text-slate-800 mb-11 leading-relaxed"
                style={{
                  fontSize: "19px",
                  lineHeight: 1.7,
                  letterSpacing: "0.003em",
                }}
              >
                Started March 16, 1984 (yes, we remember the exact date). Registration U.B.D. MH-396P under the
                Co-Operative Society Act. We're in the heart of Nagpur, and we've been treating people like actual
                humans for nearly four decades.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 mb-11" style={{ gap: "23px 29px" }}>
                <div
                  className="bg-gray-50 rounded-2xl shadow-organic p-7 slightly-off-1"
                  style={{
                    padding: "19px 23px 21px 23px",
                    borderRadius: "11px",
                  }}
                >
                  <div
                    className="font-bold mb-2 bg-clip-text text-transparent"
                    style={{
                      fontSize: "29px",
                      fontWeight: 725,
                      fontFamily: "var(--font-mono)",
                      background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    9,076+
                  </div>
                  <div
                    className="text-black"
                    style={{
                      fontSize: "17px",
                      fontWeight: 525,
                    }}
                  >
                    People who trust us
                  </div>
                </div>
                <div
                  className="bg-gray-50 rounded-2xl shadow-organic p-7 slightly-off-2"
                  style={{
                    padding: "19px 23px 21px 23px",
                    borderRadius: "11px",
                  }}
                >
                  <div
                    className="font-bold mb-2 bg-clip-text text-transparent"
                    style={{
                      fontSize: "clamp(20px, 5vw, 29px)",
                      fontWeight: 725,
                      fontFamily: "var(--font-mono)",
                      background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    ₹409.96L
                  </div>
                  <div
                    className="text-black"
                    style={{
                      fontSize: "clamp(14px, 3.5vw, 17px)",
                      fontWeight: 525,
                      lineHeight: 1.3,
                    }}
                  >
                    In shared capital
                  </div>
                </div>
              </div>

              <h3
                className="font-bold text-slate-800 mb-5"
                style={{
                  fontSize: "21px",
                  fontWeight: 525,
                  letterSpacing: "-0.01em",
                }}
              >
                Where you'll find us
              </h3>
              <div className="space-y-4">
                {["Jaripatka (where it all started)", "Gandhibag", "Ayodhya Nagar", "Maskasath", "Wadi"].map(
                  (branch, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -23 }}
                      animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.434,
                        delay: 0.267 + index * 0.067,
                        ease: [0.43, 0.195, 0.02, 1.01],
                      }}
                      className="flex items-center space-x-4"
                    >
                      <div
                        className="bg-emerald-500 rounded-full"
                        style={{
                          width: "3px",
                          height: "3px",
                        }}
                      />
                      <span
                        className="text-black"
                        style={{
                          fontSize: "17px",
                          fontWeight: 425,
                        }}
                      >
                        {branch}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 67 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="lg:col-span-5 relative"
            >
              <div
                className="rounded-3xl text-slate-800 relative overflow-hidden"
                style={{
                  background: "linear-gradient(113deg, #f8fafc 0%, #ffffff 100%)",
                  padding: "37px 43px 39px 43px",
                  borderRadius: "19px",
                  transform: "rotate(-0.7deg)",
                }}
              >
                <h3
                  className="font-bold text-slate-800 mb-7"
                  style={{
                    fontSize: "23px",
                    fontWeight: 625,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Why people stick around
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div
                      className="bg-gray-50 bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
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
                        className="font-semibold text-slate-800"
                        style={{
                          fontSize: "17px",
                          fontWeight: 525,
                        }}
                      >
                        CBS Technology
                      </div>
                      <div
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        All branches run on Core Banking - fancy tech that actually works
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="bg-gray-50 bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
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
                        className="font-semibold text-slate-800"
                        style={{
                          fontSize: "17px",
                          fontWeight: 525,
                        }}
                      >
                        Rates that don't hurt
                      </div>
                      <div
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Competitive interest rates on deposits and loans (we checked)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div
                      className="bg-gray-50 bg-opacity-20 rounded-full flex items-center justify-center mt-1"
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
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
                        className="font-semibold text-slate-800"
                        style={{
                          fontSize: "17px",
                          fontWeight: 525,
                        }}
                      >
                        Digital that works
                      </div>
                      <div
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                        }}
                      >
                        Mobile banking, NEFT, RTGS, IMPS - all the acronyms that matter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="bg-white"
        style={{
          paddingTop: "67px",
          paddingBottom: "71px",
          background: "linear-gradient(113deg, #f8fafc 0%, #ffffff 100%)"
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1240px" }}>
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
              Let's{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                talk money
              </span>
            </h2>
            <p
              className="text-slate-800 max-w-2xl mx-auto"
              style={{
                fontSize: "19px",
                lineHeight: 1.6,
                letterSpacing: "0.003em",
              }}
            >
              Visit any branch or reach out - we're surprisingly easy to talk to
            </p>
          </div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "23px 29px",
            }}
          >
            <div className="card-organic text-center" style={{ padding: "23px 29px 25px 29px" }}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-7">
                  <span className="material-icons text-blue-600" style={{ fontSize: "48px" }}>
                    location_on
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
                  Where we started
                </h3>
                <p
                  className="text-black"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                  }}
                >
                  504, 2nd Floor, Near Dayanand Park
                  <br />
                  Jaripatka, Nagpur - 440014
                  <br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <div className="card-organic text-center slightly-off-3" style={{ padding: "23px 29px 25px 29px" }}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-7">
                  <span className="material-icons text-blue-600" style={{ fontSize: "48px" }}>
                    phone
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
                  The important codes
                </h3>
                <p
                  className="text-black"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  IFSC: IBKL0041SSB
                  <br />
                  MICR: 440207000
                  <br />
                  GSTIN: 27AAAAS0970J1ZE
                </p>
              </div>
            </div>

            <div className="card-organic text-center" style={{ padding: "23px 29px 25px 29px" }}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-7">
                  <span className="material-icons text-blue-600" style={{ fontSize: "48px" }}>
                    schedule
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
                  When we're around
                </h3>
                <p
                  className="text-black"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                  }}
                >
                  Monday - Friday
                  <br />
                  9:30 AM - 3:30 PM
                  <br />
                  Saturday: 9:30 AM - 1:30 PM
                </p>
              </div>
            </div>

            <div className="card-organic text-center slightly-off-4" style={{ padding: "23px 29px 25px 29px" }}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="mb-7">
                  <span className="material-icons text-blue-600" style={{ fontSize: "48px" }}>
                    support_agent
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
                  Get in touch
                </h3>
                <p
                  className="text-black"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                  }}
                >
                  Walk in, call, or just
                  <br />
                  wave at us from the street
                  <br />
                  (we'll probably wave back)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}