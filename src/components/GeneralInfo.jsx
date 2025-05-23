import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value
    });
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
        <h2>General Information</h2>
        {isEditing ? (
          <button className="btn" onClick={handleSubmit}>Save</button>
        ) : (
          <button className="btn btn-edit" onClick={handleEdit}>Edit</button>
        )}
      </div>
      
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={generalInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={generalInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={generalInfo.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={generalInfo.address}
              onChange={handleChange}
            />
          </div>
        </form>
      ) : (
        <div className="info-display">
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span>{generalInfo.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span>{generalInfo.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone:</span>
            <span>{generalInfo.phone || 'Not specified'}</span>
          </div>
          {generalInfo.address && (
            <div className="info-item">
              <span className="info-label">Address:</span>
              <span>{generalInfo.address}</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;