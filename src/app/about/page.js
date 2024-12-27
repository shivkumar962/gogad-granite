'use client'
import { useState, useEffect } from 'react';

const groupMembers = [
    {
      name: "Navratan Granites",
      description: "Manufacturers, Suppliers & Exporters Of Granite",
      image: "./product/team1.jpeg?height=300&width=400"
    },
    {
      name: "N N Marble & Granites",
      description: "Suppliers Of Superior Quality Marbles & Granite",
      image: "/./product/team2.jpeg?height=300&width=400"
    },
    {
      name: "Shreenath Mines",
      description: "Quality Deposits Of FISH BLACK Granite",
      image: "./product/team3.jpeg?height=300&width=400"
    }
  ];
  
const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % groupMembers.length);
        }, 3000); // Change the slide every 3 seconds
    
        return () => clearInterval(interval); // Cleanup on component unmount
      }, []);
    

    const displayedMembers = [
        groupMembers[(currentIndex) % groupMembers.length],
        groupMembers[(currentIndex + 1) % groupMembers.length],
        groupMembers[(currentIndex + 2) % groupMembers.length]
      ];
    


  return (<>

    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-lg">
            <img
              src="./product/about_first_img.jpeg?height=500&width=800"
              alt="Gogad granite warehouse with stone slabs"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tight">
                 <span className="font-light">Gogad Granite</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                <span className="font-semibold text-gray-900">Gogad Granite</span> Your trusted home for Quality Granite since 1995 ! Manufacturing Unit at Pali & Kishangarh ,Rajasthan. Open for RETAIL in PALI and BALOTRA.. The company has since grown to become a highly experienced and reliable supplier and installer of stone products. We assure clients that they will receive the best standards of product and service.
              </p>

              <p className="leading-relaxed">
                We offer manufacturing, supply and export of quality hard granite. In addition to specializing in marble, granite and reconstituted stone, Gogad Granite manufactures kitchen bench tops, shop fronts and staircases. Other applications of the range include:
              </p>

              <ul className="grid grid-cols-2 gap-2 pl-5 list-disc">
                <li>Wall cladding</li>
                <li>Paving</li>
                <li>Fireplaces</li>
                <li>Corporate fit-outs</li>
                <li>Bar tops</li>
                <li>Vanity tops</li>
                <li>Dining tables</li>
                <li>Custom furniture</li>
              </ul>

              <p className="leading-relaxed">
                Over 200 different types of natural stone slabs are in stock at our factory outlet, where the sales and customer service team provides professional advice in regards to pricing, design, manufacturing, installation and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* --------------------------------------------------- */}

<section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
          Gogad Granite <span className="font-bold">GROUP</span>
          </h2>
          <h3 className="text-2xl md:text-3xl mb-6">Members</h3>
          <p className="text-gray-600">
            Working together and sharing resources and expertise, Gogad Granite Group companies can benefit from increased efficiency, lower costs, and improved competitiveness in their respective markets.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="flex gap-8 overflow-hidden">
            {displayedMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col group hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + groupMembers.length) % groupMembers.length)}
              className="bg-black text-white p-3 rounded-full shadow-md"
            >
              &lt;
            </button>
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % groupMembers.length)}
              className="bg-black text-white p-3 rounded-full shadow-md"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>


</>
  );
};

export default About;

