
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400"
        >
          Unlock Your Potential
        </motion.h2>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Find expert tutors in any subject, anytime. Personalized learning to help you succeed.
        </motion.p>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9, type: "spring", stiffness: 100 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search for courses or tutors..."
              className="w-full py-3 px-5 pr-12 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none placeholder-slate-500"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-fuchsia-400"
            onClick={() => toast({ title: "Search Clicked!", description: "Implement search functionality here.", duration: 3000 })}
          >
            Find a Tutor <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
  