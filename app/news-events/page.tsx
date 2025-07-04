"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Users, FileText, Bell, Vote, Award, Clock, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"

export default function NewsEventsPage() {
  const heroRef = useRef(null)
  const newsRef = useRef(null)
  const eventsRef = useRef(null)
  const ahawalRef = useRef(null)
  const memberRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const newsInView = useInView(newsRef, { once: true })
  const eventsInView = useInView(eventsRef, { once: true })
  const ahawalInView = useInView(ahawalRef, { once: true })
  const memberInView = useInView(memberRef, { once: true })

  const newsItems = [
    {
      icon: Vote,
      title: "Member Voting Rights",
      description: "Important information about voting rights and procedures for bank members",
      date: "Updated Recently",
      category: "Member Rights",
      filePath: "/News & Report/LatestNews/MEMBERVOTINGRIGHTS.pdf",
    },
    {
      icon: Bell,
      title: "AGM Notice",
      description: "Annual General Meeting notice with agenda and important dates for members",
      date: "March 2024",
      category: "AGM",
      filePath: "/News & Report/LatestNews/Notification2022.pdf",
    },
  ]

  const upcomingEvents = [
    {
      title: "Annual General Meeting 2024",
      description: "Join us for the annual general meeting to discuss bank's performance and future plans",
      date: "March 30, 2024",
      time: "10:00 AM",
      venue: "Head Office, Jaripatka",
      type: "AGM",
    },
    {
      title: "Financial Literacy Workshop",
      description: "Educational workshop on financial planning and investment strategies for members",
      date: "April 15, 2024",
      time: "2:00 PM",
      venue: "Gandhibag Branch",
      type: "Workshop",
    },
    {
      title: "Digital Banking Seminar",
      description: "Learn about our mobile banking app and digital services",
      date: "April 22, 2024",
      time: "11:00 AM",
      venue: "Ayodhya Nagar Branch",
      type: "Seminar",
    },
  ]

  const ahawalReports = [
    {
      title: "Sadhana Ahawal Final 23-2024",
      description: "Annual report in regional language covering financial performance and achievements",
      filePath: "/News & Report/Ahwal/Sadhana Ahawal Final 23-2024.pdf",
      isLatest: true,
    },
    {
      title: "Sadhana Ahawal 2022-2023",
      description: "Comprehensive annual review in local language for better accessibility",
      filePath: "/News & Report/Ahwal/Sadhana Ahawal 2022-2023.pdf",
      isLatest: false,
    },
    {
      title: "Sadhana Final Ahawal 2022",
      description: "Financial statements and performance analysis in regional language",
      filePath: "/News & Report/Ahwal/SadhanafinalAhawal2022.pdf",
      isLatest: false,
    },
    {
      title: "AGM Notification 2021",
      description: "Annual General Meeting notification and related documents",
      filePath: "/News & Report/Ahwal/AGMNOTIFICATION2021.pdf",
      isLatest: false,
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
            <motion.div
              initial={{ scale: 0, rotate: -13 }}
              animate={heroInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.517, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="mb-11 slightly-off-1"
            >
              <div className="mb-7">
                <Bell 
                  className="text-black mx-auto" 
                  style={{ 
                    fontSize: "67px",
                    width: "67px",
                    height: "67px"
                  }} 
                />
              </div>
            </motion.div>

            <h1
              className="font-bold text-slate-800 mb-9 leading-tight"
              style={{
                fontSize: "clamp(37px, 5.2vw, 67px)",
                fontWeight: 725,
                letterSpacing: "-0.018em",
                lineHeight: 1.3,
              }}
            >
              News &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Events
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
              Stay updated with the latest news, announcements, and upcoming events from Sadhana Sahakari Bank Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section ref={newsRef} className="bg-gray-50 relative overflow-hidden" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
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
              Latest{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                News
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
              Important announcements and updates for our valued members
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {newsItems.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={newsInView ? { opacity: 1, y: 0 } : {}}
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
                className={`card-organic ${index === 1 ? "slightly-off-3" : ""}`}
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex items-start space-x-4 mb-4">
                    <div>
                      <news.icon 
                        className="text-black" 
                        style={{ 
                          fontSize: "29px",
                          width: "29px",
                          height: "29px"
                        }} 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="px-3 py-1 bg-[#2563eb] text-white text-sm font-medium rounded-full"
                          style={{
                            fontSize: "13px",
                            fontWeight: 525,
                            padding: "3px 11px 5px 11px",
                            borderRadius: "19px",
                          }}
                        >
                          {news.category}
                        </span>
                        <span
                          className="text-black"
                          style={{
                            fontSize: "13px",
                            fontWeight: 425,
                          }}
                        >
                          {news.date}
                        </span>
                      </div>
                      <h3
                        className="font-bold text-slate-800 mb-3"
                        style={{
                          fontSize: "19px",
                          fontWeight: 525,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {news.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className="text-black mb-6 leading-relaxed"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {news.description}
                  </p>
                  <a
                    href={news.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 text-black hover:bg-gray-50 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                    style={{
                      borderColor: "#2563eb",
                      fontSize: "17px",
                      fontWeight: 525,
                      padding: "11px 29px 13px 29px",
                      borderRadius: "11px",
                    }}
                  >
                    Download
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section ref={eventsRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "linear-gradient(127deg, #0ea5e9 0%, #0ea5e9 100%)",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
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
              Upcoming{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Events
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
              Join us for important meetings, workshops, and educational sessions
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
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
                className={`card-organic ${index === 1 ? "slightly-off-3" : ""}`}
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 bg-[#2563eb] text-white text-sm font-medium rounded-full"
                      style={{
                        fontSize: "13px",
                        fontWeight: 525,
                        padding: "3px 11px 5px 11px",
                        borderRadius: "19px",
                      }}
                    >
                      {event.type}
                    </span>
                    <Calendar 
                      className="text-black" 
                      style={{ 
                        fontSize: "19px",
                        width: "19px",
                        height: "19px"
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
                    {event.title}
                  </h3>
                  <p
                    className="text-black leading-relaxed mb-6"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {event.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar 
                        className="text-black" 
                        style={{ 
                          fontSize: "15px",
                          width: "15px",
                          height: "15px"
                        }} 
                      />
                      <span
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          fontWeight: 425,
                        }}
                      >
                        {event.date}
                      </span>
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
                      <span
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          fontWeight: 425,
                        }}
                      >
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users 
                        className="text-black" 
                        style={{ 
                          fontSize: "15px",
                          width: "15px",
                          height: "15px"
                        }} 
                      />
                      <span
                        className="text-black"
                        style={{
                          fontSize: "15px",
                          fontWeight: 425,
                        }}
                      >
                        {event.venue}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AHAWAL Reports Section */}
      <section ref={ahawalRef} className="bg-gray-50" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={ahawalInView ? { opacity: 1, y: 0 } : {}}
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
              AHAWAL{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Reports
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
              Annual reports in regional language for better accessibility and understanding
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {ahawalReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={ahawalInView ? { opacity: 1, y: 0 } : {}}
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
                className={`card-organic ${report.isLatest ? "bg-gradient-to-br from-[#0ea5e9] to-white" : "bg-white"} ${index === 1 ? "slightly-off-3" : ""}`}
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div>
                        <FileText 
                          className="text-black" 
                          style={{ 
                            fontSize: "29px",
                            width: "29px",
                            height: "29px"
                          }} 
                        />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-slate-800"
                          style={{
                            fontSize: "19px",
                            fontWeight: 525,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {report.title}
                        </h3>

                      </div>
                    </div>
                    {report.isLatest && (
                      <span
                        className="px-3 py-1 bg-[#2563eb] text-white text-sm font-medium rounded-full"
                        style={{
                          fontSize: "13px",
                          fontWeight: 525,
                          padding: "3px 11px 5px 11px",
                          borderRadius: "19px",
                        }}
                      >
                        Latest
                      </span>
                    )}
                  </div>
                  <p
                    className="text-black mb-6 leading-relaxed"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {report.description}
                  </p>
                  <a
                    href={report.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(113deg, #2563eb 0%, #1e293b 100%)",
                      fontSize: "17px",
                      fontWeight: 525,
                      padding: "11px 29px 13px 29px",
                      borderRadius: "11px",
                    }}
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Information Section */}
      <section ref={memberRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "linear-gradient(113deg, #0ea5e9 0%, #0ea5e9 100%)",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -67 }} 
              animate={memberInView ? { opacity: 1, x: 0 } : {}} 
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
                Member{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Voting Rights
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
                As a cooperative bank, we believe in democratic governance. Every member has the right to participate in
                important decisions that shape our bank's future.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Vote, title: "Voting Eligibility", desc: "All active members are eligible to vote in AGM and special resolutions" },
                  { icon: Users, title: "Democratic Process", desc: "One member, one vote principle ensures fair representation" },
                  { icon: Bell, title: "Advance Notice", desc: "Members receive advance notice for all voting matters" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <item.icon 
                      className="text-black mt-1" 
                      style={{ 
                        fontSize: "23px",
                        width: "23px",
                        height: "23px"
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
                        {item.title}
                      </h4>
                      <p
                        className="text-black"
                        style={{
                          fontSize: "17px",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 67 }}
              animate={memberInView ? { opacity: 1, x: 0 } : {}}
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
                  Important Dates
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "AGM 2024", desc: "March 30, 2024 - Annual General Meeting" },
                    { title: "Notice Period", desc: "21 days advance notice for all voting matters" },
                    { title: "Proxy Voting", desc: "Proxy voting allowed as per cooperative laws" }
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
    </div>
  )
}