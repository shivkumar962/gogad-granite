
import { FaTruck, FaCogs, FaHandshake, FaGlobeAmericas } from 'react-icons/fa';

const services = [
  {
    icon: FaTruck,
    title: 'MINING',
    bgColor: 'bg-white',
    iconColor: 'text-yellow-500',
  },
  {
    icon: FaCogs,
    title: 'MANUFACTURING',
    bgColor: 'bg-slate-800',
    iconColor: 'text-orange-400',
  },
  {
    icon: FaHandshake,
    title: 'SUPPLY',
    bgColor: 'bg-white',
    iconColor: 'text-orange-500',
  },
  {
    icon: FaGlobeAmericas,
    title: 'EXPORT',
    bgColor: 'bg-white',
    iconColor: 'text-blue-400',
  },
];

 function AboutSection() {
  return (
    <section className="py-16 bg-gray-100 px-5 lg:px-32">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-4xl font-light mr-2">About</span>{' '}
          <span className="text-4xl font-bold">Gogad Granite</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src="./product/rboffice.jpg?height=400&width=600"
              alt="Modern office interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700">
              <span className="font-semibold">Gogad Granite</span> was established in Kishangarh from 1995. The company has since grown to become a highly experienced and reliable supplier and installer of stone products. We assure clients that they will receive the best standards of product and service.
            </p>

            <p className="text-gray-700">
              We offer manufacturing, supply and export of quality hard granite. In addition to specializing in marble, granite and reconstituted stone. Gogad Granite manufactures kitchen bench tops, shop fronts and staircases. Other applications of the range include: wall cladding; paving; fireplaces; corporate fit-outs; bar tops; vanity tops; dining and coffee tables; and custom furniture.
            </p>

            <p className="text-gray-700">
              Over 200 different types of natural stone slabs are in stock at our factory outlet, where the sales and customer service team provides professional advice in regards to pricing, design, manufacturing, installation and maintenance.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.bgColor} p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center`}
            >
              <service.icon 
                className={`w-12 h-12 ${service.iconColor} mb-4`}
              />
              <h3 className={`font-medium ${service.bgColor === 'bg-slate-800' ? 'text-white' : 'text-gray-800'}`}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection