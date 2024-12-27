

const companies = [
    {
      name: 'GRANITE',
      subtitle: 'VALLEY',
      description: 'offers a large and exclusive collection of exotic colours of natural granite, imported from rajasthan, india and even from locations available abroad.',
      logo: './product/rbgroup.png'
    },
    {
      name: 'NAVRATAN',
      subtitle: 'GRANITES',
      description: 'deals in variety of different types of granite, including imported and domestically sourced materials, to meet the needs of esteemed customers.',
        logo: './product/rbgroup.png'
    },
    {
      name: 'NN MARBLE',
      subtitle: '& GRANITE',
      description: 'offer a wide selection of marble products, such as slabs, tiles, and countertops. engaged in manufacturing, supply and export of quality stones.',
         logo: './product/rbgroup.png'
    },
    {
      name: 'SHREENATH',
      subtitle: 'MINES',
      description: 'situated in Ghatiyali Village, near Phagi, District Jaipur Rajasthan is one of our predominant mine. We are one of the leading marble producers with capacity of 10000 Tonnes',
      logo: './product/rbgroup.png'
    },
    {
      name: 'KHEJARLA',
      subtitle: 'GRANITES',
      description: 'situated in Bilara Tehsil Of Jodhpur District in Rajasthan and is well known for its signature red sandstone for with greate deposits of hard granite stones.',
      logo: './product/rbgroup.png'
    }
  ];
   function SisterConcerns() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center mb-16">
            <span className="text-4xl font-light"></span>{' '}
            <span className="text-4xl font-bold">CONCERNS</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {companies.map((company) => (
              <div 
                key={company.name}
                className="flex flex-col items-center text-center"
              >
                {/* Logo */}
                <div className="mb-4 w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-12 h-12"
                  />
                </div>
  
                {/* Company Name */}
                <h3 className="mb-3">
                  <span className="font-bold text-lg">{company.name}</span>
                  <br />
                  <span className="text-gray-600 text-lg">{company.subtitle}</span>
                </h3>
  
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  
  export default SisterConcerns