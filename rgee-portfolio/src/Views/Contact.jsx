import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../Styles/Contact.module.css";
import email from "../Assets/email.png";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_rj9trut",
          "template_tof9iud",
          form.current,
          "jJKiA2Z6-rLMYrnds"
        )
        .then((result) => {
          if (result) {
            toast.success("Your message has been sent successfully!");
          } else if (!result) {
            toast.error("Message not sent!");
          }
        });
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className={styles.contactcontainer}>
      <div className={styles.contactintro}>
        <h1>Let's make things happen, send me a message!</h1>
        <img src={email} />
      </div>
      <hr />
      <div className={styles.formAndDetailsContainer}>
        <div>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <h2>Fill-out form below:</h2>
            <label>*Name:</label>
            <input type="text" name="user_name" placeholder="e.g. John Doe" />
            <label>*Email:</label>
            <input
              type="email"
              name="user_email"
              placeholder="e.g. JohnDoe@domain.com"
            />
            <label>*Subject:</label>
            <input
              type="text"
              name="user_subject"
              placeholder="Your Input Needed"
            />
            <label>*Message:</label>
            <textarea name="message" placeholder="What's on your mind?" />
            <input id={styles.button} type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.contactdetails}>
          <div>
            <h1>Contact Details:</h1>
          </div>
          <div>
            <p>Location: Quezon City, Philippines</p>
            <p>Mobile: (+63) 908 635 9492</p>
            <p>E-mail: ronaldravengarcia@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
