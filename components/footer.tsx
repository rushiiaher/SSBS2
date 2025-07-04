"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="bg-[#141414] text-[#ffffff] relative overflow-hidden"
      style={{ paddingTop: "67px", paddingBottom: "43px" }}
    >
      <div className="container mx-auto" style={{ maxWidth: "1240px", paddingInline: "23px" }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-4 mb-7">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "60px",
                  height: "60px",
                }}
              >
                <Image
                  src="/imgs/logo.jpg"
                  alt="Sadhana Sahakari Bank Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <div>
                <span
                  className="font-bold"
                  style={{
                    fontSize: "21px",
                    fontWeight: 625,
                  }}
                >
                  SSB Ltd
                </span>
                <div
                  className="text-[#b6afa4]"
                  style={{
                    fontSize: "13px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  EST. 1984
                </div>
              </div>
            </div>
            <p
              className="text-[#b6afa4] leading-relaxed"
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                letterSpacing: "0.003em",
              }}
            >
              Four decades of treating people like humans, not account numbers. SADHANA SAHAKARI BANK LTD still going strong in Nagpur.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4
              className="font-semibold mb-5"
              style={{
                fontSize: "19px",
                fontWeight: 525,
              }}
            >
              Quick stuff
            </h4>
            <div className="space-y-3">
              <a
                href="/about"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                About Us
              </a>
              <a
                href="/services"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                Services
              </a>
              <a
                href="/mobile-banking"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                Mobile Banking
              </a>
              <a
                href="/annual-reports"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                Annual Reports
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4
              className="font-semibold mb-5"
              style={{
                fontSize: "19px",
                fontWeight: 525,
              }}
            >
              What we do
            </h4>
            <div className="space-y-3">
              <a
                href="/services"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                Loans & Advances
              </a>
              <a
                href="/services"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                Term Deposits
              </a>
              <a
                href="/services"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                Savings Account
              </a>
              <a
                href="/services"
                className="block text-[#b6afa4] hover:text-[#ffffff] transition-colors"
                style={{
                  fontSize: "17px",
                  transitionDuration: "267ms",
                }}
              >
                Current Account
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4
              className="font-semibold mb-5"
              style={{
                fontSize: "19px",
                fontWeight: 525,
              }}
            >
              Find us
            </h4>
            <div
              className="space-y-3 text-[#b6afa4]"
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                fontFamily: "var(--font-mono)",
              }}
            >
              <p>Jaripatka, Nagpur</p>
              <p>IFSC: IBKL0041SSB</p>
              <p>MICR: 440207000</p>
            </div>
          </div>
        </div>

        <div
          className="border-t border-[#7d7d7d] mt-11 pt-7 text-center text-[#b6afa4]"
          style={{
            marginTop: "43px",
            paddingTop: "29px",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
            }}
          >
            &copy; 2024 SADHANA SAHAKARI BANK LTD. All rights reserved. | Developed by Trust Systems & Software (I)
            Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  )
}