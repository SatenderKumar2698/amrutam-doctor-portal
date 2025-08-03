import React from 'react';
import '../styles/global.css'; // Make sure this path is correct
import connectImage from '../assets/connect-img.png'; // Replace with your actual image
import FooterImage from './FooterImage';

const ConnectSection = () => {
  
  return (
    <section className="connect-section" id="connect">
      <div className="connect-container">
        <div className="connect-left">
          <img src={connectImage} alt="Connect Visual" />
        </div>
        <div className="connect-right">
          <h2>Let’s Connect</h2>
          <p>
            We’re here to help you on your wellness journey. Reach out to us for any questions,
            product inquiries, or personalized advice.
          </p>
          <form className="connect-form">
            <div className="input-row">
              <input type="text" placeholder="Your Name" className="connect-input" />
              <input type="text" placeholder="Contact Number" className="connect-input" />
            </div>
            <input type="email" placeholder="Email" className="connect-input full-width" />
            <textarea placeholder="Your Message" className="connect-textarea full-width" />
            <button type="submit" className="connect-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    
  );
};

export default ConnectSection;
