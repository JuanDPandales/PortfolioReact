import React from "react";
import "./Contact.css";

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("karpus13@gmail.com");
    alert("El Email ha sido copiado");
  };

  return (
    <section className="section contact center" id="email">
      <h2 className="section__title">Email</h2>
      <button onClick={copyEmail} className="btn btn--outline">
        Copiar Email
      </button>
    </section>
  );
}
