
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, MessageSquare } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { icon: <BookOpen className="h-10 w-10 text-fuchsia-500 mb-4" />, title: "Expert Tutors", description: "Access highly qualified tutors across a wide range of subjects." },
    { icon: <Users className="h-10 w-10 text-pink-500 mb-4" />, title: "Personalized Learning", description: "Tailored lesson plans to match your learning style and pace." },
    { icon: <MessageSquare className="h-10 w-10 text-rose-500 mb-4" />, title: "Interactive Sessions", description: "Engage in live, one-on-one or group sessions with collaborative tools." },
  ];

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
          Why Choose OnlineTutor?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
  