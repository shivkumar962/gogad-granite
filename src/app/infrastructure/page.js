'use client'
import React, { useEffect, useState } from 'react'
import { MdLocalShipping, MdSettings, MdInventory } from 'react-icons/md'
import { FaGlobeAmericas } from 'react-icons/fa'

const strengths = [
  "Precision Cutting",
  "Mirror Finish Polishing",
  "Mechanized Loading and Unloading",
  "Experienced and skilled workforce.",
  "Scientific Standards in production",
  "Large processing center with stockyard",
  "Most advanced equipments from mining to processing",
  "Ability to provide high-quality products and services.",
  "Strong network of suppliers and manufacturers for sourcing raw materials.",
  "Advanced technology and equipment for processing and finishing of stones."
]

const services = [
  { icon: <MdLocalShipping size={48} />, title: "MINING" },
  { icon: <MdSettings size={48} />, title: "MANUFACTURING" },
  { icon: <MdInventory size={48} />, title: "SUPPLY" },
  { icon: <FaGlobeAmericas size={48} />, title: "EXPORT" }
]




function Infra() {



  const [isVisible, setIsVisible] = useState(false)

  const values = [
    { name: "Customer Satisfaction", percentage: 95 },
    { name: "Quality And Craftsmanship", percentage: 99 },
    { name: "Product Innovation", percentage: 97 },
    { name: "Environmental Responsibility", percentage: 95 },
    { name: "Teamwork", percentage: 95 }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])









  return (
    <div>

      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(./infra1.jpg?height=1080&width=1920)`,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',

          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Next Generation</h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">STONES
          </h2>
          <p className="text-xl md:text-2xl">Gogad Granite
          </p>
        </div>

        {/* Phone Button */}
        <a
          href="tel:+91 98290 28265"
          className="fixed bottom-8 right-8 z-20 bg-red-600 rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors"
          aria-label="Call us"
        >

        </a>
      </div>

      {/* ----------------------------------------------- */}



      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="./product/cbrmockup1.png?height=400&width=600"
              alt="Marble slabs in warehouse"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Strengths Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">STRENGTHS</h2>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-700 mt-1">»</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-4 bg-white shadow-sm hover:shadow-md transition-shadow ${service.title === "MANUFACTURING" ? "bg-gray-900 text-white" : ""
                }`}
            >
              {React.cloneElement(service.icon, {
                className: service.title === "MANUFACTURING" ? "text-orange-500" : "text-gray-700"
              })}
              <h3 className="font-medium ">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}

      <div className="bg-red-600 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-light text-white mb-12">
            Business <span className="font-normal">VALUES</span>
          </h2>

          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span className="text-lg">{value.name}</span>
                  <span className="text-lg">{value.percentage}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${value.percentage}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}

    </div>
  )
}


export default Infra