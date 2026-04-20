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

  const isFormValid =
    formData.name.trim() &&
    formData.email.includes("@") &&
    formData.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

        setTimeout(() => setSuccess(false), 3000);
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
      <div className="rounded-4xl bg-(--surface) p-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-8 md:p-12">
        <p className="text-xs font-medium tracking-widest uppercase text-(--primary)">
          Contact
        </p>
        <h2 className="mt-5 max-w-3xl text-[1.45rem] leading-tight font-semibold sm:mt-6 sm:text-[1.6rem] md:text-[1.75rem] text-(--on-surface)">
          Let&apos;s build exceptional products with strong architecture and
          meticulous interface craft.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-7 sm:mt-8 sm:text-base sm:leading-8 text-(--on-surface-variant)">
          Reach out to discuss collaborations, consulting, or full-time roles.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3">
                <BsLinkedin className="w-7 h-7 text-(--primary)" />
                <p className="text-sm font-medium text-(--on-surface-variant)">
                  LinkedIn
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/jenit-lal-shakya-602462400/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-10 text-(--primary) hover:underline"
              >
                Connect on LinkedIn
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <BsGithub className="w-7 h-7 text-(--primary)" />
                <p className="text-sm font-medium text-(--on-surface-variant)">
                  GitHub
                </p>
              </div>
              <a
                href="https://github.com/jenitlalshakya"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-10 text-(--primary) hover:underline"
              >
                View my work
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full rounded-3xl px-5 py-3 text-sm
                bg-(--surface-container-high)
                text-(--on-surface)
                border border-(--contact-border)
                placeholder:text-(--on-surface-variant)
                focus:outline-none focus:ring-2 focus:ring-(--primary)
                transition
              "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full rounded-3xl px-5 py-3 text-sm
                bg-(--surface-container-high)
                text-(--on-surface)
                border border-(--contact-border)
                placeholder:text-(--on-surface-variant)
                focus:outline-none focus:ring-2 focus:ring-(--primary)
                transition
              "
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="
                w-full rounded-3xl px-5 py-3 text-sm resize-none
                bg-(--surface-container-high)
                text-(--on-surface)
                border border-(--contact-border)
                placeholder:text-(--on-surface-variant)
                focus:outline-none focus:ring-2 focus:ring-(--primary)
                transition
              "
            />
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="
                w-full rounded-[3rem] px-5 py-3 text-sm font-semibold
                bg-(--primary)
                text-(--background)
                transition-transform duration-300
                hover:scale-[1.02]
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <div className="mt-4 flex justify-center">
                <div
                  role="alert"
                  className="flex items-center gap-2 font-medium text-green-400 transition-all"
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
