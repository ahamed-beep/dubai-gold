"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { QRCodeSVG } from "qrcode.react"
import { X } from "lucide-react";
import { toast } from "react-toastify";

const Verifygold = () => {
  const [itemCode, setItemCode] = useState("")
  const [serialNumber, setSerialNumber] = useState("")
  const [showCertificate, setShowCertificate] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showCertificate) {
      // Disable scrolling
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showCertificate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (itemCode && serialNumber) {
      setShowCertificate(true)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  const handleButtonClick = () => {
    if (itemCode && serialNumber) {
      setShowCertificate(true)
    } else {
      // Optional: Show alert if fields are empty
      toast.info("Please enter both item code and serial number")
    }
  }

  const handleCloseModal = () => {
    setShowCertificate(false)
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-2xl ">
        <h1 className="text-4xl   mt-10 font-bold text-foreground mb-15 text-start md:ml-25">
          Verify Your <span className=" text-[#F0B100]">Gold</span>
        </h1>
        <div className="space-y-6 md:ml-25 w-full md:w-250">
          <div className="space-y-2">
            <label htmlFor="item-code" className="text-sm font-medium text-muted-foreground">
              Item code
            </label>
            <input
              id="item-code"
              type="text"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
              onKeyPress={handleKeyPress}
              className="md:w-250 border-gray-300  w-full h-9 px-3 border border-input  rounded-md focus:outline-none focus:ring-0 focus:ring-ring focus:border-yellow-300"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="item-serial" className="text-sm font-medium text-muted-foreground">
              Item serial number
            </label>
            <input
              id="item-serial"
              type="text"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              onKeyPress={handleKeyPress}
              className="md:w-250 border-gray-300  w-full h-9 px-3 border border-input  rounded-md focus:outline-none focus:ring-0 focus:ring-ring focus:border-yellow-300"
            />
          </div>
          <hr className="border-t-1 border-gray-300" />
          <div className="pt-4">
            <button 
              type="button"
              onClick={handleButtonClick}
              className="bg-yellow-300 hover:bg-yellow-400 text-gray-600  text-sm px-5 py-2 rounded-md transition-colors duration-200"
            >
              VIEW CERTIFICATE
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Modal/Dialog */}
      {showCertificate && (
        <>
          {/* Fixed dark gradient background overlay */}
          <div 
            className="fixed inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-black opacity-60 z-40"
            onClick={handleCloseModal}
          ></div>

          <button
            onClick={handleCloseModal}
            className="fixed p-1 border-2 border-white  top-4 right-8 z-50  bg-black  text-white  rounded-sm  flex   font-bold "
          >
            <X   size={30} />
          </button>

          {/* Certificate Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-45 p-4 overflow-y-auto">
            <div className="bg-white rounded-lg max-w-md w-full relative shadow-2xl my-8">
              <CertificatePopup itemCode={itemCode} serialNumber={serialNumber} />
            </div>
          </div>
        </>
      )}
    </main>
  )
}

const CertificatePopup = ({ itemCode, serialNumber }) => {
  const websiteUrl = "https://dubaigold-barmaker.netlify.app/"
  const certificateRef = useRef(null)

  return (
    <div className="relative">
      <div ref={certificateRef} className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
        {/* PAMP Header */}
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-[#DB9500] mb-1">DUBAI
Gold-BarMaker</div>
          <div className="text-xs text-gray-600">Produits Artistiques Metaux Precieux</div>
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-6">
          <div className="text-lg font-semibold text-gray-800">
            Certificate <span className="font-normal">{serialNumber}</span>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">Metal</span>
            <span className="text-gray-700">Gold</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">Weight</span>
            <span className="text-gray-700">50 g</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">Fineness</span>
            <span className="text-gray-700">999.9</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-800">Item Code</span>
            <span className="text-gray-700">{itemCode}</span>
          </div>
        </div>

        {/* Certified Assayer Section */}
        <div className="mb-6">
          <div className="text-sm font-semibold text-gray-800 mb-2">Certified Assayer</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">EA</span>
              </div>
              <div className="text-xs text-gray-600">
                ESSAYEUR
                <br />
                FONDEUR
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm italic text-gray-700">Maria Campbell</div>
            </div>
          </div>
        </div>

        {/* QR Code and VERISCAN */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col items-center">
            <QRCodeSVG value={websiteUrl} size={80} level="M" includeMargin={false} />
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-[#DB9500]">VERISCAN</div>
            <div className="text-xs text-gray-500">Verification System</div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>The information provided in this certificate solely applies</p>
          <p>to the sample submitted and identified by the serial number</p>
          <p>and the serial number {serialNumber}</p>
        </div>

        {/* Version */}
        <div className="mt-4 text-xs text-gray-400 text-right">Ver. 1.0.11</div>
      </div>
    </div>
  )
}

export default Verifygold