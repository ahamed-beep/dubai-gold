"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { QRCodeSVG } from "qrcode.react"
import { X } from "lucide-react";

const Verifygold = () => {
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
    if (serialNumber) {
      setShowCertificate(true)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  const handleButtonClick = () => {
    if (serialNumber) {
      setShowCertificate(true)
    } else {
      alert("Please enter serial number")
    }
  }

  const handleCloseModal = () => {
    setShowCertificate(false)
  }

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-2xl ">
        <h1 className="text-4xl mt-10 font-bold text-foreground mb-15 text-start md:ml-25">
          Verify Your <span className="text-[#F0B100]">Gold</span>
        </h1>
        <div className="space-y-6 md:ml-25 w-full md:w-250">
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
              className="md:w-250 border-gray-300 w-full h-9 px-3 border border-input rounded-md focus:outline-none focus:ring-0 focus:ring-ring focus:border-yellow-300"
            />
          </div>
          <hr className="border-t-1 border-gray-300" />
          <div className="pt-4">
            <button 
              type="button"
              onClick={handleButtonClick}
              className="bg-yellow-300 hover:bg-yellow-400 text-gray-600 text-sm px-5 py-2 rounded-md transition-colors duration-200"
            >
              VIEW CERTIFICATE
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Modal/Dialog - Full Screen */}
      {showCertificate && (
        <>
          {/* Fixed dark gradient background overlay - Full Screen */}
          <div 
            className="fixed inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-black opacity-80 z-40"
            onClick={handleCloseModal}
          ></div>

          <button
            onClick={handleCloseModal}
            className="fixed p-1 border-2 border-white top-4 right-8 z-50 bg-black text-white rounded-sm flex font-bold"
          >
            <X size={30} />
          </button>

          {/* Certificate Modal - Full Screen */}
          <div className="fixed inset-0 z-45">
            <div className="bg-white w-full h-full relative overflow-y-auto">
              <CertificatePopup serialNumber={serialNumber} />
            </div>
          </div>
        </>
      )}
    </main>
  )
}

const CertificatePopup = ({ serialNumber }) => {
  const websiteUrl = "https://dubaigold-barmaker.netlify.app/"
  const certificateRef = useRef(null)

  const downloadCertificate = () => {
    const printWindow = window.open('', '_blank');
    
    // Get the certificate HTML
    const certificateHtml = certificateRef.current.innerHTML;
    
    // Extract QR code as data URL
    const qrCanvas = document.createElement('canvas');
    const qrSvg = certificateRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(qrSvg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate ${serialNumber}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          @media print {
            body {
              margin: 0;
              padding: 20px;
            }
            .no-print {
              display: none !important;
            }
          }
          
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
            background: white;
            color: #1f2937;
            line-height: 1.5;
          }
          
          .certificate-container {
            max-width: 672px;
            margin: 0 auto;
            padding: 32px;
            background: white;
          }
          
          /* Header Styles */
          .header {
            text-align: center;
            margin-bottom: 32px;
          }
          
          .company-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #DB9500;
            margin-bottom: 8px;
          }
          
          .company-subtitle {
            font-size: 0.875rem;
            color: #4b5563;
          }
          
          /* Certificate Title */
          .certificate-title {
            text-align: center;
            margin-bottom: 32px;
          }
          
          .certificate-text {
            font-size: 1.875rem;
            font-weight: 600;
            color: #1f2937;
          }
          
          /* Details Section */
          .details-section {
            margin-bottom: 32px;
          }
          
          .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            font-size: 1.125rem;
            border-bottom: 1px solid #f3f4f6;
          }
          
          .detail-row:last-child {
            border-bottom: none;
          }
          
          .detail-label {
            font-weight: 600;
            color: #1f2937;
          }
          
          .detail-value {
            color: #374151;
            text-transform: uppercase;
          }
          
          .detail-value.normal-case {
            text-transform: none;
          }
          
          /* Certified Seller Section */
          .certified-section {
            margin-bottom: 32px;
          }
          
          .certified-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 16px;
          }
          
          .certified-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .seller-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .logo-container {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .logo-image {
            width: 40px;
            height: 40px;
            object-fit: contain;
          }
          
          .seller-text {
            font-size: 0.875rem;
            color: #DB9500;
            line-height: 1.4;
          }
          
          /* QR Code Section */
          .qr-section {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 24px;
          }
          
          .qr-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          /* Footer */
          .footer-text {
            margin-top: 32px;
            text-align: center;
            font-size: 0.875rem;
            color: #6b7280;
            line-height: 1.6;
          }
          
          /* QR Code SVG Styles */
          svg {
            display: block;
          }
        </style>
      </head>
      <body>
        <div class="certificate-container">
          <!-- Header -->
          <div class="header">
            <div class="company-title">DUBAI Gold/Silver-BarMaker</div>
            <div class="company-subtitle">Made in Pakistan</div>
          </div>

          <!-- Certificate Title -->
          <div class="certificate-title">
            <div class="certificate-text">Certificate</div>
          </div>

          <!-- Certificate Details -->
          <div class="details-section">
            <div class="detail-row">
              <span class="detail-label">Metal Type</span>
              <span class="detail-value">GOLD</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Weight</span>
              <span class="detail-value normal-case">50 g</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Fineness/Purity</span>
              <span class="detail-value normal-case">999.9</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Serial Number</span>
              <span class="detail-value normal-case">${serialNumber}</span>
            </div>
          </div>

          <!-- Certified Seller Section -->
          <div class="certified-section">
            <div class="certified-title">Certified Seller</div>
            <div class="certified-content">
              <div class="seller-info">
                <div class="logo-container">
                  <img src="/Images/newlogo.png" class="logo-image" alt="Logo" />
                </div>
                <div class="seller-text">
                  Dubai<br />
                  GOLD/SILVER-BARMAKER
                </div>
              </div>
            </div>
          </div>

          <!-- QR Code -->
          <div class="qr-section">
            <div class="qr-container">
              ${svgData}
            </div>
          </div>

          <!-- Footer Text -->
          <div class="footer-text">
            <p>This product ${serialNumber} and its certificate are not challengeable in any court of law.</p>
          </div>
        </div>
        
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              }
            }, 500);
          }
        </script>
      </body>
      </html>
    `);
    
    printWindow.document.close();
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Download Button */}
      <div className="p-4 text-right">
        <button
          onClick={downloadCertificate}
          className="bg-[#F0B100] hover:bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Download Certificate
        </button>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-8">
        <div ref={certificateRef} className="bg-white p-8 max-w-2xl w-full">
          {/* PAMP Header */}
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-[#DB9500] mb-2">DUBAI Gold/Silver-BarMaker</div>
            <div className="text-sm text-gray-600">Made in Pakistan</div>
          </div>

          {/* Certificate Title */}
          <div className="text-center mb-8">
            <div className="text-3xl font-semibold text-gray-800">
              Certificate 
            </div>
          </div>

          {/* Certificate Details */}
          <div className="space-y-4 mb-8 text-lg">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Metal Type</span>
              <span className="text-gray-700 uppercase">GOLD</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Weight</span>
              <span className="text-gray-700">50 g</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Fineness/Purity</span>
              <span className="text-gray-700">999.9</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">Serial Number</span>
              <span className="text-gray-700">{serialNumber}</span>
            </div>
          </div>

          {/* Certified Assayer Section */}
          <div className="mb-8">
            <div className="text-lg font-semibold text-gray-800 mb-4">Certified Seller</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center">
                  <img src="/Images/newlogo.png" className="w-10 h-10" />
                </div>
                <div className="text-sm text-[#DB9500]">
                  Dubai
                  <br />
                  GOLD/SILVER-BARMAKER
                </div>
              </div>
            </div>
          </div>

          {/* QR Code and VERISCAN */}
          <div className="flex items-end justify-between mb-6">
            <div className="flex flex-col items-center">
              <QRCodeSVG value={websiteUrl} size={120} level="M" includeMargin={false} />
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-sm text-gray-500 text-center">
            <p>This product {serialNumber} and its certificate are not challengeable in any court of law.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verifygold