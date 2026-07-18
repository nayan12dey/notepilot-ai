"use client";

import React, { useState } from "react";
// 🛠️ lucide-react থেকে সোশ্যাল আইকনগুলো বাদ দেওয়া হয়েছে
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

// 🛠️ react-icons থেকে সরাসরি প্রফেশনাল সোশ্যাল আইকন ইম্পোর্ট করা হয়েছে
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

  // ডামি FAQ ডাটাবেজ
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
    <main className="w-full bg-white text-slate-900 min-h-screen overflow-x-hidden pt-20 lg:pt-15 pb-16">

      {/* ─── HERO SECTION ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl text-center space-y-6 mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 mx-auto">
          <MessageSquare className="w-3.5 h-3.5 animate-pulse" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase">Connect the Protocol</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-none">
          Get in Touch with Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Core Engineers</span>
        </h1>

        <p className="text-base md:text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Have questions about decentralized storage integration, API configurations, or custom corporate deployment? Drop us a line.
        </p>
      </section>

      {/* ─── PRIMARY CONTAINER (INFO + FORM) ─── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* বাম কলাম: কন্টাক্ট ইনফো এবং সোশ্যাল লিংকস */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-slate-50 border-2 border-slate-100 rounded-[32px] space-y-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Protocol Support</p>
                    <a href="mailto:support@notepilot.ai" className="text-base font-extrabold text-slate-800 hover:text-blue-600 transition-colors">
                      support@notepilot.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Node Ops Hotline</p>
                    <p className="text-base font-extrabold text-slate-800">+1 (555) 234-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">HQ Location</p>
                    <p className="text-base font-extrabold text-slate-800 leading-snug">
                      100 Pine Street, Suite 1250<br />San Francisco, CA 94111
                    </p>
                  </div>
                </div>
              </div>

              {/* সোশ্যাল নেটওয়ার্ক পার্ট */}
              <div className="pt-6 border-t border-slate-200/60">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Network Coordinates</p>
                <div className="flex items-center gap-3">
                  {/* 🛠️ এখানে react-icons ব্যবহার করা হয়েছে */}
                  <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* অফিস ম্যাপ প্লেসহোল্ডার */}
            <div className="p-6 bg-slate-900 text-white rounded-[32px] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-transparent opacity-70" />
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-white/10 text-white border border-white/10">
                  <Globe className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Global Operations</span>
                </div>
                <h3 className="text-lg font-black">San Francisco Core Office</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Our core optimization lab is nestled right inside the financial district. Built for cross-functional blockchain developer iterations.
                </p>
              </div>
            </div>
          </div>

          {/* ডান কলাম: কন্টাক্ট ফর্ম */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-100 rounded-[32px] p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">Transmit Inquiry</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alex Wright"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm font-medium transition-colors bg-slate-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@protocol.io"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm font-medium transition-colors bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Subject Layer</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm font-bold transition-colors bg-slate-50/50 appearance-none cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support / Node Ops</option>
                  <option value="Enterprise Custom Integration">Enterprise Custom Integration</option>
                  <option value="Security Vulnerability Reporting">Security Vulnerability Reporting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Payload Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your architectural constraints or deployment query..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm font-medium transition-colors bg-slate-50/50 resize-none"
                />
              </div>

              {isSubmitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Payload successfully broadcasted to the NotePilot communication channel!</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 disabled:bg-slate-400 shadow-md transition-all duration-300 cursor-pointer active:scale-[0.99] select-none"
              >
                <span>Transmit Signal</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ─── FAQ ACCORDION SECTION ─── */}
      <section className="bg-slate-50/60 border-y border-slate-100 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm font-medium text-slate-500">
              Instant answers to core questions regarding deployment parameters and access nodes.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none select-none"
                  >
                    <span className="text-base font-extrabold text-slate-900 pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-slate-50" : "max-h-0"}`}
                  >
                    <div className="p-6 text-sm font-medium text-slate-500 leading-relaxed bg-slate-50/30">
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