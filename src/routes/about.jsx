import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>Revision Portal for Testing Knowledge</p>
      <p>
        <i>- by Priti Kumari</i>
      </p>
      <br />
      <p>
        <strong>Email: </strong>
        <a href="https://mail.google.com/mail/u/0/#inbox">mehtaprity83@gmail.com</a>
      </p>
      <p>
        <strong>LinkedIn: </strong>
        <a
          href="https://www.linkedin.com/in/prity-mehta-679945287/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </p>
      <br />
      <p>
        <strong>Chapterwise PDFs (Drive Link): </strong>
        <a
          href="https://drive.google.com/drive/folders/1LS5mcHBkRfedE1BzAhEVJp6rqaJyf_Fx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </p>
    </div>
  );
};

export default About;
