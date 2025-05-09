
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
      duration: 5000,
    });
    e.target.reset();
  };

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
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-slate-700"
          >
            <h2 className="text-3xl font-bold text-fuchsia-400 mb-6">Contact Information</h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-fuchsia-500 mr-3" />
                <span>support@onlinetutor.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-fuchsia-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-fuchsia-500 mr-3" />
                <span>123 Education Lane, Learning City, ED 54321</span>
              </div>
            </div>
            <div className="mt-8">
              <img 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                alt="Modern office reception area"
               src="https://images.unsplash.com/photo-1677272272629-67d6edf3ea81" />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-slate-700 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-fuchsia-400 mb-1">Full Name</label>
              <input type="text" name="name" id="name" required className="w-full py-2 px-4 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none placeholder-slate-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-fuchsia-400 mb-1">Email Address</label>
              <input type="email" name="email" id="email" required className="w-full py-2 px-4 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none placeholder-slate-500" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-fuchsia-400 mb-1">Subject</label>
              <input type="text" name="subject" id="subject" required className="w-full py-2 px-4 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none placeholder-slate-500" placeholder="Reason for contact" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-fuchsia-400 mb-1">Message</label>
              <textarea name="message" id="message" rows="4" required className="w-full py-2 px-4 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 outline-none placeholder-slate-500" placeholder="Your message..."></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-fuchsia-400">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
  