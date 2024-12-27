
export default function Contactus() {
  return (
    <div className='mt-20'>
 <div className="bg-gray-900 text-white">
      <header className="bg-gray-900 text-white py-16 -mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-center">
          Contact <span className="font-normal">Us</span>
        </h1>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white text-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-light mb-8">Contact Detail</h2>
            
            <div className="space-y-4">
              <p className="text-lg">Ranmal ji Bhansali</p>
              
              <div className="space-y-3">
                <p className="text-lg">
                  <span className="font-medium">Mobile: </span>
                  <a 
                    href="tel:+919829028265" 
                    className="hover:text-blue-600 transition-colors"
                  >
                    +91 98290 28265
                  </a>
                </p>
                
                <p className="text-lg">
                  <span className="font-medium">Email: </span>
                  <a 
                    href="mailto:pulkitmoondra14251923@gmail.com" 
                    className="hover:text-blue-600 transition-colors break-all"
                  >
                    bhansali.rajkumar@yahoo.in
                  </a>
                </p>
              </div>
              <p className="text-lg">Gogad Granites pvt. Ltd, 4th Phase, Pali Rajasthan 306401</p>

            </div>
          </div>

          {/* Map Section */}
          <div className="h-[400px] md:h-full min-h-[400px] relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.3026849742087!2d74.85818081544384!3d26.47659998431894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6e89d8a3d1d%3A0x1c8c6b5c1f7c1b1a!2sRIICO%20Industrial%20Area%2C%20Madanganj-Kishangarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1629789145684!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            />
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
