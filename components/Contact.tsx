"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isFormValid = formData.name.trim() && formData.email.includes("@") && formData.message.trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/xkopekrg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(false), 3000)
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
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
              disabled={!isFormValid || loading}
              className="primary-gradient w-full rounded-[3rem] px-5 py-3 text-sm font-semibold text-[#131313] transition-transform duration-300 hover:scale-[1.02]"
              >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <div className="mt-4 flex justify-center">
                <div
                  role="alert"
                  className="text-green-400 font-medium flex items-center gap-2 transition-all duration-500 transform opacity-100 translate-y-0"
                >
                  <HiCheckCircle className="w-5 h-5" />
                  Message sent successfully
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
