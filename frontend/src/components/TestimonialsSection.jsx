
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "TutorXpert helped me ace my calculus exams! My tutor was incredibly patient and explained complex concepts in a way I could finally understand.",
    name: "Sarah L.",
    course: "Calculus Student",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
  },
  {
    quote: "Finding a specialized programming tutor was so easy with TutorXpert. I'm now more confident in my coding skills thanks to their platform.",
    name: "Michael B.",
    course: "Computer Science Major",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    quote: "My daughter's grades in Chemistry improved significantly after just a few sessions. The tutors are professional and truly care about student success.",
    name: "Linda K.",
    course: "Parent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
];

const TestimonialCard = ({ quote, name, course, avatar, index }) => {
  return (
    <motion.div
      className="bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 flex flex-col justify-between h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div>
        <Quote className="text-fuchsia-500 h-8 w-8 mb-4" />
        <p className="text-slate-300 italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </div>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden border-2 border-fuchsia-500">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-fuchsia-400 text-sm">{course}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500"
        >
          What Our Students Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              index={index}
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
  