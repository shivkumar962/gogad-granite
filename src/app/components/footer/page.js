import { FaInstagram } from 'react-icons/fa';

 function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col items-center gap-6 bg-zinc-300	">
      <div className="w-[300px]">
        <img 
          src="/gogad-granite.png" 
          alt="Gogad Granite" 
          className="w-full h-auto"
        />
      </div>
      
      <a 
        href="https://www.instagram.com/gogadgranites/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Follow us on Instagram"
      >
        <FaInstagram size={24} />
      </a>
      
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Gogad Granite
      </p>
    </footer>
  )
}

export default Footer
