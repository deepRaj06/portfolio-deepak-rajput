import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const NavbarHireForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log("formdata", formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", formData.email);

    // Append the resume link to the message
    const resumeLink =
      "https://drive.google.com/file/d/1tvUVxFi5X6n23kWGckq26M5LLYlYvqSM/view?usp=sharing";
    const updatedMessage = `${formData.message}\n\nYou can view my resume here: ${resumeLink}`;

    console.log("email", formData.email);

    emailjs
      .send(
        "service_1tlaw0a",
        "template_rqodk5m",
        { ...formData, message: updatedMessage, to_email: formData.email },
        {
          publicKey: "z2XdHU427f75iRpoV",
        }
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("Email failed:", err);
      });
  };

  // Automatically close the modal after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-48">
      <div
        className="p-6 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-auto relative"
        style={{ backgroundColor: "#2c2523", color: "white" }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-white hover:text-red-500"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-green-400 text-lg font-medium text-center">
            Thank you for considering my profile. I appreciate the opportunity,
            and my resume has been sent to the email you provided.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">Contact Me</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded bg-transparent text-white border-gray-400 placeholder-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded bg-transparent text-white border-gray-400 placeholder-gray-300"
            />
            <textarea
              name="message"
              placeholder="Write a brief message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="p-2 border rounded bg-transparent text-white border-gray-400 placeholder-gray-300"
              rows={4}
            />
            <button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-600 text-white py-2 rounded font-semibold"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NavbarHireForm;
