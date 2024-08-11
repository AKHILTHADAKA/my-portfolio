import React, { useEffect } from "react";
import Navbar from "./Navbar";

import waveImage from "../assets/wave2.png";
import Akhil from "../assets/akhil12.jpg";
import akhil1 from "../assets/about.png";
import { FaGithub, FaLinkedin, FaCodepen, FaWhatsapp } from "react-icons/fa";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "./Homepage.css";
function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <Introduction />
      <About />
      <Timeline />
      <Projects />
      <ContactUs />
      <FooterBar />
    </div>
  );
}

function Introduction() {
  return (
    <div className="banner" id="home">
      <div className="banner-text">
        <img src={waveImage} alt="Wave" />
        <h1 className="heading">Hello I'm AKHIL!</h1>
      </div>
      <div className="banner-image">
        <img src={Akhil} alt="Akhil" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="About" id="about">
      <div className="About-text">
        <h1 className="About-text1"> About Us</h1>

        <p>
          Hello! My name is Akhil Thadaka. I’m a passionate and dedicated tech
          enthusiast with a strong foundation in Full Stack Java Development. I
          honed my skills at Sathya Technology, where I trained extensively in
          HTML, CSS, JavaScript, React, Bootstrap, Java, MySQL, MongoDB, jQuery,
          Postman, Git, GitHub, Spring, and Spring Boot. With a keen interest in
          web development and a commitment to continuous learning, I’m always
          eager to take on new challenges and contribute to innovative projects.
          I look forward to applying my skills to create impactful solutions in
          the tech industry.
        </p>
      </div>
      <div className="par">
        <img src={akhil1} alt="akhil1" />
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="time" id="timeline">
      <div className="timeline">
        <h1>Time-Line Card's</h1>
        <ul>
          <li style={{ "--accent-color": "#41516C" }}>
            <div className="date">2023 - 2024</div>
            <div className="title">Sathya Technology's</div>
            <div className="descr">
              Java Full Stack Developer
              <br />
              <br />I honed my skills at Sathya Technology, where I trained
              extensively in HTML, CSS, JavaScript, React, Bootstrap, Java,
              MySQL, MongoDB, jQuery, Postman, Git, GitHub, Spring, and Spring
              Boot.
            </div>
          </li>
          <li style={{ "--accent-color": "#FBCA3E" }}>
            <div className="date">2020-2023</div>
            <div className="title">B.Tech(EEE)</div>
            <div className="descr">
              Warangal Institute of Technology and Science <br />( Kakatiya
              University )<br />
              Percentage : 74.5%
            </div>
          </li>
          <li style={{ "--accent-color": "#E24A68" }}>
            <div className="date">2019-2020</div>
            <div className="title">Mee-Seva</div>
            <div className="descr">Running the family business.</div>
          </li>
          <li style={{ "--accent-color": "#1B5F8C" }}>
            <div className="date">2016-2019</div>
            <div className="title">Diploma(EEE)</div>
            <div className="descr">
              Warangal Institute of Technology and Science <br />( SBTET )<br />
              Percentage : 65%
            </div>
          </li>
          <li style={{ "--accent-color": "#4CADAD" }}>
            <div className="date">2015-2016</div>
            <div className="title">SSC</div>
            <div className="descr">
              Krishnaveni Talent School E.M.
              <br />
              GPA : 8.8
            </div>
          </li>
        </ul>
        <div className="credits">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm"
          >
            inspired by Akhil Goud
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      time: "January 2024",
      title: "Bank Application",
      tools: "Html, Css, JavaScript, Java, Mysql, GitHub",
      link: "https://github.com/AKHILTHADAKA/BankingApplication-using-Core-Java-console-based-banking-application-using-Core-Java.-",
    },
    {
      time: "February 2024",
      title: "To-Do-List-App",
      tools: "Html, Css, JavaScript, ReactJs",
      link: "https://github.com/AKHILTHADAKA/To-Do-List-App-with-ReactJS",
    },
    {
      time: "March 2024",
      title: "StudentManagementApplication",
      tools: "Html, Css, JavaScript, SpringBoot, MongoDB, GitHub",
      link: "https://github.com/AKHILTHADAKA/StudentManagementApplication-Restfull-API-",
    },
    {
      time: "May 2024",
      title: "School-Website",
      tools: "Html, Css, JavaScript, Reactjs, GitHub",
      link: "https://github.com/AKHILTHADAKA/School-website-using-React.Js",
    },
    {
      time: "June 2024",
      title: "APJ Abdhul Kalam BIO",
      tools: "Html, Css, JavaScript",
      link: "file:///D:/All%20projects/HTML%20EX/TEST/APJ.htm",
    },
    // {
    //   time: "January 2007",
    //   title: "Created Personal Portfolio",
    //   tools: "HTML, CSS, jQuery",
    //   link: "http://myportfolio.com",
    // },
  ];

  return (
    <div className="projects-section" id="projects">
      <h1>Projects</h1>
      <div className="timeline-wrapper">
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-entries">
            {projects.map((project, index) => (
              <div
                className={`timeline-entry ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={index}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-time">{project.time}</div>
                  <div className="timeline-title">{project.title}</div>
                  <div className="timeline-tools">Tools: {project.tools}</div>
                  <div className="timeline-detail">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact-us

const ContactUs = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 17.385044, // Coordinates for Hyderabad
    lng: 78.486671,
  };

  return (
    <div className="contact-us" id="contact">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      <div className="map-container">
        <h2>Our Location</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12} // Adjust zoom level as needed
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

// footer

// footer
const FooterBar = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Your Company</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Timeline</li>
            <li>Projects</li>
            <li>ContactUs</li>
          </ul>
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/AKHILTHADAKA"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akhil-thadaka-01112000ae77"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://codepen.io/AKHIL-THADAKA"
            aria-label="CodePen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen />
          </a>
          <a
            href="https://wa.me/919121751697"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Homepage;
