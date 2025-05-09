
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, LifeBuoy, BookOpen, Settings } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border-b border-slate-700"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 px-1 text-left text-slate-200 hover:text-fuchsia-400 transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", marginTop: "0px", marginBottom: "20px" },
          collapsed: { opacity: 0, height: 0, marginTop: "0px", marginBottom: "0px" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-1"
      >
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const HelpCenterPage = () => {
  const faqs = [
    { question: "How do I find a tutor?", answer: "You can use the search bar on our homepage to find tutors by subject, availability, or keywords. You can also browse tutor profiles in different categories." },
    { question: "What are the payment options?", answer: "We accept major credit cards, PayPal, and other popular online payment methods. All payments are processed securely." },
    { question: "Can I reschedule a session?", answer: "Yes, you can reschedule sessions up to 24 hours in advance through your dashboard. For last-minute changes, please contact your tutor directly." },
    { question: "Is there a trial period?", answer: "We offer a satisfaction guarantee. If you're not happy with your first session, we can help you find another tutor or offer a refund. Some tutors may offer introductory sessions." },
    { question: "How does the interactive whiteboard work?", answer: "Our platform includes an interactive whiteboard with tools for drawing, text, file sharing, and screen sharing to facilitate effective online learning." },
  ];

  const helpCategories = [
    { icon: <LifeBuoy className="h-8 w-8 text-fuchsia-500 mb-3" />, title: "Getting Started", description: "Guides for new users and platform overview." },
    { icon: <BookOpen className="h-8 w-8 text-pink-500 mb-3" />, title: "Tutoring Sessions", description: "Information on booking, attending, and managing sessions." },
    { icon: <Settings className="h-8 w-8 text-rose-500 mb-3" />, title: "Account & Billing", description: "Manage your profile, subscription, and payment methods." },
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400">
            Help Center
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            How can we help you today? Find answers to common questions and learn more about our platform.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="search" 
              placeholder="Search for help articles..."
              className="w-full py-3 px-5 pr-12 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none placeholder-slate-500 text-white"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.5, duration: 0.5 }}
        >
          {helpCategories.map((cat, index) => (
            <motion.div 
              key={index}
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 text-center hover:shadow-fuchsia-500/20 transition-shadow"
            >
              {cat.icon}
              <h3 className="text-xl font-semibold text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-400">{cat.description}</p>
            </motion.div>
          ))}
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-fuchsia-400 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl border border-slate-700">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HelpCenterPage;
  