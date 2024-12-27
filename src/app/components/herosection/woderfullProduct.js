const marbleItems = [
    {
      id: 1,
      name: "Rosy pink",
      image: "./product/rosypink.jpg",
      hasFrame: true,
    },
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
    { id: 5, name: "hassan-green", image: "./product/hassan-green.jpg" },
    { id:11, name: "lakha-red.jpg", image: "./product/lakha-red.jpg" },
    { id: 7, name: "Pure White", image: "./product/aarnawhite.jpg" },
    {
      id: 8,
      name: "galaxy-black",
      image: "./product/galaxy-black.jpg",
    },
    { id: 9, name: "Brown Veined", image: "./product/toronto.jpg" },
    {
      id: 10,
      name: "White Classic",
      image: "./product/albetawhite.jpg",
    },
    { id: 11, name: "black pearl", image: "./product/blackpearl.jpg" },
    { id: 12, name: "Silver Stream", image: "./product/morwad.jpg" },
  
  ];
  
  function ProductGrid() {
    return (
      <section className="py-16 px-5 lg:px-32 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center mb-12">
            <span className="text-4xl font-light">Wonderful</span>{" "}
            <span className="text-4xl font-bold">PRODUCTS</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marbleItems.map((product) => (
              <div key={product._id} className="group relative overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={`${product.image}?height=400&width=400`} // Use actual image URL
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-lg font-semibold tracking-wider">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default ProductGrid;
  