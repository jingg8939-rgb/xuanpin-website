"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { products } from "@/data/products";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "Xingguo County Industrial Park, Ganzhou City, Jiangxi Province, China",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+86 797-5518888",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@xuanpin-nm.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 8:00 AM - 6:00 PM (CST)",
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        productInterest: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f5f5f5] pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-[#666666]">
              Have questions or need a quote? We&apos;d love to hear from you.
              Reach out and our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-[#333333]">
                Get in Touch
              </h2>
              <p className="mt-4 text-[#666666]">
                Whether you need product samples, technical specifications, or
                custom formulation support, our team is ready to assist you.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FDE8EB] text-[#C8102E]">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#333333]">
                        {info.label}
                      </h3>
                      <p className="mt-1 text-sm text-[#666666]">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <MapPin className="h-8 w-8 text-gray-300" />
                    <span className="text-sm text-gray-400">
                      Map Location
                    </span>
                    <span className="text-xs text-gray-400">
                      Xingguo County, Jiangxi Province
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold text-[#333333]">
                  Send an Inquiry
                </h2>
                <p className="mt-2 text-sm text-[#666666]">
                  Fill out the form below and we&apos;ll get back to you within
                  one business day.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-green-50 py-12">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <h3 className="mt-4 text-lg font-semibold text-[#333333]">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="mt-2 text-sm text-[#666666]">
                      Thank you for reaching out. We&apos;ll respond within 24
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#333333]"
                        >
                          Full Name <span className="text-[#C8102E]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-[#333333] transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#333333]"
                        >
                          Email Address <span className="text-[#C8102E]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-[#333333] transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-[#333333]"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-[#333333] transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="productInterest"
                          className="block text-sm font-medium text-[#333333]"
                        >
                          Product Interest
                        </label>
                        <select
                          id="productInterest"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-[#333333] transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                        >
                          <option value="">Select a product</option>
                          {products.map((p) => (
                            <option key={p.slug} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                          <option value="other">Other / General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#333333]"
                      >
                        Message <span className="text-[#C8102E]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1.5 block w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-[#333333] transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E] resize-none"
                        placeholder="Please describe your requirements, including product specifications, quantity, and any customization needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#C8102E] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#A00D24] hover:shadow-lg sm:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
