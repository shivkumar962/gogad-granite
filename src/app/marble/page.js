
function MarbleCollection() {
  const marbleItems = [
    { id: 1, name: "WONDER WHITE", image: "./product/wonderwhite.jpg", hasFrame: true },
    { id: 2, name: "Brown Veined", image: "./product/toronto.jpg" },
    { id: 3, name: "goldenspider.jpg", image: "./product/goldenspider.jpg" },
    { id: 4, name: "Gray Pearl", image: "./product/dharmetawhite.jpg" },
    { id: 5, name: "Cream Elegance", image: "./product/katni.jpg" },
    { id: 6, name: "Silver Stream", image: "./product/morwad.jpg" },
    { id: 7, name: "Pure White", image: "./product/aarnawhite.jpg" },
    { id: 8, name: "Wave Pattern", image: "./product/aaspurwhite.jpg" },
    { id: 9, name: "bottocino", image: "./product/bottocino.jpg" },
    { id: 10, name: "White Classic", image: "./product/albetawhite.jpg" },
    { id: 11, name: "royaldyna", image: "./product/royaldyna.jpg" },
    { id: 12, name: "White Classic", image: "./product/albetawhite.jpg" },
  ];

  return (
    <>
      <div className="container lg:px-32 pt-24 pb-16 min-h-screen"> {/* Added min-h-screen */}
        <h1 className="text-center mb-12 text-4xl md:text-5xl lg:text-6xl font-light">
          Marble <span className="font-bold">COLLECTION</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
          {marbleItems.map((marble) => (
            <div key={marble.id} className="cbp-item w-full">
              <div className="cbp-item-wrapper">
                <div className="cbp-caption">
                  <div className="cbp-caption-defaultWrap">
                    <img src={marble.image} alt={marble.name} className="w-full h-auto" />
                  </div>
                  <a href={`/marble/${marble.id}`} className="cbp-caption-activeWrap cbp-singlePage block relative group">
                    <div className="cbp-l-caption-alignCenter absolute inset-0 flex items-center justify-center">
                      <div className="cbp-l-caption-body" style={{marginBottom:"180px"}}>
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

    </>
  );
}

export default MarbleCollection;
