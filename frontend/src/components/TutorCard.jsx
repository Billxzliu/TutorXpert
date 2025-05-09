
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

const TutorCard = ({ name, subject, rating, avatar, description, index }) => {
  return (
    <motion.div 
      className="bg-slate-800/60 backdrop-blur-md p-6 rounded-xl shadow-xl border border-slate-700 hover:shadow-fuchsia-500/30 transition-shadow duration-300 flex flex-col items-center text-center h-full"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-32 h-32 rounded-full mb-4 overflow-hidden border-4 border-fuchsia-500 shrink-0">
        <img  className="w-full h-full object-cover" alt={name} src={avatar} />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-fuchsia-400 mb-1">{name}</h3>
        <p className="text-slate-400 mb-1 text-sm">{subject}</p>
        <div className="flex items-center justify-center mb-3">
          {[...Array(5)].map((_, i) => (
             <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
          ))}
          <span className="text-xs text-slate-500 ml-1.5">({rating.toFixed(1)})</span>
        </div>
        <p className="text-sm text-slate-400 mb-4 flex-grow h-20 overflow-hidden">{description}</p>
      </div>
      <Button variant="outline" className="w-full mt-auto text-fuchsia-400 border-fuchsia-400 hover:bg-fuchsia-500 hover:text-slate-900 transition-colors duration-300">
        View Profile
      </Button>
    </motion.div>
  );
};

export default TutorCard;
  