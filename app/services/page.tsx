"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  CreditCard,
  TrendingUp,
  PiggyBank,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  Coins,
  Smartphone,
  Shield,
  Clock,
  Percent,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  const heroRef = useRef(null)
  const loansRef = useRef(null)
  const depositsRef = useRef(null)
  const accountsRef = useRef(null)
  const digitalRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const loansInView = useInView(loansRef, { once: true })
  const depositsInView = useInView(depositsRef, { once: true })
  const accountsInView = useInView(accountsRef, { once: true })
  const digitalInView = useInView(digitalRef, { once: true })

  const loanProducts = [
    {
      icon: Home,
      title: "Housing Loans",
      description: "Affordable home loans with competitive rates for general customers and women.",
      features: ["General & Women: 9-11%", "Repair/Renovation: 12.5%", "Flexible repayment options"],
    },
    {
      icon: Car,
      title: "Vehicle Loans",
      description: "Finance your dream vehicle with attractive interest rates for all vehicle types.",
      features: ["Two-wheeler: 9%", "New four-wheeler: 9%", "Commercial vehicle: 11%"],
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Invest in your future with our education loan schemes for higher studies.",
      features: ["General & Women: 11%", "Covers tuition expenses", "Student-friendly terms"],
    },
    {
      icon: Briefcase,
      title: "Personal Loans",
      description: "Meet your personal financial needs with flexible personal loan options.",
      features: ["Clean loan: 18%", "Salary deduction: 16%", "Secured personal: 12%"],
    },
    {
      icon: Coins,
      title: "Gold Loans",
      description: "Get instant loans against your gold ornaments with attractive interest rates.",
      features: ["Interest rate: 8.5-9%", "Instant approval", "Safe custody"],
    },
    {
      icon: TrendingUp,
      title: "Business Loans",
      description: "Comprehensive business financing solutions for your enterprise growth.",
      features: ["Cash Credit: 11-14%", "Term Loans: 11-14%", "SSI loans available"],
    },
  ]

  const depositProducts = [
    {
      title: "Regular Term Deposits",
      description: "Competitive interest rates with flexible tenure options for all customers",
      features: ["91-180 days: 5.25%", "1-3 years: 6.00%", "Above 3 years: 6.10%"],
      minAmount: "General",
    },
    {
      title: "Senior Citizens Deposits",
      description: "Special rates for senior citizens with additional benefits",
      features: ["1-3 years: 7.00%", "Above 3 years: 7.10%", "+1.00% extra for seniors"],
      minAmount: "Age ≥60/58",
    },
    {
      title: "Monthly Income Plan",
      description: "Regular monthly income from your deposits with attractive rates",
      features: ["General: 7.00%", "Senior: 7.25%", "Super Senior: 7.50%"],
      minAmount: "1-3 years",
    },
    {
      title: "Special Celebration Schemes",
      description: "Festival-themed deposit schemes with higher returns",
      features: ["Janmashtami Yojna: 7.50%", "Sukanya Ladli: 7.75%", "Jhulelal Scheme: 7.50%"],
      minAmount: "365-1000 days",
    },
  ]

  const accountTypes = [
    {
      icon: PiggyBank,
      title: "Savings Account",
      description: "Designed to help individuals inculcate the habit of saving money for future needs",
      features: ["Easy deposit & withdrawal", "Attractive interest rates", "No minimum balance"],
    },
    {
      icon: Briefcase,
      title: "Current Account",
      description: "Perfect for conducting business transactions smoothly with unlimited transactions",
      features: ["Unlimited transactions", "Overdraft facility", "Business-friendly"],
    },
    {
      icon: Clock,
      title: "Recurring Deposit",
      description: "Monthly savings scheme to deposit a certain amount for a specified period",
      features: ["Monthly savings", "Fixed tenure", "Guaranteed returns"],
    },
  ]

  const digitalServices = [
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "SSB Mbank app with comprehensive banking features",
      features: ["Multi-bank support", "Money transfer", "Balance enquiry", "Transaction history"],
    },
    {
      icon: Shield,
      title: "Internet Banking",
      description: "Secure online banking for all your financial needs",
      features: ["24/7 access", "Fund transfers", "Bill payments", "Account statements"],
    },
    {
      icon: CreditCard,
      title: "Card Services",
      description: "ATM and debit card services with advanced security",
      features: ["Set ATM PIN", "Transaction limits", "Card blocking", "SMS alerts"],
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
              Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Banking Services
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
              Comprehensive financial solutions designed to meet all your banking needs with competitive rates and
              exceptional service.
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

      {/* Loans Section */}
      <section id="loans" ref={loansRef} className="bg-gray-50 relative overflow-hidden" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={loansInView ? { opacity: 1, y: 0 } : {}}
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
              Loans &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Advances
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
              Quick processing, competitive rates, and flexible repayment options for all your financial needs
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {loanProducts.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={loansInView ? { opacity: 1, y: 0 } : {}}
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
                className={`card-organic h-full ${index === 1 ? "slightly-off-3" : ""} ${index === 3 ? "slightly-off-4" : ""}`}
              >
                <div className="text-center h-full flex flex-col" style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="mb-7">
                    <loan.icon 
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
                    {loan.title}
                  </h3>
                  <p
                    className="text-black leading-relaxed mb-6 flex-grow"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {loan.description}
                  </p>
                  <div className="space-y-2">
                    {loan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
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
                          {feature}
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
            animate={loansInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.517,
              delay: 0.4,
              ease: [0.43, 0.195, 0.02, 1.01],
            }}
            className="text-center mt-12"
          >
            <button
              className="bg-gradient-to-r text-white font-medium px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(113deg, #2563eb 0%, #1e293b 100%)",
                fontSize: "17px",
                fontWeight: 525,
                padding: "11px 29px 13px 29px",
                borderRadius: "11px",
              }}
            >
              Apply for Loans
            </button>
          </motion.div>
        </div>
      </section>

      {/* Term Deposits Section */}
      <section id="deposits" ref={depositsRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "linear-gradient(127deg, #0ea5e9 0%, #0ea5e9 100%)",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={depositsInView ? { opacity: 1, y: 0 } : {}}
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
              Term{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Deposits
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
              Secure your future with our attractive fixed deposit schemes and flexible interest payment options
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {depositProducts.map((deposit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={depositsInView ? { opacity: 1, y: 0 } : {}}
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
                <div className="h-full flex flex-col" style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-center sm:text-left">
                    <h3
                      className="font-bold text-slate-800 mb-2 sm:mb-0"
                      style={{
                        fontSize: "21px",
                        fontWeight: 525,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {deposit.title}
                    </h3>
                    <span
                      className="px-3 py-1 bg-[#2563eb] text-white text-sm font-medium rounded-full mx-auto sm:mx-0 inline-block"
                      style={{
                        fontSize: "13px",
                        fontWeight: 525,
                        padding: "3px 11px 5px 11px",
                        borderRadius: "19px",
                      }}
                    >
                      {deposit.minAmount}
                    </span>
                  </div>
                  <p
                    className="text-black mb-6 leading-relaxed text-center flex-grow"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {deposit.description}
                  </p>
                  <div className="space-y-2">
                    {deposit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
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
                          {feature}
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
            animate={depositsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, delay: 0.4, ease: [0.43, 0.195, 0.02, 1.01] }}
            className="mt-12 text-[#f8fafc] relative overflow-hidden"
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
              Special Loan Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
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
                    Loan Against FDR
                  </div>
                  <div
                    className="text-black"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                    }}
                  >
                    Own deposit: +1% over FD rate, Third-party: +2%
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
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
                    Solar Loan Scheme
                  </div>
                  <div
                    className="text-black"
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.6,
                    }}
                  >
                    Fully secured: 10%, Unsecured (20% FDR): 11%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Account Types Section */}
      <section id="accounts" ref={accountsRef} className="bg-gray-50" style={{
        paddingTop: "89px",
        paddingBottom: "73px",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={accountsInView ? { opacity: 1, y: 0 } : {}}
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
              Account{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
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
              Choose the right account type that suits your financial goals and banking needs
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {accountTypes.map((account, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={accountsInView ? { opacity: 1, y: 0 } : {}}
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
                <div className="text-center" style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="mb-7">
                    <account.icon 
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
                    {account.title}
                  </h3>
                  <p
                    className="text-black leading-relaxed mb-6"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {account.description}
                  </p>
                  <div className="space-y-2">
                    {account.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div
                          className="bg-[#2563eb] rounded-full"
                          style={{
                            width: "3px",
                            height: "3px",
                          }}
                        />
                        <span
                          className="text-black"
                          style={{
                            fontSize: "15px",
                            fontWeight: 425,
                          }}
                        >
                          {feature}
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

      {/* Digital Services Section */}
      <section id="digital" ref={digitalRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "linear-gradient(113deg, #0ea5e9 0%, #0ea5e9 100%)",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={digitalInView ? { opacity: 1, y: 0 } : {}}
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
              Digital{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #1e293b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Banking
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
              Experience modern banking with our comprehensive digital services and mobile applications
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8 mb-12"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "27px 34px",
            }}
          >
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={digitalInView ? { opacity: 1, y: 0 } : {}}
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
                <div className="text-center" style={{ padding: "23px 29px 25px 29px" }}>
                  <div className="mb-7">
                    <service.icon 
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
                    {service.title}
                  </h3>
                  <p
                    className="text-black leading-relaxed mb-6"
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.7,
                      letterSpacing: "0.003em",
                    }}
                  >
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div
                          className="bg-[#2563eb] rounded-full"
                          style={{
                            width: "3px",
                            height: "3px",
                          }}
                        />
                        <span
                          className="text-black"
                          style={{
                            fontSize: "15px",
                            fontWeight: 425,
                          }}
                        >
                          {feature}
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
            animate={digitalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.517, delay: 0.3, ease: [0.43, 0.195, 0.02, 1.01] }}
            className="text-[#f8fafc] text-center relative overflow-hidden"
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
              Government Schemes Available
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                className="bg-white bg-opacity-20 rounded-xl"
                style={{
                  padding: "11px 17px 13px 17px",
                  borderRadius: "11px",
                }}
              >
                <div
                  className="font-semibold"
                  style={{
                    fontSize: "15px",
                    fontWeight: 525,
                  }}
                >
                  Atal Pension Yojana
                </div>
              </div>
              <div
                className="bg-white bg-opacity-20 rounded-xl"
                style={{
                  padding: "11px 17px 13px 17px",
                  borderRadius: "11px",
                }}
              >
                <div
                  className="font-semibold"
                  style={{
                    fontSize: "15px",
                    fontWeight: 525,
                  }}
                >
                  Jan Dhan Yojana
                </div>
              </div>
              <div
                className="bg-white bg-opacity-20 rounded-xl"
                style={{
                  padding: "11px 17px 13px 17px",
                  borderRadius: "11px",
                }}
              >
                <div
                  className="font-semibold"
                  style={{
                    fontSize: "15px",
                    fontWeight: 525,
                  }}
                >
                  Suraksha Bima
                </div>
              </div>
              <div
                className="bg-white bg-opacity-20 rounded-xl"
                style={{
                  padding: "11px 17px 13px 17px",
                  borderRadius: "11px",
                }}
              >
                <div
                  className="font-semibold"
                  style={{
                    fontSize: "15px",
                    fontWeight: 525,
                  }}
                >
                  Jeevan Jyoti Bima
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}