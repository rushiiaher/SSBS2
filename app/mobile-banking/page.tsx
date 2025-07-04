"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Smartphone,
  Shield,
  CreditCard,
  Users,
  Download,
  CheckCircle,
  AlertTriangle,
  Settings,
  Eye,
  Lock,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function MobileBankingPage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const securityRef = useRef(null)
  const downloadRef = useRef(null)
  const termsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const securityInView = useInView(securityRef, { once: true })
  const downloadInView = useInView(downloadRef, { once: true })
  const termsInView = useInView(termsRef, { once: true })

  const appFeatures = [
    {
      icon: Users,
      title: "Multi-Bank Account Management",
      description: "Manage multiple bank accounts from different banks in one convenient app",
      features: ["Any bank customers can send or collect money", "Unified dashboard", "Cross-bank transactions"],
    },
    {
      icon: CreditCard,
      title: "Money Transfer",
      description: "Send and receive money instantly with secure transaction processing",
      features: ["Instant transfers", "Multiple payment modes", "Transaction history"],
    },
    {
      icon: Eye,
      title: "Balance Enquiry",
      description: "Check your account balance and transaction history anytime, anywhere",
      features: ["Real-time balance", "Mini statements", "Account summaries"],
    },
    {
      icon: Settings,
      title: "Card Safe Application",
      description: "Advanced security features to protect your debit and credit cards",
      features: ["Set ATM PIN", "Transaction limits", "Card blocking"],
    },
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "ATM PIN Management",
      description: "Set and change your ATM PIN securely through the app",
    },
    {
      icon: Shield,
      title: "Transaction Limits",
      description: "Set custom limits for ATM, POS, and ECOM transactions",
    },
    {
      icon: AlertTriangle,
      title: "Fraud Protection",
      description: "Advanced security measures to protect against unauthorized access",
    },
  ]

  const eligibilityRules = [
    {
      type: "Eligible",
      icon: CheckCircle,
      color: "text-green-600",
      items: [
        "Joint Accounts with 'Either or Survivor' mode",
        "Individual account holders",
        "Partnership accounts with Indemnity Bond",
      ],
    },
    {
      type: "Not Eligible",
      icon: AlertTriangle,
      color: "text-red-600",
      items: [
        "Accounts with 'joint' mode of operation",
        "Accounts in name of minor",
        "Accounts where minor is joint holder",
      ],
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
        background: "white"
      }}>
        

        <div className="container mx-auto relative z-10" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -67 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-center lg:text-left"
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
                SSB{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Mobile Banking
                </span>
              </h1>
              <p
                className="text-black mb-11 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{
                  fontSize: "21px",
                  lineHeight: 1.7,
                  letterSpacing: "0.003em",
                }}
              >
                Experience the future of banking with our SSB Mbank application. Manage multiple bank accounts, transfer
                money, and enjoy secure banking on the go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.trustbank.sadhnambank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r text-white font-medium px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                    fontSize: "17px",
                    fontWeight: 525,
                    padding: "11px 29px 13px 29px",
                    borderRadius: "11px",
                  }}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download App
                </a>
                <a
                  href="/SSB MBank Registration Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 text-black hover:bg-gray-50 px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                  style={{
                    borderColor: "#2563eb",
                    fontSize: "17px",
                    fontWeight: 525,
                    padding: "11px 29px 13px 29px",
                    borderRadius: "11px",
                  }}
                >
                  Registration Form
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 67 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div
                className="text-[#f8fafc] relative overflow-hidden"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  padding: "37px 43px 39px 43px",
                  borderRadius: "19px",
                  transform: "rotate(-0.7deg)",
                }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className="bg-white bg-opacity-20 rounded-2xl flex items-center justify-center"
                    style={{
                      width: "67px",
                      height: "67px",
                      borderRadius: "11px",
                    }}
                  >
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: "23px",
                        fontWeight: 625,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      SSB Mbank
                    </h3>
                    <p
                      className="text-black"
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      Version 2.3.5
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Multi-bank account support",
                    "Secure money transfers", 
                    "Advanced card security",
                    "Auto-update notifications"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className="bg-gray-50 bg-opacity-20 rounded-full flex items-center justify-center"
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
                      <span
                        style={{
                          fontSize: "17px",
                          fontWeight: 525,
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="bg-gray-50 relative overflow-hidden" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
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
              App{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Features
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
              Discover the powerful features that make SSB Mbank your perfect banking companion
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
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
                className={`card-organic h-full ${index === 1 ? "slightly-off-3" : ""}`}
              >
                <div className="text-center h-full flex flex-col" style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="mb-7">
                    <feature.icon 
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
                    {feature.title}
                  </h3>
                  <p
                    className="text-black leading-relaxed mb-6 flex-grow"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-center space-x-2">
                        <div
                          className="bg-[#2563eb] rounded-full flex-shrink-0"
                          style={{
                            width: "3px",
                            height: "3px",
                          }}
                        />
                        <span
                          className="text-black text-center"
                          style={{
                            fontSize: "15px",
                            fontWeight: 425,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section ref={securityRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "white",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={securityInView ? { opacity: 1, y: 0 } : {}}
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
              Security{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Features
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
              Your security is our priority. Advanced features to keep your banking safe and secure.
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8 mb-12"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={securityInView ? { opacity: 1, y: 0 } : {}}
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
                    <feature.icon 
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
                    {feature.title}
                  </h3>
                  <p
                    className="text-black leading-relaxed"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 43 }}
            animate={securityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, delay: 0.3, ease: [0.43, 0.195, 0.02, 1.01] }}
            className="text-[#f8fafc] relative overflow-hidden"
            style={{
              background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
              padding: "37px 43px 39px 43px",
              borderRadius: "19px",
              transform: "rotate(-0.7deg)",
            }}
          >
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontSize: "23px",
                    fontWeight: 625,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Important Security Alert
                </h3>
                <p
                  className="text-black leading-relaxed"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                  }}
                >
                  <strong>Dear Customer,</strong> Sadhana Sahakari Bank Ltd. never asks for confidential information.
                  Don't respond to calls or emails asking for card details, passwords, OTP, CVV No., and PIN etc.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section ref={downloadRef} className="bg-gray-50" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={downloadInView ? { opacity: 1, y: 0 } : {}}
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
              Download{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SSB Mbank
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
              Get started with mobile banking today. Download the app and register for secure banking on the go.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -67 }}
              animate={downloadInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-center lg:text-left"
            >
              <div
                className="card-organic"
                style={{ padding: "37px 43px 39px 43px" }}
              >
                <h3
                  className="font-bold text-slate-800 mb-7"
                  style={{
                    fontSize: "23px",
                    fontWeight: 625,
                    letterSpacing: "-0.01em",
                  }}
                >
                  App Information
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Latest Version:", value: "2.3.5" },
                    { label: "Platform:", value: "Google Play Store" },
                    { label: "Auto Update:", value: "Available" },
                    { label: "Size:", value: "~15 MB" }
                  ].map((info, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span
                        className="text-black"
                        style={{
                          fontSize: "17px",
                          fontWeight: 425,
                        }}
                      >
                        {info.label}
                      </span>
                      <span
                        className="font-semibold text-slate-800"
                        style={{
                          fontSize: "17px",
                          fontWeight: 525,
                        }}
                      >
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trustbank.sadhnambank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                      fontSize: "17px",
                      fontWeight: 525,
                      padding: "11px 29px 13px 29px",
                      borderRadius: "11px",
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download from Play Store
                  </a>
                  <a
                    href="/SSB MBank Registration Form.pdf"
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
                    Registration Form
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 67 }}
              animate={downloadInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.667, delay: 0.183, ease: [0.43, 0.195, 0.02, 1.01] }}
              className="text-center lg:text-left"
            >
              <h3
                className="font-bold text-slate-800 mb-7"
                style={{
                  fontSize: "23px",
                  fontWeight: 625,
                  letterSpacing: "-0.01em",
                }}
              >
                Getting Started
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Download the App", desc: "Download SSB Mbank from Google Play Store" },
                  { step: "2", title: "Register Your Account", desc: "Complete the registration form with your account details" },
                  { step: "3", title: "Start Banking", desc: "Enjoy secure mobile banking with all features" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full flex items-center justify-center font-bold"
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                        fontSize: "15px",
                        fontWeight: 625,
                      }}
                    >
                      {item.step}
                    </div>
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
          </div>
        </div>
      </section>

      {/* Terms & Eligibility Section */}
      <section ref={termsRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "white",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={termsInView ? { opacity: 1, y: 0 } : {}}
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
              Eligibility &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Terms
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
              Important information about mobile banking eligibility and terms of service
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {eligibilityRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={termsInView ? { opacity: 1, y: 0 } : {}}
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
                className="card-organic"
              >
                <div style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex items-center space-x-3 mb-6">
                    <rule.icon className={`w-8 h-8 ${rule.color}`} />
                    <h3
                      className="font-bold text-slate-800"
                      style={{
                        fontSize: "21px",
                        fontWeight: 525,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {rule.type}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {rule.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div
                          className={`rounded-full mt-2 ${rule.color === "text-green-600" ? "bg-green-600" : "bg-red-600"}`}
                          style={{
                            width: "3px",
                            height: "3px",
                          }}
                        />
                        <span
                          className="text-black"
                          style={{
                            fontSize: "17px",
                            lineHeight: 1.6,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 43 }}
            animate={termsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, delay: 0.2, ease: [0.43, 0.195, 0.02, 1.01] }}
            className="mt-12 text-[#f8fafc] relative overflow-hidden"
            style={{
              background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
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
              Terms & Conditions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Agreement", desc: "By using the app, you agree to our Terms and Conditions" },
                { title: "Business Rules", desc: "Bank reserves right to amend business rules" },
                { title: "Fee Structure", desc: "Bank reserves right to charge fees and change fee structure" },
                { title: "Partnership Accounts", desc: "Require Indemnity Bond on Rs.500/- Stamp Duty" }
              ].map((term, index) => (
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
                      {term.title}
                    </div>
                    <div
                      className="text-black"
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      {term.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}