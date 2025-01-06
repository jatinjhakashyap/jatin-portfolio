"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7733001147",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "marketingwithkashyap@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "South Patel Nagar, New Delhi, 110008",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Handle client-side form submission directly to SendGrid's REST API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    // Extract field values by name
    const firstname = e.target.elements.firstname.value;
    const lastname = e.target.elements.lastname.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const service = e.target.elements.service.value;
    const message = e.target.elements.message.value;

    // Insert your real SendGrid API key here (VERY INSECURE)


    try {
      // Send POST request to SendGrid's v3 endpoint
      const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sendGridApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              // Change this to wherever you want to receive the email
              to: [{ email: "marketingwithkashyap@gmail.com" }],
              subject: `Contact Form: ${service}`,
            },
          ],
          // Must be a verified single sender or domain in SendGrid
          from: { email: "marketingwithkashyap@gmail.com" },
          // So you can hit "Reply" in your mailbox
          reply_to: { email },
          content: [
            {
              type: "text/html",
              value: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong> ${message}</p>
              `,
            },
          ],
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to send message.");
      }

      setSuccessMsg("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      setErrorMsg(err.message || "Error sending email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let us work together</h3>
              /* eslint-disable <rule-name> */</rule-name>
              <p className="text-white/60">
                Let’s work together to take your business to the next level! I
                specialize in SEO, performance marketing, and creative
                strategies that drive measurable results. Whether it’s boosting
                your online presence or generating leads, I’m here to help.
                Reach out today and let’s create something amazing!
              </p>
              /* eslint-enable <rule-name> */</rule-name>

              {/* Display success/error */}
              {successMsg && <p className="text-green-500">{successMsg}</p>}
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}

              {/* input fields (with names for e.target.elements) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" required />
                <Input name="lastname" type="text" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="tel" placeholder="Phone number" required />
              </div>

              {/* select */}
              <Select name="service" onValueChange={() => {}} required>
                {/* We'll store the chosen value in the DOM, then read it from e.target.elements in handleSubmit */}
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />

              {/* submit button */}
              <Button size="md" className="max-w-40" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}