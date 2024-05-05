// src/components/ContactPicker.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactPicker = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = ['Android', 'iPhone', 'iPad', 'iPod', 'Windows Phone'];
    const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
    setIsMobile(isMobileDevice);
  }, []);

  const handlePickContacts = async () => {
    try {
      if (!isMobile) {
        alert('Please use a mobile device to pick contacts.');
        return;
      }
      const contacts = await navigator.contacts.select(['name', 'phone']);
      setSelectedContacts(contacts);
      // Send selected contacts to the backend
      await axios.post('https://contact-picker-backend.onrender.com/api/contacts', contacts);
    } catch (error) {
      console.error('Error picking contacts:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePickContacts}>Pick Contacts</button>
      <ul>
        {selectedContacts.map(contact => (
          <li key={contact.phone}>{contact.name} - {contact.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactPicker;
