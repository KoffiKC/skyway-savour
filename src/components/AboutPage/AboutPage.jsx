import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Technologies used</h1>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Google maps API</li>
          <li>google-map-react</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>PostgresSQL</li>
          <li>Material UI</li>
         
        </ul>
        <h1>Challenges Faced</h1>
          <ul>
            <li> Intigrateing Google Maps API with react</li>

          </ul>
          <h1>Future addittions</h1>
          <ul>
            <li>Admin View</li>
            <li>more locations</li>
            <li>Advanced Search page</li>
            
          </ul>
      </div>
    </div>
  );
}

export default AboutPage;
