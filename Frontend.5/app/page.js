import Image from "next/image";

export default function Home() {
  return (
    <div>
           <nav className="text-blue-500 bg-white p-4">
      <div className="container    flex justify-between items-center">
          <a href="/defivista" className="text-lg font-bold">
          <img src="images/dvicon.png" alt="" className="w-20 h-20" />
          </a>
        

        <div className="flex space-x-4">
            <a href="/about" className="hover:underline">About</a>
                    
            <a  href="/services" className="hover:underline">Services</a>
          
            <a href="/contact" className="hover:underline">Contact</a>
          
        </div>
      </div>
    </nav>
    <header className="relative text-gray-800 h-96 flex items-center bg-cover bg-center" style={{ backgroundImage: "url('images/herobg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Welcome to DefiVista</h2>
        <p className="text-lg text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum justo id mi fermentum,
          et volutpat nisl varius.
        </p>

        <button className="bg-blue-500 hover:bg-violet-50 mr-5 hover:text-blue-500 text-white px-6 py-3 rounded-full font-semibold">
        <a href="/register">Sell Share</a>
        </button>
        <button className="bg-blue-500 hover:bg-violet-50 hover:text-blue-500 text-white px-6 py-3 rounded-full font-semibold">
        <a href="/contact" className="">Buy Share</a>
        </button>
      </div>
    </header>
   <footer className="bg-gray-300 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
   </div>
    
  );
}
