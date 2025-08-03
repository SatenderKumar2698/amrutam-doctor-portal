import React from 'react';
import "../styles/global.css";
import consultImg from '../assets/consultation.png';
import healingImg from '../assets/appointments.png';
import detailsImg from '../assets/details.png';

const DoctorFeatures = () => {
  return (
    <section className="doctor-features-section">
      <div className="doctor-features-tabs">
        <button className="tab active">Consultations</button>
        <button className="tab">Payment withdrawal</button>
        <button className="tab">Schedule</button>
      </div>

      <div className="doctor-features-images">
        <div className="feature-block side-phone">
          <h3>Value Your Practice</h3>
          <img src={consultImg} alt="Consultations" />
        </div>
        <div className="feature-block center-phone">
          <img src={healingImg} alt="Healing Journey" />
          <h3>Today's Healing Journey</h3>
        </div>
        <div className="feature-block side-phone">
          <h3>Consultation Details</h3>
          <img src={detailsImg} alt="Consultation Details" />
        </div>
      </div>
    </section>
  );
};

export default DoctorFeatures;
