
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 p-10 md:p-16 rounded-xl shadow-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-slate-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of students achieving their academic goals with TutorXpert. Find your perfect tutor today or become one yourself!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-white text-fuchsia-700 hover:bg-slate-100 font-semibold py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-fuchsia-300 w-full sm:w-auto"
            >
              Find a Tutor <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-fuchsia-700 font-semibold py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-slate-300 w-full sm:w-auto"
            >
              Become a Tutor <UserPlus className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
  