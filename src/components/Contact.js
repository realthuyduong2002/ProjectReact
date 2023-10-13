import React from 'react';

function Contact() {
  const contactStyles = {
    textAlign: 'left',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
  };

  const titleStyles = {
    fontSize: '24px',
    color: 'blue',
  };

  const infoStyles = {
    fontSize: '18px',
    margin: '10px 0',
  };

  const boldTextStyles = {
    fontWeight: 'bold',
  };

  return (
    <div style={contactStyles}>
      <h2 style={titleStyles}>Contact Information</h2>
      <p style={infoStyles}>
        <strong style={boldTextStyles}>Email:</strong> 20521221@gm.uit.edu.vn
      </p>
      <p style={infoStyles}>
        <strong style={boldTextStyles}>Address:</strong> Phường 5, quận Phú Nhuận, TP.Hồ Chí Minh
      </p>
      <p style={infoStyles}>
        <strong style={boldTextStyles}>Phone Number:</strong> +84 794065171
      </p>
    </div>
  );
}

export default Contact;