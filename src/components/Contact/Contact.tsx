import React, { useState } from 'react';
import { FormStyle } from "./Contact.styled"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch('https://formspree.io/f/xoqzakwp', {
      method: 'POST',
      body: data,
    }).then(() => {
      form.reset();
    });
  };
  return (

    <FormStyle onSubmit={handleSubmit}>
      <label>
        Nome*
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Assunto
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email*
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mensagem*
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <input className='submit' type="submit" value="Enviar" />
      <input className='submit' type="reset" value="Redefinir" />
    </FormStyle>

  );
};

export default ContactForm;
