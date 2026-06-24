"use client";

import { useState, type FormEvent } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const inputStyles =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isFormValid =
    Boolean(formData.name.trim()) &&
    Boolean(formData.email.includes("@")) &&
    Boolean(formData.subject.trim()) &&
    Boolean(formData.message.trim());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("submitting");

    try {
      await fetch("https://formspree.io/f/xkopekrg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-surface/30"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <SectionTitle
              label="Contact"
              title="Let's build something great"
              description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
            />

            <div className="space-y-4 text-sm text-muted">
              <p>
                <span className="font-medium text-foreground">Email: </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>

              <p>
                <span className="font-medium text-foreground">Location: </span>
                {siteConfig.location}
              </p>
            </div>

            <SocialLinks className="mt-8" />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Card glass className="p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <HiOutlinePaperAirplane className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    Message sent!
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>

                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 id="contact-heading" className="sr-only">
                    Contact form
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputStyles}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className={inputStyles}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className={cn(inputStyles, "resize-none")}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={!isFormValid || status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send message"}
                    <HiOutlinePaperAirplane className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
