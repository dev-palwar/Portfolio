import React, { useState } from "react";
import "../Form/Style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handler = (e) => {
    let fieldName, value;
    fieldName = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [fieldName]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;

    if (name && email && message) {
      const res = fetch(
        "https://portfolio-b8c38-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          email: "",
          message: "",
        });
        toast("I got your message 👍");
      } else {
        toast("Please fill all the details");
      }
    } else {
      toast("Please fill all the details");
    }
  };

  return (
    <form action="">
      <ToastContainer theme="dark" autoClose={2000}/>
      <input
        value={userData.name}
        type="text"
        name="name"
        id="name"
        placeholder="Your name..."
        onChange={handler}
      />
      <input
        value={userData.email}
        type="email"
        name="email"
        id="email"
        placeholder="Your email..."
        onChange={handler}
      />
      <textarea
        value={userData.message}
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Your message..."
        onChange={handler}
      ></textarea>
      <button type="submit" onClick={submitData}>
        Submit
      </button>
    </form>
  );
};

export default Form;
