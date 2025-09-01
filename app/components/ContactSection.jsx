"use client";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:your@email.com?subject=Contact from ${form.name}&body=${form.message} (${form.email})`;
  };

  return (
    <section id="Contact" className="py-16 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-[#7b2cbf] mb-8 text-center">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-[#232946] p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#121629] text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#121629] text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded bg-[#121629] text-white"
        />
        <button
          type="submit"
          className="bg-[#7b2cbf] text-white font-semibold py-2 rounded hover:bg-[#5a189a] transition"
        >
          Send Email
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
