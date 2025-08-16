import React from "react";

const contacts = [
  { type: "Email", value: "ali@example.com", link: "mailto:ali@example.com" },
  { type: "LinkedIn", value: "Ali Shabani", link: "https://linkedin.com" },
  { type: "GitHub", value: "alishqomi", link: "https://github.com/alishqomi" },
];

const Contact: React.FC = () => (
  <section>
    <h2>تماس / Contact</h2>
    {contacts.map((c) => (
      <a key={c.type} href={c.link} className="contact-link" target="_blank" rel="noreferrer">
        {c.value}
      </a>
    ))}
  </section>
);

export default Contact;
