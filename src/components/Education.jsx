import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/Education.css';

function Education({ educations, setEducations }) {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value
    });
  };

  const handleAddEducation = (e) => {
    e.preventDefault();
    if (education.school && education.degree) {
      setEducations([...educations, education]);
      setEducation({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  const handleRemoveEducation = (index) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    setEducations(newEducations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2>Education</h2>
        {isEditing ? (
          <button className="btn" onClick={handleSubmit}>Save</button>
        ) : (
          <button className="btn btn-edit" onClick={handleEdit}>Edit</button>
        )}
      </div>
      
      {isEditing ? (
        <>
          <form onSubmit={handleAddEducation}>
            <div className="form-group">
              <label htmlFor="school">School/University</label>
              <input
                type="text"
                id="school"
                name="school"
                value={education.school}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="degree">Degree/Field of Study</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={education.degree}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="date-fields">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={education.startDate}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={education.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <button type="submit" className="btn">
              <FaPlus /> Add Education
            </button>
          </form>
          
          {educations.length > 0 && (
            <div className="added-items">
              <h3>Added Education</h3>
              {educations.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <h4>{edu.school}</h4>
                    <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                  </div>
                  <p className="degree">{edu.degree}</p>
                  <button 
                    className="btn btn-edit btn-small"
                    onClick={() => handleRemoveEducation(index)}
                  >
                    <FaMinus /> Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="education-display">
          {educations.length > 0 ? (
            educations.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h4>{edu.school}</h4>
                  <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
                </div>
                <p className="degree">{edu.degree}</p>
              </div>
            ))
          ) : (
            <p>No education information added.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Education;