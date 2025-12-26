import React from "react";

const Education = () => (
  <section id="education">
    <h2><strong>Education</strong></h2>

    {/* Degree Card */}
    <div className="education-card">
      <div className="education-entry">
        <h4>Bachelor of Technology in Industrial Electronics Automation (Hons.)</h4>
        <p>Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)</p>
        <p>Expected Graduation: 2027</p>
        <ul>
          <li>Web Development</li>
          <li>IoT Systems</li>
          <li>Data Acquisition</li>
          <li>PLC Programming</li>
          <li>Industrial Networking</li>
          <li>Control Systems</li>
          <li>Embedded Systems</li>
          <li>Dean's List (2024, 2025)</li>
        </ul>
      </div>
    </div>

    {/* Diploma Card */}
    <div className="education-card">
      <div className="education-entry">
        <h4>Diploma in Information Technology</h4>
        <p>Kolej Vokasional Sepang (KVS)</p>
        <p>Graduated: 2024</p>
        <ul>
          <li>Networking</li>
          <li>Server</li>
          <li>Programming</li>
          <li>Database</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;