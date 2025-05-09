
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpenText, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400">
            About OnlineTutor
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Connecting learners with expert tutors to unlock their full potential through personalized and accessible education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              alt="Team of tutors collaborating"
             src="https://images.unsplash.com/photo-1581056771370-4814aa6dd705" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-fuchsia-400 mb-3">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              At OnlineTutor, our mission is to democratize education by providing high-quality, affordable, and personalized tutoring services to students worldwide. We believe that every learner deserves the opportunity to achieve academic excellence and personal growth, regardless of their geographical location or background.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We strive to create an engaging and supportive learning environment where students can connect with experienced tutors who are passionate about teaching and dedicated to student success.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-fuchsia-500 mb-10">What We Stand For</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <Users className="h-10 w-10 text-pink-500 mb-4" />, title: "Expert Tutors", description: "Our tutors are carefully vetted professionals and subject matter experts committed to your learning journey." },
            { icon: <BookOpenText className="h-10 w-10 text-fuchsia-500 mb-4" />, title: "Personalized Approach", description: "We tailor learning plans to fit individual student needs, learning styles, and academic goals." },
            { icon: <Target className="h-10 w-10 text-rose-500 mb-4" />, title: "Accessible Learning", description: "High-quality education made available anytime, anywhere, fostering a global community of learners." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700 text-center flex flex-col items-center"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
  