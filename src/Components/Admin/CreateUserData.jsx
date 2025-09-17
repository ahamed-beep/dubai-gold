"use client"

import { useState } from "react"
import { ChevronDown, Upload, CheckCircle } from "lucide-react"

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    username: "",
    accountType: "Kg",
    firstName: "",
    lastName: "",
    type: ""
  })

  const [showToast, setShowToast] = useState(false)

  const initialFormData = {
    username: "",
    accountType: "Kg", 
    firstName: "",
    lastName: "",
    type: ""
  }

  const handleReset = () => {
    setFormData(initialFormData)
  }

  const handleSubmit = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  const handleNumberChange = (field, value) => {
    // Prevent negative values
    if (value === '' || parseFloat(value) >= 0) {
      setFormData({ ...formData, [field]: value })
    }
  }

  return (
    <div className="w-full bg-white shadow-sm border border-gray-200 rounded-lg relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-slide-in">
          <CheckCircle className="h-5 w-5" />
          <span>Reminder added successfully!</span>
        </div>
      )}

      <div className="p-6 space-y-6">
        {/* Bar Number */}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Bar Number
          </label>
          <div className="relative">
            <input
              id="username"
              type="text"
              placeholder="00000"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full pl-3 pr-10 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Weight Type */}
        <div className="space-y-2">
          <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
            Weight Type
          </label>
          <div className="relative">
            <select
              id="accountType"
              value={formData.accountType}
              onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="Kg">Kg</option>
              <option value="Tola">Tola</option>
              <option value="Gram">Gram</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Weight */}
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Weight
          </label>
          <input
            id="firstName"
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter weight"
            value={formData.firstName}
            onChange={(e) => handleNumberChange('firstName', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Fine Weight In Grams */}
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Fine Weight In Grams
          </label>
          <input
            id="lastName"
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter fine weight"
            value={formData.lastName}
            onChange={(e) => handleNumberChange('lastName', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Type */}
        <div className="space-y-2">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Type
          </label>
          <input
            id="type"
            type="text"
            placeholder="Enter type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button 
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-transparent border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit Data
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}