"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
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
      <main className="pt-[56px] lg:pt-[72px]">
        <section className="py-14 sm:py-18 bg-navy text-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-red uppercase">
              Contact
            </p>
            <h1 className="mt-3 text-[28px] sm:text-[36px] font-bold max-w-xl leading-tight">
              Let us talk about your security needs
            </h1>
            <p className="mt-4 text-[15px] text-white/80 max-w-lg leading-relaxed">
              Share a few details about your site or requirement. We will respond
              with next steps and, where useful, arrange a discussion or site visit.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-cream">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-[14px] font-bold uppercase tracking-wide text-black mb-2">
                    What happens next
                  </h2>
                  <ul className="space-y-3 text-[14px] text-gray leading-relaxed">
                    <li>
                      <strong className="text-charcoal">Response time.</strong> We aim
                      to reply within one working day.
                    </li>
                    <li>
                      <strong className="text-charcoal">Discussion.</strong> We clarify
                      your site type, risks and what you need covered.
                    </li>
                    <li>
                      <strong className="text-charcoal">Next steps.</strong> Where
                      appropriate we propose a practical plan and quotation.
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-[14px] font-bold uppercase tracking-wide text-black mb-2">
                    Email
                  </h2>
                  <a
                    href="mailto:info@neemasecurity.co.ke"
                    className="text-[14px] text-red hover:underline"
                  >
                    info@neemasecurity.co.ke
                  </a>
                </div>
              </div>

              <div className="lg:col-span-3 bg-white p-6 sm:p-8 border border-gray-border">
                {submitted ? (
                  <div className="py-10 text-center">
                    <h3 className="text-[20px] font-bold text-black">Thank you</h3>
                    <p className="mt-3 text-[14px] text-gray leading-relaxed max-w-sm mx-auto">
                      We have received your message and will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-[18px] font-bold text-black mb-2">
                      Request a quote
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-charcoal mb-1.5">
                          Full name
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-3 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-red"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-charcoal mb-1.5">
                          Company (optional)
                        </label>
                        <input
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-3 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-red"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-charcoal mb-1.5">
                          Phone
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-3 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-red"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-charcoal mb-1.5">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-3 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-red"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-charcoal mb-1.5">
                        Service interest
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-3 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-red bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="manned-guarding">Manned Guarding</option>
                        <option value="corporate">Corporate Security</option>
                        <option value="residential">Residential Security</option>
                        <option value="event">Event Security</option>
                        <option value="access">Access Control</option>
                        <option value="consulting">Security Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-charcoal mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-red resize-none"
                        placeholder="Tell us about your site or requirement"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-red text-white text-[13px] font-bold uppercase tracking-wide hover:bg-red-dark transition-colors"
                    >
                      Send request
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
