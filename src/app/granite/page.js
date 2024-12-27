



const marbleItems = [
    { id: 1, name: "WONDER WHITE",  image: "./product/rosypink.jpg", hasFrame: true },
    { id: 2, name: "s-white.jpg", image: "./product/s-white.jpg" },
    {
      id: 3,
      name: "Commando brown",
      image: "./product/commandobrown.jpg",
    },
    {
      id: 4,
      name: "nosera-green",
      image: "./product/nosera-green.jpg",
    },
    { id: 5, name: "markinomain", image: "./product/markinomain.jpg" },
    { id: 6, name: "steel-grey", image: "./product/steel-grey.jpg" },
    { id: 7, name: "hassan-green", image: "./product/hassan-green.jpg" },
    { id: 8, name: "jirawal-white", image: "./product/jirawal-white.jpg" },
    { id: 9, name: "crystal-yellow", image: "./product/crystal-yellow.jpg" },
    { id: 10, name: "black pearl", image: "./product/blackpearl.jpg" },
    { id:11, name: "lakha-red.jpg", image: "./product/lakha-red.jpg" },
    { id: 12, name: "iceblue", image: "./product/iceblue.jpg" },
  ];







function Granite() {
  return (
    <div>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(./infra2.jpg?height=1080&width=1920)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">
          Super Exclusive
          </h1>
          <h2 className="text-5xl md:text-7xl  mb-6">FISH BLACK</h2>
          <p className="text-xl md:text-2xl">
          Treasured from own mines
          </p>
        </div>

        {/* Phone Button */}
        <a
          href="tel:+1234567890"
          className="fixed bottom-8 right-8 z-20 bg-red-600 rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors"
          aria-label="Call us"
        ></a>
      </div>


{/* -------------------------------------------------------------------------------- */}



<div className="container mx-auto px-4 pt-24 pb-16 min-h-screen"> {/* Added min-h-screen */}
        <h1 className="text-center mb-12 text-4xl md:text-5xl lg:text-6xl font-light">
        granite  <span className="font-bold">COLLECTION</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  lg:px-32">
          {marbleItems.map((marble) => (
            <div key={marble.id} className="cbp-item w-full">
              <div className="cbp-item-wrapper">
                <div className="cbp-caption">
                  <div className="cbp-caption-defaultWrap">
                    <img src={marble.image} alt={marble.name} className="w-full h-auto" />
                  </div>
                  <a href={`/marble/${marble.id}`} className="cbp-caption-activeWrap cbp-singlePage block relative group">
                    <div className="cbp-l-caption-alignCenter absolute inset-0 flex items-center justify-center" >
                      <div className="cbp-l-caption-body" style={{marginBottom:"200px"}}>
                        <div className="cases-image-inner relative p-4">
                          <span className="cases-line top absolute top-0 left-4 right-4 h-px bg-white opacity-80"></span>
                          <span className="cases-line top-right absolute top-4 right-0 w-px h-16 bg-white opacity-80"></span>
                          <span className="cases-line bottom absolute bottom-0 left-4 right-4 h-px bg-white opacity-80"></span>
                          <span className="cases-line bottom-left absolute bottom-4 left-0 w-px h-16 bg-white opacity-80"></span>
                          <h6 className="text-white text-sm uppercase font-light">
                            {marble.name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>










    </div>
  );
}

export default Granite;
