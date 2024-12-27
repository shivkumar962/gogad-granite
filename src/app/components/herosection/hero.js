import { IoMdPhonePortrait } from "react-icons/io";

const Hero = ({ text1, text2, text3 }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(./top.png?height=1080&width=1920)`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-4">{text1}</h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">{text2}</h2>
        <p className="text-xl md:text-2xl">{text3}</p>
      </div>

      {/* Phone Button */}
      <a
        href="tel:+1234567890"
        className="fixed bottom-8 right-8 z-20 bg-red-600 rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors"
        aria-label="Call us"
      >
        <IoMdPhonePortrait className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default Hero;
