import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = ({target}) => {
    const {value} = target;
    setName(value);
  };

  const handlePhoneChange= ({target}) => {
    const {value} = target;
    setPhone(value);
  };

  const handleEmailChange = ({target}) => {
    const {value} = target;
    setEmail(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Name"
        type='text'
        value={name}
        onChange={handleNameChange}
        required />
      <input
        placeholder="Enter Phone ###-###-####"
        type='tel'
        value={phone}
        pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'
        onChange={handlePhoneChange} />
      <input
        placeholder="Enter Email"
        type='email'
        value={email}
        onChange={handleEmailChange} />
      <input 
        type='submit'
        value='Submit' />
    </form>
  );
};
