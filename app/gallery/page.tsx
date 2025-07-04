"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Camera } from "lucide-react"
import Navigation from "@/components/navigation"
import Image from "next/image"

export default function GalleryPage() {
  const heroRef = useRef(null)
  const galleryRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  const galleryImages = [
    "/Gallery/gallery1.png",
    "/Gallery/gallery2.png",
    "/Gallery/gallery3.png",
    "/Gallery/gallery4.png",
    "/Gallery/gallery5.png",
    "/Gallery/gallery6.png",
    "/Gallery/gallery7.png",
    "/Gallery/gallery8.png",
    "/Gallery/gallery9.png",
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative noise-overlay">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden" style={{
        minHeight: "91vh",
        paddingTop: "127px",
        paddingBottom: "89px",
        background:"white"
      }}>
        

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
                <Camera 
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
              Photo{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Gallery
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
              Explore our journey through images - from our branches and events to achievements and milestones that
              define our 40-year legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section ref={galleryRef} className="relative overflow-hidden" style={{
        paddingTop: "73px",
        paddingBottom: "89px",
        background: "f8f8f8",
      }}>
        <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
          <motion.div
            initial={{ opacity: 0, y: 51 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
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
                  background: "linear-gradient(127deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Journey
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
              A visual story of our growth, achievements, and community service over four decades
            </p>
          </motion.div>

          <div
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "23px 29px",
            }}
          >
            {galleryImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 43 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
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
                className={`card-organic overflow-hidden ${index === 2 ? "slightly-off-3" : ""} ${index === 5 ? "slightly-off-4" : ""}`}
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={`Gallery image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{
                        borderRadius: "11px 11px 0 0",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}