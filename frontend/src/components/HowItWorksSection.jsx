
import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserCheck, CalendarDays, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-12 w-12 text-fuchsia-500" />,
    title: "1. Find Your Tutor",
    description: "Browse our extensive list of qualified tutors or use our search filters to find the perfect match for your subject and learning style.",
  },
  {
    icon: <UserCheck className="h-12 w-12 text-pink-500" />,
    title: "2. Book a Session",
    description: "Check tutor availability, select a convenient time slot, and book your session. It's that simple!",
  },
  {
    icon: <CalendarDays className="h-12 w-12 text-rose-500" />,
    title: "3. Start Learning",
    description: "Connect with your tutor via our interactive online classroom. Enjoy personalized lessons and achieve your academic goals.",
  },
   {
    icon: <MessageCircle className="h-12 w-12 text-purple-500" />,
    title: "4. Review & Repeat",
    description: "After your session, review your progress and provide feedback. Schedule more sessions to continue your learning journey.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 hover:shadow-purple-500/30 transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="p-4 bg-slate-700 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
  