
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingTier = ({ title, price, features, popular, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={`relative bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-xl border ${popular ? 'border-fuchsia-500' : 'border-slate-700'} flex flex-col`}
    >
      {popular && (
        <div className="absolute top-0 right-0 -mt-4 -mr-0 bg-fuchsia-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center">
          <Star className="w-4 h-4 mr-1" /> Popular
        </div>
      )}
      <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-fuchsia-400' : 'text-white'}`}>{title}</h3>
      <p className="text-4xl font-extrabold text-white mb-1">{price}<span className="text-base font-normal text-slate-400">/month</span></p>
      <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{popular ? "Best value for dedicated learners" : "Perfect to get started"}</p>
      
      <ul className="space-y-3 mb-8 text-slate-300 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={popular ? "default" : "outline"} 
        className={`w-full mt-auto ${popular ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white' : 'text-fuchsia-400 border-fuchsia-400 hover:bg-fuchsia-500 hover:text-slate-900'}`}
      >
        Choose Plan
      </Button>
    </motion.div>
  );
};

const PricingPage = () => {
  const tiers = [
    {
      title: "Basic Learner",
      price: "$29",
      features: [
        "Access to 10 group lessons per month",
        "Standard tutor matching",
        "Email support",
        "Community forum access"
      ],
      popular: false,
      delay: 0.2
    },
    {
      title: "Pro Learner",
      price: "$59",
      features: [
        "Unlimited group lessons",
        "5 one-on-one sessions per month",
        "Priority tutor matching",
        "24/7 chat & email support",
        "Access to recorded sessions",
        "Progress tracking tools"
      ],
      popular: true,
      delay: 0.4
    },
    {
      title: "Master Learner",
      price: "$99",
      features: [
        "Unlimited group lessons",
        "15 one-on-one sessions per month",
        "Dedicated academic advisor",
        "Personalized study plans",
        "Early access to new courses",
        "Premium support line"
      ],
      popular: false,
      delay: 0.6
    }
  ];

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
            Flexible Pricing Plans
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose a plan that fits your learning goals and budget. All plans come with our satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <PricingTier key={tier.title} {...tier} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center bg-slate-800/50 backdrop-blur-md p-10 rounded-xl shadow-xl border border-slate-700"
        >
          <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Not sure which plan is right for you?</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">Contact our support team for a personalized recommendation or start with a free consultation.</p>
          <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white">
            Contact Support
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
  