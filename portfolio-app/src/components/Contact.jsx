import React from "react";
import { contactData } from "../data";

const Contact = () => (
  <section id="contact">
    <h2><strong>Contact</strong></h2>
    <p>Email: {contactData.email}</p>
    <p>Phone: {contactData.phone}</p>
    <p>Location: {contactData.location}</p>
    <p>
      <a href={contactData.linkedin}>LinkedIn</a> | <a href={contactData.github}>GitHub</a>
    </p>
  </section>
);

export default Contact;
