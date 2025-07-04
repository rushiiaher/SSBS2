"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { X, Phone, MapPin, Users, Award, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Image from "next/image"

interface Member {
  id: string
  name: string
  designation: string
  mobile: string
  address: string
  image: string
}

export default function OrganizationPage() {
  const heroRef = useRef(null)
  const organizationRef = useRef(null)
  const statsRef = useRef(null)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const heroInView = useInView(heroRef, { once: true })
  const organizationInView = useInView(organizationRef, { once: true })
  const statsInView = useInView(statsRef, { once: true })

  const members: Member[] = [
    {
      id: "img1",
      name: "Shri Ghanshyam Hasanand Kukreja",
      designation: "Chairman",
      mobile: "9372330001",
      address: "91/92, Kukreja Niwas, Jaripatka, Nagpur–14",
      image: "/imgs/img1.jpg"
    },
    {
      id: "img2",
      name: "Smt. Pramila Pritam Mathrani",
      designation: "Vice Chairman",
      mobile: "7219013950",
      address: "Plot No. 372, Near Radhaswami Satsang, Jaripatka, Nagpur–14",
      image: "/imgs/img2.jpg"
    },
    {
      id: "img17",
      name: "Mr. Milind Pandurang Kulkarni",
      designation: "Chief Executive Officer",
      mobile: "9850301876",
      address: "Near Sai Mandir, Plot No. 10 'Guruprasad', Ayodhya Nagar, Nagpur–440024",
      image: "/imgs/img17.jpg"
    },
    {
      id: "img3",
      name: "Adv. Shri Vinod Deepchand Lalwani",
      designation: "Director",
      mobile: "9823086834",
      address: "Flat No. C‑501, J.P. Heights, 5th Floor, Byaramji Town, Nagpur",
      image: "/imgs/img3.jpg"
    },
    {
      id: "img4",
      name: "Shri Bhojraj (Papubhai) Tejumal Kewalramani",
      designation: "Director",
      mobile: "9822929856",
      address: "95‑96, Kukreja Nagar, Jaripatka, Nagpur–14",
      image: "/imgs/img4.jpg"
    },
    {
      id: "img5",
      name: "Shri Kishanlal H. Ramnani",
      designation: "Director",
      mobile: "9325539060 / 9325471204",
      address: "Plot no. 50 Bank Colony, Jaripatka, Nagpur–14",
      image: "/imgs/img5.jpg"
    },
    {
      id: "img6",
      name: "Shri Kishan P. Assudani",
      designation: "Director",
      mobile: "9326889553 / 9823192802 / 9372648678",
      address: "Plot no 679, Hemu Colony Chowk, Jaripatka, Nagpur–14",
      image: "/imgs/img6.jpg"
    },
    {
      id: "img7",
      name: "Shri Vijay S. Gaur",
      designation: "Director",
      mobile: "9923458882",
      address: "Om Aasra Sadan, Hansapuri Khadan, Nagpur",
      image: "/imgs/img7.jpg"
    },
    {
      id: "img8",
      name: "Shri Vinky M. Rughwani",
      designation: "Director",
      mobile: "9373107141",
      address: "22, Sindhu Nagar, Jaripatka, Nagpur–14",
      image: "/imgs/img8.jpg"
    },
    {
      id: "img9",
      name: "Smt. Priyanka U. Panjwani",
      designation: "Director",
      mobile: "9028002238",
      address: "Plot No. 18‑19, 'Suryoday', Real Patel Layout, Ring Road,Jaripatka, Nagpur–14",
      image: "/imgs/img9.jpg"
    },
    {
      id: "img10",
      name: "Adv. Shri Shrichand G. Chawla",
      designation: "Director",
      mobile: "9422090550 / 9373861175",
      address: "120, Chawla Bhavan, Jaripatka, Nagpur–14",
      image: "/imgs/img10.jpg"
    },
    {
      id: "img11",
      name: "Shri Virendra J. Ahuja",
      designation: "Director",
      mobile: "9823040970",
      address: "Plot No. 15, Kungu Colony, Near Samadha Asharam, Jaripatka, Nagpur–14",
      image: "/imgs/img11.jpg"
    },
    {
      id: "img12",
      name: "Shri Santosh A. Dembla",
      designation: "Co‑Opt Director",
      mobile: "9371111735",
      address: "Plot 66, Kukreja Nagar, Jaripatka, Nagpur–14",
      image: "/imgs/img12.jpg"
    },
    {
      id: "img13",
      name: "Shri Virendra G. Kukreja",
      designation: "Director",
      mobile: "9822231199",
      address: "91/92, Kukreja Niwas, Jaripatka, Nagpur–14",
      image: "/imgs/img13.jpg"
    },
    {
      id: "img14",
      name: "Shri Shyam H. Jeswani",
      designation: "Director",
      mobile: "9373402122",
      address: "Block No. 338, Jaripatka, Nagpur–14",
      image: "/imgs/img14.jpg"
    },
    {
      id: "img15",
      name: "Smt Sonika Bhushan Khubchandani",
      designation: "Director",
      mobile: "9823606062",
      address: "Block No 14‑B, Near Mahatma Gandhi School, Jaripatka, Nagpur–14",
      image: "/imgs/img15.jpg"
    },
    {
      id: "img16",
      name: "Shri Amitabh Bihari Meshram",
      designation: "Director",
      mobile: "9011711642",
      address: "Plot no 134, Nara Road, Bhim Chowk, Jaripatka, Nagpur–14",
      image: "/imgs/img16.jpg"
    }
  ]

  const chairman = members.find(m => m.designation === "Chairman")
  const viceChairman = members.find(m => m.designation === "Vice Chairman")
  const ceo = members.find(m => m.designation === "Chief Executive Officer")
  const directors = members.filter(m => m.designation.includes("Director") && m.designation !== "Co‑Opt Director")
  const coOptDirector = members.find(m => m.designation === "Co‑Opt Director")

  const stats = [
    {
      icon: Users,
      value: "17",
      label: "Leadership Team",
      color: "from-[#2563eb] to-[#1e293b]",
    },
    {
      icon: Award,
      value: "40+",
      label: "Years Experience",
      color: "from-[#0ea5e9] to-[#2563eb]",
    },
    {
      icon: Building2,
      value: "5",
      label: "Branch Network",
      color: "from-[#0ea5e9] to-[#0ea5e9]",
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#0ea5e9]"
        style={{
          minHeight: "60vh",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute rounded-full opacity-20"
            style={{
              top: "10%",
              right: "10%",
              width: "200px",
              height: "200px",
              background: "linear-gradient(127deg, #0ea5e9 0%, #2563eb 100%)",
              transform: "rotate(45deg)",
            }}
          />
          <div
            className="absolute rounded-full opacity-15"
            style={{
              bottom: "20%",
              left: "15%",
              width: "150px",
              height: "150px",
              background: "linear-gradient(113deg, #0ea5e9 0%, #0ea5e9 100%)",
              transform: "rotate(-30deg)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={heroInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#1e293b] rounded-2xl mb-6 shadow-lg">
                <Users className="w-10 h-10 text-[#f8fafc]" />
              </div>
            </motion.div>

            <h1
              className="font-bold text-slate-800 mb-6 leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
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
                Leadership Team
              </span>
            </h1>
            <p
              className="text-black max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
            >
              Meet the visionary leaders who guide SADHANA SAHAKARI BANK LTD towards excellence, 
              innovation, and unwavering commitment to our community's financial growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-[#f8fafc]" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-black font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section ref={organizationRef} className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#0ea5e9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Chairman */}
          {chairman && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={organizationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-20"
            >
              <Card 
                className="cursor-pointer hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-[#f8fafc] to-[#0ea5e9] border-0 transform hover:-translate-y-2"
                onClick={() => setSelectedMember(chairman)}
              >
                <CardContent className="p-10 text-center relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#2563eb] to-[#1e293b] rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-[#f8fafc]" />
                  </div>
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-br from-[#2563eb] to-[#1e293b]">
                      <Image
                        src={chairman.image}
                        alt={chairman.name}
                        width={120}
                        height={120}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{chairman.name}</h3>
                  <p className="text-black font-semibold text-lg mb-2">{chairman.designation}</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#1e293b] mx-auto rounded-full"></div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Vice Chairman & CEO */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
            {viceChairman && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={organizationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 bg-gray-50 border-0 h-full transform hover:-translate-y-1"
                  onClick={() => setSelectedMember(viceChairman)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-[#0ea5e9] to-[#2563eb]">
                        <Image
                          src={viceChairman.image}
                          alt={viceChairman.name}
                          width={88}
                          height={88}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{viceChairman.name}</h3>
                    <p className="text-black font-medium">{viceChairman.designation}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {ceo && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={organizationInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 bg-gray-50 border-0 h-full transform hover:-translate-y-1"
                  onClick={() => setSelectedMember(ceo)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-[#0ea5e9] to-[#2563eb]">
                        <Image
                          src={ceo.image}
                          alt={ceo.name}
                          width={88}
                          height={88}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{ceo.name}</h3>
                    <p className="text-black font-medium">{ceo.designation}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Directors */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={organizationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Board of Directors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#1e293b] mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {directors.map((director, index) => (
                <motion.div
                  key={director.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={organizationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 bg-gray-50 border-0 group transform hover:-translate-y-1"
                    onClick={() => setSelectedMember(director)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full p-1 bg-gradient-to-br from-[#0ea5e9] to-[#0ea5e9] group-hover:from-[#0ea5e9] group-hover:to-[#2563eb] transition-all duration-300">
                          <Image
                            src={director.image}
                            alt={director.name}
                            width={72}
                            height={72}
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-slate-800 mb-1 leading-tight">{director.name}</h3>
                      <p className="text-black text-xs">{director.designation}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Co-Opt Director */}
          {coOptDirector && (
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={organizationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#0ea5e9] to-[#f8fafc] border-0 transform hover:-translate-y-1"
                  onClick={() => setSelectedMember(coOptDirector)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-[#0ea5e9] to-[#2563eb]">
                        <Image
                          src={coOptDirector.image}
                          alt={coOptDirector.name}
                          width={88}
                          height={88}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{coOptDirector.name}</h3>
                    <p className="text-black font-medium">{coOptDirector.designation}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Member Details Popup */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1e293b]/60 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-gray-50 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-black hover:text-slate-800 hover:bg-blue-50 rounded-full w-10 h-10"
                onClick={() => setSelectedMember(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-br from-[#2563eb] to-[#1e293b] mb-6">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    width={120}
                    height={120}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedMember.name}</h3>
                <p className="text-black font-semibold text-lg mb-4">{selectedMember.designation}</p>
                <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#1e293b] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50/30 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#1e293b] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#f8fafc]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">Contact Number</p>
                    <p className="text-black">{selectedMember.mobile}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50/30 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#1e293b] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f8fafc]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">Address</p>
                    <p className="text-black leading-relaxed">{selectedMember.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}