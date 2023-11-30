// EmailService.js

// This is a utility file that contains functions to send email-related requests to the backend.

const sendEmail = async (emailDetails) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Any additional headers like authorization tokens can be included here
        },
        body: JSON.stringify(emailDetails)
      });
  
      const data = await response.json();
      if (data.success) {
        console.log('Email sent successfully:', data);
      } else {
        console.error('Failed to send email:', data.message);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  export default sendEmail;
  