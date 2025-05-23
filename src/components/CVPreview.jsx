import React from 'react';
import '../styles/CVPreview.css';

function CVPreview({ generalInfo, educations, experiences }) {
  return (
    <div className="cv-preview">
      <div className="cv-header">
        <h1>{generalInfo.name}</h1>
        <div className="contact-info">
          {generalInfo.email && (
            <div className="contact-item">
              <span>📧</span>
              <span>{generalInfo.email}</span>
            </div>
          )}
          {generalInfo.phone && (
            <div className="contact-item">
              <span>📱</span>
              <span>{generalInfo.phone}</span>
            </div>
          )}
          {generalInfo.address && (
            <div className="contact-item">
              <span>🏠</span>
              <span>{generalInfo.address}</span>
            </div>
          )}
        </div>
      </div>
      
      {educations.length > 0 && (
        <div className="cv-section">
          <h2>Education</h2>
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3>{edu.school}</h3>
                <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
              </div>
              <p className="degree">{edu.degree}</p>
            </div>
          ))}
        </div>
      )}
      
      {experiences.length > 0 && (
        <div className="cv-section">
          <h2>Work Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.company}</h3>
                <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <p className="position">{exp.position}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CVPreview;