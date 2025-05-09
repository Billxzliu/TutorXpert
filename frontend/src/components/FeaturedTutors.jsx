
import React from 'react';
import { motion } from 'framer-motion';
import TutorCard from '@/components/TutorCard';

const FeaturedTutors = () => {
  const tutors = [
    { id: 1, name: "Dr. Emily Carter", subject: "Physics & Mathematics", rating: 4.9, description: "PhD in Quantum Physics with 10+ years of teaching experience. Passionate about making complex topics understandable.", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" },
    { id: 2, name: "Johnathan Lee", subject: "Computer Science", rating: 4.8, description: "Software Engineer at a top tech company. Specializes in Python, Java, and Web Development.", avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19" },
    { id: 3, name: "Maria Rodriguez", subject: "Languages (Spanish, French)", rating: 4.7, description: "Native Spanish speaker, fluent in French. Certified language instructor with a focus on conversational skills.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956" },
    { id: 4, name: "David Miller", subject: "History & Literature", rating: 4.6, description: "MA in History, published author. Believes in bringing stories from the past to life.", avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842" },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-4 text-fuchsia-500"
        >
          Meet Our Top Tutors
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
          className="text-lg text-slate-400 text-center mb-12 max-w-xl mx-auto"
        >
          Learn from the best. Our tutors are highly qualified, experienced, and dedicated to your success.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutors.map((tutor, index) => (
             <TutorCard 
              key={tutor.id}
              name={tutor.name}
              subject={tutor.subject}
              rating={tutor.rating}
              avatar={tutor.avatar}
              description={tutor.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutors;
  