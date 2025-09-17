"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  History,
  ArrowUpDown,
  Minus,
  MessageSquare,
  Megaphone,
  Component,
  Code,
  Shield,
  LogOut,
  User,
  DollarSign,
  TrendingUp,
  Wallet,
  Star,
  Send,
  Settings,
  Menu,
  X,
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Referral Accounts" },
  { icon: History, label: "Account History" },
  { icon: ArrowUpDown, label: "Fund Transfer" },
  { icon: Minus, label: "Withdraw" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Megaphone, label: "Announcements" },
  { icon: Component, label: "Component Showcase" },
  { icon: Code, label: "Developer Handoff" },
  { icon: Shield, label: "Security Center" },
]

export default function MiniDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* User Profile Card */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300">
                <div className="p-6 pb-4 border-b border-gray-200">
                  <h3 className="flex items-center space-x-2 text-lg font-semibold">
                    <User className="w-5 h-5 text-blue-600" />
                    <span>User Profile</span>
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Username</p>
                    <p className="font-semibold text-gray-900">Ayan Tahir</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">User ID</p>
                    <p className="font-medium text-gray-700">ayantahir@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Package</p>
                    <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                      Silver
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Rating</p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="text-sm text-gray-500 ml-2">3 out of 5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Daily Profit */}
                <div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Daily Profit</h3>
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-green-600">$1.00/day</p>
                      <p className="text-xs text-gray-500">Based on Silver package</p>
                    </div>
                  </div>
                </div>

                {/* Referral Profit */}
                <div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Referral Profit</h3>
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-blue-600">$45.50</p>
                      <p className="text-xs text-gray-500">Total from all referrals</p>
                    </div>
                  </div>
                </div>

                {/* Current Balance */}
                <div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Current Balance</h3>
                      <Wallet className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-purple-600">$325.00</p>
                      <p className="text-xs text-gray-500">Total wallet balance</p>
                    </div>
                  </div>
                </div>

                {/* Direct Referrals */}
                <div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "400ms" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Direct Referrals</h3>
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-orange-600">10</p>
                      <p className="text-xs text-gray-500">People you referred</p>
                    </div>
                  </div>
                </div>

                {/* Indirect Referrals */}
                <div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "500ms" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Indirect Referrals</h3>
                      <Users className="w-5 h-5 text-pink-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-pink-600">5</p>
                      <p className="text-xs text-gray-500">Second-level referrals</p>
                    </div>
                  </div>
                </div>

                {/* Total Earnings */}
                <div
                  className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: "600ms" }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-600">Total Earnings</h3>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold text-green-600">$325.00</p>
                      <p className="text-xs text-gray-500">Lifetime earnings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Referral Profit Structure */}
            <div
              className="mt-8 bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: "700ms" }}
            >
              <div className="p-6 border-b border-gray-200">
                <h3 className="flex items-center space-x-2 text-lg font-semibold">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Referral Profit Structure</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center space-x-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600">10%</h3>
                      <p className="text-sm text-gray-600">Direct</p>
                      <p className="text-xs text-gray-500">Direct Referral Profit</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-600">3%</h3>
                      <p className="text-sm text-gray-600">Indirect</p>
                      <p className="text-xs text-gray-500">Indirect Referral Profit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "Withdraw":
        return (
          <div className="animate-fade-in-right">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="flex items-center space-x-2 text-xl font-semibold">
                    <Minus className="w-6 h-6 text-red-600" />
                    <span>Withdraw Funds</span>
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg">
                      <div className="p-4">
                        <div className="flex items-center space-x-3">
                          <Wallet className="w-8 h-8 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-600">Available Balance</p>
                            <p className="text-2xl font-bold text-green-600">$325.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="p-4">
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-8 h-8 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-600">Minimum Withdraw</p>
                            <p className="text-2xl font-bold text-blue-600">$10.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Withdraw Amount</label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300">
                        <option>Bank Transfer</option>
                        <option>PayPal</option>
                        <option>Crypto Wallet</option>
                      </select>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                      <Minus className="w-5 h-5 mr-2" />
                      Request Withdrawal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "Referral Accounts":
        return (
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="flex items-center space-x-2 text-lg font-semibold">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span>Direct Referrals</span>
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">User {i}</p>
                            <p className="text-sm text-gray-500">user{i}@example.com</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">$4.50</p>
                          <p className="text-xs text-gray-500">Earned</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: "200ms" }}
              >
                <div className="p-6 border-b border-gray-200">
                  <h3 className="flex items-center space-x-2 text-lg font-semibold">
                    <Users className="w-6 h-6 text-purple-600" />
                    <span>Indirect Referrals</span>
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">Indirect User {i}</p>
                            <p className="text-sm text-gray-500">indirect{i}@example.com</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-purple-600">$1.35</p>
                          <p className="text-xs text-gray-500">Earned</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "Account History":
        return (
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300">
              <div className="p-6 border-b border-gray-200">
                <h3 className="flex items-center space-x-2 text-lg font-semibold">
                  <History className="w-6 h-6 text-green-600" />
                  <span>Transaction History</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { type: "Referral Bonus", amount: "+$4.50", date: "2024-01-15", status: "Completed" },
                    { type: "Daily Profit", amount: "+$1.00", date: "2024-01-14", status: "Completed" },
                    { type: "Withdrawal", amount: "-$50.00", date: "2024-01-10", status: "Processing" },
                    { type: "Referral Bonus", amount: "+$4.50", date: "2024-01-08", status: "Completed" },
                    { type: "Daily Profit", amount: "+$1.00", date: "2024-01-07", status: "Completed" },
                  ].map((transaction, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.amount.startsWith("+") ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          {transaction.amount.startsWith("+") ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : (
                            <Minus className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold">{transaction.type}</p>
                          <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-semibold ${
                            transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {transaction.amount}
                        </p>
                        <p className="text-xs text-gray-500">{transaction.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "Fund Transfer":
        return (
          <div className="animate-fade-in-right">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="flex items-center space-x-2 text-xl font-semibold">
                    <ArrowUpDown className="w-6 h-6 text-blue-600" />
                    <span>Fund Transfer</span>
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="p-4">
                        <div className="flex items-center space-x-3">
                          <Wallet className="w-8 h-8 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-600">Available Balance</p>
                            <p className="text-2xl font-bold text-blue-600">$325.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg">
                      <div className="p-4">
                        <div className="flex items-center space-x-3">
                          <Send className="w-8 h-8 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-600">Transfer Fee</p>
                            <p className="text-2xl font-bold text-green-600">$0.50</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Email</label>
                      <input
                        type="email"
                        placeholder="Enter recipient email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Amount</label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Transfer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm animate-fade-in-up hover:shadow-lg transition-all duration-300">
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{activeTab}</h3>
                <p className="text-gray-500">This section is under development.</p>
              </div>
            </div>
          </div>
        )
    }
  }

  const handleMenuItemClick = (label) => {
    setActiveTab(label)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden lg:block w-64 bg-white shadow-lg border-r border-gray-200 animate-fade-in-left">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RM</span>
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">Referral Manager</h1>
              <p className="text-sm text-gray-500">Management System</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 hover:bg-gray-100 animate-fade-in-up ${
                activeTab === item.label
                  ? "bg-gray-100 text-blue-600 border-r-2 border-blue-600"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Sign Out */}
        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center justify-start px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-300">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RM</span>
                </div>
                <div>
                  <h1 className="font-semibold text-gray-900">Referral Manager</h1>
                  <p className="text-sm text-gray-500">Management System</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-4 space-y-2">
              {sidebarItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuItemClick(item.label)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 hover:bg-gray-100 ${
                    activeTab === item.label
                      ? "bg-gray-100 text-blue-600 border-r-2 border-blue-600"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Sign Out */}
            <div className="absolute bottom-4 left-4 right-4">
              <button className="w-full flex items-center justify-start px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-300">
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center space-x-2">
            {sidebarItems.find((item) => item.label === activeTab) && (
              <>
                {(() => {
                  const activeItem = sidebarItems.find((item) => item.label === activeTab)
                  return <activeItem.icon className="w-5 h-5 text-gray-600" />
                })()}
                <h1 className="text-lg font-semibold text-gray-900">{activeTab}</h1>
              </>
            )}
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        <div className="flex-1 p-4 lg:p-8">
          <div className="hidden lg:flex items-center justify-between mb-8 animate-fade-in-right">
            <div className="flex items-center space-x-2">
              {sidebarItems.find((item) => item.label === activeTab) && (
                <>
                  {(() => {
                    const activeItem = sidebarItems.find((item) => item.label === activeTab)
                    return <activeItem.icon className="w-6 h-6 text-gray-600" />
                  })()}
                  <h1 className="text-2xl font-semibold text-gray-900">{activeTab}</h1>
                </>
              )}
            </div>
          </div>

          {renderContent()}

          {/* Bottom Right Watermark */}
          <div className="fixed bottom-4 right-8 text-right text-gray-400 text-sm animate-fade-in">
            <div>Activate Windows</div>
            <div>Go to Settings to activate Windows.</div>
          </div>
        </div>
      </div>
    </div>
  )
}