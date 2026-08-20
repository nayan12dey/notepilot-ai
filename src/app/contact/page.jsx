"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ChevronDown,
  Globe,
  Sparkles
} from "lucide-react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  // --- ১. ফর্ম স্টেট ম্যানেজমেন্ট ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- ২. FAQ স্টেট ম্যানেজমেন্ট ---
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How does the decentralized storage system work for my notes?",
      a: "NotePilot AI converts your documentation into cryptographic objects and distributes them across the IPFS network. This ensures your technical insights are tamper-proof and fully owned by your private key layers."
    },
    {
      q: "Is there an enterprise tier for corporate development teams?",
      a: "Yes! We offer collaborative workspaces with multi-sig security protocols, role-based accessibility tags, and customized AI models fine-tuned to your team's private repositories."
    },
    {
      q: "Can I self-host NotePilot's cryptographic indexing protocol?",
      a: "Absolutely. Our core indexing layer is EVM-compatible, allowing teams to deploy dedicated nodes within their private server networks while maintaining synchronization with global edge nodes."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    }, 3000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden pt-20 lg:pt-15 pb-16 relative">

      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* ─── HERO SECTION ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl text-center space-y-6 mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto backdrop-blur-md">
          <MessageSquare className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase">Connect the Protocol</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-none">
          Get in Touch with Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Core Engineers</span>
        </h1>

        <p className="text-base md:text-xl font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Have questions about decentralized storage integration, API configurations, or custom corporate deployment? Drop us a line.
        </p>
      </section>

      {/* ─── PRIMARY CONTAINER (INFO + FORM) ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* বাম কলাম: কন্টাক্ট ইনফো এবং সোশ্যাল লিংকস */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[32px] space-y-8 shadow-2xl">
              <h2 className="text-2xl font-black text-white tracking-tight">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0 shadow-inner">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Protocol Support</p>
                    <a href="mailto:support@notepilot.ai" className="text-base font-extrabold text-slate-200 hover:text-cyan-400 transition-colors">
                      support@notepilot.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0 shadow-inner">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Node Ops Hotline</p>
                    <p className="text-base font-extrabold text-slate-200">+1 (555) 234-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">HQ Location</p>
                    <p className="text-base font-extrabold text-slate-200 leading-snug">
                      100 Pine Street, Suite 1250<br />San Francisco, CA 94111
                    </p>
                  </div>
                </div>
              </div>

              {/* সোশ্যাল নেটওয়ার্ক পার্ট */}
              <div className="pt-6 border-t border-slate-800/80">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Network Coordinates</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300 shadow-md">
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-md">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-400 transition-all duration-300 shadow-md">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* অফিস ম্যাপ প্লেসহোল্ডার */}
            <div className="p-6 bg-slate-900/80 border border-slate-800 text-white rounded-[32px] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20 opacity-80" />
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700/60">
                  <Globe className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Global Operations</span>
                </div>
                <h3 className="text-lg font-black text-white">San Francisco Core Office</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Our core optimization lab is nestled right inside the financial district. Built for cross-functional blockchain developer iterations.
                </p>
              </div>
            </div>
          </div>

          {/* ডান কলাম: কন্টাক্ট ফর্ম */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[32px] p-8 md:p-10 shadow-2xl">
            <h2 className="text-2xl font-black text-white tracking-tight mb-6">Transmit Inquiry</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alex Wright"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-sm font-medium transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@protocol.io"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-sm font-medium transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Subject Layer</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-100 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-sm font-bold transition-all appearance-none cursor-pointer"
                >
                  <option value="General Inquiry" className="bg-slate-900 text-slate-200">General Inquiry</option>
                  <option value="Technical Support" className="bg-slate-900 text-slate-200">Technical Support / Node Ops</option>
                  <option value="Enterprise Custom Integration" className="bg-slate-900 text-slate-200">Enterprise Custom Integration</option>
                  <option value="Security Vulnerability Reporting" className="bg-slate-900 text-slate-200">Security Vulnerability Reporting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">Payload Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your architectural constraints or deployment query..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 text-sm font-medium transition-all resize-none"
                />
              </div>

              {isSubmitted && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs font-bold flex items-center gap-2 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Payload successfully broadcasted to the NotePilot communication channel!</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 border border-cyan-400/30 text-white hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 shadow-lg shadow-cyan-500/20 transition-all duration-300 cursor-pointer active:scale-[0.99] select-none"
              >
                <span>Transmit Signal</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ─── FAQ ACCORDION SECTION ─── */}
      <section className="bg-slate-950/80 border-y border-slate-800/80 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm font-medium text-slate-400">
              Instant answers to core questions regarding deployment parameters and access nodes.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none select-none hover:bg-slate-800/30 transition-colors"
                  >
                    <span className="text-base font-extrabold text-slate-100 pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : ""}`} />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-slate-800/50" : "max-h-0"}`}
                  >
                    <div className="p-6 text-sm font-medium text-slate-400 leading-relaxed bg-slate-950/40">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}