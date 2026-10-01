import { Outlet } from "react-router-dom"; 
import Navbar from "../components/Navbar"; 
import Background from "../assets/bg-home4.jpg";

export default function MainLayout() { 
  return ( 
    <div className="flex flex-col min-h-screen bg-gradient-to-t "> 
      {/* Header/Navbar */} 
      <Navbar /> 
         <div
          className="w-full bg-cover bg-center h-80 flex-col flex justify-center items-center drop-shadow-md mt-8"
             style={{ backgroundImage: `url(${Background})` }}
          >
            <h1 className="font-text-center font-bold text-5xl text-white">Jasa Joki Game RPG Terpercaya</h1>
            <p className="text-center text-lg mt-3 py-2 text-white">Selesaikan quest, farming material, hingga konten endgame tanpa ribet. Progres cepat dan akun anda dijamin aman</p>
      </div>

      {/* Main Section */} 
      <main className="flex-1 p-12 "> 
        <Outlet /> 
      </main> 
 
      {/* Footer */} 
      <footer className="bg-gray-800 text-white text-center p-4"> 
        <p>© 2025 E-Commerce Simple App | Version 1.0</p> 
      </footer> 
    </div> 
  ); 
} 