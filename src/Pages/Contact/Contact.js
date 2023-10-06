import React from "react";
import "../Contact/Style.scss";
import { BiSolidMessage, BiSolidPhone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
        <div className="heading">
          <div className="bars">
            <span></span>
            <span></span>
          </div>
          <h1>Contact me</h1>
        </div>
      <div className="contact-section">
        <div className="form">
          <form action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name..."
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email..."
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message..."
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="details">
            <div>
              <h3>Contact info</h3>
              <div>
                <BiSolidMessage />
                devpalwar06@gmail.com
              </div>
              <div>
                <BiSolidPhone />
                7891616563
              </div>
              <div>
                <HiLocationMarker />
                Rajasthan, India.
              </div>
            </div>
            <div>
              <h3>Social networks</h3>
              <div>
                <AiFillFacebook /> <AiFillTwitterCircle /> <AiFillGithub />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
