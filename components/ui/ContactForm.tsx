"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Swal from "sweetalert2";
import { IoIosSend } from "react-icons/io";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/ridwanyinusa15@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <form className="space-y-4 w-full max-sm:mb-6" onSubmit={handleSubmit}>
      <input type="hidden" name="_template" value="basic" />
      <div>
        <input
          type="text"
          name="fullName"
          className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-white-200 placeholder:text-center placeholder:text-sm placeholder:font-prompt placeholder:text-gray-700  max-lg:placeholder:text-gray-400"
          required
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          autoComplete={"string"}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-white-200 placeholder:text-center placeholder:text-sm placeholder:font-prompt placeholder:text-gray-700  max-lg:placeholder:text-gray-400"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          autoComplete={"string"}
        />
      </div>
      <div>
        <textarea
          name="message"
          className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-white-200 placeholder:text-center placeholder:text-sm placeholder:font-prompt placeholder:text-gray-700  max-lg:placeholder:text-gray-400"
          required
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          autoComplete={"string"}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full border border-cyan-300 text-white px-4 py-2 rounded hover:bg-cyan-600 hover:ring-0 hover:drop-shadow-2xl hover:shadow-cyan-300 hover:border-0 flex items-center justify-center gap-2">
          <IoIosSend /> Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
