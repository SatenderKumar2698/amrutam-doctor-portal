import React from "react";
import doctorsImg from "../assets/DocHero.png";
import iconLeaf from "../assets/icon-leaf.png";
import iconYoga from "../assets/icon-yoga.png";
import iconCalendar from "../assets/icon-calendar.png";
import "../styles/global.css";
import { Link } from "react-router-dom";

const DoctorIntro = () => {
  return (
    <section className="intro-container">
      <div className="intro-content">
        <div className="text-area">
          <p className="greeting">Namaste, Welcome to Amrutam</p>
          <h1>
            Join Amrutam – <span className="highlight">Grow Your Practice</span>
          </h1>
          <p className="description">
            Connect with more patients, set your own schedule,
            <br /> and grow your Ayurvedic practice effortlessly.
          </p>
        <a href="#connect">
  <button className="join-btn">Join Now</button></a>
          <div className="stats">
            <div>
              <h3>500+</h3>
              <p>Average Active Users</p>
            </div>
            <div className="divider"></div> 
            <div>
              <h3>40+</h3>
              <p>Average Daily Free Calls</p>
            </div>
          </div>
        </div>

        <div className="image-area">
          <img src={doctorsImg} alt="Doctors" className="doctors-img" />
          <img src={iconLeaf} className="icon icon1" alt="Ayurveda Icon" />
          <img src={iconYoga} className="icon icon2" alt="Yoga Icon" />
          <img src={iconCalendar} className="icon icon3" alt="Calendar Icon" />
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;
