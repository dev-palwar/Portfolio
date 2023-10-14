import React from "react";
import "../Contact/Style.scss";
import { motion } from "framer-motion";
import { BiSolidMessage, BiSolidPhone } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import Heading from "../../Components/Heading/Heading";
import { animations } from "../../Styles/Animations/Animations";
import Socials from "../../Components/Socials/Socials";
import Form from "../../Components/Form/Form";

const Contact = () => {
  return (
    <>
      <Heading Heading={"Contact me"} />
      <motion.div {...animations.fade} className="contact-section">
        <div className="form">
          <Form />
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
              <Socials />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
