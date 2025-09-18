"use client"

import { useState } from "react"
import { Search, Eye, Edit } from "lucide-react"

// Sample gold data
const goldData = [
  {
    goldId: "G001",
    name: "24K Gold Bar",
    type: "gold@example.com",
    category: "Direct",
    package: "Package 1",
    price: "$1,850.00",
    quantity: 3,
    status: "Active",
    date: "14/01/2024",
  },
  {
    goldId: "G002",
    name: "Gold Coins",
    type: "coins@example.com",
    category: "Indirect",
    package: "Package 3",
    price: "$2,320.50",
    quantity: 7,
    status: "Active",
    date: "15/01/2024",
  },
  {
    goldId: "G003",
    name: "Gold Jewelry",
    type: "jewelry@example.com",
    category: "Admin",
    package: "Package 2",
    price: "$950.00",
    quantity: 0,
    status: "Active",
    date: "16/01/2024",
  },
  {
    goldId: "G004",
    name: "Gold Nuggets",
    type: "nuggets@example.com",
    category: "Direct",
    package: "Package 4",
    price: "$1,275.25",
    quantity: 1,
    status: "Inactive",
    date: "16/01/2024",
  },
  {
    goldId: "G005",
    name: "Gold Bullion",
    type: "bullion@example.com",
    category: "Direct",
    package: "Package 1",
    price: "$3,200.00",
    quantity: 5,
    status: "Active",
    date: "17/01/2024",
  },
  {
    goldId: "G006",
    name: "Gold Chains",
    type: "chains@example.com",
    category: "Indirect",
    package: "Package 5",
    price: "$1,450.75",
    quantity: 12,
    status: "Active",
    date: "17/01/2024",
  },
]

export default function GoldManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredData = goldData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.goldId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category.toLowerCase() === categoryFilter.toLowerCase()
    const matchesStatus = statusFilter === "all" || item.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesCategory && matchesStatus
  })

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "direct":
        return "text-green-600 bg-green-50"
      case "indirect":
        return "text-blue-600 bg-blue-50"
      case "admin":
        return "text-purple-600 bg-purple-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getStatusColor = (status) => {
    return status.toLowerCase() === "active" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Search Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Search className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600 font-medium">Search & Filter Gold</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Gold</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name, type, or gold ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category Type</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              >
                <option value="all">All Types</option>
                <option value="direct">Direct</option>
                <option value="indirect">Indirect</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white border-gray-200  rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">All Gold ({filteredData.length} items)</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-gray-200  border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gold ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Package
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                 
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Date
                  </th>
                 
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.goldId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.goldId}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">{item.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}
                      >
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.package}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{item.price}</td>
                  
                   
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                    
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