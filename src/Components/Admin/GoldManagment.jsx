"use client"

import { useState } from "react"
import { Search, Eye, Edit } from "lucide-react"

// Updated gold data with form fields
const goldData = [
  {
    serialNumber: "SN001",
    origin: "Dubai",
    productionDate: "2024-01-14",
    weightType: "Kg",
    weight: "2.5",
    fineWeightInGrams: "2450.00",
    metalType: "GOLD",
    username: "goldbar001",
  },
  {
    serialNumber: "SN002",
    origin: "Lahore",
    productionDate: "2024-01-15",
    weightType: "Tola",
    weight: "10.5",
    fineWeightInGrams: "122.85",
    metalType: "SILVER",
    username: "silverbar002",
  },
  {
    serialNumber: "SN003",
    origin: "Karachi",
    productionDate: "2024-01-16",
    weightType: "Gram",
    weight: "500",
    fineWeightInGrams: "485.50",
    metalType: "GOLD",
    username: "goldbar003",
  },
  {
    serialNumber: "SN004",
    origin: "Dubai",
    productionDate: "2024-01-16",
    weightType: "Kg",
    weight: "1.2",
    fineWeightInGrams: "1180.75",
    metalType: "GOLD",
    username: "goldbar004",
  },
  {
    serialNumber: "SN005",
    origin: "Islamabad",
    productionDate: "2024-01-17",
    weightType: "Tola",
    weight: "15.8",
    fineWeightInGrams: "184.92",
    metalType: "SILVER",
    username: "silverbar005",
  },
  {
    serialNumber: "SN006",
    origin: "Faisalabad",
    productionDate: "2024-01-17",
    weightType: "Gram",
    weight: "750",
    fineWeightInGrams: "738.25",
    metalType: "GOLD",
    username: "goldbar006",
  },
]

export default function GoldManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [weightTypeFilter, setWeightTypeFilter] = useState("all")
  const [metalTypeFilter, setMetalTypeFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("")

  const filteredData = goldData.filter((item) => {
    const matchesSearch =
      item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.metalType.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesWeightType = weightTypeFilter === "all" || item.weightType.toLowerCase() === weightTypeFilter.toLowerCase()
    const matchesMetalType = metalTypeFilter === "all" || item.metalType.toLowerCase() === metalTypeFilter.toLowerCase()
    const matchesDate = dateFilter === "" || item.productionDate === dateFilter

    return matchesSearch && matchesWeightType && matchesMetalType && matchesDate
  })

  const getMetalTypeColor = (metalType) => {
    switch (metalType.toLowerCase()) {
      case "gold":
        return "text-yellow-600 bg-yellow-50"
      case "silver":
        return "text-gray-600 bg-gray-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getWeightTypeColor = (weightType) => {
    switch (weightType.toLowerCase()) {
      case "kg":
        return "text-green-600 bg-green-50"
      case "tola":
        return "text-blue-600 bg-blue-50"
      case "gram":
        return "text-purple-600 bg-purple-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Search Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Search className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600 font-medium">Search & Filter Gold/Silver Bars</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Serial number, origin, username..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight Type</label>
              <select
                value={weightTypeFilter}
                onChange={(e) => setWeightTypeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              >
                <option value="all">All Weight Types</option>
                <option value="kg">Kg</option>
                <option value="tola">Tola</option>
                <option value="gram">Gram</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Metal Type</label>
              <select
                value={metalTypeFilter}
                onChange={(e) => setMetalTypeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              >
                <option value="all">All Metal Types</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Production Date</label>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              />
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white border-gray-200  rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">All Metal Bars ({filteredData.length} items)</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-gray-200  border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Serial Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Origin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Production Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weight Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weight
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fine Weight (Grams)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Metal Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.serialNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                        {item.origin}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.productionDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getWeightTypeColor(item.weightType)}`}
                      >
                        {item.weightType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{item.fineWeightInGrams}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMetalTypeColor(item.metalType)}`}
                      >
                        {item.metalType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">{item.username}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <button className="inline-flex items-center justify-center h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="inline-flex items-center justify-center h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}