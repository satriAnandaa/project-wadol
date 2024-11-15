import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './LandingPage.css'; // You can add your CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBookNow = () => {
    navigate('/login'); // Navigate to the LoginPage when the button is clicked
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-content">
          <h1 className="title">Experience the Magic of Dolphin Tours</h1>
          <p className="subtitle">
            Embark on an unforgettable adventure and explore the ocean with our expert guides.
          </p>
          <button className="cta-button" onClick={handleBookNow}>Book Your Tour Now</button> {/* Button click triggers navigation */}
        </div>
      </header>

      <section className="tour-details">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Expert Guides</h3>
            <p>Our guides are experienced and passionate about sharing the beauty of the ocean.</p>
          </div>
          <div className="feature">
            <h3>Close Encounters</h3>
            <p>Get up close to dolphins in their natural habitat for an unforgettable experience.</p>
          </div>
          <div className="feature">
            <h3>Eco-Friendly</h3>
            <p>We prioritize sustainable practices to ensure a safe and environmentally-friendly tour.</p>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <h2>What Our Guests Say</h2>
        <p>"A once-in-a-lifetime experience! Seeing dolphins up close was truly magical." - Sarah T.</p>
        <p>"The guides were knowledgeable, and the tour was absolutely breathtaking." - James W.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Dolphin Tours | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
