import React from "react";

export const ContactPicker = ({contacts, handleChange}) => {
  return (
    <select onChange={handleChange} >
      <option selected='selected' key='default' value='None'>None</option>>
      {contacts.map((contact, index) => {
        return (
          <option key={index} value={contact.name} >{contact.name}</option>
        );
      })};
    </select>
  );
};
