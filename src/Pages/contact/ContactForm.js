import React, { useState, useEffect } from "react";
import "./Style.scss"; // Assuming you'll place the form SCSS here
import { motion } from "framer-motion";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(""); // State to store the success/error message
  const [isSuccess, setIsSuccess] = useState(false); // State to track if it's a success or error

  useEffect(() => {
    // Clear the response message after 5 seconds
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage("");
      }, 5000); // Adjust this time (in milliseconds) as needed

      return () => clearTimeout(timer); // Clear timeout if component unmounts or state changes
    }
  }, [responseMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;

    try {
      // Use the environment variable for the API URL
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setIsSuccess(true); // Mark success
        // Clear the form
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
        setIsSuccess(false); // Mark failure
      }

    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("Failed to send message. Please try again.");
      setIsSuccess(false); // Mark failure
    }
  };

  return (
    <>
      <Heading Heading={"Contact Me"} />
      <div className="contact-form">
        <motion.form {...animations.fade} onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            {...animations.fade}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Display the response message after the form */}
        {responseMessage && (
          <motion.div
            {...animations.fade}
            className={`response-message ${isSuccess ? "success" : "error"}`}
          >
            {responseMessage}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
