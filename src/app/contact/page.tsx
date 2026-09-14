"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 bg-dark-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.3em] text-gold uppercase font-medium"
            >
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl sm:text-5xl font-semibold max-w-2xl"
            >
              Let’s Talk Security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-white/70 max-w-xl"
            >
              Tell us about your requirements. We will respond with a clear
              conversation about how Neema can support your security needs.
            </motion.p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm tracking-[0.2em] text-gold uppercase font-semibold">
                  What to Expect
                </h2>
                <ul className="mt-6 space-y-6 text-charcoal/80">
                  <li>
                    <strong className="text-dark-navy">Response time</strong>
                    <p className="mt-1 text-sm">
                      We aim to respond to all enquiries within one business
                      day.
                    </p>
                  </li>
                  <li>
                    <strong className="text-dark-navy">Discussion</strong>
                    <p className="mt-1 text-sm">
                      A professional conversation focused on your site, risks
                      and the level of protection required.
                    </p>
                  </li>
                  <li>
                    <strong className="text-dark-navy">Next steps</strong>
                    <p className="mt-1 text-sm">
                      Clear recommendations and a practical path forward if we
                      are a fit for your needs.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                {submitted ? (
                  <div className="bg-off-white p-10 text-center">
                    <h3 className="text-xl font-semibold text-dark-navy">
                      Thank you
                    </h3>
                    <p className="mt-3 text-charcoal/70">
                      Your request has been received. A member of the Neema team
                      will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2">
                          Full Name
                        </label>
                        <input id="name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2">
                          Company
                        </label>
                        <input id="company" type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2">Phone</label>
                        <input id="phone" type="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2">Email</label>
                        <input id="email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2">Service Required</label>
                      <select id="service" value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })} className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors">
                        <option value="">Select a service</option>
                        <option value="manned-guarding">Manned Guarding</option>
                        <option value="corporate">Corporate Security</option>
                        <option value="residential">Residential Security</option>
                        <option value="event">Event Security</option>
                        <option value="access">Access Control</option>
                        <option value="consulting">Security Consulting</option>
                        <option value="other">Other / General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2">Message</label>
                      <textarea id="message" rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors resize-none" />
                    </div>
                    <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-gold text-dark-navy text-sm font-semibold tracking-wide uppercase hover:bg-light-gold transition-colors duration-300">
                      Request Protection
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
