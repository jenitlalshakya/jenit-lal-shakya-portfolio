"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container id="contact" className="py-20 sm:py-24 md:py-32 lg:py-36">
      <div className="rounded-4xl bg-[#2a2a2a]/70 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-8 md:p-12">
        <p className="text-xs font-medium tracking-widest text-[#adc6ff] uppercase">
          Contact
        </p>
        <h2 className="mt-5 max-w-3xl text-[1.45rem] leading-tight font-semibold text-[#e5e2e1] sm:mt-6 sm:text-[1.6rem] md:text-[1.75rem]">
          Let&apos;s build exceptional products with strong architecture and
          meticulous interface craft.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#c2c6d6] sm:mt-8 sm:text-base sm:leading-8">
          Reach out to discuss collaborations, consulting, or full-time roles.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-[#4d8eff] w-7 h-7" />
                <p className="text-sm text-[#c2c6d6] font-medium">Email</p>
              </div>
              <a href="mailto:shakyajenit@gmail.com" className="text-[#4d8eff] hover:underline ml-10">shakyajenit@gmail.com</a>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BsTelephone className="text-[#4d8eff] w-7 h-7" />
                <p className="text-sm text-[#c2c6d6] font-medium">Phone</p>
              </div>
              <a href="tel:+9779840041510" className="text-[#4d8eff] hover:underline ml-10">+977 9840041510</a>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BsLinkedin className="text-[#4d8eff] w-7 h-7" />
                <p className="text-sm text-[#c2c6d6] font-medium">LinkedIn</p>
              </div>
              <a href="https://www.linkedin.com/in/jenit-lal-shakya-602462400/" target="_blank" rel="noopener noreferrer" className="text-[#4d8eff] hover:underline ml-10">
                Connect on LinkedIn
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BsGithub className="text-[#4d8eff] w-7 h-7" />
                <p className="text-sm text-[#c2c6d6] font-medium">GitHub</p>
              </div>
              <a href="https://github.com/jenitlalshakya" target="_blank" rel="noopener noreferrer" className="text-[#4d8eff] hover:underline ml-10">
                View my work
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-3xl bg-[#353534]/70 backdrop-blur-md px-5 py-3 text-sm text-[#e5e2e1] placeholder:text-[#c2c6d6] focus:outline-none focus:ring-2 focus:ring-[#4d8eff] transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-3xl bg-[#353534]/70 backdrop-blur-md px-5 py-3 text-sm text-[#e5e2e1] placeholder:text-[#c2c6d6] focus:outline-none focus:ring-2 focus:ring-[#4d8eff] transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full rounded-3xl bg-[#353534]/70 backdrop-blur-md px-5 py-3 text-sm text-[#e5e2e1] placeholder:text-[#c2c6d6] focus:outline-none focus:ring-2 focus:ring-[#4d8eff] transition resize-none"
            />
            <button
              type="submit"
              className="primary-gradient w-full rounded-[3rem] px-5 py-3 text-sm font-semibold text-[#131313] transition-transform duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

