import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  return (
    <div className="app">
      <header className="header">
        <h1>CV Builder</h1>
        <p>Create your professional résumé</p>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="form-container">
            <GeneralInfo 
              generalInfo={generalInfo} 
              setGeneralInfo={setGeneralInfo} 
            />
            <Education 
              educations={educations} 
              setEducations={setEducations} 
            />
            <Experience 
              experiences={experiences} 
              setExperiences={setExperiences} 
            />
          </div>

          {(generalInfo.name || educations.length > 0 || experiences.length > 0) && (
            <CVPreview 
              generalInfo={generalInfo}
              educations={educations}
              experiences={experiences}
            />
          )}
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} CV Builder - Made with React</p>
      </footer>
    </div>
  );
}

export default App;