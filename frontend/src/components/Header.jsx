
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-slate-900/70 backdrop-blur-md shadow-lg fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-fuchsia-500 mr-3" />
          <h1 className="text-2xl font-bold text-white">TutorXpert</h1>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-300">Courses</a>
          <a href="#" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-300">Tutors</a>
          <a href="#" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-300">About Us</a>
          <Button variant="outline" className="text-fuchsia-400 border-fuchsia-400 hover:bg-fuchsia-400 hover:text-slate-900">Login</Button>
          <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white">Sign Up</Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
  