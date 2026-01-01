import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // To show success/error messages

  const handleSubscribe = async () => {
    if (!email) return;

    try {
      
      const response = await fetch("https://formspree.io/f/mrebedwk", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      });

      if (response.ok) {
        setStatus("Thanks for subscribing!");
        setEmail(''); // Clear the input
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (error) {
      setStatus("Error connecting to the server.");
    }
  };

  return (
    <section className="contact" id="contact">
      <span className="section-pill">Contact</span>
      <h2>Join the waitlist.</h2>
      <div className="subscribe">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {/* Show the status message if it exists */}
      {status && <p style={{ marginTop: '10px', color: '#666' }}>{status}</p>}
    </section>
  );
};