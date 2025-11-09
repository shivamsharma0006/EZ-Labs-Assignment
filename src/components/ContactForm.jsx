import { useState } from "react";
import { submitContactForm } from "../api/contactApi";
import validator from "validator";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
      newErrors.email = "Invalid email format";
    }

    if (values.phone.trim() && !validator.isMobilePhone(values.phone, "en-IN")) {
      newErrors.phone = "Invalid phone number";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
      try {
    const res = await submitContactForm(values);
    const result = await res.json();

    console.log("Full API Response:", res);
    console.log("Response Body:", result);

    if (res.status === 201) {
      alert("Form Submitted Successfully!");
      setValues({ ...values, message: "Form Submitted" });
    } else {
      alert("Failed to submit!");
    console.log("Status:", res.status);
    }
  } catch (err) {
    alert("Something went wrong!");
    console.error("Error:", err);
  } 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Enter your name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          type="text"
          name="email"
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Enter your phone no."
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          rows={4}
          placeholder="Type your message..."
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-all"
      >
        Submit
      </button>

    </form>
  );
}
