import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/Experience.css';

function Experience({ experiences, setExperiences }) {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value
    });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    if (experience.company && experience.position) {
      setExperiences([...experiences, experience]);
      setExperience({
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
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
        <h2>Work Experience</h2>
        {isEditing ? (
          <button className="btn" onClick={handleSubmit}>Save</button>
        ) : (
          <button className="btn btn-edit" onClick={handleEdit}>Edit</button>
        )}
      </div>
      
      {isEditing ? (
        <>
          <form onSubmit={handleAddExperience}>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={experience.company}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="position">Position Title</label>
              <input
                type="text"
                id="position"
                name="position"
                value={experience.position}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Responsibilities</label>
              <textarea
                id="description"
                name="description"
                value={experience.description}
                onChange={handleChange}
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
            
            <div className="date-fields">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={experience.startDate}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={experience.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <button type="submit" className="btn">
              <FaPlus /> Add Experience
            </button>
          </form>
          
          {experiences.length > 0 && (
            <div className="added-items">
              <h3>Added Experience</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4>{exp.company}</h4>
                    <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                  </div>
                  <p className="position">{exp.position}</p>
                  <p className="description">{exp.description}</p>
                  <button 
                    className="btn btn-edit btn-small"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    <FaMinus /> Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="experience-display">
          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4>{exp.company}</h4>
                  <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                </div>
                <p className="position">{exp.position}</p>
                <p className="description">{exp.description}</p>
              </div>
            ))
          ) : (
            <p>No work experience added.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Experience;