"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
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
    // In production this would send to an API / form service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-dark-navy">
              Let’s Talk Security
            </h2>
            <p className="mt-5 text-charcoal/70 leading-relaxed max-w-md">
              Tell us about your requirements. We will respond with a clear
              conversation about how Neema can support your security needs.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-gold uppercase">
                  Response Time
                </h3>
                <p className="mt-1 text-charcoal/70">
                  We aim to respond to all enquiries within one business day.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-gold uppercase">
                  What to Expect
                </h3>
                <p className="mt-1 text-charcoal/70">
                  A professional discussion focused on your site, risks and the
                  level of protection required.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
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
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) =>
                      setFormState({ ...formState, service: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium tracking-wide text-charcoal/60 uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-charcoal/15 bg-white text-dark-navy focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gold text-dark-navy text-sm font-semibold tracking-wide uppercase hover:bg-light-gold transition-colors duration-300"
                >
                  Request Protection
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
